"use client";

import { useState } from "react";
import { UploadCloud, CheckCircle2, ShieldCheck, Clock4, Plane } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function AirportTransferPage() {
  const { t } = useLanguage();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", airport: "", flightNumber: "",
    date: "", time: "", pax: "1", luggage: "1", pickup: "", dropoff: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="min-h-[90vh] pt-[100px] bg-bg-light dark:bg-bg-dark grid lg:grid-cols-12 overflow-x-hidden">
      
      {/* LEFT PANEL: Sticky Cinematic Hero (Takes 5 columns on desktop) */}
      <div className="lg:col-span-5 relative h-[50vh] lg:h-[calc(100vh-100px)] lg:sticky lg:top-[100px] z-10 flex flex-col justify-center p-8 md:p-12 lg:p-16 overflow-hidden">
        {/* Cinematic Backdrop Image */}
        <img 
          src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=2187&auto=format&fit=crop" 
          alt="Airport Transfer Hero"
          className="absolute inset-0 w-full h-full object-cover object-center" 
        />
        {/* Layered Gradients for dramatic luxury effect */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.25))' }} />

        <div className="relative z-20 w-full max-w-md mx-auto animate-in slide-in-from-left-8 fade-in duration-1000">
          <Link href="/" className="inline-block mb-12">
            <span className="text-xl font-bold tracking-[0.2em] text-white">
              WEEGO
            </span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
            {t("airportTransfers.title")}
          </h1>
          <p className="text-white/70 text-lg lg:text-xl leading-relaxed mb-10 font-light">
            {t("airportTransfers.description")}
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-5 text-white/90">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 backdrop-blur-md border border-accent/20 text-accent">
                <Plane className="w-5 h-5" />
              </div>
              <span className="text-base font-semibold tracking-wide">{t("airportTransfers.features.tracking")}</span>
            </div>
            <div className="flex items-center gap-5 text-white/90">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 backdrop-blur-md border border-accent/20 text-accent">
                <Clock4 className="w-5 h-5" />
              </div>
              <span className="text-base font-semibold tracking-wide">{t("airportTransfers.features.wait")}</span>
            </div>
            <div className="flex items-center gap-5 text-white/90">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 backdrop-blur-md border border-accent/20 text-accent">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-base font-semibold tracking-wide">{t("airportTransfers.features.drivers")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: Scrollable Form Canvas (Takes 7 columns on desktop) */}
      <div className="lg:col-span-7 bg-background min-h-[calc(100vh-100px)] relative z-20 px-6 py-10 md:px-12 flex flex-col justify-center">
        
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[620px] mx-auto animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300 my-8">
          
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center py-20 animate-in zoom-in-95 fade-in duration-500">
              <div className="w-32 h-32 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center mb-10">
                <CheckCircle2 className="w-16 h-16 text-accent" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
                Request Sent
              </h2>
              <p className="text-foreground/70 text-xl leading-relaxed max-w-md mb-12 font-light">
                {t("airportTransfers.success")}
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="px-10 py-5 rounded-full border-2 border-border font-bold text-foreground text-lg hover:border-foreground/30 hover:bg-foreground/5 transition-all"
              >
                Submit New Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-10">
              
              {/* SECTION 1: Personal Details */}
              <section className="space-y-6">
                <header className="flex flex-col gap-1 border-b border-border/50 pb-4">
                  <span className="text-accent font-bold tracking-widest text-xs uppercase">Step 01</span>
                  <h3 className="text-2xl font-bold text-foreground">Passenger Details</h3>
                </header>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-semibold text-foreground/80 tracking-wide uppercase">{t("airportTransfers.form.name")}</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full h-14 px-4 text-lg rounded-xl bg-bg-light/50 dark:bg-bg-dark/50 border-2 border-border focus:border-accent focus:bg-background outline-none transition-all placeholder:text-foreground/20 text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground/80 tracking-wide uppercase">{t("airportTransfers.form.email")}</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full h-14 px-4 text-lg rounded-xl bg-bg-light/50 dark:bg-bg-dark/50 border-2 border-border focus:border-accent focus:bg-background outline-none transition-all placeholder:text-foreground/20 text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground/80 tracking-wide uppercase">{t("airportTransfers.form.phone")}</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full h-14 px-4 text-lg rounded-xl bg-bg-light/50 dark:bg-bg-dark/50 border-2 border-border focus:border-accent focus:bg-background outline-none transition-all placeholder:text-foreground/20 text-foreground" />
                  </div>
                </div>
              </section>

              {/* SECTION 2: Flight Details */}
              <section className="space-y-6">
                <header className="flex flex-col gap-1 border-b border-border/50 pb-4">
                  <span className="text-accent font-bold tracking-widest text-xs uppercase">Step 02</span>
                  <h3 className="text-2xl font-bold text-foreground">Flight Information</h3>
                </header>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground/80 tracking-wide uppercase">{t("airportTransfers.form.airport")}</label>
                    <select required name="airport" value={formData.airport} onChange={handleChange} className="w-full h-14 px-4 text-lg rounded-xl bg-bg-light/50 dark:bg-bg-dark/50 border-2 border-border focus:border-accent focus:bg-background outline-none transition-all text-foreground appearance-none cursor-pointer">
                      <option value="" disabled>Select Arrival Airport</option>
                      <option value="cai">Cairo International (CAI)</option>
                      <option value="hrg">Hurghada (HRG)</option>
                      <option value="ssh">Sharm El Sheikh (SSH)</option>
                      <option value="hbe">Borg El Arab (HBE)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground/80 tracking-wide uppercase">{t("airportTransfers.form.flightNumber")}</label>
                    <input required type="text" name="flightNumber" value={formData.flightNumber} onChange={handleChange} className="w-full h-14 px-4 text-lg font-bold uppercase tracking-widest rounded-xl bg-bg-light/50 dark:bg-bg-dark/50 border-2 border-border focus:border-accent focus:bg-background outline-none transition-all placeholder:text-foreground/20 text-foreground" placeholder="e.g. MS798" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground/80 tracking-wide uppercase">{t("airportTransfers.form.arrivalDate")}</label>
                    <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full h-14 px-4 text-lg rounded-xl bg-bg-light/50 dark:bg-bg-dark/50 border-2 border-border focus:border-accent focus:bg-background outline-none transition-all text-foreground [color-scheme:light] dark:[color-scheme:dark] cursor-pointer" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground/80 tracking-wide uppercase">{t("airportTransfers.form.arrivalTime")}</label>
                    <input required type="time" name="time" value={formData.time} onChange={handleChange} className="w-full h-14 px-4 text-lg rounded-xl bg-bg-light/50 dark:bg-bg-dark/50 border-2 border-border focus:border-accent focus:bg-background outline-none transition-all text-foreground [color-scheme:light] dark:[color-scheme:dark] cursor-pointer" />
                  </div>
                  
                  {/* Upload Dropzone */}
                  <div className="md:col-span-2 mt-2 border-2 border-dashed border-border hover:border-accent/50 hover:bg-accent/5 rounded-xl p-4 flex items-center justify-center gap-4 text-left bg-bg-light/30 dark:bg-bg-dark/30 transition-all cursor-pointer group/upload">
                    <div className="w-10 h-10 rounded-full bg-background border border-border flex shrink-0 items-center justify-center group-hover/upload:border-accent/50 group-hover/upload:scale-110 transition-all duration-300 shadow-sm">
                      <UploadCloud className="w-4 h-4 text-foreground/50 group-hover/upload:text-accent transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{t("airportTransfers.form.uploadLabel")}</p>
                      <p className="text-[10px] text-foreground/50 font-medium uppercase tracking-wider">{t("airportTransfers.form.uploadSupported")}</p>
                    </div>
                    <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                  </div>
                </div>
              </section>

              {/* SECTION 3: Journey Requirements */}
              <section className="space-y-6">
                <header className="flex flex-col gap-1 border-b border-border/50 pb-4">
                  <span className="text-accent font-bold tracking-widest text-xs uppercase">Step 03</span>
                  <h3 className="text-2xl font-bold text-foreground">Journey Requirements</h3>
                </header>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground/80 tracking-wide uppercase">{t("airportTransfers.form.pax")}</label>
                    <input required type="number" min="1" max="50" name="pax" value={formData.pax} onChange={handleChange} className="w-full h-14 px-4 text-xl font-bold rounded-xl bg-bg-light/50 dark:bg-bg-dark/50 border-2 border-border focus:border-accent focus:bg-background outline-none transition-all text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground/80 tracking-wide uppercase">{t("airportTransfers.form.luggage")}</label>
                    <input required type="number" min="0" max="50" name="luggage" value={formData.luggage} onChange={handleChange} className="w-full h-14 px-4 text-xl font-bold rounded-xl bg-bg-light/50 dark:bg-bg-dark/50 border-2 border-border focus:border-accent focus:bg-background outline-none transition-all text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground/80 tracking-wide uppercase">{t("airportTransfers.form.pickup")}</label>
                    <input required type="text" name="pickup" value={formData.pickup} onChange={handleChange} className="w-full h-14 px-4 text-lg rounded-xl bg-bg-light/50 dark:bg-bg-dark/50 border-2 border-border focus:border-accent focus:bg-background outline-none transition-all placeholder:text-foreground/20 text-foreground" placeholder="e.g. CAI Airport Terminal 2" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground/80 tracking-wide uppercase">{t("airportTransfers.form.dropoff")}</label>
                    <input required type="text" name="dropoff" value={formData.dropoff} onChange={handleChange} className="w-full h-14 px-4 text-lg rounded-xl bg-bg-light/50 dark:bg-bg-dark/50 border-2 border-border focus:border-accent focus:bg-background outline-none transition-all placeholder:text-foreground/20 text-foreground" placeholder="e.g. Hilton Hotel Cairo" />
                  </div>
                </div>
              </section>

              {/* Submit Action */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-16 mt-4 bg-accent text-accent-foreground text-lg font-extrabold tracking-wide uppercase rounded-xl hover:bg-accent/90 focus:ring-4 focus:ring-accent focus:ring-offset-4 focus:ring-offset-background transition-all hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] shadow-lg shadow-accent/20 disabled:opacity-70 disabled:hover:translate-y-0 disabled:active:scale-100 flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-4 border-accent-foreground/20 border-t-accent-foreground rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  t("airportTransfers.form.submit")
                )}
              </button>

            </form>
          )}

        </div>
      </div>
    </main>
  );
}
