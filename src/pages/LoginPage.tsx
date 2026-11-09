import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <Link to="/" className="font-bold text-teal-700">
          LaagGo
        </Link>
        <h1 className="mt-8 text-3xl font-bold text-slate-900">Welcome back</h1>
        <p className="mt-2 text-slate-500">
          Sign-in functionality will be implemented in a later step.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block font-semibold text-teal-700"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}

export default LoginPage;