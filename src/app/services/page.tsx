import { Map, Plane, Hotel, Palmtree, UserCheck, ShieldCheck, Car, Coffee } from "lucide-react";

export const metadata = {
  title: "Services | WEEGO",
  description: "Explore the wide range of premium travel services offered by WEEGO.",
};

const servicesList = [
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Access exclusive rates on global airlines with a seamless booking experience and flexible options.",
  },
  {
    icon: Hotel,
    title: "Luxury Accommodations",
    description: "Stay at world-class hotels and boutique resorts handpicked for quality and comfort.",
  },
  {
    icon: Map,
    title: "Curated Tours",
    description: "Discover off-the-beaten-path destinations with expert local guides and tailored itineraries.",
  },
  {
    icon: Palmtree,
    title: "Vacation Packages",
    description: "All-inclusive packages that take the stress out of planning so you can focus on relaxing.",
  },
  {
    icon: Car,
    title: "Premium Transfers",
    description: "Arrive in style with our network of vetted chauffeurs and comfortable private cars.",
  },
  {
    icon: UserCheck,
    title: "Concierge Services",
    description: "24/7 dedicated support to handle restaurant reservations, event tickets, and special requests.",
  },
  {
    icon: ShieldCheck,
    title: "Travel Insurance",
    description: "Comprehensive coverage options so you can travel with complete peace of mind.",
  },
  {
    icon: Coffee,
    title: "VIP Lounge Access",
    description: "Relax before your flight with complimentary access to over 1,000 airport lounges worldwide.",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="container-base">
        <div className="mb-16 mt-8 max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary dark:text-primary-foreground sm:text-5xl mb-4">
            Our Premium Services
          </h1>
          <p className="text-lg text-foreground/70">
            From takeoff to touchdown, we provide everything you need for the ultimate travel experience. Clean, reliable, and tailored to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col p-8 rounded-2xl bg-bg-light dark:bg-bg-dark border border-border shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl hover:border-accent"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors shadow-inner">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4 flex-1">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
