"use client";

import { useState } from "react";
import { Search, Filter, MoreVertical, MapPin, Calendar, Clock, Car, User, CheckCircle2, XCircle } from "lucide-react";

export default function AdminBookingsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const bookings = [
    { id: "BKG-9921", passenger: "Ahmed Hassan", phone: "+20 100 123 4567", pickup: "Cairo International Airport", dropoff: "Four Seasons Hotel, Nile Plaza", date: "2026-03-08", time: "14:30", vehicle: "Mercedes S-Class", driver: "Mahmoud Ali", status: "Active" },
    { id: "BKG-9922", passenger: "Sarah Williams", phone: "+44 7700 900077", pickup: "Maadi, Road 9", dropoff: "Smart Village", date: "2026-03-08", time: "16:00", vehicle: "Pending", driver: "Pending", status: "Pending" },
    { id: "BKG-9920", passenger: "Omar Fathy", phone: "+20 111 222 3333", pickup: "New Cairo, 5th Settlement", dropoff: "Cairo International Airport", date: "2026-03-08", time: "09:00", vehicle: "Mercedes V-Class", driver: "Hassan Mostafa", status: "Completed" },
    { id: "BKG-9919", passenger: "Vodafone Corp", phone: "B2B Account", pickup: "Zamalek", dropoff: "Zayed City", date: "2026-03-07", time: "18:00", vehicle: "BMW 7 Series", driver: "Kareem Said", status: "Cancelled" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Pending": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Completed": return "bg-[#00ff9d]/10 text-[#00ff9d] border-[#00ff9d]/20";
      case "Cancelled": return "bg-red-500/10 text-red-400 border-red-500/20";
      default: return "bg-white/10 text-white/70 border-white/20";
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Bookings Management</h1>
          <p className="text-sm font-medium text-white/50 mt-1">View, edit, and manage all passenger trips.</p>
        </div>
        <button className="bg-[#00ff9d] hover:bg-[#00e68d] text-black px-5 py-2.5 rounded-xl font-bold text-sm transition-all transform hover:scale-105 shadow-[0_4px_14px_rgba(0,255,157,0.3)]">
          + Create Booking
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
          <input 
            type="text" 
            placeholder="Search by Booking ID, Passenger name, or Phone..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#00ff9d]/50 transition-all font-medium"
          />
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#0a0a0a]/80 backdrop-blur-md hover:bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white transition-colors h-full">
          <Filter className="h-4 w-4" />
          Filters
        </button>
      </div>

      {/* Bookings Table */}
      <div className="rounded-2xl border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden shadow-2xl">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-black/40 border-b border-white/5">
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Booking ID</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Passenger</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Route Details</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Schedule</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Assignment</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {bookings.map((booking, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-5">
                    <span className="font-mono text-sm font-bold text-white/80 group-hover:text-[#00ff9d] transition-colors">{booking.id}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <User className="h-4 w-4 text-white/50" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{booking.passenger}</p>
                        <p className="text-xs font-medium text-white/40">{booking.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex flex-col items-center gap-1">
                         <div className="h-2 w-2 rounded-full bg-[#00ff9d]" />
                         <div className="h-4 w-px bg-white/20" />
                         <MapPin className="h-3 w-3 text-red-500" />
                      </div>
                      <div className="flex flex-col gap-2">
                         <p className="text-xs font-semibold text-white truncate max-w-[200px]">{booking.pickup}</p>
                         <p className="text-xs font-semibold text-white truncate max-w-[200px]">{booking.dropoff}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-xs font-medium text-white/70">
                        <Calendar className="h-3.5 w-3.5 text-white/40" />
                        {booking.date}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-white/70">
                        <Clock className="h-3.5 w-3.5 text-white/40" />
                        {booking.time}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    {booking.status === "Pending" ? (
                      <button className="px-3 py-1.5 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 border border-yellow-500/20 rounded-lg text-xs font-bold transition-colors">
                        Assign Resources
                      </button>
                    ) : (
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-xs font-medium text-white">
                          <Car className="h-3.5 w-3.5 text-[#00ff9d]" />
                          {booking.vehicle}
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium text-white/60">
                          <User className="h-3.5 w-3.5 text-white/40" />
                          {booking.driver}
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-2 w-max ${getStatusColor(booking.status)}`}>
                      {booking.status === "Active" && <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />}
                      {booking.status === "Completed" && <CheckCircle2 className="h-3.5 w-3.5" />}
                      {booking.status === "Cancelled" && <XCircle className="h-3.5 w-3.5" />}
                      {booking.status === "Pending" && <Clock className="h-3.5 w-3.5" />}
                      {booking.status}
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
        
        {/* Pagination Placeholder */}
        <div className="p-4 border-t border-white/5 bg-black/20 flex items-center justify-between text-sm">
          <span className="text-white/40 font-medium">Showing 1 to 4 of 1,245 entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded-lg border border-white/10 text-white/40 hover:text-white hover:bg-white/5 disabled:opacity-50 font-bold" disabled>Prev</button>
            <button className="px-3 py-1 rounded-lg bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/20 font-bold">1</button>
            <button className="px-3 py-1 rounded-lg border border-white/10 text-white/60 hover:text-white hover:bg-white/5 font-bold">2</button>
            <button className="px-3 py-1 rounded-lg border border-white/10 text-white/60 hover:text-white hover:bg-white/5 font-bold">3</button>
            <button className="px-3 py-1 rounded-lg border border-white/10 text-white/60 hover:text-white hover:bg-white/5 font-bold">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
