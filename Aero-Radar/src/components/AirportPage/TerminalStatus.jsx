export function TerminalStatus() {
  const flights = [
    { scheduled: "10:00", actual: "10:05", flight: "UA506", destination: "JFK", gate: "G93", status: "DEPARTED", statusColor: "success" },
    { scheduled: "10:30", actual: "11:15", flight: "DL402", destination: "LAX", gate: "T2", status: "DELAYED", statusColor: "warning", highlightActual: true },
    { scheduled: "11:00", actual: "11:00", flight: "AA88", destination: "LHR", gate: "A12", status: "BOARDING", statusColor: "primary" },
  ];

  const getStatusStyles = (color) => {
    switch (color) {
      case "success": return "bg-success/10 text-success border-success/20";
      case "warning": return "bg-warning/10 text-warning border-warning/20";
      case "primary": return "bg-primary/10 text-primary border-primary/20";
      default: return "bg-outline-variant/10 text-outline border-outline-variant/20";
    }
  };

  return (
    <section className="px-6 py-6 w-full mb-12">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <p className="font-mono text-[10px] font-bold tracking-[0.15em] text-outline-variant uppercase mb-4">
          LIVE TELEMETRY / TERMINAL STATUS
        </p>

        {/* Table Container */}
        <div className="w-full overflow-x-auto rounded-[var(--radius-card)] bg-white border border-outline-variant/30 shadow-sm">
          <table className="w-full text-left border-collapse min-w-[600px]">
            
            {/* Table Header */}
            <thead>
              <tr className="bg-surface-container border-b border-outline-variant/20">
                <th className="px-6 py-4 font-mono text-[10px] font-bold tracking-widest text-outline uppercase">Scheduled</th>
                <th className="px-6 py-4 font-mono text-[10px] font-bold tracking-widest text-outline uppercase">Actual</th>
                <th className="px-6 py-4 font-mono text-[10px] font-bold tracking-widest text-outline uppercase">Flight</th>
                <th className="px-6 py-4 font-mono text-[10px] font-bold tracking-widest text-outline uppercase">Destination</th>
                <th className="px-6 py-4 font-mono text-[10px] font-bold tracking-widest text-outline uppercase">Gate</th>
                <th className="px-6 py-4 font-mono text-[10px] font-bold tracking-widest text-outline uppercase">Status</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="font-mono text-sm font-medium text-charcoal divide-y divide-outline-variant/20">
              {flights.map((flight, i) => (
                <tr key={i} className="hover:bg-surface-tint/50 transition-colors">
                  <td className="px-6 py-5">{flight.scheduled}</td>
                  <td className={`px-6 py-5 ${flight.highlightActual ? "text-warning font-bold" : ""}`}>
                    {flight.actual}
                  </td>
                  <td className="px-6 py-5 font-bold">{flight.flight}</td>
                  <td className="px-6 py-5 font-sans font-medium">{flight.destination}</td>
                  <td className="px-6 py-5">{flight.gate}</td>
                  <td className="px-6 py-5">
                    <span className={`inline-block px-3 py-1 rounded-[var(--radius-pill)] border text-[10px] font-bold uppercase tracking-widest ${getStatusStyles(flight.statusColor)}`}>
                      {flight.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
