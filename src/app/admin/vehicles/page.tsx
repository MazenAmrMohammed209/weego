"use client";

import { useState } from "react";
import { Search, Filter, Plus, CarFront, Users, Hash, MapPin, SearchCheck, MoreVertical, CheckCircle2, ShieldAlert, Wrench, Briefcase } from "lucide-react";

export default function AdminVehiclesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const vehicles = [
    { id: "V-100", model: "Mercedes S-Class 2024", plate: "EG-123", driver: "Mahmoud Ali", caps: 3, luggage: 3, status: "Active", cond: "Excellent" },
    { id: "V-101", model: "BMW 7 Series 2023", plate: "EG-456", driver: "Kareem Said", caps: 3, luggage: 3, status: "Available", cond: "Good" },
    { id: "V-102", model: "Mercedes V-Class 2024", plate: "EG-789", driver: "Omar Fathy", caps: 7, luggage: 7, status: "Maintenance", cond: "Service Required" },
    { id: "V-103", model: "Toyota Hiace 2022", plate: "EG-999", driver: "Hassan Mostafa", caps: 14, luggage: 10, status: "Active", cond: "Good" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Available": return "bg-[#00ff9d]/10 text-[#00ff9d] border-[#00ff9d]/20";
      case "Maintenance": return "bg-red-500/10 text-red-500 border-red-500/20";
      default: return "bg-white/10 text-white/70 border-white/20";
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Vehicles Management</h1>
          <p className="text-sm font-medium text-white/50 mt-1">Manage fleet registry, capacity, and maintenance status.</p>
        </div>
        <button className="bg-[#00ff9d] hover:bg-[#00e68d] text-black px-5 py-2.5 rounded-xl font-bold text-sm transition-all transform hover:scale-105 shadow-[0_4px_14px_rgba(0,255,157,0.3)] flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Vehicle
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
          <input 
            type="text" 
            placeholder="Search by Vehicle Model, or License Plate..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#00ff9d]/50 transition-all font-medium"
          />
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#0a0a0a]/80 backdrop-blur-md hover:bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white transition-colors h-full">
          <Filter className="h-4 w-4" />
          Class Filters
        </button>
      </div>

      <div className="rounded-2xl border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden shadow-2xl">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-black/40 border-b border-white/5">
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Vehicle ID & Model</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Registration</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Assigned Driver</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Capacity</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {vehicles.map((v, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-16 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <CarFront className="h-6 w-6 text-white/50" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white max-w-[200px] truncate">{v.model}</p>
                        <p className="text-xs font-mono font-medium text-white/40">{v.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 font-mono text-xs font-black bg-white/10 border border-white/20 text-white rounded-md tracking-wider">
                      {v.plate}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-bold text-white">{v.driver}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                        <Users className="h-3.5 w-3.5 text-white/40" /> {v.caps} PAX
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                        <Briefcase className="h-3.5 w-3.5 text-white/40" /> {v.luggage} Bags
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                     <div className="flex flex-col gap-2">
                        <span className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-2 w-max ${getStatusColor(v.status)}`}>
                          {v.status === 'Active' && <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />}
                          {v.status === 'Available' && <CheckCircle2 className="h-3.5 w-3.5" />}
                          {v.status === 'Maintenance' && <Wrench className="h-3.5 w-3.5" />}
                          {v.status}
                        </span>
                        {v.cond === 'Service Required' && (
                           <span className="flex items-center gap-1 text-[10px] font-bold text-red-400">
                              <ShieldAlert className="h-3 w-3" /> Service Required
                           </span>
                        )}
                     </div>
                  </td>
                  <td className="px-6 py-5 text-right relative">
                    <button className="p-2 hover:bg-white/10 rounded-xl text-white/50 hover:text-white transition-colors">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
