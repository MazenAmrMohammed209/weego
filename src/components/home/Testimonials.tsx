"use client";

import { Star, Quote } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t("testimonials.t1.name"),
      role: t("testimonials.t1.role"),
      content: t("testimonials.t1.content"),
    },
    {
      name: t("testimonials.t2.name"),
      role: t("testimonials.t2.role"),
      content: t("testimonials.t2.content"),
    },
    {
      name: t("testimonials.t3.name"),
      role: t("testimonials.t3.role"),
      content: t("testimonials.t3.content"),
    },
  ];
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-base relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">
             {t("testimonials.badge")}
          </h2>
          <h3 className="text-4xl font-extrabold tracking-tight text-primary dark:text-primary-foreground sm:text-5xl">
            {t("testimonials.title")}
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="bg-bg-light dark:bg-bg-dark border border-border p-8 rounded-[2rem] relative group hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-xl animate-in slide-in-from-bottom-6 fade-in duration-700 fill-mode-both"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
               <Quote className="absolute top-8 end-8 h-12 w-12 text-border/60 group-hover:text-accent/20 transition-colors duration-500 rtl:-scale-x-100" />
               <div className="flex items-center gap-1 text-accent mb-6 relative z-10">
                 {[1, 2, 3, 4, 5].map((star) => (
                   <Star key={star} className="h-4 w-4 fill-current" />
                 ))}
               </div>
               <p className="text-foreground/80 leading-relaxed mb-8 relative z-10">"{test.content}"</p>
               <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary dark:text-primary-foreground border border-border">
                     {test.name.charAt(0)}
                  </div>
                  <div>
                     <p className="font-bold text-foreground">{test.name}</p>
                     <p className="text-xs text-foreground/50">{test.role}</p>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
