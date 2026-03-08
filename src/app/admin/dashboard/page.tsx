"use client";

import { useState } from "react";
import { 
  DollarSign, CalendarDays, Navigation, CarFront, PlaneLanding, Briefcase,
  TrendingUp, TrendingDown, MapPin, CheckCircle2, AlertCircle, Clock,
  MoreVertical, ChevronDown, Filter, User
} from "lucide-react";

export default function AdminDashboardPage() {
  const [revenueFilter, setRevenueFilter] = useState("1M");
  const [mapFilter, setMapFilter] = useState("All");

  const statCards = [
    { title: "Total Revenue", value: "$324,500", icon: DollarSign, trend: "+12%", isPositive: true },
    { title: "Total Bookings", value: "8,234", icon: CalendarDays, trend: "+8%", isPositive: true },
    { title: "Active Trips", value: "42", icon: Navigation, trend: "+14%", isPositive: true },
    { title: "Active Vehicles", value: "86", icon: CarFront, trend: "-2%", isPositive: false },
    { title: "Airport Pickups", value: "128", icon: PlaneLanding, trend: "+24%", isPositive: true },
    { title: "Corporate Clients", value: "45", icon: Briefcase, trend: "+5%", isPositive: true },
  ];

  return (
    <div className="space-y-8 pb-12">
      
      {/* SECTION 1: ANALYTICS CARDS */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {statCards.map((stat, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0a]/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[#00ff9d]/10 hover:border-white/10"
          >
            {/* Glow on hover */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#00ff9d]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/70 group-hover:text-[#00ff9d] transition-colors">
                <stat.icon className="h-5 w-5" />
              </div>
              <span className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${stat.isPositive ? "text-[#00ff9d] bg-[#00ff9d]/10" : "text-red-400 bg-red-400/10"}`}>
                {stat.isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {stat.trend}
              </span>
            </div>
            
            <div className="relative z-10">
              <p className="text-sm font-medium text-white/50 mb-1">{stat.title}</p>
              <h3 className="text-2xl font-black text-white">{stat.value}</h3>
            </div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN (2/3) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* SECTION 2: REVENUE ANALYTICS */}
          <section className="rounded-3xl border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ff9d]/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 relative z-10">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">Revenue Analytics</h2>
                <p className="text-sm text-white/50">B2B vs B2C Revenue Streams</p>
              </div>
              
              <div className="flex items-center gap-2 bg-black/40 p-1 rounded-xl border border-white/5">
                {["7D", "1M", "3M", "1Y"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setRevenueFilter(filter)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      revenueFilter === filter 
                        ? "bg-[#00ff9d] text-black shadow-[0_0_10px_rgba(0,255,157,0.3)]" 
                        : "text-white/50 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom SVG Line Chart Mockup */}
            <div className="h-[300px] w-full relative z-10 flex items-end">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 300">
                <defs>
                   <linearGradient id="glowDirect" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#00ff9d" stopOpacity="0.3"/>
                     <stop offset="100%" stopColor="#00ff9d" stopOpacity="0"/>
                   </linearGradient>
                   <linearGradient id="glowCorporate" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
                     <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
                   </linearGradient>
                </defs>
                
                {/* Grid Lines */}
                {[0, 1, 2, 3, 4].map(i => (
                  <line key={i} x1="0" y1={i * 60 + 30} x2="800" y2={i * 60 + 30} stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4"/>
                ))}
                
                {/* B2C Revenue Line (Neon Green) */}
                <path className="animate-[dash_3s_ease-out_forwards]" d="M0,250 C100,240 200,180 300,190 C400,200 500,120 600,100 C700,80 800,40 800,40" fill="none" stroke="#00ff9d" strokeWidth="4" strokeLinecap="round" style={{ filter: 'drop-shadow(0px 4px 6px rgba(0, 255, 157, 0.4))' }} />
                <path d="M0,250 C100,240 200,180 300,190 C400,200 500,120 600,100 C700,80 800,40 800,40 L800,300 L0,300 Z" fill="url(#glowDirect)" className="animate-[fade_2s_ease-in]" />

                {/* B2B Revenue Line (Blue) */}
                <path className="animate-[dash_4s_ease-out_forwards]" d="M0,280 C150,260 250,220 350,240 C450,260 550,180 650,150 C750,120 800,110 800,110" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" style={{ filter: 'drop-shadow(0px 4px 6px rgba(59, 130, 246, 0.4))' }} />
                <path d="M0,280 C150,260 250,220 350,240 C450,260 550,180 650,150 C750,120 800,110 800,110 L800,300 L0,300 Z" fill="url(#glowCorporate)" className="animate-[fade_2s_ease-in]" />
              </svg>

              {/* Chart Legend */}
              <div className="absolute top-0 right-0 flex gap-4">
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-[#00ff9d] shadow-[0_0_8px_#00ff9d]" />
                   <span className="text-xs text-white/60">Direct (B2C)</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                   <span className="text-xs text-white/60">Corporate (B2B)</span>
                 </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: ACTIVE TRIPS */}
          <section className="rounded-3xl border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden shadow-xl">
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">Active Trips</h2>
                <p className="text-sm text-white/50">Currently ongoing bookings and dispatch</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium transition-colors">
                <Filter className="h-4 w-4" />
                Filter
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black/40 border-b border-white/5">
                    <th className="px-6 py-4 text-xs font-bold text-white/40 uppercase tracking-wider">Trip ID</th>
                    <th className="px-6 py-4 text-xs font-bold text-white/40 uppercase tracking-wider">Passenger</th>
                    <th className="px-6 py-4 text-xs font-bold text-white/40 uppercase tracking-wider">Driver / Vehicle</th>
                    <th className="px-6 py-4 text-xs font-bold text-white/40 uppercase tracking-wider">Route</th>
                    <th className="px-6 py-4 text-xs font-bold text-white/40 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-white/40 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {/* Mock Trip Row 1 */}
                  <tr className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-6 py-5 font-mono text-sm text-[#00ff9d]">#TRP-4921</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center"><User className="h-4 w-4 text-white/60" /></div>
                        <div>
                          <p className="text-sm font-bold text-white">Ahmed Hassan</p>
                          <p className="text-xs text-white/40">+20 100 123 4567</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm font-semibold text-white">Mahmoud Ali</p>
                      <p className="text-xs text-white/40">S-Class • <span className="uppercase">AB 1234</span></p>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col items-center gap-1">
                           <div className="h-2 w-2 rounded-full bg-white/20" />
                           <div className="h-4 w-px bg-white/10" />
                           <MapPin className="h-3 w-3 text-red-400" />
                        </div>
                        <div className="flex flex-col gap-2">
                           <p className="text-xs text-white/80 line-clamp-1">Cairo Int. Airport</p>
                           <p className="text-xs text-white/80 line-clamp-1">Four Seasons Hotel</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold flex items-center gap-2 w-max">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                        On Route
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right relative">
                      <button className="p-2 hover:bg-white/10 rounded-lg text-white/50 hover:text-white transition-colors">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                   {/* Mock Trip Row 2 */}
                   <tr className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-6 py-5 font-mono text-sm text-white/60">#TRP-4922</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center"><User className="h-4 w-4 text-white/60" /></div>
                        <div>
                          <p className="text-sm font-bold text-white">Sarah Williams</p>
                          <p className="text-xs text-white/40">Corporate (Voda)</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <button className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium text-white/70 transition-colors">
                        Assign Driver
                      </button>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col items-center gap-1">
                           <div className="h-2 w-2 rounded-full bg-white/20" />
                           <div className="h-4 w-px bg-white/10" />
                           <MapPin className="h-3 w-3 text-red-400" />
                        </div>
                        <div className="flex flex-col gap-2">
                           <p className="text-xs text-white/80 line-clamp-1">Maadi</p>
                           <p className="text-xs text-white/80 line-clamp-1">Smart Village</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 text-xs font-bold flex items-center gap-2 w-max">
                        <Clock className="h-3 w-3" />
                        Pending Assignment
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right relative">
                      <button className="p-2 hover:bg-white/10 rounded-lg text-white/50 hover:text-white transition-colors">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-white/5 bg-black/20 text-center">
               <button className="text-sm font-bold text-[#00ff9d] hover:text-[#00e68d] transition-colors">
                 View All Active Trips →
               </button>
            </div>
          </section>

        </div>

        {/* RIGHT COLUMN (1/3) */}
        <div className="space-y-8">
          
          {/* SECTION 3: LIVE FLEET MAP */}
          <section className="rounded-3xl border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md p-6 shadow-xl flex flex-col h-[400px]">
             <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">Live Fleet</h2>
                <div className="flex items-center gap-1">
                   {["All", "Active", "Free"].map(f => (
                     <button 
                       key={f} 
                       onClick={() => setMapFilter(f)}
                       className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${mapFilter === f ? 'bg-white/20 text-white' : 'text-white/40 hover:text-white'}`}
                     >
                       {f}
                     </button>
                   ))}
                </div>
             </div>
             
             {/* Map Placeholder Element */}
             <div className="flex-1 rounded-2xl bg-[#0f1115] relative overflow-hidden group border border-white/5">
                {/* Simulated geographic map grid lines */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:20px_20px]" />
                
                {/* Mock Map Markers */}
                <div className="absolute top-[30%] left-[40%] flex gap-2">
                   <div className="relative group/marker cursor-pointer">
                      <div className="h-5 w-5 bg-[#00ff9d] rounded-full border-2 border-[#0a0a0a] shadow-[0_0_15px_#00ff9d] flex items-center justify-center relative z-10 animate-bounce">
                        <div className="h-1.5 w-1.5 bg-black rounded-full" />
                      </div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl p-3 w-40 opacity-0 group-hover/marker:opacity-100 transition-opacity pointer-events-none z-20 shadow-2xl">
                         <p className="text-xs font-bold text-white">AB-1234 (S-Class)</p>
                         <p className="text-[10px] text-[#00ff9d]">On Trip • Mahmoud Ali</p>
                      </div>
                   </div>
                </div>

                <div className="absolute top-[60%] left-[70%] flex gap-2">
                   <div className="relative group/marker cursor-pointer">
                      <div className="h-5 w-5 bg-white/40 rounded-full border-2 border-[#0a0a0a] shadow-lg flex items-center justify-center relative z-10">
                        <div className="h-1.5 w-1.5 bg-black rounded-full" />
                      </div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl p-3 w-40 opacity-0 group-hover/marker:opacity-100 transition-opacity pointer-events-none z-20 shadow-2xl">
                         <p className="text-xs font-bold text-white">XYZ-987 (V-Class)</p>
                         <p className="text-[10px] text-white/50">Available • Idle</p>
                      </div>
                   </div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 text-[10px] text-white/60">
                   Map View: Cairo, Egypt
                </div>
             </div>
          </section>

          {/* SECTION 5: POPULAR DESTINATIONS */}
          <section className="rounded-3xl border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md p-6 shadow-xl">
            <h2 className="text-xl font-bold text-white mb-6">Popular Destinations</h2>
            <div className="space-y-6">
              {[
                { name: "Cairo Int. Airport", count: 420, percent: 85 },
                { name: "New Alamein City", count: 180, percent: 45 },
                { name: "Sokhna Resorts", count: 150, percent: 35 },
                { name: "Sharm El-Sheikh", count: 90, percent: 20 },
              ].map((dest, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-white/80">{dest.name}</span>
                    <span className="font-bold text-[#00ff9d]">{dest.count} trips</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                     <div 
                       className="h-full bg-gradient-to-r from-emerald-500 to-[#00ff9d] rounded-full relative"
                       style={{ width: `${dest.percent}%` }}
                       aria-label="Progress"
                     >
                       <div className="absolute inset-0 bg-white/20 w-1/3 skew-x-12 animate-[shimmer_2s_infinite]" />
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 6: RECENT ACTIVITY */}
          <section className="rounded-3xl border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md p-6 shadow-xl">
             <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Recent Activity</h2>
             </div>
             <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#00ff9d]/50 before:via-white/10 before:to-transparent pl-12 md:pl-0">
                
                {[
                  { title: "New Booking Created", desc: "Corporate account: Vodafone", time: "10 min ago", icon: CalendarDays, color: "bg-blue-500 text-white" },
                  { title: "Driver Assigned", desc: "Mahmoud Ali to Trip #4921", time: "25 min ago", icon: User, color: "bg-[#00ff9d] text-black" },
                  { title: "Trip Completed", desc: "S-Class to Cairo Airport", time: "1 hr ago", icon: CheckCircle2, color: "bg-emerald-600 text-white" },
                  { title: "Invoice Paid", desc: "Amount: $1,250.00", time: "3 hrs ago", icon: DollarSign, color: "bg-white/10 text-white" },
                ].map((event, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group border-white/5 pb-8 last:pb-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0a0a0a] bg-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm absolute left-0 md:left-1/2 -ml-5 md:ml-0 z-10 transition-transform group-hover:scale-110">
                       <div className={`h-6 w-6 rounded-full flex items-center justify-center ${event.color}`}>
                         <event.icon className="h-3 w-3" />
                       </div>
                    </div>
                    <div className="w-full md:w-[calc(50%-2.5rem)] rounded-xl border border-white/5 bg-black/40 p-4 shadow-sm backdrop-blur-sm transition-all hover:bg-white/5 hover:border-white/10">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#00ff9d]">{event.time}</span>
                        <h4 className="text-sm font-bold text-white">{event.title}</h4>
                        <p className="text-xs text-white/50">{event.desc}</p>
                      </div>
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
