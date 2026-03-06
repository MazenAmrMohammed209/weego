import { DollarSign, Users, CalendarCheck, Bus } from "lucide-react";

export const metadata = {
  title: "Admin Dashboard | WEEGO",
  description: "WEEGO Admin Dashboard",
};

const stats = [
  { title: "Total Revenue", value: "$124,500", icon: DollarSign, trend: "+12.5%" },
  { title: "Active Users", value: "8,234", icon: Users, trend: "+4.2%" },
  { title: "New Bookings", value: "142", icon: CalendarCheck, trend: "+18.1%" },
  { title: "Trips Today", value: "37", icon: Bus, trend: "-2.4%" },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl border border-border bg-background p-6 shadow-sm flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-foreground/70">{stat.title}</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                <stat.icon className="h-5 w-5 text-accent" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-primary dark:text-primary-foreground">{stat.value}</span>
              <span className={`text-sm font-semibold ${stat.trend.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Placeholder */}
      <div className="rounded-2xl border border-border bg-background shadow-sm overflow-hidden">
        <div className="border-b border-border p-6 bg-background">
          <h2 className="text-lg font-semibold text-foreground">Recent Bookings</h2>
        </div>
        <div className="p-6 overflow-x-auto">
          <table className="w-full text-left text-sm text-foreground/70">
             <thead className="text-xs text-foreground uppercase bg-bg-light dark:bg-bg-dark border-b border-border">
                <tr>
                   <th className="px-6 py-3">Booking ID</th>
                   <th className="px-6 py-3">Customer</th>
                   <th className="px-6 py-3">Destination</th>
                   <th className="px-6 py-3">Status</th>
                   <th className="px-6 py-3">Amount</th>
                </tr>
             </thead>
             <tbody>
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr key={item} className="bg-background border-b border-border last:border-none hover:bg-bg-light dark:hover:bg-bg-dark transition-colors">
                     <td className="px-6 py-4 font-medium text-primary dark:text-primary-foreground">#BL-{9840 + item}</td>
                     <td className="px-6 py-4">Customer Name {item}</td>
                     <td className="px-6 py-4">Paris, France</td>
                     <td className="px-6 py-4">
                       <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs font-semibold">
                         Confirmed
                       </span>
                     </td>
                     <td className="px-6 py-4">$1,250.00</td>
                  </tr>
                ))}
             </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
