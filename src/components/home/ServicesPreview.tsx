import { Plane, Hotel, Map, CalendarCheck } from "lucide-react";
import Link from "next/link";

const features = [
  {
    name: "Flight Booking",
    description: "Find and book your next flight anywhere in the world with best price guarantees.",
    icon: Plane,
  },
  {
    name: "Luxury Hotels",
    description: "Rest easy with our curated list of luxury and boutique hotels.",
    icon: Hotel,
  },
  {
    name: "Guided Tours",
    description: "Explore new cities like a local with expert-led guided experiences.",
    icon: Map,
  },
  {
    name: "Seamless Planning",
    description: "Manage your entire itinerary from one clean, simple dashboard.",
    icon: CalendarCheck,
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container-base">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-primary-foreground sm:text-4xl">
            Everything you need for the perfect trip
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            We provide a comprehensive suite of tools to make your travel experience smooth, comfortable, and unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group relative flex flex-col items-start p-8 rounded-2xl border border-border bg-background shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-accent"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.name}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-4 flex-1">
                {feature.description}
              </p>
              <Link
                href="/services"
                className="text-sm font-medium text-primary dark:text-primary-foreground group-hover:text-accent transition-colors"
              >
                Learn more &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
