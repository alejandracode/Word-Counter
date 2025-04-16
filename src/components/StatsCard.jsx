import React from 'react';

function StatsCard({ icon, label, value }) {
  return (
    <div className="group bg-white p-8 rounded-xl shadow-md border-2 border-[#e5e7eb] 
      hover:border-[#4f46e5] hover:shadow-2xl transition-all duration-500 hover:scale-105 transform">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-2xl group-hover:animate-bounce">{icon}</span>
        <span className="text-[#374151] text-lg font-medium">{label}</span>
      </div>
      <p className="text-4xl font-bold text-[#111827]">{value}</p>
    </div>
  );
}

export default StatsCard;