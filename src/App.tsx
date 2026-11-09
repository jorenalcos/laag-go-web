
import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Compass,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const destinations = [
  {
    name: "Kawasan Falls",
    location: "Badian, Cebu",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=85",
    tours: "12 experiences",
  },
  {
    name: "Oslob",
    location: "Southern Cebu",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=85",
    tours: "8 experiences",
  },
  {
    name: "Moalboal",
    location: "Western Cebu",
    image:
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=85",
    tours: "10 experiences",
  },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [guests, setGuests] = useState("2");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams({
      destination,
      date: travelDate,
      guests,
    });

    window.location.href = `/tours?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700 text-white">
              <Compass size={23} />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              Laag<span className="text-teal-700">Go</span>
            </span>
          </Link>

          <div className="hidden items-center gap-9 md:flex">
            <Link to="/" className="text-sm font-medium text-teal-700">
              Home
            </Link>
            <Link
              to="/tours"
              className="text-sm font-medium text-slate-600 transition hover:text-teal-700"
            >
              Explore tours
            </Link>
            <Link
              to="/itineraries"
              className="text-sm font-medium text-slate-600 transition hover:text-teal-700"
            >
              Itineraries
            </Link>
            <a
              href="#about"
              className="text-sm font-medium text-slate-600 transition hover:text-teal-700"
            >
              About us
            </a>
          </div>

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

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/tours" onClick={() => setMobileMenuOpen(false)}>Explore tours</Link>
              <Link to="/itineraries" onClick={() => setMobileMenuOpen(false)}>Itineraries</Link>
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Log in</Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full bg-teal-700 px-5 py-3 text-center font-semibold text-white"
              >
                Get started
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
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
                  <p className="mt-1 text-sm text-slate-500">Travel experiences</p>
                </div>
                <div className="h-12 w-px bg-slate-200" />
                <div>
                  <p className="text-2xl font-bold text-slate-900">Cebu</p>
                  <p className="mt-1 text-sm text-slate-500">Our first destination</p>
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
                  <p className="text-sm text-slate-500">Every journey, connected.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="mx-auto max-w-7xl px-5 lg:px-8">
          <form
            onSubmit={handleSearch}
            className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/50 md:grid-cols-[1.3fr_1fr_0.8fr_auto] md:items-end md:p-6"
          >
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <MapPin size={17} className="text-teal-700" />
                Destination
              </label>
              <input
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
                placeholder="Where do you want to go?"
                className="w-full rounded-xl bg-slate-50 px-4 py-3.5 text-sm outline-none ring-teal-700 transition focus:ring-2"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CalendarDays size={17} className="text-teal-700" />
                Travel date
              </label>
              <input
                type="date"
                value={travelDate}
                onChange={(event) => setTravelDate(event.target.value)}
                className="w-full rounded-xl bg-slate-50 px-4 py-3.5 text-sm text-slate-600 outline-none ring-teal-700 transition focus:ring-2"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Users size={17} className="text-teal-700" />
                Travelers
              </label>
              <select
                value={guests}
                onChange={(event) => setGuests(event.target.value)}
                className="w-full rounded-xl bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none ring-teal-700 transition focus:ring-2"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((count) => (
                  <option key={count} value={count}>
                    {count} {count === 1 ? "traveler" : "travelers"}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-7 py-3.5 font-semibold text-white transition hover:bg-teal-800"
            >
              <Search size={18} />
              Search
            </button>
          </form>
        </section>

        {/* Destinations */}
        <section id="destinations" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
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
              <Link
                to="/tours"
                key={destination.name}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
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
            ))}
          </div>
        </section>

        {/* Why LaagGo */}
        <section id="about" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-bold tracking-wider text-teal-700 uppercase">
                Travel with confidence
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Every journey, connected.
              </h2>
              <p className="mt-4 leading-7 text-slate-500">
                LaagGo makes discovering and planning local travel experiences
                easier, bringing destinations and travelers together.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <Compass className="text-teal-700" size={30} />
                <h3 className="mt-5 text-lg font-bold">Discover more</h3>
                <p className="mt-2 leading-7 text-slate-500">
                  Explore destinations and experiences across Cebu.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <ShieldCheck className="text-teal-700" size={30} />
                <h3 className="mt-5 text-lg font-bold">Plan with ease</h3>
                <p className="mt-2 leading-7 text-slate-500">
                  Find travel options and organize your next adventure.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <Users className="text-teal-700" size={30} />
                <h3 className="mt-5 text-lg font-bold">Connect locally</h3>
                <p className="mt-2 leading-7 text-slate-500">
                  Connect with local travel experiences and providers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
            className="text-sm font-semibold text-teal-700 hover:text-teal-900"
          >
            Explore Cebu
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default App;
