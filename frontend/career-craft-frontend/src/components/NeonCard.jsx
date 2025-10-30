import { motion } from "framer-motion";

export default function NeonCard({ title, value, children }) {
  return (
    <motion.div
      initial={{ y: 6, opacity: 0.9 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="glass p-5 rounded-xl neon-outline"
    >
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm text-slate-300">{title}</h4>
          <div className="text-2xl font-bold text-white mt-2">{value}</div>
        </div>
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#345bff] to-[#8f48ff] flex items-center justify-center shadow-neon-md pulse">
          ✨
        </div>
      </div>
      {children && <div className="mt-4 text-slate-300">{children}</div>}
    </motion.div>
  );
}
