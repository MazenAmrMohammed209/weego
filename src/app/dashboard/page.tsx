"use client";

import { useAuth } from "@/context/AuthContext";
import { ArrowRight, PlaneTakeoff, Heart, Gift, Award, CheckCircle2, Navigation, Clock, UserCheck, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function DashboardPage() {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  
  const upcomingTripsCount = 2; // Mock data
  const loyaltyPoints = 12450; // Mock data
  const referralCode = "WEEGO-" + (user?.name?.substring(0,3).toUpperCase() || "USR") + "26";

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!user) return null;

  return (
    <div className="space-y-10 pb-20">
      
      {/* 1. Welcome Section */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-primary text-white shadow-2xl">
        <div className="absolute top-0 right-0 h-96 w-96 bg-accent/20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
        
        <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
              {t("dashboard.welcome")}<span className="text-accent">{user.name?.split(" ")[0]}</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 font-medium">
              {t("dashboard.upcomingTrips").replace("{count}", upcomingTripsCount.toString())}
            </p>
          </div>
          <div>
            <Link
              href="/services"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent px-8 text-base font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105"
            >
              {t("dashboard.planTrip")}
              <ArrowRight className="h-5 w-5 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: t("dashboard.stats.totalTrips.title"), value: "14", icon: Navigation, desc: t("dashboard.stats.totalTrips.desc") },
          { title: t("dashboard.stats.upcomingTrips.title"), value: upcomingTripsCount.toString(), icon: Clock, desc: t("dashboard.stats.upcomingTrips.desc"), highlight: true },
          { title: t("dashboard.stats.savedDestinations.title"), value: "5", icon: Heart, desc: t("dashboard.stats.savedDestinations.desc") },
          { title: t("dashboard.stats.loyaltyPoints.title"), value: loyaltyPoints.toLocaleString(), icon: Gift, desc: t("dashboard.stats.loyaltyPoints.desc"), highlight: true },
        ].map((stat, idx) => (
          <div key={idx} className="rounded-3xl border border-border bg-background p-6 shadow-sm flex flex-col relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4">
              <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${stat.highlight ? 'bg-accent/10 text-accent' : 'bg-primary/5 text-primary dark:text-primary-foreground'}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground/60 mb-1">{stat.title}</p>
              <h4 className="text-3xl font-extrabold text-foreground mb-1">{stat.value}</h4>
              <p className="text-xs font-medium text-foreground/40">{stat.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column: Recent Trips */}
        <div className="lg:col-span-2 space-y-10">
          {/* 5. Recent Trips Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">{t("dashboard.recentTrips.title")}</h3>
              <Link href="/bookings" className="text-sm font-bold text-primary dark:text-primary-foreground hover:text-accent transition-colors">
                {t("dashboard.recentTrips.viewAll")}
              </Link>
            </div>
            <div className="rounded-3xl border border-border bg-background overflow-hidden shadow-sm">
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse min-w-[600px]">
                   <thead>
                     <tr className="border-b border-border/50 bg-bg-light dark:bg-bg-dark/50">
                       <th className="p-5 text-sm font-bold text-foreground/70 uppercase tracking-wider">{t("dashboard.recentTrips.columns.destination")}</th>
                       <th className="p-5 text-sm font-bold text-foreground/70 uppercase tracking-wider">{t("dashboard.recentTrips.columns.date")}</th>
                       <th className="p-5 text-sm font-bold text-foreground/70 uppercase tracking-wider">{t("dashboard.recentTrips.columns.vehicle")}</th>
                       <th className="p-5 text-sm font-bold text-foreground/70 uppercase tracking-wider">{t("dashboard.recentTrips.columns.status")}</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-border/50">
                     {[
                        { dest: t("dashboard.recentTrips.dest1"), date: t("dashboard.recentTrips.date1"), vehicle: t("dashboard.recentTrips.vehicle1"), status: t("dashboard.recentTrips.statusUpcoming"), statusColor: "text-blue-500 bg-blue-500/10" },
                        { dest: t("dashboard.recentTrips.dest2"), date: t("dashboard.recentTrips.date2"), vehicle: t("dashboard.recentTrips.vehicle2"), status: t("dashboard.recentTrips.statusCompleted"), statusColor: "text-green-500 bg-green-500/10" },
                        { dest: t("dashboard.recentTrips.dest3"), date: t("dashboard.recentTrips.date3"), vehicle: t("dashboard.recentTrips.vehicle3"), status: t("dashboard.recentTrips.statusCompleted"), statusColor: "text-green-500 bg-green-500/10" },
                     ].map((trip, i) => (
                       <tr key={i} className="hover:bg-bg-light/50 dark:hover:bg-bg-dark/50 transition-colors">
                         <td className="p-5">
                           <div className="flex items-center gap-3">
                             <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary/5 text-primary dark:text-primary-foreground">
                               <PlaneTakeoff className="h-5 w-5" />
                             </div>
                             <span className="font-semibold text-foreground">{trip.dest}</span>
                           </div>
                         </td>
                         <td className="p-5 text-sm font-medium text-foreground/70">{trip.date}</td>
                         <td className="p-5 text-sm font-medium text-foreground/70">{trip.vehicle}</td>
                         <td className="p-5">
                           <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${trip.statusColor}`}>
                             {trip.status}
                           </span>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>
          </section>
        </div>

        {/* Right Column: Referral & Achievements */}
        <div className="space-y-10">
          
          {/* 3. Referral Section */}
          <section className="rounded-3xl border border-border bg-background p-8 shadow-sm relative overflow-hidden">
             <div className="absolute -top-12 -right-12 h-32 w-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
             <div className="h-14 w-14 rounded-2xl bg-accent/20 text-accent flex items-center justify-center mb-6">
               <UserCheck className="h-7 w-7" />
             </div>
             <h3 className="text-xl font-bold text-foreground mb-3">{t("dashboard.referral.title1")} <br />{t("dashboard.referral.title2")}</h3>
             <p className="text-sm font-medium text-foreground/60 mb-6 leading-relaxed">
               {t("dashboard.referral.desc")}
             </p>
             <div className="flex items-center gap-2 p-1.5 pl-4 rounded-full border border-border bg-bg-light dark:bg-bg-dark">
                <span className="text-sm font-extrabold tracking-widest text-primary dark:text-primary-foreground flex-1 truncate">
                  {referralCode}
                </span>
                <button 
                  onClick={handleCopyCode}
                  className="h-10 px-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                >
                  {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
                </button>
             </div>
          </section>

          {/* 4. Achievements Section */}
          <section className="rounded-3xl border border-border bg-background p-8 shadow-sm">
             <div className="flex items-center gap-3 mb-8">
               <Award className="h-6 w-6 text-accent" />
               <h3 className="text-xl font-bold text-foreground">{t("dashboard.achievements.title")}</h3>
             </div>
             <div className="space-y-6">
                {[
                  { name: t("dashboard.achievements.a1.name"), desc: t("dashboard.achievements.a1.desc"), earned: true },
                  { name: t("dashboard.achievements.a2.name"), desc: t("dashboard.achievements.a2.desc"), earned: true },
                  { name: t("dashboard.achievements.a3.name"), desc: t("dashboard.achievements.a3.desc"), earned: false },
                  { name: t("dashboard.achievements.a4.name"), desc: t("dashboard.achievements.a4.desc"), earned: false },
                  { name: t("dashboard.achievements.a5.name"), desc: t("dashboard.achievements.a5.desc"), earned: false },
                ].map((badge, idx) => (
                  <div key={idx} className={`flex items-center gap-4 ${!badge.earned ? 'opacity-50 grayscale' : ''}`}>
                     <div className={`h-12 w-12 rounded-full flex items-center justify-center shrink-0 border-2 ${badge.earned ? 'border-accent bg-accent/10 text-accent' : 'border-border bg-background text-foreground/30'}`}>
                        {badge.earned ? <CheckCircle2 className="h-6 w-6" /> : <Award className="h-6 w-6" />}
                     </div>
                     <div>
                       <h4 className="text-sm font-bold text-foreground mb-1 block">{badge.name}</h4>
                       <p className="text-xs font-medium text-foreground/60">{badge.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </section>

        </div>
      </div>

    </div>
  );
}
