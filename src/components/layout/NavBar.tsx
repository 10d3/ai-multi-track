import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { MenuIcon, MountainIcon } from "lucide-react";
import { ButtonShiny } from "../shared/ButtonShiny";
import { ModeToggle } from "../shared/toggle";
import LogHome from "../shared/LogHome";
import { headers } from "next/headers";
import { LoggedInButton } from "../features/LoggedInButton";

export default function NavBar() {
  const headersList = headers();
  const header_url = headersList.get("x-url") || "";
  const test = header_url.endsWith("/");
  const links = ["Pricing", "AboutUS", "Billing"];
  return (
    <header className="flex h-20 w-full shrink-0 items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden border-none hover:bg-white hover:dark:bg-black hover:-white text-black dark:text-white"
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col" side="left">
          <SheetHeader>
            <SheetTitle>
              <Link href="/" prefetch={false}>
                <MountainIcon className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="grid gap-2 py-6">
            {links.map((lien, i) => (
              <Link
                key={i}
                href="#"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                {lien}
              </Link>
            ))}
          </div>
          <div></div>
          <SheetFooter>
            <SheetClose asChild>
              <ModeToggle />
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <div className="w-auto">
        <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
      </div>
      <div className="flex-1 justify-center">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {links.map((lien, i) => (
              <NavigationMenuLink key={i} asChild>
                <Link
                  href="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  prefetch={false}
                >
                  {lien}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center justify-center flex-row gap-2">
        <div className="hidden md:flex"><ModeToggle /></div>
        {test ? <LogHome /> : <LoggedInButton />}
      </div>
    </header>
  );
}
