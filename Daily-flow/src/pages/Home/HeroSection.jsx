import './HeroSection.css';
import screenImg from '../../assets/screen.png';

export function HeroSection() {
   return (
      <section className="hero-section">
         <div className="hero-wrapper">
            <div className="hero-cta">
               <div className="hero-version-info">
                  <span className="dot cyan"></span>
                  DailyFlow v2.0 is live
               </div>
               
               <h1 className="hero-header">
                  Small steps today.<br/>
                  Big wins <span className="hero-highlight-text">tomorrow.</span>
               </h1>
 
               <p className="hero-description">
                  Plan tasks, track progress, stay focused, and build momentum every single day with our sophisticated productivity engine designed for deep work.
               </p>
               
               <div className="hero-btn">
                  <button className="cta-btn">
                     Start Planning →
                  </button>
                  <button className="cta-explore">
                     Explore Tools 🧭
                  </button>
               </div>
            </div>

            <div className="hero-banner">
               <div className="glow-backdrop"></div>
               <div className="floating-badge">
                  <div className="badge-icon-wrapper">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4edea3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                     </svg>
                  </div>
                  <div className="badge-text">
                     <span className="badge-title">Task Completed</span>
                     <span className="badge-subtitle">Deep work session</span>
                  </div>
               </div>
               <img src={screenImg} alt="DailyFlow Dashboard Interface" className="hero-image" />
            </div>
         </div>
      </section>
   )
}