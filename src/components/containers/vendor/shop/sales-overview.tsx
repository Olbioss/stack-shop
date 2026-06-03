import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface SalesOverviewProps {
  shopName: string;
  className?: string;
}

export default function SalesOverview({
  shopName,
  className,
}: SalesOverviewProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Sales Overview</CardTitle>
        <CardDescription>
          Monthly revenue for {shopName} over the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="flex h-75 items-center justify-center text-muted-foreground">
          Cart placeholder - Sales over time for {shopName}
        </div>
      </CardContent>
    </Card>
  );
}
