"use client";

import { useState } from "react";
import { Search, Filter, HelpCircle, User, Calendar, MessageSquare, AlertTriangle, ArrowRight } from "lucide-react";

export default function AdminTicketsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const tickets = [
    { id: "T-8921", customer: "Amr Diab", subject: "Left item in the vehicle", status: "Open", assigned: "Unassigned", date: "2 hrs ago", prior: "High" },
    { id: "T-8920", customer: "Tamer Hosny", subject: "Driver was late by 15 mins", status: "In Progress", assigned: "Ahmed Manager", date: "5 hrs ago", prior: "Medium" },
    { id: "T-8919", customer: "Vodafone Corp", subject: "Discrepancy in Invoice INV-001", status: "Open", assigned: "Sara Finance", date: "1 day ago", prior: "High" },
    { id: "T-8918", customer: "Sherine", subject: "Refund request for cancelled trip", status: "Closed", assigned: "System", date: "2 days ago", prior: "Low" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-red-500/10 text-red-500 border-red-500/20";
      case "In Progress": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Closed": return "bg-white/5 text-white/40 border-white/10";
      default: return "";
    }
  };

  const getPriorityBadge = (p: string) => {
     switch (p) {
        case "High": return "text-red-500";
        case "Medium": return "text-yellow-500";
        case "Low": return "text-blue-400";
        default: return "";
     }
  }

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Support Tickets</h1>
          <p className="text-sm font-medium text-white/50 mt-1">Manage customer issues, complaints, and corporate inquiries.</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
          <input 
            type="text" 
            placeholder="Search by Ticket ID, Customer, or Subject..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#00ff9d]/50 transition-all font-medium"
          />
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#0a0a0a]/80 backdrop-blur-md hover:bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white transition-colors h-full">
          <Filter className="h-4 w-4" />
          Priority
        </button>
      </div>

      <div className="rounded-2xl border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden shadow-2xl flex-1">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-[#000000] border-b border-white/5">
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider w-16">ID</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Customer & Subject</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Assignment</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {tickets.map((t, idx) => (
                <tr key={idx} className={`hover:bg-white/[0.02] transition-colors group ${t.status === 'Closed' ? 'opacity-50' : ''}`}>
                  <td className="px-6 py-5">
                     <span className="font-mono text-xs font-bold text-white/50">{t.id}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1">
                       <p className="text-sm font-bold text-white max-w-sm truncate text-wrap flex items-center gap-2">
                         <MessageSquare className="h-3 w-3 text-[#00ff9d] shrink-0" /> {t.subject}
                       </p>
                       <p className="text-xs text-white/50 flex items-center gap-2">
                         <User className="h-3 w-3" /> {t.customer} • <Calendar className="h-3 w-3 ml-2" /> {t.date}
                       </p>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                     <span className={`text-[10px] font-black uppercase tracking-wider flex items-center gap-1 ${getPriorityBadge(t.prior)}`}>
                        {t.prior === 'High' && <AlertTriangle className="h-3 w-3" />}
                        {t.prior}
                     </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-2.5 py-1 rounded-md border text-[10px] font-black uppercase tracking-wider inline-block ${getStatusColor(t.status)}`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 border-l border-white/5 bg-white/[0.01]">
                     <span className={`text-xs font-bold flex items-center gap-2 ${t.assigned === 'Unassigned' ? 'text-white/30 italic' : 'text-white/80'}`}>
                        <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                          <User className="h-3 w-3 text-white/50" />
                        </div>
                        {t.assigned}
                     </span>
                  </td>
                  <td className="px-6 py-5 text-right relative bg-white/[0.01]">
                     <button className="h-8 w-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 hover:border-white/30 flex items-center justify-center transition-all ml-auto">
                        <ArrowRight className="h-4 w-4 text-white" />
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
