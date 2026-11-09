import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function ToursPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-[60vh] max-w-7xl px-5 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
          Explore Cebu
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          Discover tours and experiences
        </h1>
        <p className="mt-4 text-slate-500">
          Find experiences for your next Cebu adventure.
        </p>
        <Link to="/" className="mt-8 inline-block font-semibold text-teal-700">
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}

export default ToursPage;