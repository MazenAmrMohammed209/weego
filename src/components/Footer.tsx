"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, ArrowUp } from "lucide-react";
import Image from "next/image";
import iconImg from "@/app/assets/icon.svg";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-background pt-12 pb-6 text-foreground relative z-10">
      <div className="container-base">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-12">
          
          {/* Column 1: Brand & Contact */}
          <div className="lg:w-1/3 flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-3 font-bold text-2xl tracking-tighter text-primary dark:text-primary-foreground w-fit hover:opacity-80 transition-opacity">
              <Image src={iconImg} alt="WEEGO" width={140} height={40} className="w-40 h-auto object-contain -ms-2" />
            </Link>
            
            <p className="text-foreground/70 text-sm leading-relaxed max-w-sm">
              {t("footer.description")}
            </p>

            <ul className="space-y-4 text-sm text-foreground/80 mt-4">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:weego@gmail.com" className="hover:text-accent transition-colors">weego@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:01505329501" className="hover:text-accent transition-colors">01505329501</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:01505329405" className="hover:text-accent transition-colors">01505329405</a>
              </li>
              <li>
                <a 
                  href="https://wa.me/201505329501" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full font-bold text-xs tracking-wide hover:bg-[#20bd5a] transition-colors mt-2"
                >
                  {/* Custom WhatsApp Icon or simple text */}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  {t("footer.whatsapp")}
                </a>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <MapPin className="h-4 w-4 text-accent translate-y-0.5" />
                <span className="leading-relaxed">{t("footer.address1")} <br/>{t("footer.address2")}</span>
              </li>
            </ul>
          </div>

          {/* Columns 2-4: Links */}
          <div className="lg:w-2/3 flex flex-wrap lg:flex-nowrap justify-between gap-10 lg:gap-8">
            {/* Services */}
            <div className="w-[45%] lg:w-auto">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-foreground mb-6">{t("footer.titles.services")}</h4>
              <ul className="space-y-4 text-sm text-foreground/70">
                <li><Link href="/services" className="hover:text-accent transition-colors">{t("footer.links.premium")}</Link></li>
                <li><Link href="/services" className="hover:text-accent transition-colors">{t("footer.links.intercity")}</Link></li>
                <li><Link href="/services" className="hover:text-accent transition-colors">{t("footer.links.business")}</Link></li>
                <li><Link href="/services" className="hover:text-accent transition-colors">{t("footer.links.vip")}</Link></li>
              </ul>
            </div>

            {/* Explore */}
            <div className="w-[45%] lg:w-auto">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-foreground mb-6">{t("footer.titles.explore")}</h4>
              <ul className="space-y-4 text-sm text-foreground/70">
                <li><Link href="#" className="hover:text-accent transition-colors">{t("footer.links.cairo")}</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">{t("footer.links.alex")}</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">{t("footer.links.sharm")}</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">{t("footer.links.alamein")}</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">{t("footer.links.coast")}</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">{t("footer.links.siwa")}</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">{t("footer.links.dahab")}</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="w-[45%] lg:w-auto">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-foreground mb-6">{t("footer.titles.company")}</h4>
              <ul className="space-y-4 text-sm text-foreground/70">
                <li><Link href="#" className="hover:text-accent transition-colors">{t("footer.links.about")}</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">{t("footer.links.safety")}</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">{t("footer.links.careers")}</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">{t("footer.links.legal")}</Link></li>
              </ul>
            </div>

            {/* Social & Widget */}
            <div className="w-[45%] lg:w-auto flex flex-col items-start lg:items-end lg:max-w-xs">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-foreground mb-6 w-full lg:text-right">{t("footer.titles.social")}</h4>
              <div className="flex gap-4 mb-8 w-full lg:justify-end">
                <a href="#" className="h-10 w-10 rounded-full bg-bg-light dark:bg-bg-dark border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-background transition-all">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-bg-light dark:bg-bg-dark border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-background transition-all">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>

              {/* Pricing Widget */}
              <div className="bg-bg-light dark:bg-bg-dark border border-border/80 p-5 rounded-2xl shadow-sm lg:w-[260px] relative overflow-hidden group hover:border-accent/50 transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-[30px] -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 text-start rtl:text-right">
                  <span className="text-[10px] font-black tracking-widest text-accent uppercase block mb-1">{t("footer.widget.starting")}</span>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-3xl font-extrabold text-foreground tracking-tight">{t("footer.widget.price")}</span>
                    <span className="text-sm font-bold text-foreground/60">{t("footer.widget.currency")}</span>
                  </div>
                  <p className="text-[11px] text-foreground/60 leading-relaxed font-medium">
                    {t("footer.widget.desc")}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-foreground/50 uppercase tracking-widest">
          <p>{t("footer.copyright")}</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-accent transition-colors">{t("footer.privacy")}</Link>
            <Link href="#" className="hover:text-accent transition-colors">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top - Fixed positioning if implemented globally, or just decorative here */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 h-14 w-14 rounded-full bg-accent text-background border-4 border-background dark:border-bg-dark shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all outline-none"
      >
        <ArrowUp className="h-6 w-6 stroke-[3]" />
      </button>
    </footer>
  );
}
