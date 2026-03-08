"use client";

import { useState } from "react";
import { Search, Plus, ShieldCheck, Mail, Settings2, MoreHorizontal, UserCog, UserCheck, XCircle } from "lucide-react";

export default function AdminStaffPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const staff = [
    { id: "STF-001", name: "Super Admin User", email: "admin@weegotravel.com", role: "Super Admin", perms: "All Access", status: "Active" },
    { id: "STF-002", name: "Ahmed Manager", email: "ahmed.m@weegotravel.com", role: "Operations Manager", perms: "Bookings, Fleet, Dispatch", status: "Active" },
    { id: "STF-003", name: "Sara Finance", email: "sara.f@weegotravel.com", role: "Finance Manager", perms: "Finance, Invoices", status: "Active" },
    { id: "STF-004", name: "Ali Dispatcher", email: "ali.d@weegotravel.com", role: "Dispatcher", perms: "Dispatch, Fleet", status: "Inactive" },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Staff & Roles</h1>
          <p className="text-sm font-medium text-white/50 mt-1">Manage system access, roles, and administrative permissions.</p>
        </div>
        <button className="bg-[#00ff9d] hover:bg-[#00e68d] text-black px-5 py-2.5 rounded-xl font-bold text-sm transition-all transform hover:scale-105 shadow-[0_4px_14px_rgba(0,255,157,0.3)] flex items-center gap-2">
          <Plus className="h-4 w-4" /> Invite Staff
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
          <input 
            type="text" 
            placeholder="Search by Name or Email..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#00ff9d]/50 transition-all font-medium"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden shadow-2xl">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-black/40 border-b border-white/5">
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Permissions Target</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {staff.map((user, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-[#00ff9d] to-emerald-600 p-[1px] flex items-center justify-center shrink-0">
                         <div className="h-full w-full bg-[#0a0a0a] rounded-full flex items-center justify-center text-[#00ff9d] font-bold text-sm">
                            {user.name.split(' ').map(n=>n[0]).join('').substring(0,2)}
                         </div>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{user.name}</p>
                        <p className="text-xs font-mono font-medium text-white/40">{user.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm text-white/70 font-medium">
                      <Mail className="h-4 w-4 text-white/40" />
                      {user.email}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                       <ShieldCheck className={`h-4 w-4 ${user.role === 'Super Admin' ? 'text-[#00ff9d]' : 'text-blue-400'}`} />
                       <span className={`text-xs font-black px-2.5 py-1 rounded-md border ${user.role === 'Super Admin' ? 'bg-[#00ff9d]/10 text-[#00ff9d] border-[#00ff9d]/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}>
                         {user.role}
                       </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-xs font-bold text-white/60">
                      <Settings2 className="h-4 w-4 text-white/30" />
                      {user.perms}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-2 w-max ${user.status === 'Active' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'}`}>
                      {user.status === 'Active' ? <UserCheck className="h-3.5 w-3.5" /> : <XCircle className="h-3.5 w-3.5" />}
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right relative">
                    <button className="p-2 hover:bg-white/10 rounded-xl text-white/50 hover:text-white transition-colors">
                      <MoreHorizontal className="h-5 w-5" />
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
