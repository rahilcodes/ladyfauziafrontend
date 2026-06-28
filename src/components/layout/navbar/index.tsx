import Link from "next/link";
import { Suspense } from "react";
import Search from "./Search";
import { SearchSkeleton } from "@/components/common/skeleton/SearchSkeleton";
import LogoIcon from "@components/common/icons/LogoIcon";
import { CategoriesMenu } from "./CategoriesMenu";
import { CartAndUserActions } from "./CartAndUserActions";
import { NavigationSkeleton } from "./NavigationSkeleton";
import { ActionsSkeleton } from "./ActionsSkeleton";
import { NavbarErrorBoundary } from "@/components/error/ErrorBoundary";
import AnnouncementBar from "./AnnouncementBar";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  return (
    <NavbarErrorBoundary>
      <AnnouncementBar />
      <header className="sticky top-0 z-[50] main-nav border-b border-border/30 bg-background/80 backdrop-blur-md">
        <nav className="relative w-full max-w-screen-2xl mx-auto flex flex-col items-center justify-between gap-4 p-4 min-[769px]:flex-row lg:px-6 lg:py-4">
          <div className="flex w-full items-center justify-between gap-2 lg:gap-4">
            <div className="flex max-w-fit gap-1.5 lg:gap-3 xl:gap-6 items-center">
              <Link
                className="flex h-12 w-auto items-center md:h-16 lg:h-20"
                href="/"
                aria-label="Go to homepage"
              >
                <LogoIcon />
              </Link>

              {/* Desktop: Luxury Mega-Menu */}
              <MegaMenu />

              {/* Mobile: API-driven category links (for bottom nav) */}
              <Suspense fallback={<NavigationSkeleton />}>
                <CategoriesMenu type="mobile" />
              </Suspense>
            </div>

            <div className="hidden flex-1 min-w-0 justify-center min-[769px]:flex mx-2">
              <Suspense fallback={<SearchSkeleton />}>
                <Search search={false} />
              </Suspense>
            </div>

            <Suspense fallback={<ActionsSkeleton />}>
              <CartAndUserActions />
            </Suspense>
          </div>
        </nav>
      </header>
    </NavbarErrorBoundary>
  );
}
