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
      <div className="skills-container">
        <div className="txt-row-container">
          <img src="public/moniter-skill.png" alt="" />
          <div className="txt-row">
            <h3>UI/UX Design</h3>
            <p>At in proin consequat ut cursus venenatis sapien.</p>
          </div>
        </div>
        <div className="txt-row-container">
          <img src="public/calendar-skill.png" alt="" />
          <div className="txt-row">
            <h3>Illustration</h3>
            <p>At in proin consequat ut cursus venenatis sapien.</p>
          </div>
        </div>
        <div className="txt-row-container">
          <img src="public/laptop-skill.png" alt="" />
          <div className="txt-row">
            <h3>Graphic Design</h3>
            <p>At in proin consequat ut cursus venenatis sapien.</p>
          </div>
        </div>
      </div>
      <div className="info-container">
        <div className="info-wrapper">
          <h3 className="head">EDUCATION</h3>
          <div className="txt-para">
            <span>1998 - 2004</span>
            <h4>Bachelors in Engineering in Information Technology</h4>
            <p>Harvard School of Science and Management</p>
          </div>
          <div className="txt-para">
            <span>2004 - 2006</span>
            <h4>Masters in Data Analysis</h4>
            <p>Harvard School of Science and Management</p>
          </div>
        </div>
        <div className="info-wrapper">
          <h3 className="head">EXPERIENCES</h3>
          <div className="txt-para">
            <span>1998 - 2004</span>
            <h4>Bachelors in Engineering in Information Technology</h4>
            <p>Harvard School of Science and Management</p>
          </div>
          <div className="txt-para">
            <span>2004 - 2006</span>
            <h4>Masters in Data Analysis</h4>
            <p>Harvard School of Science and Management</p>
          </div>
        </div>
        <div className="info-wrapper">
          <h3 className="head">INTERESTS</h3>
          <div className="txt-para">
            <span>1998 - 2004</span>
            <h4>Bachelors in Engineering in Information Technology</h4>
            <p>Harvard School of Science and Management</p>
          </div>
          <div className="txt-para">
            <span>2004 - 2006</span>
            <h4>Masters in Data Analysis</h4>
            <p>Harvard School of Science and Management</p>
          </div>
        </div>
      </div>
      <div className="ref-container">
        <div className="img-wrapper">
          <div className="ref-wrapper">
            <h3 className="head">REFERENCES</h3>
            <div className="txt-para">
              <span>1998 - 2004</span>
              <h4>Dr. Stephen H. King</h4>
              <p>Harvard School of Science and Management</p>
            </div>
            <div className="txt-para">
              <span>1998 - 2004</span>
              <h4>Dr. David Howard</h4>
              <p>Harvard School of Science and Management</p>
            </div>
          </div>
        </div>
      </div>
      <div className="quote-container">
        <div className="quote-wrapper">
          <h3>
            As a passionate life coach and entrepreneur, I'm dedicated to
            guiding you on your journey to success and fulfillment.
          </h3>
          <div className="quote-tab-wrapper">
            <div className="quote-tab active">PHOTOGRAPY</div>
            <div className="quote-tab">ILLUSTRATIONS</div>
            <div className="quote-tab">GRAPHIC DESIGNS</div>
            <div className="quote-tab">BRANDING</div>
          </div>
        </div>
        <div className="img-wrapper">
          <img src="src/assets/gallery-1.svg" alt="" />
          <img src="src/assets/gallery-2.svg" alt="" />
          <img src="src/assets/gallery-3.svg" alt="" />
          <img src="src/assets/gallery-4.svg" alt="" />
          <img src="src/assets/gallery-5.svg" alt="" />
          <img src="src/assets/gallery-6.svg" alt="" />
        </div>
        <div className="work-btn">VIEW ALL WORKS</div>
      </div>
      <div className="testimonial-container">
        <h2 className="head-container">TESTIMONIALS</h2>
        <div className="wrapper">
          <div className="card-wrapper">
            <p>
              “A pellen tesque pretium feugiat vel morbi sagittis lorem habi
              tasse cursus. Suspen dise tempus oncu enim pellen tesque est in
              neque, elit habi mattis.”
            </p>
            <h5>Kelly Garcia</h5>
            <span>CEO at Liami</span>
          </div>
          <div className="card-wrapper">
            <p>
              “A pellen tesque pretium feugiat vel morbi sagittis lorem habi
              tasse cursus. Suspen dise tempus oncu enim pellen tesque est in
              neque, elit habi mattis.”
            </p>
            <h5>Kelly Garcia</h5>
            <span>CEO at Liami</span>
          </div>
          <div className="card-wrapper">
            <p>
              “A pellen tesque pretium feugiat vel morbi sagittis lorem habi
              tasse cursus. Suspen dise tempus oncu enim pellen tesque est in
              neque, elit habi mattis.”
            </p>
            <h5>Kelly Garcia</h5>
            <span>CEO at Liami</span>
          </div>
          <div className="slider-indicator">
            <span className="active"></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
