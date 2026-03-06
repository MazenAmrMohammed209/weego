"use client";

import { PlaneLanding, MapPin, Clock4, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function AirportTransfers() {
  return (
    <section className="py-24 bg-bg-light dark:bg-bg-dark border-t border-border">
      <div className="container-base">
        <div className="bg-background border border-border rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16 shadow-xl">
           
           {/* Abstract Map Background */}
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background to-background opacity-50 pointer-events-none" />
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

           <div 
              className="w-full lg:w-1/2 relative z-10 animate-in zoom-in-95 fade-in duration-700"
           >
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-border bg-bg-light dark:bg-bg-dark flex items-center justify-center group shadow-2xl">
                 <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                 
                 {/* Visual Interface Mockup */}
                 <div className="w-[80%] bg-background rounded-2xl border border-border p-5 shadow-lg relative z-10 transform translate-y-4 group-hover:-translate-y-2 transition-transform duration-700">
                    <div className="flex items-center gap-4 border-b border-border/50 pb-4 mb-4">
                       <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                          <PlaneLanding className="h-5 w-5" />
                       </div>
                       <div>
                          <p className="text-xs text-foreground/50 font-medium">JFK International</p>
                          <p className="text-sm font-bold text-foreground">Flight BA117 Landed</p>
                       </div>
                       <div className="ml-auto text-right">
                          <p className="text-xs text-foreground/50 font-medium">Pickup in</p>
                          <p className="text-sm font-bold text-accent">05:00 min</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <MapPin className="h-5 w-5 text-foreground/40 mt-1" />
                       <div>
                          <p className="text-sm font-bold text-foreground">Terminal 4, Arrival Gate B</p>
                          <p className="text-xs text-foreground/60">Chauffeur: Michael (Black S-Class)</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           <div 
              className="w-full lg:w-1/2 relative z-10 animate-in slide-in-from-right-8 fade-in duration-700 delay-200 fill-mode-both"
           >
              <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3 text-center lg:text-left">
                 Seamless Arrivals
              </h2>
              <h3 className="text-4xl font-extrabold tracking-tight text-primary dark:text-primary-foreground sm:text-5xl mb-6 text-center lg:text-left">
                 VIP Airport <br className="hidden sm:block"/> Transfers.
              </h3>
              <p className="text-lg text-foreground/70 mb-10 leading-relaxed text-center lg:text-left">
                 Never wait in a taxi line again. Our integrated flight tracking ensures your chauffeur is waiting for you exactly when you land, adjusting automatically for early arrivals or delays.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                 <div className="flex items-center gap-3 bg-bg-light dark:bg-bg-dark p-4 rounded-xl border border-border shrink-0">
                    <Clock4 className="h-5 w-5 text-accent" />
                    <span className="text-sm font-semibold text-foreground">60 Min Free Wait Time</span>
                 </div>
                 <div className="flex items-center gap-3 bg-bg-light dark:bg-bg-dark p-4 rounded-xl border border-border shrink-0">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                    <span className="text-sm font-semibold text-foreground">Meet & Greet Included</span>
                 </div>
              </div>

              <div className="text-center lg:text-left">
                 <Link href="/services">
                    <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary">
                       Book a Transfer
                    </button>
                 </Link>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}
