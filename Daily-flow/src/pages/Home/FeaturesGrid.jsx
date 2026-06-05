
import { FeatureCard } from './FeatureCard';
import './FeatureGrid.css';

export function FeaturesGrid() {
  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Master Your Workflow</h2>
        <p>Everything you need to turn chaos into calm momentum, engineered into a seamless interface.</p>
      </div>
      
      <div className="features-grid">
        {/* Card 1: Daily Focus */}
        <FeatureCard
          className="feature-focus"
          title="Daily Focus"
          description="Eliminate noise. Our daily canvas highlights only what matters right now, reducing cognitive load during deep work."
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
              <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
              <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
              <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          }
        >
          {/* Custom children for the focus graphic */}
          <div className="focus-graphic">
            <div className="focus-bar"></div>
            <div className="focus-bar short"></div>
          </div>
        </FeatureCard>

        {/* Card 2: Priority Management */}
        <FeatureCard
          className="feature-priority"
          title="Priority Management"
          description="Not all tasks are created equal. Organize effortlessly with smart tagging, fluid drag-and-drop, and automated urgency highlighting."
          badge="Intelligent"
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="14" y2="12"></line>
              <line x1="4" y1="18" x2="8" y2="18"></line>
            </svg>
          }
        >
          {/* Custom children for the priority graphic */}
          <div className="priority-graphic">
            <div className="priority-item critical">
              <span className="dot red"></span> Critical Launch
            </div>
            <div className="priority-item routine">
              <span className="dot green"></span> Routine Review
            </div>
          </div>
        </FeatureCard>

        {/* Card 3: Progress Tracking */}
        <FeatureCard
          className="feature-progress"
          title="Progress Tracking"
          description="Visualize your momentum. Beautiful, actionable insights that show your velocity over time without overwhelming you with data."
          footerLink="View Analytics Demo"
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
          }
        >
          {/* Custom children for the progress graphic */}
          <div className="chart-container">
            <div className="chart-bar h-20"></div>
            <div className="chart-bar h-40"></div>
            <div className="chart-bar h-30"></div>
            <div className="chart-bar h-60 highlight-cyan"></div>
            <div className="chart-bar h-80 highlight-purple"></div>
            <div className="chart-bar h-50"></div>
          </div>
        </FeatureCard>
      </div>
    </section>
  );
}
