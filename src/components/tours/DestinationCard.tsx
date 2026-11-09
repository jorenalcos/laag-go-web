
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface Destination {
  name: string;
  location: string;
  image: string;
  tours: string;
  slug: string;
}

interface DestinationCardProps {
  destination: Destination;
}

function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      to={`/tours?destination=${encodeURIComponent(destination.slug)}`}
      className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
    >
      <div className="overflow-hidden">
        <img
          src={destination.image}
          alt={`${destination.name}, ${destination.location}`}
          loading="lazy"
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex items-center justify-between p-5">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            {destination.name}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {destination.location}
          </p>

          <p className="mt-3 text-sm font-medium text-teal-700">
            {destination.tours}
          </p>
        </div>

        <ArrowRight
          size={20}
          className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-teal-700"
        />
      </div>
    </Link>
  );
}

export default DestinationCard;
