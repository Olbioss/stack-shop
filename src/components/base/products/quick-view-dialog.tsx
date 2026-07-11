import { Link } from "@tanstack/react-router";
import { ArrowRight, Loader2, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { useCart } from "#/hooks/store/use-cart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCartStore } from "@/lib/store/cart-store";
import type { DisplayProduct } from "@/types/store-types";
import { ColorSwatch } from "./color-radio-item";
import ProductImageGallery from "./details/product-image-gallery";
import { QuantitySelector } from "./details/quantity-selector";
import PriceTag from "./price-tag";

interface QuickViewDialogProps {
  product: DisplayProduct;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function QuickViewDialog({
  product,
  open,
  onOpenChange,
}: QuickViewDialogProps) {
  const { addItem } = useCart();
  const { setIsOpen } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const inStock = product.stock.inStock;
  const maxQuantity = Math.max(1, product.stock.quantity);

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      setQuantity(1);
    }
    onOpenChange(nextOpen);
  };

  const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      await addItem({
        productId: product.id,
        quantity,
      });
      onOpenChange(false);
      setQuantity(1);
      setIsOpen(true); // Open cart sheet after successful addition
    } catch (error) {
      console.error("Failed to add to cart:", error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Image Section */}
          <div className="relative">
            <ProductImageGallery images={product.images} />
            <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
              {product.price.discountPercentage > 0 && (
                <Badge className="bg-red-500 hover:bg-red-600">
                  -{product.price.discountPercentage}%
                </Badge>
              )}
              {product.isNew && product.price.discountPercentage === 0 && (
                <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col gap-4">
            <DialogHeader className="space-y-2 text-left">
              <span className="w-fit rounded-full border border-muted-foreground/30 border-dashed bg-muted/50 px-3 py-1 font-medium text-muted-foreground text-xs">
                {product.category.name}
              </span>
              <DialogTitle className="font-mono text-xl">
                {product.name}
              </DialogTitle>
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-medium text-sm">
                  {product.rating.average}
                </span>
                <span className="text-muted-foreground text-xs">
                  ({product.rating.count} reviews)
                </span>
              </div>
            </DialogHeader>

            <div className="flex items-center gap-3">
              <PriceTag
                price={product.price.current}
                originalPrice={product.price.original}
                size="lg"
              />
              {inStock ? (
                <Badge variant="outline" className="text-green-600">
                  In Stock
                </Badge>
              ) : (
                <Badge variant="outline" className="text-destructive">
                  Out of Stock
                </Badge>
              )}
            </div>

            {product.description && (
              <DialogDescription className="line-clamp-3">
                {product.description}
              </DialogDescription>
            )}

            {product.colors.length > 0 && (
              <div className="space-y-2">
                <p className="font-medium text-sm">Colors</p>
                <div className="flex items-center gap-2">
                  {product.colors.map((color) => (
                    <ColorSwatch
                      key={color}
                      color={color}
                      className="h-5 w-5"
                    />
                  ))}
                </div>
              </div>
            )}

            {product.sizes.length > 0 && (
              <div className="space-y-2">
                <p className="font-medium text-sm">Sizes</p>
                <div className="flex flex-wrap items-center gap-2">
                  {product.sizes.map((size) => (
                    <Badge key={size} variant="outline">
                      {size}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-auto space-y-3 border-muted border-t border-dashed pt-4">
              <div className="flex items-center gap-3">
                <QuantitySelector
                  value={quantity}
                  onChange={setQuantity}
                  max={maxQuantity}
                  disabled={!inStock || isAdding}
                />
                <Button
                  className="flex-1"
                  onClick={handleAddToCart}
                  disabled={!inStock || isAdding}
                >
                  {isAdding ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <ShoppingCart className="mr-2 h-4 w-4" />
                  )}
                  Add to Cart
                </Button>
              </div>
              <Button asChild variant="ghost" className="w-full">
                <Link
                  to="/product/$productId"
                  params={{ productId: product.id }}
                  onClick={() => handleOpenChange(false)}
                >
                  View full details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
