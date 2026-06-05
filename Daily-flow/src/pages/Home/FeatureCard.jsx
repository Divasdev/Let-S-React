
import './FeatureGrid.css';

export function FeatureCard({ icon, badge, title, description, children, className = "", footerLink }) {
    return (
        <div className={`feature-card ${className}`}>
            <div className="feature-card-content">
                <div className="feature-card-top">
                   <div className="feature-icon">{icon}</div>
                   {badge && <div className="feature-badge">{badge}</div>}
                </div>
                <div className="feature-card-text">
                    <h3 className="feature-title">{title}</h3>
                    <p className="feature-description">{description}</p>
                </div>
                {footerLink && (
                    <a href="#" className="feature-link">
                        {footerLink} <span>→</span>
                    </a>
                )}
            </div>
            {/* 
              This is the secret sauce: 
              By conditionally rendering 'children', we let each card pass in 
              its own unique interactive elements (the charts, lists, or dummy inputs) 
              while keeping the title/icon/wrapper perfectly uniform.
            */}
            {children && (
                <div className="feature-card-graphic">
                    {children}
                </div>
            )}
        </div>
    );
}
