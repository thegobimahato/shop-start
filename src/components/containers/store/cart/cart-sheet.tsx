import { Link } from "@tanstack/react-router";

import { ShoppingBag } from "lucide-react";

import { useCartStore } from "@/lib/store/cart-store";

import CartItem from "@/components/base/store/card/cart-item";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function CartSheet() {
  const { items, isOpen, setIsOpen, totalItems, subtotal } = useCartStore();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex w-full flex-col @xl:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-xl font-semibold">
            Cart ({totalItems})
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        {items.length > 0 ? (
          <>
            <ScrollArea className="flex-1 px-6">
              <div className="divide-y">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </ScrollArea>

            <div className="space-y-4 py-6">
              <Separator />

              <div className="space-y-1.5 px-6">
                <div className="flex justify-between font-medium text-base">
                  <span>Subtotal</span>
                </div>
                <div className="font-semibod text-2xl text-foreground">
                  ${subtotal.toFixed()}
                </div>
              </div>

              <div className="grid gap-3 px-6">
                <Link to="/cart" onClick={() => setIsOpen(false)}>
                  <Button className="w-full" size="lg">
                    View Cart
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  onClick={() => setIsOpen(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex h-full flex-col items-center justify-center space-y-2">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              <span className="font-medium text-lg text-muted-foreground">
                Your cart is empty
              </span>
              <Button variant="link" onClick={() => setIsOpen(false)}>
                Start Shopping
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
