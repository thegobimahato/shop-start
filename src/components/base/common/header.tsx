import { Link } from "@tanstack/react-router";

import { Menu09Icon } from "hugeicons-react";
import { ShoppingBag } from "lucide-react";

import CartSheet from "@/components/containers/store/cart/cart-sheet";
import { Button } from "@/components/ui/button";

import { useCartStore } from "@/lib/store/cart-store";

import { ThemeToggle } from "../provider/theme-toggle";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import Navbar from "./navbar";


const navigationItems = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Category", to: "/category" },
];

export default function Header() {
  const { totalItems, setIsOpen } = useCartStore();

  return (
    <header className="@container sticky top-0 z-40 w-full border-b border-dashed bg-background backdrop-blur supports-backdrop-filter:bg-background/80 ">
      <div className="container mx-auto grid @6xl:grid-cols-3 grid-cols-2 items-center px-4 py-5">
        <Navbar items={navigationItems} />

        <div className="flex items-center justify-start @6xl:justify-center">
          <Logo />
        </div>

        <div className="flex items-center justify-end gap-2">
          <div className="@6xl:flex hidden justify-center gap-2">
            <ThemeToggle />

            <Button
              variant={"outline"}
              size={"lg"}
              type="button"
              aria-label="Open Cart"
              onClick={() => setIsOpen(true)}
              className="relative"
            >
              <ShoppingBag className="@7xl:size-6 size-5" />

              {/* {totalItems} */}
              {totalItems > 0 && (
                <span className="-right-1 -top-1 absolute flex h-5 w-5 items-center justify-center rounded-full bg-primary font-medium text-[12px] text-primary-foreground">
                  {totalItems}
                </span>
              )}
            </Button>

            <CartSheet />

            <Link to="/auth/sign-in">
              <Button variant={"outline"} size={"lg"} type="button">
                Sign In
              </Button>
            </Link>
          </div>

          <div className="flex @6xl:hidden">
            <MobileMenu
              navigationItems={navigationItems}
              trigger={
                <Button
                  variant="secondary"
                  size="icon-lg"
                  aria-label="Open menu"
                  className="rounded-xl"
                >
                  <Menu09Icon />
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
}
