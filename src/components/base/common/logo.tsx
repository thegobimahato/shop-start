import { useRef } from "react";

import { Link } from "@tanstack/react-router";

import { ZapHandle, ZapIcon } from "@/components/ui/icons/zap";

export function Logo() {
  const zapRef = useRef<ZapHandle>(null);

  return (
    <div className="flex items-center justify-start @6xl:justify-center">
      <Link
        to="/"
        className="font-bold text-2xl @6xl:text-3xl tracking-tight dark:text-white flex items-center gap-2"
        onMouseEnter={() => zapRef.current?.startAnimation()}
        onMouseLeave={() => zapRef.current?.stopAnimation()}
        onFocus={() => zapRef.current?.startAnimation()}
        onBlur={() => zapRef.current?.stopAnimation()}
      >
        <span className="hidden @6xl:block">Shop</span>
        <ZapIcon
          ref={zapRef}
          size={36}
          className="text-primary scale-[0.84] @6xl:scale-100 transition-transform"
        />
        <span className="hidden @6xl:block">Start</span>
      </Link>
    </div>
  );
}
