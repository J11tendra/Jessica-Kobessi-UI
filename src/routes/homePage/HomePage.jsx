import "./HomePage.scss";

function HomePage() {
  return (
    <div className="homepage">
      <div className="img-container">
        <div className="hero-text">
          <div className="text-container">
            <span>VFX / Graphics head</span>
            <h1>
              Jessica
              <br />
              Kobessi
            </h1>
          </div>
          <div className="stats-container">
            <div className="stats">
              <span>12</span>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <div className="stats">
              <span>820</span>
              <p>SATISFIED CLIENTS</p>
            </div>
            <div className="stats">
              <span>2200</span>
              <p>PROJECTS COMPLETED</p>
            </div>
            <div className="stats">
              <span>720</span>
              <p>EMPLOYEES WORLDWIDE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
