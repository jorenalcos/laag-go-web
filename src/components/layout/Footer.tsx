
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-10 sm:flex-row sm:items-center lg:px-8">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Laag<span className="text-teal-700">Go</span>
        </Link>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} LaagGo. Every Journey, Connected.
        </p>

        <Link
          to="/tours"
          className="text-sm font-semibold text-teal-700 transition hover:text-teal-900"
        >
          Explore Cebu
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
