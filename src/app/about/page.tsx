import { Users, Globe2, Award } from "lucide-react";

export const metadata = {
  title: "About Us | WEEGO",
  description: "Learn more about WEEGO, our mission, vision, and the team driving the future of travel.",
};

const stats = [
  { id: 1, name: "Happy Travelers", value: "2M+" },
  { id: 2, name: "Destinations", value: "150+" },
  { id: 3, name: "Partner Airlines", value: "500+" },
  { id: 4, name: "Customer Support (24/7)", value: "100%" },
];

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="relative isolate overflow-hidden bg-primary py-24 sm:py-32">
        <div className="absolute -top-40 -right-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="h-[40rem] w-[80rem] bg-gradient-to-tr from-accent to-[#1B4A62] opacity-30 object-cover rounded-full" />
        </div>
        <div className="container-base text-center relative z-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
            Pioneering the Future of Travel
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-primary-foreground/80">
            At WEEGO, we believe exploring the world should be as inspiring as the destination itself. We exist to remove friction and add delight to every journey.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-24 sm:py-32">
        <div className="container-base">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-primary-foreground sm:text-4xl mb-6">
                Our Mission & Vision
              </h2>
              <dl className="mt-8 max-w-xl space-y-10 text-base leading-7 text-foreground/70 lg:max-w-none">
                <div className="relative pl-14">
                  <dt className="inline font-semibold text-foreground">
                    <Globe2 className="absolute left-1 top-1 h-6 w-6 text-accent" />
                    Mission.
                  </dt>{" "}
                  <dd className="inline">
                    To connect people with the world's wonders through a seamless, premium, and reliable platform that prioritizes customer experience above all else.
                  </dd>
                </div>
                <div className="relative pl-14">
                  <dt className="inline font-semibold text-foreground">
                    <Award className="absolute left-1 top-1 h-6 w-6 text-accent" />
                    Vision.
                  </dt>{" "}
                  <dd className="inline">
                    To become the global standard for luxury and professional travel booking, creating unforgettable memories for millions of explorers daily.
                  </dd>
                </div>
                <div className="relative pl-14">
                  <dt className="inline font-semibold text-foreground">
                    <Users className="absolute left-1 top-1 h-6 w-6 text-accent" />
                    Values.
                  </dt>{" "}
                  <dd className="inline">
                    Transparency, Innovation, Excellence, and a relentless focus on our community of travelers.
                  </dd>
                </div>
              </dl>
            </div>
            
            <div className="bg-bg-light dark:bg-bg-dark rounded-3xl p-10 border border-border shadow-sm flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">WEEGO in Numbers</h3>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.id} className="flex flex-col gap-y-3 text-center">
                    <dt className="text-sm font-medium leading-6 text-foreground/70">{stat.name}</dt>
                    <dd className="order-first text-4xl font-extrabold tracking-tight text-primary dark:text-primary-foreground">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
