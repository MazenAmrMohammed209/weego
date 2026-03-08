"use client";

import { useState } from "react";
import { Search, Map as MapIcon, CarFront, Battery, Wifi, ShieldCheck, MapPin, Clock, AlertTriangle } from "lucide-react";

export default function AdminFleetTrackerPage() {
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [searchQuery, setSearchQuery] = useState("");

  const fleet = [
    { id: "V-100", model: "Mercedes S-Class 2024", plate: "EG-123", driver: "Mahmoud Ali", status: "On Trip", location: "Cairo International Airport", battery: 100, speed: "45 km/h", lastComm: "Just now" },
    { id: "V-101", model: "BMW 7 Series 2023", plate: "EG-456", driver: "Kareem Said", status: "Available", location: "Zamalek VIP Parking", battery: 85, speed: "0 km/h", lastComm: "2 mins ago" },
    { id: "V-102", model: "Mercedes V-Class 2024", plate: "EG-789", driver: "Omar Fathy", status: "Offline", location: "Maintenance Depot", battery: 20, speed: "0 km/h", lastComm: "2 hours ago" },
    { id: "V-103", model: "Toyota Hiace 2022", plate: "EG-999", driver: "Hassan Mostafa", status: "On Trip", location: "Suez Road", battery: 100, speed: "95 km/h", lastComm: "Just now" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "On Trip": return "text-[#00ff9d] bg-[#00ff9d]/10 border-[#00ff9d]/20";
      case "Available": return "text-blue-400 bg-blue-500/10 border-blue-500/20";
      case "Offline": return "text-white/40 bg-white/5 border-white/10";
      default: return "text-white bg-white/10 border-white/20";
    }
  };

  return (
    <div className="space-y-8 pb-12 flex flex-col">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shrink-0">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Fleet Tracker</h1>
          <p className="text-sm font-medium text-white/50 mt-1">Real-time telemetry and vehicle status monitoring.</p>
        </div>
        <div className="flex bg-black/40 border border-white/10 rounded-xl p-1">
          <button 
            onClick={() => setViewMode("list")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === 'list' ? 'bg-white/10 text-white shadow-sm' : 'text-white/40 hover:text-white'}`}
          >
            <CarFront className="h-4 w-4" /> List View
          </button>
          <button 
            onClick={() => setViewMode("map")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === 'map' ? 'bg-white/10 text-white shadow-sm' : 'text-white/40 hover:text-white'}`}
          >
            <MapIcon className="h-4 w-4" /> Map View
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 shrink-0">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
          <input 
            type="text" 
            placeholder="Search by Vehicle ID, Model, or Plate..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#00ff9d]/50 transition-all font-medium"
          />
        </div>
        <div className="flex items-center gap-4 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-xl px-4 text-white">
           <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00ff9d]" />
              <span className="text-xs font-bold">2 Online</span>
           </div>
           <div className="w-px h-4 bg-white/20" />
           <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-xs font-bold">1 Idle</span>
           </div>
           <div className="w-px h-4 bg-white/20" />
           <div className="flex items-center gap-2 text-white/40">
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="text-xs font-bold">1 Offline</span>
           </div>
        </div>
      </div>

      {viewMode === "list" ? (
        <div className="rounded-2xl border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden shadow-2xl flex-1 custom-scrollbar">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead className="sticky top-0 z-10">
              <tr className="bg-[#050505] border-b border-white/5">
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Vehicle</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Telemetry</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Current Location</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Connection</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {fleet.map((v, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-16 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#00ff9d]/10 transition-colors">
                        <CarFront className="h-6 w-6 text-white/50 group-hover:text-[#00ff9d]" />
                      </div>
                      <div>
                        <p className="text-sm font-black text-white">{v.id} • {v.model}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="px-2 py-0.5 bg-white/10 rounded text-[10px] font-mono font-bold text-white uppercase">{v.plate}</span>
                          <span className="text-xs text-white/40 font-medium">{v.driver}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-2">
                       <div className="flex items-center gap-2 text-xs font-bold text-white/70">
                         <div className="h-3 w-10 bg-white/10 p-0.5 rounded-sm">
                           <div className={`h-full rounded-[1px] ${v.battery < 30 ? 'bg-red-500' : 'bg-[#00ff9d]'}`} style={{ width: `${v.battery}%` }} />
                         </div>
                         {v.battery}% Battery
                       </div>
                       <div className="flex items-center gap-2 text-xs font-bold text-white/70">
                         <MapIcon className="h-3 w-3 text-blue-400" />
                         {v.speed}
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 max-w-[200px]">
                       <MapPin className="h-4 w-4 text-red-400 shrink-0" />
                       <span className="text-sm font-semibold text-white truncate">{v.location}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1 text-xs">
                       <span className={`font-bold flex items-center gap-1 ${v.status === 'Offline' ? 'text-red-400' : 'text-[#00ff9d]'}`}>
                         {v.status === 'Offline' ? <AlertTriangle className="h-3 w-3" /> : <Wifi className="h-3 w-3" />}
                         {v.status === 'Offline' ? 'Disconnected' : 'GPS Active'}
                       </span>
                       <span className="text-white/40 flex items-center gap-1">
                         <Clock className="h-3 w-3" /> {v.lastComm}
                       </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1.5 rounded-lg border text-xs font-black flex justify-center items-center gap-2 w-28 ${getStatusColor(v.status)}`}>
                      {v.status === 'On Trip' && <span className="h-1.5 w-1.5 bg-[#00ff9d] rounded-full animate-pulse" />}
                      {v.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-4 py-2 rounded-xl text-xs font-bold transition-all">
                      Diagnostics
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex-1 rounded-2xl bg-[#0f1115] border border-white/5 relative overflow-hidden flex items-center justify-center">
            {/* Map Placeholder for Map View */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="text-center relative z-10">
               <MapIcon className="h-16 w-16 text-white/20 mx-auto mb-4" />
               <p className="text-white/40 font-bold tracking-widest uppercase">Interactive Map Loading</p>
               <p className="text-white/20 text-xs mt-2">Premium map integration placeholder based on Mapbox</p>
            </div>
            {/* UI overlay */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
               <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl w-64 text-white">
                  <h3 className="text-sm font-black mb-1">V-100 • S-Class</h3>
                  <p className="text-xs text-[#00ff9d] font-bold mb-3">On Trip, 45 km/h</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-white/50">Driver</span>
                      <span className="font-bold">Mahmoud Ali</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/50">Fuel/Battery</span>
                      <span className="font-bold">100%</span>
                    </div>
                  </div>
               </div>
            </div>
        </div>
      )}

    </div>
  );
}
