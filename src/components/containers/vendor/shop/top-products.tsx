import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TopProductsProps {
  className?: string;
}

export default function TopProducts({ className }: TopProductsProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex h-50 items-center justify-center text-muted-foreground">
          Top selling products placeholder
        </div>
      </CardContent>
    </Card>
  );
}
