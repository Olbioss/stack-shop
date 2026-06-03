import { config } from "dotenv";
import { sql as drizzleSql } from "drizzle-orm";
import { db } from "../src/lib/db";

config({ path: [".env.local", ".env"] });

const statements = [
  `CREATE OR REPLACE FUNCTION categories_recalc_product_count(p_category_id text)
   RETURNS void AS $$
   BEGIN
     IF p_category_id IS NULL THEN
       RETURN;
     END IF;
     UPDATE categories
     SET product_count = (
       SELECT COUNT(*)::integer FROM products WHERE category_id = p_category_id
     )
     WHERE id = p_category_id;
   END;
   $$ LANGUAGE plpgsql;`,

  `CREATE OR REPLACE FUNCTION products_maintain_category_count()
   RETURNS trigger AS $$
   BEGIN
     IF TG_OP = 'INSERT' THEN
       PERFORM categories_recalc_product_count(NEW.category_id);
     ELSIF TG_OP = 'DELETE' THEN
       PERFORM categories_recalc_product_count(OLD.category_id);
     ELSIF TG_OP = 'UPDATE' THEN
       IF NEW.category_id IS DISTINCT FROM OLD.category_id THEN
         PERFORM categories_recalc_product_count(OLD.category_id);
         PERFORM categories_recalc_product_count(NEW.category_id);
       END IF;
     END IF;
     RETURN NULL;
   END;
   $$ LANGUAGE plpgsql;`,

  `DROP TRIGGER IF EXISTS products_maintain_category_count_trg ON products;`,

  `CREATE TRIGGER products_maintain_category_count_trg
   AFTER INSERT OR DELETE OR UPDATE OF category_id ON products
   FOR EACH ROW EXECUTE FUNCTION products_maintain_category_count();`,

  `UPDATE categories c
   SET product_count = COALESCE((
     SELECT COUNT(*) FROM products p WHERE p.category_id = c.id
   ), 0);`,
];

async function main() {
  for (const stmt of statements) {
    const preview = stmt.replace(/\s+/g, " ").slice(0, 80);
    console.log(`-> ${preview}...`);
    await db.execute(drizzleSql.raw(stmt));
  }

  const result = await db.execute<{
    id: string;
    name: string;
    product_count: number;
  }>(
    drizzleSql.raw(
      `SELECT id, name, product_count FROM categories ORDER BY product_count DESC LIMIT 10;`
    )
  );
  console.log("\nTop 10 categories by product_count after backfill:");
  console.table(result.rows);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
