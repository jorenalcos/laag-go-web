
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import DestinationCard, {
  type Destination,
} from "../../../components/tours/DestinationCard";

const destinations: Destination[] = [
  {
    name: "Kawasan Falls",
    location: "Badian, Cebu",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=85",
    tours: "12 experiences",
    slug: "kawasan-falls",
  },
  {
    name: "Oslob",
    location: "Southern Cebu",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=85",
    tours: "8 experiences",
    slug: "oslob",
  },
  {
    name: "Moalboal",
    location: "Western Cebu",
    image:
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=85",
    tours: "10 experiences",
    slug: "moalboal",
  },
];

function DestinationGrid() {
  return (
    <section
      id="destinations"
      className="mx-auto max-w-7xl px-5 py-24 lg:px-8"
    >
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-3 text-sm font-bold tracking-wider text-teal-700 uppercase">
            Explore Cebu
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Popular destinations
          </h2>

          <p className="mt-3 text-slate-500">
            Find your next favorite place to visit.
          </p>
        </div>

        <Link
          to="/tours"
          className="inline-flex items-center gap-2 font-semibold text-teal-700 hover:text-teal-900"
        >
          View all destinations
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.slug}
            destination={destination}
          />
        ))}
      </div>
    </section>
  );
}

export default DestinationGrid;
