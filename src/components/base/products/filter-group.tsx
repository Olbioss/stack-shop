import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "#/components/ui/accordion";

type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export default function FilterGroup({
  id,
  title,
  children,
  defaultOpen = false,
}: Props) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultOpen ? id : undefined}
      className="w-full"
    >
      <AccordionItem value={id} className="border-b-0">
        <AccordionTrigger className="py-3 font-medium text-sm hover:text-primary hover:no-underline">
          {title}
        </AccordionTrigger>
        <AccordionContent>
          <div className="pt-1 pb-4">{children}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
