"use client";

import { useState } from "react";
import { Search, Filter, Plus, User, Phone, Star, Car, MoreVertical, CheckCircle2, XCircle, Clock } from "lucide-react";

export default function AdminDriversPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const drivers = [
    { id: "DRV-001", name: "Mahmoud Ali", phone: "+20 100 111 2222", vehicle: "Mercedes S-Class (EG-123)", status: "Active", rating: 4.9, trips: 1450 },
    { id: "DRV-002", name: "Kareem Said", phone: "+20 111 222 3333", vehicle: "BMW 7 Series (EG-456)", status: "Available", rating: 4.8, trips: 920 },
    { id: "DRV-003", name: "Omar Fathy", phone: "+20 122 333 4444", vehicle: "Mercedes V-Class (EG-789)", status: "Offline", rating: 4.7, trips: 650 },
    { id: "DRV-004", name: "Hassan Mostafa", phone: "+20 100 999 8888", vehicle: "Toyota Hiace (EG-999)", status: "Active", rating: 4.6, trips: 340 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Available": return "bg-[#00ff9d]/10 text-[#00ff9d] border-[#00ff9d]/20";
      case "Offline": return "bg-white/10 text-white/50 border-white/20";
      default: return "bg-white/10 text-white/70 border-white/20";
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Drivers Management</h1>
          <p className="text-sm font-medium text-white/50 mt-1">Manage driver fleets, ratings, and vehicle assignments.</p>
        </div>
        <button className="bg-[#00ff9d] hover:bg-[#00e68d] text-black px-5 py-2.5 rounded-xl font-bold text-sm transition-all transform hover:scale-105 shadow-[0_4px_14px_rgba(0,255,157,0.3)] flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Driver
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="bg-[#0a0a0a]/80 border border-white/5 rounded-2xl p-4 flex flex-col gap-2">
          <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Total Drivers</span>
          <span className="text-2xl font-black text-white">124</span>
        </div>
        <div className="bg-[#0a0a0a]/80 border border-white/5 rounded-2xl p-4 flex flex-col gap-2">
          <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Active</span>
          <span className="text-2xl font-black text-blue-400">42</span>
        </div>
        <div className="bg-[#0a0a0a]/80 border border-white/5 rounded-2xl p-4 flex flex-col gap-2">
          <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Available</span>
          <span className="text-2xl font-black text-[#00ff9d]">65</span>
        </div>
        <div className="bg-[#0a0a0a]/80 border border-white/5 rounded-2xl p-4 flex flex-col gap-2">
          <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Avg Rating</span>
          <span className="text-2xl font-black text-yellow-500">4.8</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
          <input 
            type="text" 
            placeholder="Search by Driver Name or Phone..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#00ff9d]/50 transition-all font-medium"
          />
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#0a0a0a]/80 backdrop-blur-md hover:bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white transition-colors h-full">
          <Filter className="h-4 w-4" />
          Filter
        </button>
      </div>

      <div className="rounded-2xl border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden shadow-2xl">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-black/40 border-b border-white/5">
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Driver Profile</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Vehicle Assignment</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Rating & Trips</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {drivers.map((driver, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <User className="h-5 w-5 text-white/50" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{driver.name}</p>
                        <p className="text-xs font-mono font-medium text-white/40">{driver.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm text-white/70 font-medium">
                      <Phone className="h-4 w-4 text-white/40" />
                      {driver.phone}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm font-bold text-white">
                      <Car className="h-4 w-4 text-[#00ff9d]" />
                      {driver.vehicle}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-1.5 text-sm font-bold text-yellow-500">
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        {driver.rating}
                      </div>
                      <div className="text-xs font-medium text-white/50">{driver.trips} Trips Completed</div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-2 w-max ${getStatusColor(driver.status)}`}>
                      {driver.status === 'Active' && <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />}
                      {driver.status === 'Available' && <CheckCircle2 className="h-3.5 w-3.5" />}
                      {driver.status === 'Offline' && <XCircle className="h-3.5 w-3.5" />}
                      {driver.status}
                    </span>
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
