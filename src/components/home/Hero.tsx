import { ArrowRight, Globe2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-light dark:bg-bg-dark pt-24 pb-32 sm:pt-32 sm:pb-40">
      {/* Decorative background elements */}
      <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 flex justify-center overflow-hidden pointer-events-none opacity-30 dark:opacity-10">
        <div className="h-[40rem] w-[80rem] bg-gradient-to-tr from-accent to-primary blur-3xl opacity-20 rounded-full" />
      </div>

      <div className="container-base relative z-10 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent dark:text-accent">
              <Globe2 className="h-4 w-4" />
              Discover the World with Weego
            </span>
          </div>
          
          <h1 className="text-5xl font-extrabold tracking-tight text-primary dark:text-primary-foreground sm:text-7xl">
            Book Your Next <span className="text-accent inline-block transition-transform hover:-translate-y-1">Adventure</span> Today.
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-foreground/70 max-w-2xl mx-auto">
            Experience premium travel booking with exclusive rewards, seamless planning, and a world-class platform designed for modern explorers.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent px-8 text-base font-semibold text-accent-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Start Exploring
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-background border border-border px-8 text-base font-semibold text-foreground shadow-sm transition-colors hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
