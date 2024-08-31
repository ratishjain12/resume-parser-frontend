"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import "../globals.css";

export const NavBar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <header
      aria-label="Site Header"
      className={`flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12 ${
        isHomePage ? "bg-dot" : ""
      }`}
    >
      <div className="flex h-10 w-full items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Resume Logo"
            // className="object-contain"
            height={40}
            width={40}
          />
          <div className="ml-2 text-primary font-bold text-2xl">Career AI</div>
        </Link>

        <nav
          aria-label="Site Nav Bar"
          className="flex items-center gap-2 text-sm font-medium"
        >
          {[
            ["/resume-builder", "Builder"],
            ["/resume-parser", "Parser"],
          ].map(([href, text]) => (
            <Link
              key={text}
              className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
              href={href}
            >
              {text}
            </Link>
          ))}
          {/* <div className="ml-1 mt-1">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=xitanggg&repo=open-resume&type=star&count=true"
              width="100"
              height="20"
              className="overflow-hidden border-none"
              title="GitHub"
            />
          </div> */}
        </nav>
      </div>
    </header>
  );
};