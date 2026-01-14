import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "../provider/theme-toggle";
import { Logo } from "./logo";
import Navbar from "./navbar";

const navigationItems = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Category", to: "/category" },
];

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="@container sticky top-0 z-40 w-full border-b border-dashed bg-background backdrop-blur supports-backdrop-filter:bg-background/80 ">
      <div className="container mx-auto grid @6xl:grid-cols-3 grid-cols-2 items-center px-4 py-5">
        <Navbar items={navigationItems} />

        <div className="flex items-center justify-start @6xl:justify-center">
          <Logo />
        </div>

        <div className="flex items-center justify-end gap-2">
          <ThemeToggle />

          <div className="@6xl:flex hidden justify-center gap-2">
            <Button
              variant={"outline"}
              size={"lg"}
              type="button"
              aria-label="Open Cart"
              onClick={() => setIsCartOpen(true)}
              className="relative"
            >
              <ShoppingCart className="@7xl:size-6 size-5" />

              {/* {totalItems} */}
              <span className="-right-1 -top-1 absolute flex h-5 w-5 items-center justify-center rounded-full bg-primary font-medium text-[12px] text-primary-foreground">
                {/* {totalItems} */}
                10
              </span>
            </Button>
          </div>

          <Link to="/auth/sign-in">
            <Button variant={"outline"} size={"lg"} type="button">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
