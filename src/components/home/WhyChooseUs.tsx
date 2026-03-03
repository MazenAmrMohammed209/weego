import { ShieldCheck, Zap, Headphones, HeartHandshake } from "lucide-react";

const reasons = [
  {
    title: "Secure & Reliable",
    description: "Your data and payments are secured with industry-leading encryption protocols.",
    icon: ShieldCheck,
  },
  {
    title: "Lightning Fast",
    description: "Our platform is optimized for immediate responses, so you spend less time waiting.",
    icon: Zap,
  },
  {
    title: "24/7 Support",
    description: "We are always here to help you out, no matter where you are in the world.",
    icon: Headphones,
  },
  {
    title: "Customer First",
    description: "Every feature we build starts with the traveler’s needs at heart.",
    icon: HeartHandshake,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-bg-light dark:bg-bg-dark border-y border-border">
      <div className="container-base grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-primary-foreground sm:text-4xl mb-6">
            Why travelers trust <span className="text-accent">WEEGO</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-xl">
            We transcend traditional booking platforms by prioritizing your experience. 
            Clean design, robust security, and unparalleled support come standard.
          </p>
          <div className="space-y-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <reason.icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground">{reason.title}</h4>
                  <p className="mt-1 text-sm text-foreground/70">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-3xl overflow-hidden bg-primary/5 flex items-center justify-center border border-border">
          {/* Real implementation would use Next/Image here */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 mix-blend-multiply" />
          <svg className="w-48 h-48 text-accent/20" fill="currentColor" viewBox="0 0 24 24">
             <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
