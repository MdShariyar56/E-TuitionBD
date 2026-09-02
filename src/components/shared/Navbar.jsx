"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { HiOutlineLogout } from "react-icons/hi";

const isLoggedIn = false;
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Tuitions", href: "/tuitions" },
  { name: "Tutors", href: "/tutors" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const isActive = (href) => pathname === href;

  const handleLogout = () => {
    console.log("Logging out...");
    closeMobileMenu();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2"
          onClick={closeMobileMenu}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
            <HiOutlineAcademicCap className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight text-gray-800">
            E-Tuition<span className="text-green-600">BD</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex lg:gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`block px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "text-green-600"
                      : "text-gray-600 group-hover:text-green-600"
                  }`}
                >
                  {link.name}
                </Link>
                <span
                  className={`pointer-events-none absolute -bottom-[1px] left-3 right-3 h-[2px] origin-left rounded-full bg-green-600 transition-transform duration-300 ease-out ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-md border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition-colors duration-200 hover:bg-red-50"
            >
              <HiOutlineLogout className="h-4 w-4" />
              Logout
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-md border border-green-600 px-4 py-2 text-sm font-medium text-green-600 transition-colors duration-200 hover:bg-green-50"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-green-700"
              >
                Signup
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 transition-colors duration-200 hover:bg-green-50 hover:text-green-600 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-green-100 bg-white px-4 pb-4 pt-2 sm:px-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? "bg-green-50 text-green-600"
                      : "text-gray-600 hover:bg-green-50 hover:text-green-600"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex flex-col gap-2 border-t border-green-100 pt-3">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 rounded-md border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition-colors duration-200 hover:bg-red-50"
              >
                <HiOutlineLogout className="h-4 w-4" />
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={closeMobileMenu}
                  className="w-full rounded-md border border-green-600 px-4 py-2 text-center text-sm font-medium text-green-600 transition-colors duration-200 hover:bg-green-50"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={closeMobileMenu}
                  className="w-full rounded-md bg-green-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-green-700"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
