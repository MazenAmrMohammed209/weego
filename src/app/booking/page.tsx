"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Check, ChevronRight, ChevronLeft, MapPin, Calendar, Users, Briefcase, Car } from "lucide-react";
import heroImg from "@/app/assets/heroimg.jpg"; // Using hero image as placeholder if needed

export default function BookingPage() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [tripType, setTripType] = useState("One Way");
  const [vehicle, setVehicle] = useState<any>(null);
  
  // Example vehicles
  const vehicles = [
    { id: 'sedan', name: 'Sedan', model: 'Toyota Corolla', price: 2000, pax: 3, bags: 2, features: ['AC', 'Comfort Seats'] },
    { id: 'suv', name: 'SUV', model: 'Kia Sportage', price: 2500, pax: 4, bags: 4, features: ['AC', 'Spacious'] },
    { id: 'h1', name: 'Hyundai H1', model: 'Hyundai H1', price: 3500, pax: 8, bags: 6, features: ['AC', 'Group Travel'] },
    { id: 'hiace', name: 'Toyota HiAce', model: 'HiAce 14-Seater', price: 4500, pax: 14, bags: 10, features: ['AC', 'High Capacity'] },
    { id: 'coaster', name: 'Toyota Coaster', model: 'Coaster 28-Seater', price: 8000, pax: 28, bags: 20, features: ['AC', 'Touring'] },
  ];

  // Dynamic pricing
  const baseFare = vehicle ? vehicle.price : (tripType === 'Hourly' ? 1000 : 0);
  const extras = 0; // Add dynamic extras here if needed later
  const total = baseFare + extras;

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="min-h-screen bg-bg-light dark:bg-background pt-32 pb-24 transition-colors duration-300">
      <div className="container-base">
        
        {/* Top Header */}
        <div className="mb-12 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary dark:text-primary-foreground mb-8">
            {t("booking.title")}
          </h1>
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-4 max-w-2xl mx-auto">
            {/* Step 1 */}
            <div className={`flex items-center gap-3 ${step >= 1 ? 'text-primary dark:text-primary-foreground' : 'text-foreground/40'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= 1 ? 'bg-primary dark:bg-white text-primary-foreground dark:text-primary' : 'bg-muted text-foreground/50'}`}>
                1
              </div>
              <span className="font-semibold text-sm hidden sm:block">{t("booking.steps.details")}</span>
            </div>
            
            <div className={`flex-1 h-0.5 rounded-full ${step >= 2 ? 'bg-primary dark:bg-white' : 'bg-border'}`} />
            
            {/* Step 2 */}
            <div className={`flex items-center gap-3 ${step >= 2 ? 'text-primary dark:text-primary-foreground' : 'text-foreground/40'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= 2 ? 'bg-primary dark:bg-white text-primary-foreground dark:text-primary' : 'bg-muted text-foreground/50'}`}>
                2
              </div>
              <span className="font-semibold text-sm hidden sm:block">{t("booking.steps.vehicle")}</span>
            </div>
            
            <div className={`flex-1 h-0.5 rounded-full ${step >= 3 ? 'bg-primary dark:bg-white' : 'bg-border'}`} />
            
            {/* Step 3 */}
            <div className={`flex items-center gap-3 ${step >= 3 ? 'text-primary dark:text-primary-foreground' : 'text-foreground/40'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= 3 ? 'bg-primary dark:bg-white text-primary-foreground dark:text-primary' : 'bg-muted text-foreground/50'}`}>
                3
              </div>
              <span className="font-semibold text-sm hidden sm:block">{t("booking.steps.review")}</span>
            </div>
          </div>
        </div>

        {/* Main Grid Content */}
        <div className="grid lg:grid-cols-3 gap-8 items-start relative">
          
          {/* Left Side: Form Steps */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-bg-dark border border-border rounded-3xl p-6 md:p-10 shadow-sm animate-in fade-in slide-in-from-left-8 duration-700 delay-150 relative overflow-hidden">
              
              {/* Step 1: Trip Details */}
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold flex items-center gap-3">
                      <MapPin className="text-accent h-6 w-6" /> 
                      {t("booking.steps.details")}
                    </h2>
                  </div>

                  {/* Trip Type Tabs */}
                  <div className="flex p-1 bg-muted rounded-xl mb-8 overflow-x-auto no-scrollbar">
                    {['One Way', 'Round Trip', 'Multi-City', 'Hourly'].map((type) => {
                      const keyMap: Record<string, string> = {
                        'One Way': 'oneWay', 'Round Trip': 'roundTrip', 'Multi-City': 'multiCity', 'Hourly': 'hourly'
                      };
                      return (
                        <button
                          key={type}
                          onClick={() => setTripType(type)}
                          className={`flex-1 whitespace-nowrap px-4 py-3 rounded-lg text-sm font-semibold transition-all ${tripType === type ? 'bg-white dark:bg-[#1f3743] text-primary dark:text-white shadow-sm' : 'text-foreground/70 hover:text-foreground hover:bg-white/50 dark:hover:bg-white/5'}`}
                        >
                          {t(`booking.tripType.${keyMap[type]}`)}
                        </button>
                      );
                    })}
                  </div>

                  {/* Form Grid */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">{t("booking.form.destinationArea")}</label>
                      <select className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground focus:ring-2 focus:ring-accent focus:outline-none appearance-none font-medium">
                        <option>Cairo</option>
                        <option>Alexandria</option>
                        <option>Sharm El Sheikh</option>
                        <option>Hurghada</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">{t("booking.form.pickupDate")}</label>
                        <input type="date" className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground focus:ring-2 focus:ring-accent focus:outline-none font-medium" />
                      </div>
                      {(tripType === 'Round Trip' || tripType === 'Multi-City') && (
                        <div>
                          <label className="block text-sm font-bold text-foreground mb-2">{t("booking.form.returnDate")}</label>
                          <input type="date" className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground focus:ring-2 focus:ring-accent focus:outline-none font-medium" />
                        </div>
                      )}
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">{t("booking.form.time")}</label>
                        <input type="time" className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground focus:ring-2 focus:ring-accent focus:outline-none font-medium" />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="relative">
                        <label className="block text-sm font-bold text-foreground mb-2">{t("booking.form.pickupLocation")}</label>
                        <input type="text" placeholder={t("booking.form.pickupPlaceholder")} className="w-full bg-background border border-border rounded-xl px-4 py-3.5 pl-11 text-foreground focus:ring-2 focus:ring-accent focus:outline-none font-medium placeholder:text-foreground/40" />
                        <MapPin className="absolute left-4 top-[38px] w-5 h-5 text-accent" />
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-bold text-foreground mb-2">{t("booking.form.dropoffLocation")}</label>
                        <input type="text" placeholder={t("booking.form.dropoffPlaceholder")} className="w-full bg-background border border-border rounded-xl px-4 py-3.5 pl-11 text-foreground focus:ring-2 focus:ring-accent focus:outline-none font-medium placeholder:text-foreground/40" />
                        <MapPin className="absolute left-4 top-[38px] w-5 h-5 text-accent/50" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">{t("booking.form.passengers")}</label>
                        <select className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground focus:ring-2 focus:ring-accent focus:outline-none appearance-none font-medium">
                          {[1,2,3,4,5,6,7,8,9,"10+"].map(n => <option key={n}>{n}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">{t("booking.form.specialRequests")}</label>
                      <textarea placeholder={t("booking.form.specialRequestsPlaceholder")} rows={3} className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground focus:ring-2 focus:ring-accent focus:outline-none font-medium placeholder:text-foreground/40 resize-none"></textarea>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-border flex justify-end">
                    <button onClick={handleNext} className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:-translate-y-1 hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                      {t("booking.buttons.next")}
                      <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Vehicle Selection */}
              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-2xl font-bold flex items-center gap-3">
                      <Car className="text-accent h-6 w-6" /> 
                      {t("booking.vehicleSelection.title")}
                    </h2>
                  </div>

                  <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    {vehicles.map((v) => {
                      const isSelected = vehicle?.id === v.id;
                      return (
                        <div 
                          key={v.id} 
                          onClick={() => setVehicle(v)}
                          className={`relative flex flex-col sm:flex-row items-center cursor-pointer p-4 rounded-2xl border-2 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg ${isSelected ? 'border-accent bg-accent/5 shadow-md' : 'border-border bg-background hover:border-accent/50'}`}
                        >
                          {isSelected && (
                            <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 h-6 w-6 rounded-full bg-accent flex items-center justify-center animate-in zoom-in duration-300">
                              <Check className="h-4 w-4 text-accent-foreground" />
                            </div>
                          )}
                          
                          <div className="relative w-full sm:w-40 h-28 rounded-xl overflow-hidden bg-muted mb-4 sm:mb-0 sm:mr-6 rtl:mr-0 rtl:ml-6 shrink-0 border border-border">
                            {/* In a real app we'd use actual vehicle images */}
                            <Image src={heroImg} alt={v.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          </div>
                          
                          <div className="flex-1 w-full text-start">
                            <h3 className="text-xl font-bold text-foreground mb-1">{v.name}</h3>
                            <p className="text-sm font-medium text-foreground/60 mb-3">{v.model}</p>
                            <div className="flex items-center gap-4 text-xs font-semibold text-foreground/70 mb-2">
                              <span className="flex items-center gap-1.5 bg-bg-light dark:bg-bg-dark px-2 py-1 rounded-md border border-border"><Users className="w-3.5 h-3.5 text-accent" /> {v.pax} {t("booking.vehicleSelection.seats")}</span>
                              <span className="flex items-center gap-1.5 bg-bg-light dark:bg-bg-dark px-2 py-1 rounded-md border border-border"><Briefcase className="w-3.5 h-3.5 text-accent" /> {v.bags} {t("booking.vehicleSelection.bags")}</span>
                            </div>
                          </div>
                          
                          <div className="w-full sm:w-auto mt-4 sm:mt-0 text-start sm:text-right rtl:sm:text-left flex flex-col justify-center">
                            <span className="text-xs font-bold text-foreground/50 uppercase tracking-widest">{t("booking.vehicleSelection.startingFrom")}</span>
                            <div className="text-2xl font-black text-primary dark:text-primary-foreground">{v.price.toLocaleString()} <span className="text-sm font-bold">EGP</span></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-10 pt-8 border-t border-border flex justify-between">
                    <button onClick={handleBack} className="inline-flex items-center justify-center gap-2 rounded-xl bg-background border-2 border-border px-6 py-4 text-sm font-bold text-foreground transition-all hover:bg-muted active:scale-95 focus-visible:outline-none">
                      <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
                      {t("booking.buttons.back")}
                    </button>
                    <button 
                      onClick={handleNext} 
                      disabled={!vehicle}
                      className={`inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${vehicle ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-1 hover:shadow-lg active:scale-95' : 'bg-muted text-foreground/40 cursor-not-allowed'}`}
                    >
                      {t("booking.buttons.next")}
                      <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold flex items-center gap-3">
                      <Check className="text-accent h-6 w-6" /> 
                      {t("booking.review.title")}
                    </h2>
                  </div>

                  <div className="bg-bg-light dark:bg-bg-dark/50 border border-border rounded-2xl p-6 md:p-8 space-y-6">
                    <h3 className="text-lg font-bold text-foreground border-b border-border pb-4">{t("booking.review.summary")}</h3>
                    
                    <div className="grid md:grid-cols-2 gap-y-6 gap-x-8">
                      <div>
                        <span className="block text-xs font-bold text-foreground/50 uppercase tracking-wider mb-1">{t("booking.review.tripType")}</span>
                        <span className="block font-semibold text-foreground">{t(`booking.tripType.${tripType === 'One Way' ? 'oneWay' : tripType === 'Round Trip' ? 'roundTrip' : tripType === 'Multi-City' ? 'multiCity' : 'hourly'}`)}</span>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-foreground/50 uppercase tracking-wider mb-1">{t("booking.review.dateTime")}</span>
                        <span className="block font-semibold text-foreground text-start">Oct 15, 2026 - 10:00 AM</span>
                      </div>
                      <div className="md:col-span-2">
                        <span className="block text-xs font-bold text-foreground/50 uppercase tracking-wider mb-1">{t("booking.review.pickup")}</span>
                        <span className="block font-semibold text-foreground">Cairo International Airport (CAI)</span>
                      </div>
                      <div className="md:col-span-2">
                        <span className="block text-xs font-bold text-foreground/50 uppercase tracking-wider mb-1">{t("booking.review.dropoff")}</span>
                        <span className="block font-semibold text-foreground">Hilton Cairo Heliopolis</span>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-foreground/50 uppercase tracking-wider mb-1">{t("booking.review.vehicle")}</span>
                        <span className="block font-semibold text-foreground">{vehicle?.name || 'N/A'}</span>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-foreground/50 uppercase tracking-wider mb-1">{t("booking.review.passengers")}</span>
                        <span className="block font-semibold text-foreground">2</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-border flex justify-between">
                    <button onClick={handleBack} className="inline-flex items-center justify-center gap-2 rounded-xl bg-background border-2 border-border px-6 py-4 text-sm font-bold text-foreground transition-all hover:bg-muted active:scale-95 focus-visible:outline-none">
                      <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
                      {t("booking.buttons.back")}
                    </button>
                    <button onClick={() => alert("Booking Confirmed!")} className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-bold text-accent-foreground transition-all hover:bg-accent/90 hover:-translate-y-1 hover:shadow-lg shadow-accent/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                      <Check className="w-5 h-5" />
                      {t("booking.buttons.confirm")}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Sticky Estimate Panel */}
          <div className="lg:col-span-1">
            <div className="bg-primary dark:bg-[#11242d] text-primary-foreground border border-border rounded-3xl p-8 shadow-xl sticky top-32 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-primary-foreground/10">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center -translate-y-0.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  {t("booking.review.totalEstimate")}
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm font-medium text-primary-foreground/80">
                  <span>{t("booking.review.baseFare")}</span>
                  <span>{baseFare.toLocaleString()} EGP</span>
                </div>
                {extras > 0 && (
                  <div className="flex justify-between items-center text-sm font-medium text-primary-foreground/80">
                    <span>{t("booking.review.addons")}</span>
                    <span>{extras.toLocaleString()} EGP</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-end mb-8 pt-6 border-t border-primary-foreground/10">
                <span className="text-lg font-bold">{t("booking.review.total")}</span>
                <div className="text-right">
                  {/* React key on total makes transition trigger when it changes */}
                  <div key={total} className="text-4xl font-black text-accent animate-in slide-in-from-bottom-2 fade-in duration-300">
                    {total.toLocaleString()}
                  </div>
                  <span className="text-sm font-bold text-primary-foreground/60 uppercase tracking-widest">EGP</span>
                </div>
              </div>

              <div className="bg-primary-foreground/5 rounded-xl p-5 border border-primary-foreground/10">
                <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70 mb-3">{t("booking.review.priceIncludes")}</p>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-xs font-medium text-primary-foreground/80">
                    <Check className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" /> {t("booking.review.includes.goReturn")}
                  </li>
                  <li className="flex items-start gap-2 text-xs font-medium text-primary-foreground/80">
                    <Check className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" /> {t("booking.review.includes.waiting")}
                  </li>
                  <li className="flex items-start gap-2 text-xs font-medium text-primary-foreground/80">
                    <Check className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" /> {t("booking.review.includes.driver")}
                  </li>
                  <li className="flex items-start gap-2 text-xs font-medium text-primary-foreground/80">
                    <Check className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" /> {t("booking.review.includes.fuel")}
                  </li>
                  <li className="flex items-start gap-2 text-xs font-medium text-primary-foreground/80">
                    <Check className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" /> {t("booking.review.includes.door")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
