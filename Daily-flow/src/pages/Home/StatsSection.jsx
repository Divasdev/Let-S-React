import './StatsSection.css';

const statsData = [
   {
      id: 1,
      value: "10k+",
      label: "TASKS MANAGED DAILY"
   },
   {
      id: 2,
      value: "92%",
      label: "PRODUCTIVITY BOOST"
   },
   {
      id: 3,
      value: "4.9",
      label: "AVERAGE USER RATING"
   }
];

export function StatsSection() {
   return (
      <section className="stats-section">
         <div className="stats-container">
            {statsData.map((stat, index) => (
               <div key={stat.id} className="stat-item">
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                  
                  {/* Optional divider between items on desktop */}
                  {index < statsData.length - 1 && (
                     <div className="stat-divider"></div>
                  )}
               </div>
            ))}
         </div>
      </section>
   );
}
