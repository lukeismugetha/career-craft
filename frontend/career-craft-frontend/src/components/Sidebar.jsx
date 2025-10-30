import { Link, useLocation } from "react-router-dom";
import { HomeIcon, BoltIcon, UsersIcon, ChartBarIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

const MenuItem = ({to, icon: Icon, label}) => {
  const loc = useLocation();
  const active = loc.pathname === to;
  return (
    <Link to={to} className={`flex items-center gap-3 px-4 py-3 rounded-md ${active ? "bg-[rgba(52,91,255,0.08)] text-cyber-400" : "text-slate-300 hover:bg-[rgba(255,255,255,0.02)]"}`}>
      <Icon className="h-5 w-5" />
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export default function Sidebar({ adminOnly=false }) {
  const role = localStorage.getItem("role");
  return (
    <aside className="w-64 bg-transparent p-6 border-r border-[rgba(255,255,255,0.02)] hidden md:block">
      <div className="mb-8">
        <div className="text-2xl font-extrabold text-cyber-300">CareerCraft</div>
        <div className="text-xs text-slate-400">AI Career Advisor</div>
      </div>

      <nav className="space-y-1">
        <MenuItem to="/dashboard" icon={HomeIcon} label="Dashboard" />
        <MenuItem to="/advisor" icon={BoltIcon} label="Career Advisor" />
        <MenuItem to="/profile" icon={UsersIcon} label="Profile" />
        <MenuItem to="/users" icon={ChartBarIcon} label="Users" />
        { (adminOnly || role === "admin") && <MenuItem to="/admin" icon={Cog6ToothIcon} label="Admin" /> }
      </nav>
    </aside>
  );
}
