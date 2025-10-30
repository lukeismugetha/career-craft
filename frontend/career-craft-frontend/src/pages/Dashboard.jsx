import NeonCard from "../components/NeonCard";

export default function Dashboard(){
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NeonCard title="Active Users" value="124" />
        <NeonCard title="AI Requests Today" value="38" />
        <NeonCard title="Saved Careers" value="19" />
      </div>

      <div className="bg-[linear-gradient(90deg,#071021,rgba(255,255,255,0.02))] p-6 rounded-xl neon-outline">
        <h3 className="text-lg font-semibold text-slate-100 mb-3">Recent Activity</h3>
        <p className="text-slate-300">User John asked about Data Science recommendations.</p>
      </div>
    </div>
  );
}
