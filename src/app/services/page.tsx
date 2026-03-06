"use client";

import React, { useState } from "react";
import { Users, Briefcase, Snowflake, Check, ChevronRight } from "lucide-react";
import Image from "next/image";
import heroImg from "@/app/assets/heroimg.jpg";
import { useLanguage } from "@/context/LanguageContext";

const categories = ["All", "Standard Cars", "SUVs", "Buses", "VIP"];

const fleetData = [
  {
    id: 1,
    name: "Standard Sedan",
    model: "Toyota Corolla or similar",
    category: "Standard Cars",
    price: "1,200",
    pax: 3,
    bags: 2,
    features: ["AC", "Comfort Seats", "WIFI"],
    tags: ["Economy", "City Travel"],
  },
  {
    id: 2,
    name: "Premium SUV",
    model: "Kia Sportage",
    category: "SUVs",
    price: "2,500",
    pax: 4,
    bags: 4,
    features: ["AC", "Spacious", "Leather Seats"],
    tags: ["Family", "Long Trip"],
  },
  {
    id: 3,
    name: "Luxury Van",
    model: "Mercedes V-Class",
    category: "VIP",
    price: "4,500",
    pax: 7,
    bags: 6,
    features: ["AC", "Leather Seats", "Privacy Glass"],
    tags: ["VIP", "Executive"],
  },
  {
    id: 4,
    name: "Executive Sedan",
    model: "Mercedes E-Class",
    category: "VIP",
    price: "3,800",
    pax: 3,
    bags: 3,
    features: ["AC", "Premium Sound", "WIFI"],
    tags: ["Luxury", "Business"],
  },
  {
    id: 5,
    name: "Mini Bus",
    model: "Toyota Coaster",
    category: "Buses",
    price: "4,000",
    pax: 14,
    bags: 10,
    features: ["AC", "Microphone", "Group Travel"],
    tags: ["Groups", "Events"],
  },
  {
    id: 6,
    name: "Luxury Coach",
    model: "Mercedes Tourismo",
    category: "Buses",
    price: "8,500",
    pax: 50,
    bags: 50,
    features: ["AC", "Toilet", "Entertainment"],
    tags: ["Touring", "Large Groups"],
  },
];

// Interactive client component wrapper for state
export default function ServicesPage() {
  return <ServicesContent />;
}

function ServicesContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { t } = useLanguage();

  const translateCategory = (cat: string) => {
    switch (cat) {
      case "All": return t("fleet.all");
      case "Standard Cars": return t("fleet.standard");
      case "SUVs": return t("fleet.suv");
      case "Buses": return t("fleet.bus");
      case "VIP": return t("fleet.vip");
      default: return cat;
    }
  };

  const filteredFleet = fleetData.filter(
    (vehicle) => activeCategory === "All" || vehicle.category === activeCategory
  );

  return (
    <div className="py-32 bg-background min-h-screen">
      <div className="container-base">
        {/* Section Title */}
        <div className="text-center mb-16 animate-in slide-in-from-bottom-8 fade-in duration-700">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-primary dark:text-primary-foreground mb-6">
            {t("fleet.title")}
          </h1>
          {/* <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Choose the perfect vehicle for your journey.
          </p> */}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-in fade-in duration-700 delay-150">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md ${
                activeCategory === category
                  ? "bg-accent text-accent-foreground scale-105"
                  : "bg-bg-light dark:bg-bg-dark text-foreground/80 hover:bg-accent/20 border border-border"
              }`}
            >
              {translateCategory(category)}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((vehicle, idx) => (
            <div
              key={vehicle.id}
              className={`group relative flex flex-col rounded-[2rem] bg-white dark:bg-[#11242d] border border-border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-bottom-8 fill-mode-both`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* TOP: Image & Badge */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <Image
                  src={heroImg}
                  alt={vehicle.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-black/50 text-white backdrop-blur-md border border-white/20 uppercase tracking-wider">
                    {translateCategory(vehicle.category)}
                  </span>
                </div>
              </div>

              {/* Vehicle Information */}
              <div className="flex flex-col flex-1 p-6 md:p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {vehicle.category === 'VIP' ? 'VIP' : vehicle.category === 'Buses' ? 'Luxury Bus' : vehicle.category === 'SUVs' ? 'SUV' : 'Car'} – {vehicle.name}
                  </h3>
                  <p className="text-sm font-medium text-foreground/60">{vehicle.model}</p>
                </div>

                {/* Price Label */}
                <div className="mb-6 inline-flex items-baseline p-3 rounded-2xl bg-accent/10 border border-accent/20 gap-2">
                  <span className="text-sm font-semibold text-foreground/70">{t("fleet.from")}</span>
                  <span className="text-2xl font-black text-accent">{vehicle.price}</span>
                  <span className="text-sm font-bold text-foreground/70">EGP</span>
                </div>

                {/* Vehicle Details */}
                <div className="flex items-center gap-4 mb-6 text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-1.5" title="Passengers">
                     <Users className="w-4 h-4 text-accent rtl:scale-x-[-1]" />
                    <span>{vehicle.pax} {t("fleet.pax")}</span>
                  </div>
                  <div className="flex items-center gap-1.5" title="Luggage">
                    <Briefcase className="w-4 h-4 text-accent" />
                    <span>{vehicle.bags} {t("fleet.bags")}</span>
                  </div>
                  {vehicle.features.includes("AC") && (
                    <div className="flex items-center gap-1.5" title="Air Conditioning">
                      <Snowflake className="w-4 h-4 text-accent" />
                      <span>AC</span>
                    </div>
                  )}
                </div>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {vehicle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-bg-light dark:bg-white/5 text-foreground/70 border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                  {vehicle.features.filter(f => f !== "AC").map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-bg-light dark:bg-white/5 text-foreground/70 border border-border"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                   {/* CTA Button */}
                  <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:-translate-y-1 hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                    {t("fleet.bookNow")}
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Airport Transfers Informational Block */}
        <div className="mt-24 pt-24 border-t border-border/50 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="w-full lg:w-1/2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-accent/10 text-accent mb-6 uppercase tracking-wider">
                Specialized Service
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary dark:text-primary-foreground mb-6">
                {t("airportTransfer.title")}
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-10 max-w-2xl">
                {t("airportTransfer.description")}
              </p>
              
              <ul className="space-y-4">
                {["wait", "tracking", "pricing", "drivers"].map((key) => (
                  <li key={key} className="flex items-center gap-4 text-foreground/90 font-medium text-lg">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#84cc16]/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-[#84cc16]" />
                    </div>
                    {t(`airportTransfer.features.${key}`)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Element */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-video lg:aspect-[4/3] w-full rounded-[2rem] overflow-hidden bg-muted group shadow-2xl">
                <Image
                  src={heroImg}
                  alt="Professional Airport Transfer"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent"></div>
                
                {/* Decorative overlay element */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center justify-between">
                    <div>
                      <p className="text-white/80 text-sm font-medium mb-1">We track your flight</p>
                      <p className="text-white font-bold text-xl">Never wait, never worry.</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <Check className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
