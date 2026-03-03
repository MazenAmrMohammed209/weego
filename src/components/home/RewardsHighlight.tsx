import { Gift, Star, Award } from "lucide-react";
import Link from "next/link";

export function RewardsHighlight() {
  return (
    <section className="py-24 bg-background">
      <div className="container-base">
        <div className="rounded-3xl bg-primary px-6 py-16 sm:px-12 sm:py-20 lg:flex lg:items-center lg:px-20 relative overflow-hidden">
          {/* Background glow decoration */}
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
          
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Travel More. Get <span className="text-accent underline decoration-accent/50 underline-offset-4">Rewarded.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/80">
              Join the WEEGO Loyalty Program. Earn points on every booking, unlock exclusive perks, and gain access to members-only pricing and upgrades.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <Link
                href="/rewards"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              >
                View My Rewards
              </Link>
            </div>
          </div>
          <div className="mt-16 lg:mt-0 lg:w-1/2 relative z-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            
            {/* Reward Cards */}
            <div className="flex flex-col gap-4 w-full sm:w-48">
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm border border-white/20 transform transition-transform hover:-translate-y-2">
                <Gift className="h-8 w-8 text-accent mb-4" />
                <div className="text-xl font-bold text-white">Earn Points</div>
                <div className="text-sm text-primary-foreground/70">10 pts per $1</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm border border-white/20 transform transition-transform hover:-translate-y-2 sm:translate-x-6">
                <Star className="h-8 w-8 text-accent mb-4" />
                <div className="text-xl font-bold text-white">Tier Upgrades</div>
                <div className="text-sm text-primary-foreground/70">Silver, Gold, Platinum</div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 w-full sm:w-48 sm:mt-12">
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm border border-white/20 transform transition-transform hover:-translate-y-2">
                <Award className="h-8 w-8 text-accent mb-4" />
                <div className="text-xl font-bold text-white">Exclusive Access</div>
                <div className="text-sm text-primary-foreground/70">VIP Lounges</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
