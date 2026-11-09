import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-teal-700">
          Error 404
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900">
          Page not found
        </h1>
        <p className="mt-3 text-slate-500">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-lg bg-teal-700 px-5 py-3 font-semibold text-white transition hover:bg-teal-800"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;