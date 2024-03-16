import { BookHeart, Folders, Images } from "lucide-react";
import Link from "next/link";
import { type ReactNode } from "react";
import { Button } from "./ui/button";

export function SideMenu() {
  return (
    <div className="fixed h-full max-w-xs border-r bg-zinc-950 pb-12">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <NavLink href="/gallery">
              <Images className="mr-2 h-4 w-4" />
              Gallery
            </NavLink>
            <NavLink href="/albums">
              <Folders className="mr-2 h-4 w-4" />
              Albums
            </NavLink>
            <NavLink href="/favorites">
              <BookHeart className="mr-2 h-4 w-4" />
              Favorites
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

type NavLinkProps = { href: string; children: ReactNode };

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Button variant="ghost" className="w-full justify-start" asChild>
      <Link href={href}>{children}</Link>
    </Button>
  );
};
