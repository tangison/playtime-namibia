"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, ArrowRight, HeartHandshake } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navItems, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  React.useEffect(() => {
    setScrolled(window.scrollY > 8);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-[background-color,border-color,box-shadow] duration-300",
        scrolled
          ? "border-border bg-white/90 shadow-sm backdrop-blur-md"
          : "border-transparent bg-white"
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="Playtime Namibia home"
        >
          <img
            src="/images/logo.svg"
            alt="Playtime Namibia shield logo"
            width={180}
            height={64}
            className="h-11 w-auto sm:h-[52px]"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:block">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {navItems.map((item) =>
                item.children ? (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger
                      className={cn(
                        "h-11 rounded-xl bg-transparent px-3 font-display text-[15px] font-semibold text-navy-900 hover:bg-teal-50 hover:text-teal-800 data-[state=open]:bg-teal-50 data-[state=open]:text-teal-800",
                        isActive(item.href) && "text-teal-700"
                      )}
                    >
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-0 top-full !mt-2 w-80 rounded-2xl border border-border bg-white p-2 shadow-xl">
                      <ul className="list-none">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.href}
                                className={cn(
                                  "flex flex-col gap-1 rounded-xl px-4 py-3 transition-colors hover:bg-teal-50",
                                  isActive(child.href) && "bg-teal-50"
                                )}
                              >
                                <span className="font-display text-[15px] font-semibold text-navy-900">
                                  {child.title}
                                </span>
                                {child.description && (
                                  <span className="text-[13px] leading-snug text-muted-foreground">
                                    {child.description}
                                  </span>
                                )}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      asChild
                      active={isActive(item.href)}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "h-11 rounded-xl bg-transparent px-3 font-display text-[15px] font-semibold text-navy-900 hover:bg-teal-50 hover:text-teal-800",
                          isActive(item.href) && "bg-teal-50 text-teal-700"
                        )}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="press-amber hidden h-11 rounded-xl bg-amber-brand px-5 font-display font-bold text-navy-950 transition-[transform,background-color,box-shadow] hover:-translate-y-0.5 hover:bg-amber-bright active:translate-y-[2px] active:shadow-[0_2px_0_0_var(--color-amber-deep)] sm:inline-flex"
          >
            <Link href="/get-involved">
              <HeartHandshake className="size-4" aria-hidden="true" />
              Get Involved
            </Link>
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="h-11 w-11 rounded-xl border-navy-200 p-0 lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-[320px] flex-col gap-2 overflow-y-auto p-6 sm:w-[380px]"
            >
              <SheetTitle className="sr-only">Site menu</SheetTitle>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="mb-4 inline-block"
              >
                      <img
                  src="/images/logo.svg"
                  alt="Playtime Namibia shield logo"
                  width={170}
                  height={61}
                  className="h-12 w-auto"
                />
              </Link>
              <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <div key={item.title}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex min-h-11 items-center justify-between rounded-xl px-4 py-2.5 font-display text-base font-semibold text-navy-900 hover:bg-teal-50",
                        isActive(item.href) && "bg-teal-50 text-teal-700"
                      )}
                    >
                      {item.title}
                      <ArrowRight className="size-4 text-teal-700" aria-hidden="true" />
                    </Link>
                    {item.children && (
                      <div className="ml-4 flex flex-col border-l border-teal-100 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="flex min-h-11 items-center rounded-lg px-3 py-2 text-[15px] text-muted-foreground hover:bg-teal-50 hover:text-teal-800"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <Button
                asChild
                className="mt-4 h-12 rounded-xl bg-amber-brand font-display font-bold text-navy-950"
              >
                <Link href="/get-involved" onClick={() => setOpen(false)}>
                  <HeartHandshake className="size-4" aria-hidden="true" />
                  Get Involved
                </Link>
              </Button>
              <div className="mt-auto pt-6 text-sm text-muted-foreground">
                <p className="font-semibold text-navy-900">{site.legalName}</p>
                <p>{site.address}</p>
                <a href={site.phoneHref} className="mt-1 inline-block font-medium text-teal-700">
                  {site.phone}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
