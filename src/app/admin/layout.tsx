"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, Map, Radio, Navigation, PlaneLanding, 
  UserCircle2, CarFront, Briefcase, Users, FileText, 
  LifeBuoy, ShieldCheck, Settings, LogOut, Loader2,
  Search, Bell, Plus
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthorized, setIsAuthorized] = React.useState<boolean | null>(null);
  const pathname = usePathname();

  React.useEffect(() => {
    // Check both role and user storage items
    const role = localStorage.getItem("weego_role");
    const userJson = localStorage.getItem("weego_user");
    let isRoleAdmin = role === "admin";
    
    if (!isRoleAdmin && userJson) {
      try {
        const user = JSON.parse(userJson);
        if (user.role === "admin") isRoleAdmin = true;
      } catch (e) {}
    }

    if (isRoleAdmin) {
      setIsAuthorized(true);
    } else {
      window.location.href = "/auth";
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("weego_role");
    window.location.href = "/";
  };

  if (isAuthorized === null) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[#0a0a0a]">
        <Loader2 className="h-8 w-8 animate-spin text-[#00ff9d]" />
      </div>
    );
  }

  const sidebarLinks = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
    { name: "Bookings", icon: Map, href: "/admin/bookings" },
    { name: "Dispatch Board", icon: Radio, href: "/admin/dispatch" },
    { name: "Fleet Tracker", icon: Navigation, href: "/admin/fleet" },
    { name: "Airport Pickups", icon: PlaneLanding, href: "/admin/airport-requests" },
    { name: "Drivers", icon: UserCircle2, href: "/admin/drivers" },
    { name: "Vehicles", icon: CarFront, href: "/admin/vehicles" },
    { name: "Corporate Accounts", icon: Briefcase, href: "/admin/corporate" },
    { name: "Sales Leads CRM", icon: Users, href: "/admin/crm" },
    { name: "Finance & Invoices", icon: FileText, href: "/admin/finance" },
    { name: "Support Tickets", icon: LifeBuoy, href: "/admin/support" },
    { name: "Staff & Roles", icon: ShieldCheck, href: "/admin/staff" },
    { name: "Settings", icon: Settings, href: "/admin/settings" },
  ];

  return (
    <div className="flex h-screen pt-[96px] overflow-hidden bg-[#050505] text-white font-sans selection:bg-[#00ff9d]/30">
      
      {/* Sidebar Focus Area */}
      <aside className="hidden w-72 flex-col border-r border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl sm:flex relative z-20 shadow-[4px_0_24px_rgba(0,0,0,0.5)]">
        
        {/* Logo Section removed since it is in global Navbar */}
        <div className="flex h-6 items-center px-8 border-b border-white/5 bg-black/20" />

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/admin/dashboard' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 relative ${
                  isActive 
                    ? "bg-gradient-to-r from-[#00ff9d]/10 to-transparent text-[#00ff9d] shadow-[inset_2px_0_0_#00ff9d]" 
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <link.icon className={`h-5 w-5 transition-transform duration-300 ${isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(0,255,157,0.5)]' : 'group-hover:scale-110'}`} />
                <span className="font-medium text-sm tracking-wide">{link.name}</span>
                
                {/* Active glow effect */}
                {isActive && (
                   <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#00ff9d] rounded-r-full blur-[2px] opacity-70" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* User Profile Footer */}
        <div className="border-t border-white/5 p-4 bg-black/20 backdrop-blur-md">
          <div className="flex items-center gap-3 px-2 mb-4">
             <div className="relative">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-[#00ff9d] to-emerald-600 p-[1px]">
                  <div className="h-full w-full rounded-full bg-[#0a0a0a] flex items-center justify-center text-[#00ff9d] font-bold text-lg">
                    SA
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-[#00ff9d] border-2 border-[#0a0a0a] shadow-[0_0_8px_rgba(0,255,157,0.8)]" />
             </div>
             <div className="flex-1 min-w-0">
               <p className="text-sm font-bold text-white truncate">Super Admin</p>
               <p className="text-xs text-[#00ff9d] font-medium">Online</p>
             </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/70 hover:bg-red-500/10 hover:text-red-400 transition-colors border border-white/5 hover:border-red-500/20"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Space */}
      <div className="flex flex-1 flex-col overflow-hidden relative">
        
        {/* Background Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#00ff9d]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

        {/* Search / Admin Controls Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl px-8 py-4 z-10 shrink-0">
          
          {/* Main Search Bar */}
          <div className="w-full sm:max-w-xl relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
            <input 
              type="text" 
              placeholder="Search bookings, users, drivers..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#00ff9d]/50 focus:border-transparent transition-all"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6 shrink-0">
            <button className="relative text-white/60 hover:text-white transition-colors">
              <Bell className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white shadow-[0_0_8px_rgba(239,68,68,0.6)]">
                3
              </span>
            </button>

            <div className="flex items-center gap-3">
               <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#00ff9d] to-emerald-600 p-[1px]">
                  <div className="h-full w-full rounded-full bg-[#0a0a0a] flex items-center justify-center text-[#00ff9d] font-bold text-sm">
                    SA
                  </div>
               </div>
            </div>

            <div className="hidden sm:block h-8 w-px bg-white/10" />

            <button className="hidden sm:flex items-center gap-2 bg-[#00ff9d] hover:bg-[#00e68d] text-black px-4 py-2.5 rounded-xl font-bold text-sm transition-all transform hover:scale-105 shadow-[0_4px_14px_rgba(0,255,157,0.3)]">
              <Plus className="h-4 w-4" />
              Create Booking
            </button>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 relative z-0">
          {children}
        </main>
      </div>
    </div>
  );
}
