import "../styles/header.css";
import CarouselDiv from "./divCarousel";

function HeadBar() {
  return (
    <header>
      <div className="logo_block header_floats">
        <div className="top-logo_block">
          <h1 id="heading1">JNTUK</h1>
          <h1 id="heading2">Instant Notes</h1>
        </div>
        <div className="bottom-logo_block">
          <p>Contains Study-Materials for B.E./B.Tech students of JNTU-Kakinada affliated Colleges</p>
        </div>
      </div>

      <div className="info_block header_floats">
        <div className="top-info_block">
          <div className="carousel-container">
            <CarouselDiv />
          </div>
        </div>
        <div className="bottom-info_block">
          <ul>
            <li>
              <a className="nav_btns" href="/">
                Browse All
              </a>
            </li>
            <li>
              <a className="nav_btns" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="nav_btns" href="/contribute">
                Contribute
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default HeadBar;
