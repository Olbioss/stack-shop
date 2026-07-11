import { GitCompare, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  onAddToCart: () => void;
  onBuyNow: () => void;
  onToggleWishlist: () => void;
  onToggleCompare: () => void;
  isWishlisted?: boolean;
  isCompareListed?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
};

export default function ProductActions({
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  onToggleCompare,
  isWishlisted,
  isCompareListed,
  isLoading,
  disabled,
  className,
}: Props) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="flex w-full flex-col gap-3 sm:flex-row">
        <Button
          size="lg"
          className="h-14 flex-1 gap-2 py-4 text-base sm:h-10 sm:py-2 sm:text-sm"
          onClick={onAddToCart}
          disabled={disabled || isLoading}
        >
          <ShoppingCart className="h-5 w-5" />
          Add to cart
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="h-14 flex-1 py-4 text-base sm:h-10 sm:py-2 sm:text-sm"
          onClick={onBuyNow}
          disabled={disabled || isLoading}
        >
          Buy Now
        </Button>
      </div>

      <div className="flex w-full gap-3">
        <Button
          variant="outline"
          size="default"
          className={cn(
            "flex-1 gap-2",
            isCompareListed && "border-primary bg-primary/5 text-primary"
          )}
          onClick={onToggleCompare}
        >
          <GitCompare className="h-4 w-4" />
          Compare
        </Button>
        <Button
          variant="outline"
          size="default"
          className={cn(
            "flex-1 gap-2",
            isWishlisted &&
              "border-destructive/30 bg-destructive/10 text-destructive hover:bg-destructive/15 hover:text-destructive"
          )}
          onClick={onToggleWishlist}
        >
          <Heart className={cn("h-4 w-4", isWishlisted && "fill-current")} />
          Wishlist
        </Button>
      </div>
    </div>
  );
}
