
import { ArrowRight, Compass, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
            <Compass size={16} />
            Discover the beauty of Cebu
          </div>

          <h1 className="max-w-xl text-5xl leading-[1.12] font-bold tracking-tight text-slate-900 sm:text-6xl">
            Your next
            <span className="text-teal-700"> adventure </span>
            starts here.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-500">
            Discover amazing destinations, explore curated experiences,
            and create unforgettable journeys around Cebu.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/tours"
              className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-7 py-4 font-semibold text-white transition hover:bg-teal-800"
            >
              Explore experiences
              <ArrowRight size={18} />
            </Link>

            <a
              href="#destinations"
              className="rounded-full border border-slate-200 px-7 py-4 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Discover destinations
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-7">
            <div>
              <p className="text-2xl font-bold text-slate-900">100+</p>
              <p className="mt-1 text-sm text-slate-500">Places to explore</p>
            </div>

            <div className="h-12 w-px bg-slate-200" />

            <div>
              <p className="text-2xl font-bold text-slate-900">Local</p>
              <p className="mt-1 text-sm text-slate-500">
                Travel experiences
              </p>
            </div>

            <div className="h-12 w-px bg-slate-200" />

            <div>
              <p className="text-2xl font-bold text-slate-900">Cebu</p>
              <p className="mt-1 text-sm text-slate-500">
                Our first destination
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=90"
              alt="Beautiful tropical island destination"
              className="h-[400px] w-full object-cover sm:h-[500px]"
            />
          </div>

          <div className="absolute -bottom-6 left-5 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:left-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-700">
              <MapPin size={22} />
            </div>

            <div>
              <p className="font-bold text-slate-900">Explore Cebu</p>
              <p className="text-sm text-slate-500">
                Every journey, connected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
