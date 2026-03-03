import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 bg-bg-light dark:bg-bg-dark text-center border-t border-border">
      <div className="container-base">
        <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-primary-foreground sm:text-4xl">
          Ready to Begin Your Journey?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-foreground/70">
          Sign up today and get 5,000 WEEGO points instantly to kickstart your next adventure.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/auth"
            className="rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Create Your Account
          </Link>
          <Link href="/services" className="text-base font-semibold leading-6 text-foreground hover:text-primary dark:hover:text-primary-foreground">
            Explore Destinations <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
