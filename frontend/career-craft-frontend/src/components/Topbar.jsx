import DarkToggle from "./DarkToggle";
import { BellIcon } from "@heroicons/react/24/outline";

export default function Topbar(){
  return (
    <header className="flex items-center justify-between p-4 border-b border-[rgba(255,255,255,0.03)] bg-transparent">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold text-slate-100">Welcome back</h2>
        <div className="text-sm text-slate-400">Ask AI for career ideas</div>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 rounded-md hover:bg-[rgba(255,255,255,0.02)]">
          <BellIcon className="h-5 w-5 text-slate-300" />
        </button>
        <DarkToggle />
        <div className="ml-2 px-3 py-1 rounded-md neon-outline text-slate-100">Luke</div>
      </div>
    </header>
  );
}
