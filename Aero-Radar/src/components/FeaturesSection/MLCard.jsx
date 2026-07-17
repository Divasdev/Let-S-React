
export function MLCard() {
  return (
    <div
      className="max-w-fit shadow-lg bg-white rounded-3xl p-8 mt-8 mb-10 flex items-center gap-8"
    >
      <div>
        <LiveBroadcastBadge />
        <MLDesc />
      </div>
      <LateBarChart />
    </div>
  );
}

export function LiveBroadcastBadge() {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
        border border-yellow-500/30 bg-yellow-500/10 text-xs font-mono font-extrabold
        uppercase tracking-widest text-yellow-400"
    >
      ⚠️ MACHINE LEARNING
    </span>
  );
}

export function MLDesc() {
  return (
    <>
      <h1 className="font-extrabold text-2xl tracking-tighter mb-3">
        See why you're delayed.
      </h1>
      <p className="text-gray-600 font-medium text-sm">
        Airlines often keep delay info hidden.We track inbound aircraft 25 hours before your flight,so we can predict your departure time long before the airline notifies you.
      </p>
    </>
  );
}

export function LateBarChart() {
  return (
    <div
      className="bg-gray-100 rounded-3xl w-300 h-55 p-5 relative overflow-hidden"
    >
      {/* Background grid layer */}
      <div
        className="absolute inset-0 opacity-30 bg-[linear-gradient(#d1d5db_1px,transparent_1px),linear-gradient(90deg,#d1d5db_1px,transparent_1px)] bg-size:36px_36px"
      />
      <div className="flex justify-around text-gray-400 font-semibold text-xs relative z-10 pt-1">
        <span>00:00</span>
        <span>09:00</span>
        <span>10:00</span>
      </div>
      {/* Green Bar */}
      <div className="group absolute bottom-10 left-8">
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black text-white text-[10px] rounded-3xl px-3 py-2 whitespace-nowrap z-30 shadow-lg pointer-events-none">
          On Time
        </div>
        <div className="relative w-16 h-8 bg-green-200 border border-green-400 rounded-t-2xl z-10 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 cursor-pointer"></div>
      </div>
      <div className="group absolute bottom-10 left-30">
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black text-white text-[10px] rounded-3xl px-3 py-2 whitespace-nowrap z-30 shadow-lg pointer-events-none">
          Delayed
        </div>
        <div className="relative w-16 h-22 bg-orange-200 border border-orange-400 rounded-t-2xl z-10 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 cursor-pointer"></div>
      </div>
      <div className="group absolute bottom-10 left-52">
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black text-white text-[10px] rounded-3xl px-3 py-2 whitespace-nowrap z-30 shadow-lg pointer-events-none">
          Estimated
        </div>
        <div className="relative w-16 h-15 bg-blue-200 border border-blue-400 rounded-t-2xl z-10 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 cursor-pointer"></div>
      </div>

      <svg
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
        viewBox="0 0 320 220"
        fill="none"
      >
        <path
          d="M40 165 C90 165, 120 120, 160 105 S245 95, 285 125"
          stroke="#7DA9FF"
          strokeWidth="3"
          strokeDasharray="7 7"
          strokeLinecap="round"
          opacity="0.9"
        />
      </svg>

      <div className="absolute bottom-10 left-4 right-4 h-px bg-gray-300 z-10" />

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
        <span className="text-xs font-semibold text-gray-700">
          Late inbound aircraft
        </span>
      </div>
    </div>
  );
}