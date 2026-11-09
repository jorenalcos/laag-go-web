
import { useState } from "react";
import { CalendarDays, MapPin, Search, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TourSearchForm() {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [guests, setGuests] = useState("2");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams();

    if (destination.trim()) {
      params.set("destination", destination.trim());
    }

    if (travelDate) {
      params.set("date", travelDate);
    }

    params.set("guests", guests);

    navigate(`/tours?${params.toString()}`);
  };

  return (
    <section className="mx-auto max-w-7xl px-5 lg:px-8">
      <form
        onSubmit={handleSearch}
        className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/50 md:grid-cols-[1.3fr_1fr_0.8fr_auto] md:items-end md:p-6"
      >
        <div>
          <label
            htmlFor="destination"
            className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700"
          >
            <MapPin size={17} className="text-teal-700" />
            Destination
          </label>

          <input
            id="destination"
            name="destination"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            placeholder="Where do you want to go?"
            className="w-full rounded-xl bg-slate-50 px-4 py-3.5 text-sm outline-none ring-teal-700 transition focus:ring-2"
          />
        </div>

        <div>
          <label
            htmlFor="travel-date"
            className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700"
          >
            <CalendarDays size={17} className="text-teal-700" />
            Travel date
          </label>

          <input
            id="travel-date"
            name="date"
            type="date"
            value={travelDate}
            onChange={(event) => setTravelDate(event.target.value)}
            className="w-full rounded-xl bg-slate-50 px-4 py-3.5 text-sm text-slate-600 outline-none ring-teal-700 transition focus:ring-2"
          />
        </div>

        <div>
          <label
            htmlFor="guests"
            className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700"
          >
            <Users size={17} className="text-teal-700" />
            Travelers
          </label>

          <select
            id="guests"
            name="guests"
            value={guests}
            onChange={(event) => setGuests(event.target.value)}
            className="w-full rounded-xl bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none ring-teal-700 transition focus:ring-2"
          >
            {Array.from({ length: 10 }, (_, index) => index + 1).map(
              (count) => (
                <option key={count} value={count}>
                  {count} {count === 1 ? "traveler" : "travelers"}
                </option>
              ),
            )}
          </select>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-7 py-3.5 font-semibold text-white transition hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
        >
          <Search size={18} />
          Search
        </button>
      </form>
    </section>
  );
}

export default TourSearchForm;
