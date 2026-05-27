


function StatCard({ title, value }) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <div className="stat-icon"></div>
        <span className="stat-title">{title}</span>
      </div>

      <h3 className="stat-value">{value}</h3>
    </div>
  );
}

export default StatCard;