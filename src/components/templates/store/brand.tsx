import MarqueeBadge from "#/components/base/common/marquee-badge";
import Marquee from "#/components/containers/store/marquee";

type Props = {
  className?: string;
};

const brandsCategories = [
  "TANK TOP",
  "TSHIRT",
  "LONG-SLEEVE TSHIRT",
  "RAGLAN SLEEVE SHIRT",
  "CROP TOP",
  "V-NECK SHIRT",
  "MUSCLE SHIRT",
];

export default function Brand({ className }: Props) {
  return (
    <section className={className}>
      <Marquee
        items={brandsCategories.map((category) => (
          <MarqueeBadge key={category} label={category} />
        ))}
        speed="slow"
        className="border-t-2"
      />
    </section>
  );
}
