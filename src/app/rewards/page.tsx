"use client";

import { Trophy, Gift, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function RewardsPage() {
  const { t } = useLanguage();

  return (
    <div className="py-24 bg-bg-light dark:bg-bg-dark min-h-screen">
      <div className="container-base">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 mt-8">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary dark:text-primary-foreground sm:text-5xl mb-4">
              {t("rewardsPage.title")}
            </h1>
            <p className="text-lg text-foreground/70">
              {t("rewardsPage.welcome")}
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:scale-105"
            >
              {t("rewardsPage.bookToEarn")}
            </Link>
          </div>
        </div>

        {/* Balance Card */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 rounded-3xl bg-primary p-8 sm:p-12 text-white relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 h-64 w-64 bg-accent/20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3" />
            <div className="relative z-10 flex items-center gap-3 mb-6">
              <Trophy className="h-8 w-8 text-accent" />
              <span className="text-lg font-medium text-primary-foreground/80">{t("rewardsPage.available")}</span>
            </div>
            <div className="relative z-10 text-6xl sm:text-7xl font-bold tracking-tight mb-2">
              12,450 <span className="text-2xl font-medium text-accent">{t("rewardsPage.pts")}</span>
            </div>
            <div className="relative z-10 mt-8">
              <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-accent w-[60%] rounded-full" />
              </div>
              <p className="text-sm text-primary-foreground/70 rtl:flex rtl:gap-1">
                <span>{t("rewardsPage.awayFrom")}</span> <strong className="text-white">{t("rewardsPage.goldTier")}</strong>
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-background p-8 sm:p-12 flex flex-col items-center justify-center text-center shadow-sm">
            <div className="h-24 w-24 rounded-full bg-slate-100 flex items-center justify-center mb-6 border-4 border-slate-300">
              <Star className="h-10 w-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1">{t("rewardsPage.silverTier")}</h3>
            <p className="text-sm text-foreground/70 mb-6">{t("rewardsPage.currentStatus")}</p>
            <Link
              href="#benefits"
              className="text-sm font-medium text-primary dark:text-primary-foreground underline underline-offset-4 hover:text-accent transition-colors"
            >
              {t("rewardsPage.viewBenefits")}
            </Link>
          </div>
        </div>

        {/* Redeem CTA */}
        <div className="rounded-3xl border border-border bg-background shadow-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center flex-shrink-0">
              <Gift className="h-8 w-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground">{t("rewardsPage.ready")}</h4>
              <p className="text-sm text-foreground/70 mt-1 max-w-sm">
                {t("rewardsPage.readyDesc")}
              </p>
            </div>
          </div>
          <button className="flex-shrink-0 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-background px-8 text-sm font-semibold text-foreground shadow-sm hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all">
            {t("rewardsPage.redeem")}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
}
