"use client";

import { useState } from "react";
import { Search, Filter, Mail, Building, Phone, Clock, FileText, CheckCircle2, ChevronRight, User } from "lucide-react";

export default function AdminCRMPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const leads = [
    { id: "L-042", company: "TechNova Solutions", contact: "Ahmed Youssef", email: "a.youssef@technova.com", status: "New Lead", date: "Today, 10:30 AM", notes: "Requested 15 premium vehicles for upcoming event." },
    { id: "L-041", company: "Global Logistics", contact: "Sarah Menshawy", email: "s.menshawy@glog.com", status: "In Progress", date: "Yesterday", notes: "Negotiating standard corporate rates." },
    { id: "L-040", company: "Alexandria Imports", contact: "Khaled Saqr", email: "ksaqr@aleximports.eg", status: "Scheduled Call", date: "Mar 05", notes: "Call scheduled for Mar 10." },
    { id: "L-039", company: "Future Schools", contact: "Nadia Helmy", email: "admin@futureschools.edu", status: "Converted", date: "Mar 01", notes: "Signed 1-year contract." },
  ];

  const getStatusStyle = (status: string) => {
    switch(status) {
       case "New Lead": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
       case "In Progress": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
       case "Scheduled Call": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
       case "Converted": return "bg-[#00ff9d]/10 text-[#00ff9d] border-[#00ff9d]/20";
       default: return "bg-white/10 text-white border-white/20";
    }
  }

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Sales Leads CRM</h1>
          <p className="text-sm font-medium text-white/50 mt-1">Track and manage incoming corporate partnership requests.</p>
        </div>
        <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm">
          Export Leads
        </button>
      </div>

      {/* CRM Pipeline Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         {[
           { label: "New Leads", val: 12, col: "text-blue-400" },
           { label: "Active Deals", val: 8, col: "text-yellow-500" },
           { label: "Proposals Sent", val: 5, col: "text-purple-400" },
           { label: "Converted (30d)", val: 14, col: "text-[#00ff9d]" },
         ].map((stat, i) => (
            <div key={i} className="bg-[#0a0a0a]/80 border border-white/5 rounded-2xl p-4 flex items-end justify-between">
               <div>
                  <h4 className="text-xs font-bold text-white/50 uppercase tracking-wider mb-1">{stat.label}</h4>
                  <span className={`text-2xl font-black ${stat.col}`}>{stat.val}</span>
               </div>
            </div>
         ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
          <input 
            type="text" 
            placeholder="Search leads by company or contact name..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#00ff9d]/50 transition-all font-medium"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Leads List */}
         <div className="lg:col-span-2 rounded-2xl border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden shadow-2xl">
           <table className="w-full text-left border-collapse whitespace-nowrap">
             <thead className="bg-[#000000]">
                <tr>
                   <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Company / Lead</th>
                   <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Contact</th>
                   <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Status</th>
                   <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Date</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-white/5">
                {leads.map((lead, i) => (
                   <tr key={i} className="hover:bg-white/[0.05] transition-colors cursor-pointer group">
                      <td className="px-6 py-4">
                         <div className="flex items-center gap-3">
                            <div className="h-10 w-10 flex flex-col items-center justify-center bg-white/5 rounded-xl border border-white/10 shrink-0 group-hover:bg-[#00ff9d]/10 transition-colors">
                               <Building className="h-5 w-5 text-white/60 group-hover:text-[#00ff9d]" />
                            </div>
                            <div>
                               <p className="text-sm font-bold text-white transition-colors">{lead.company}</p>
                               <p className="text-[10px] font-bold tracking-widest text-[#00ff9d]">{lead.id}</p>
                            </div>
                         </div>
                      </td>
                      <td className="px-6 py-4">
                         <div className="flex flex-col gap-1">
                            <span className="text-sm font-bold text-white/80 flex items-center gap-2"><User className="h-3.5 w-3.5 text-white/40"/> {lead.contact}</span>
                            <span className="text-xs text-white/50 flex items-center gap-2"><Mail className="h-3 w-3 text-white/30"/> {lead.email}</span>
                         </div>
                      </td>
                      <td className="px-6 py-4">
                         <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border ${getStatusStyle(lead.status)}`}>
                            {lead.status}
                         </span>
                      </td>
                      <td className="px-6 py-4">
                         <span className="text-xs font-medium text-white/50">{lead.date}</span>
                      </td>
                   </tr>
                ))}
             </tbody>
           </table>
         </div>

         {/* Lead Inspect Panel (Placeholder for active lead) */}
         <div className="rounded-2xl border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden shadow-2xl p-6 flex flex-col opacity-80">
            <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2">
               <FileText className="h-5 w-5 text-[#00ff9d]" /> Lead Details
            </h3>
            
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="h-16 w-16 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 border border-white/10 rounded-2xl flex items-center justify-center">
                   <Building className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                   <h2 className="text-xl font-bold text-white">{leads[0].company}</h2>
                   <p className="text-sm text-[#00ff9d] font-bold">{leads[0].id}</p>
                </div>
            </div>

            <div className="space-y-4 flex-1">
               <div>
                  <label className="text-xs font-bold text-white/40 uppercase tracking-wider block mb-1">Contact Person</label>
                  <p className="text-sm text-white font-medium flex items-center gap-2"><User className="h-4 w-4 text-white/30"/> {leads[0].contact}</p>
               </div>
               <div>
                  <label className="text-xs font-bold text-white/40 uppercase tracking-wider block mb-1">Email</label>
                  <p className="text-sm text-white font-medium flex items-center gap-2"><Mail className="h-4 w-4 text-white/30"/> {leads[0].email}</p>
               </div>
               <div>
                  <label className="text-xs font-bold text-white/40 uppercase tracking-wider block mb-1">Status</label>
                  <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border inline-block ${getStatusStyle(leads[0].status)}`}>
                    {leads[0].status}
                  </span>
               </div>
               <div>
                  <label className="text-xs font-bold text-white/40 uppercase tracking-wider block mb-1">Notes</label>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                     <p className="text-sm text-white/80 italic">"{leads[0].notes}"</p>
                  </div>
               </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 flex gap-2">
               <button className="flex-1 py-3 bg-[#00ff9d] hover:bg-[#00e68d] text-black font-black text-sm rounded-xl transition-all shadow-sm">
                 Update Status
               </button>
               <button className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all">
                 <Mail className="h-4 w-4" />
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
