"use client";

import { useState } from "react";
import { Search, Filter, DollarSign, Receipt, Building, Calendar, CheckCircle, Clock, AlertCircle, Download } from "lucide-react";

export default function AdminFinancePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const invoices = [
    { id: "INV-2026-001", company: "Vodafone Egypt", amount: "$12,500.00", date: "Mar 01, 2026", due: "Mar 15, 2026", status: "Paid" },
    { id: "INV-2026-002", company: "Vodafone Egypt", amount: "$8,250.00", date: "Mar 05, 2026", due: "Mar 20, 2026", status: "Pending" },
    { id: "INV-2026-003", company: "Orange Telecom", amount: "$4,100.00", date: "Feb 15, 2026", due: "Mar 01, 2026", status: "Overdue" },
    { id: "INV-2026-004", company: "WE Telecom", amount: "$2,850.00", date: "Mar 02, 2026", due: "Mar 17, 2026", status: "Pending" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid": return "bg-[#00ff9d]/10 text-[#00ff9d] border-[#00ff9d]/20";
      case "Pending": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Overdue": return "bg-red-500/10 text-red-500 border-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.2)]";
      default: return "bg-white/10 text-white/70 border-white/20";
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Finance & Invoices</h1>
          <p className="text-sm font-medium text-white/50 mt-1">Manage B2B billing, track revenue, and monitor payment statuses.</p>
        </div>
        <div className="flex gap-2">
           <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2">
             <Download className="h-4 w-4" /> Export Report
           </button>
           <button className="bg-[#00ff9d] hover:bg-[#00e68d] text-black px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-[0_4px_14px_rgba(0,255,157,0.3)]">
             Create Invoice
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         {[
           { label: "Total Revenue (MTD)", val: "$24,500.00", icon: DollarSign, color: "text-white" },
           { label: "Pending Payments", val: "$11,100.00", icon: Clock, color: "text-yellow-500" },
           { label: "Overdue Amounts", val: "$4,100.00", icon: AlertCircle, color: "text-red-500" },
           { label: "Paid This Month", val: "$342,850.00", icon: CheckCircle, color: "text-[#00ff9d]" },
         ].map((m, i) => (
            <div key={i} className="bg-[#0a0a0a]/80 border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
               <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:scale-110 transition-transform">
                  <m.icon className="w-32 h-32" />
               </div>
               <div className="flex items-center gap-3 mb-2">
                  <div className={`h-8 w-8 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 ${m.color}`}>
                     <m.icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-white/50 uppercase tracking-wider">{m.label}</span>
               </div>
               <span className={`text-3xl font-black ${m.color} drop-shadow-lg`}>{m.val}</span>
            </div>
         ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
          <input 
            type="text" 
            placeholder="Search by Invoice ID or Company Name..." 
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

      <div className="rounded-2xl border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden shadow-2xl flex-1">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-[#050505] border-b border-white/5">
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Invoice ID</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Company</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Dates</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {invoices.map((inv, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                       <Receipt className="h-5 w-5 text-white/30" />
                       <span className="font-mono text-sm font-bold text-[#00ff9d]">{inv.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                       <div className="h-8 w-8 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-white/50">
                          <Building className="h-4 w-4" />
                       </div>
                       <span className="font-bold text-white">{inv.company}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-lg font-black text-white tracking-tight">{inv.amount}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1.5 text-xs font-medium">
                       <div className="flex items-center gap-2 text-white/60">
                         <span className="w-10 opacity-50 uppercase font-bold tracking-wider text-[10px]">Issued</span> {inv.date}
                       </div>
                       <div className={`flex items-center gap-2 ${inv.status === 'Overdue' ? 'text-red-400 font-bold' : 'text-white/60'}`}>
                         <span className="w-10 opacity-50 uppercase font-bold tracking-wider text-[10px]">Due</span> {inv.due}
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1.5 rounded-lg border text-xs font-black uppercase tracking-wider flex items-center gap-2 w-max ${getStatusColor(inv.status)}`}>
                      {inv.status === 'Paid' && <CheckCircle className="h-3.5 w-3.5" />}
                      {inv.status === 'Pending' && <Clock className="h-3.5 w-3.5" />}
                      {inv.status === 'Overdue' && <AlertCircle className="h-3.5 w-3.5" />}
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                       {inv.status !== 'Paid' && (
                          <button className="px-3 py-1.5 bg-[#00ff9d]/10 text-[#00ff9d] hover:bg-[#00ff9d] hover:text-black rounded-lg text-xs font-black transition-colors border border-[#00ff9d]/20">
                            Mark Paid
                          </button>
                       )}
                       <button className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-lg text-xs font-bold transition-colors border border-white/10">
                         View
                       </button>
                    </div>
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
