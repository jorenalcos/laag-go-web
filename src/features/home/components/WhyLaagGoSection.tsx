import { Compass, ShieldCheck, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Compass,
    title: "Discover local experiences",
    description:
      "Explore Cebu through experiences and destinations selected to help you make the most of your journey.",
  },
  {
    icon: ShieldCheck,
    title: "Connect with local providers",
    description:
      "Find local tour providers and communicate directly about your travel plans.",
  },
  {
    icon: Sparkles,
    title: "Plan your journey with ease",
    description:
      "Discover experiences and organize your trip in one convenient place.",
  },
];

function WhyLaagGoSection() {
  return (
    <section id="about" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-teal-700">
            Why LaagGo
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Every journey, connected.
          </h2>

          <p className="mt-4 leading-7 text-slate-500">
            LaagGo makes discovering local travel experiences and connecting
            with tour providers easier.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-100 bg-white p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <Icon size={24} />
              </div>

              <h3 className="text-lg font-bold text-slate-900">{title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyLaagGoSection;