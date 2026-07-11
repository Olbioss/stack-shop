import MarqueeBadge from "#/components/base/common/marquee-badge";
import Marquee from "#/components/containers/store/marquee";

type Props = {
  className?: string;
};

const brandsCategories = [
  "ELECTRONICS",
  "FASHION",
  "HOME & LIVING",
  "GROCERIES",
  "SPORTS & FITNESS",
  "BOOKS",
  "PET SUPPLIES",
  "BEAUTY",
  "TOYS",
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
