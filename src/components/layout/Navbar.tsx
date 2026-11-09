
import { useState } from "react";
import { Compass, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Explore tours", to: "/tours" },
  { label: "Itineraries", to: "/itineraries" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition ${
      isActive
        ? "text-teal-700"
        : "text-slate-600 hover:text-teal-700"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-2"
          aria-label="LaagGo home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700 text-white">
            <Compass size={23} />
          </div>

          <span className="text-2xl font-bold tracking-tight">
            Laag<span className="text-teal-700">Go</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={navLinkClass}
            >
              {item.label}
            </NavLink>
          ))}

          <a
            href="/#about"
            className="text-sm font-medium text-slate-600 transition hover:text-teal-700"
          >
            About us
          </a>
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Log in
          </Link>

          <Link
            to="/register"
            className="rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Get started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-100 bg-white px-5 py-5 md:hidden"
        >
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={closeMobileMenu}
                className={navLinkClass}
              >
                {item.label}
              </NavLink>
            ))}

            <a
              href="/#about"
              onClick={closeMobileMenu}
              className="text-sm font-medium text-slate-600"
            >
              About us
            </a>

            <div className="flex gap-3 border-t border-slate-100 pt-4">
              <Link
                to="/login"
                onClick={closeMobileMenu}
                className="flex-1 rounded-full border border-slate-200 px-4 py-3 text-center text-sm font-semibold"
              >
                Log in
              </Link>

              <Link
                to="/register"
                onClick={closeMobileMenu}
                className="flex-1 rounded-full bg-teal-700 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
