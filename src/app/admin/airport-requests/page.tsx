"use client";

import { useState } from "react";
import { Search, Filter, PlaneLanding, Users, Briefcase, FileText, CheckCircle, XCircle, Clock, MapPin, Download } from "lucide-react";

export default function AdminAirportRequestsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const requests = [
    { id: "AR-1042", passenger: "Michael Scott", flight: "MS 985", airport: "Cairo Int (CAI)", time: "14:30 Today", pax: 2, luggage: 2, ticket: true, status: "Pending" },
    { id: "AR-1041", passenger: "Jim Halpert", flight: "BA 154", airport: "Sphinx Int (SPX)", time: "18:45 Today", pax: 1, luggage: 1, ticket: true, status: "Approved" },
    { id: "AR-1040", passenger: "Dwight Schrute", flight: "EK 923", airport: "Cairo Int (CAI)", time: "09:15 Tomorrow", pax: 4, luggage: 5, ticket: false, status: "Information Required" },
    { id: "AR-1039", passenger: "Pam Beesly", flight: "AF 508", airport: "Cairo Int (CAI)", time: "22:00 Today", pax: 2, luggage: 3, ticket: true, status: "Assigned" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Approved": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Assigned": return "bg-[#00ff9d]/10 text-[#00ff9d] border-[#00ff9d]/20";
      case "Information Required": return "bg-red-500/10 text-red-500 border-red-500/20";
      default: return "bg-white/10 text-white border-white/20";
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Airport Pickup Requests</h1>
          <p className="text-sm font-medium text-white/50 mt-1">Review and manage inbound flight transfers from the website form.</p>
        </div>
        <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-5 py-2.5 rounded-xl font-bold text-sm transition-all hidden">
          Export Requests
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
          <input 
            type="text" 
            placeholder="Search by Passenger, Flight Number, or Airport..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#00ff9d]/50 transition-all font-medium"
          />
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#0a0a0a]/80 backdrop-blur-md hover:bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white transition-colors h-full">
          <Filter className="h-4 w-4" />
          Status Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-white">
        {/* Metric Cards for Airport Requests */}
        {[
           { label: "New Requests Today", val: 12, col: "text-white" },
           { label: "Pending Approval", val: 5, col: "text-yellow-500" },
           { label: "Missing Tickets", val: 2, col: "text-red-400" },
           { label: "Fully Assigned", val: 24, col: "text-[#00ff9d]" },
        ].map((m, i) => (
           <div key={i} className="bg-[#0a0a0a]/80 border border-white/5 rounded-2xl p-4 flex flex-col gap-2">
              <span className="text-xs font-bold text-white/50 uppercase tracking-wider">{m.label}</span>
              <span className={`text-2xl font-black ${m.col}`}>{m.val}</span>
           </div>
        ))}
      </div>

      <div className="rounded-2xl border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden shadow-2xl">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-black/40 border-b border-white/5">
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Passenger</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Flight Details</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Requirements</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider text-center">Ticket</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {requests.map((req, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-5">
                    <div>
                      <p className="text-sm font-bold text-white">{req.passenger}</p>
                      <p className="text-xs font-mono font-medium text-white/40 mt-1">{req.id}</p>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#00ff9d]">
                        <PlaneLanding className="h-4 w-4" />
                        Flight {req.flight}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-white/60">
                        <MapPin className="h-3.5 w-3.5 text-white/40" />
                        {req.airport}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-white/60">
                        <Clock className="h-3.5 w-3.5 text-white/40" />
                        Arrival: {req.time}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                        <Users className="h-3.5 w-3.5 text-white/50" />
                        <span className="text-xs font-bold text-white">{req.pax}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                        <Briefcase className="h-3.5 w-3.5 text-white/50" />
                        <span className="text-xs font-bold text-white">{req.luggage}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    {req.ticket ? (
                      <button className="h-10 w-10 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors mx-auto flex items-center justify-center group/btn relative">
                        <FileText className="h-4 w-4" />
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity">View</span>
                      </button>
                    ) : (
                      <span className="text-xs font-bold text-red-500/50 flex flex-col items-center gap-1">
                        <XCircle className="h-4 w-4" />
                        Missing
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-2 w-max ${getStatusColor(req.status)}`}>
                      {req.status === "Pending" && <Clock className="h-3.5 w-3.5" />}
                      {req.status === "Approved" && <CheckCircle className="h-3.5 w-3.5" />}
                      {req.status === "Assigned" && <CheckCircle className="h-3.5 w-3.5" />}
                      {req.status === "Information Required" && <XCircle className="h-3.5 w-3.5" />}
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right relative">
                    {req.status === "Pending" && (
                      <button className="bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/20 hover:bg-[#00ff9d] hover:text-black px-4 py-2 rounded-xl text-xs font-black transition-all">
                        Approve
                      </button>
                    )}
                    {(req.status === "Approved" || req.status === "Assigned") && (
                       <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-4 py-2 rounded-xl text-xs font-bold transition-all">
                         Assign Resource
                       </button>
                    )}
                    {req.status === "Information Required" && (
                       <button className="bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-white px-4 py-2 rounded-xl text-xs font-black transition-all">
                         Send Reminder
                       </button>
                    )}
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
