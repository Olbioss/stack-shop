import { ArrowRight } from "lucide-react";
import Heading from "#/components/base/common/heading";
import Tags from "#/components/base/common/tags";
import CounterBox from "#/components/containers/store/counter-box";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const counters = [
    { value: "10 +", label: "Independent shops" },
    { value: "40 +", label: "Categories to explore" },
    { value: "2,400 +", label: "Products in one place" },
    { value: "95%", label: "Customer Satisfaction Rate" },
  ];
  return (
    <section className="@container container mx-auto space-y-8 px-4 pt-[60px]">
      <div className="relative rounded-2xl border-2 border-dashed">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1974&auto=format&fit=crop"
            alt="A curated shop interior with products on display"
            className="h-[420px] w-full rounded-2xl rounded-b-none object-cover"
          />

          <div className="-translate-x-1/2 -bottom-12 absolute left-1/2">
            <div className="relative flex h-[94px] w-[198px] items-center justify-center rounded-2xl bg-background">
              <div className="flex items-center justify-center">
                <Button variant="secondary" size="xl" type="button">
                  Shop now
                  <ArrowRight className="size-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid @4xl:grid-cols-2 grid-cols-1 gap-8">
          <div className="space-y-8 @4xl:p-12 @6xl:p-[60px] @7xl:p-20 p-3 pt-14">
            <Tags items={["Electronics", "Fashion", "Home", "Grocery"]} />
            <Heading
              title="Every shop. One doorstep."
              subtitle="Stack Shop brings independent shops together in one marketplace — electronics, fashion, home, groceries and more, with a single cart and a single checkout."
            />
          </div>
          <CounterBox items={counters} />
        </div>
      </div>
    </section>
  );
}
