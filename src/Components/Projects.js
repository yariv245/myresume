import moviestoreIMG from '../img/portfolio_pic1.jpg';
import GetFitnessIMG from '../img/portfolio_pic2.jpg';
import JustAskIMG from '../img/portfolio_pic3.jpg';
import CoopShotIMG from '../img/portfolio_pic4.jpg';
// import FlightGearIMG from '../img/FlightGear.jpg';
import FlightGearIMG from '../img/portfolio_pic5.jpg';
function Projects() {
  return (
    <section id="Portfolio" className="content">
      {/* Container */}
      <div className="container portfolio_title">
        {/* Title */}
        <div className="section-title">
          <h2>Projects</h2>
          <h6></h6>
          {/* <h6>
            Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci
            ipsum
          </h6> */}
        </div>
        {/*/Title */}
      </div>
      {/* Container */}
      <div className="portfolio-top" />

      <div className="portfolio">
        {/* Portfolio Wrapper */}
        <div
          className="isotope fadeInLeft animated wow grid"
          style={{ position: 'relative', overflow: 'hidden', height: '480px' }}
          id="portfolio_wrapper"
        >
          {/* Portfolio Item */}
          <figure
            className="portfolio-item one-four isotope-item effect-oscar"
            style={{
              position: 'absolute',
              left: '0px',
              top: '0px',
              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)',
              width: '337px',
              opacity: 1,
            }}
          >
            <div className="portfolio_img">
              <img src={moviestoreIMG} alt="Portfolio 1" />{' '}
            </div>
            <figcaption>
              <div>
                <a
                  href="https://github.com/yariv245/MovieStore"
                  className="fancybox"
                >
                  <h2>MovieStore</h2>
                  <p>MovieStore is ASP.Net Core MVC application</p>
                </a>
              </div>
            </figcaption>
          </figure>
          {/*/Portfolio Item */}
          {/* Portfolio Item*/}
          <figure
            style={{
              position: 'absolute',
              left: '0px',
              top: '0px',
              transform: 'translate3d(674px, 0px, 0px) scale3d(1, 1, 1)',
              width: '337px',
              opacity: 1,
            }}
            className="portfolio-item one-four isotope-item effect-oscar"
          >
            <div className="portfolio_img">
              {' '}
              <img src={GetFitnessIMG} alt="Portfolio 1" />{' '}
            </div>
            <figcaption>
              <div>
                <a href={GetFitnessIMG} className="fancybox">
                  <h2>Coming soon..</h2>
                  <p>GetFitness is Android application</p>
                </a>
              </div>
            </figcaption>
          </figure>
          {/*/Portfolio Item */}
          {/* Portfolio Item */}
          <figure
            style={{
              position: 'absolute',
              left: '0px',
              top: '0px',
              transform: 'translate3d(337px, 240px, 0px) scale3d(1, 1, 1)',
              width: '337px',
              opacity: 1,
            }}
            className="portfolio-item one-four  isotope-item effect-oscar"
          >
            <div className="portfolio_img">
              {' '}
              <img src={JustAskIMG} alt="Portfolio 1" />{' '}
            </div>
            <figcaption>
              <div>
                <a href={JustAskIMG} className="fancybox">
                  <h2>Coming soon..</h2>
                  <p>JustAsk is React,NodeJS web application</p>
                </a>
              </div>
            </figcaption>
          </figure>
          {/*/Portfolio Item*/}
          {/* Portfolio Item*/}
          <figure
            style={{
              position: 'absolute',
              left: '0px',
              top: '0px',
              transform: 'translate3d(674px, 240px, 0px) scale3d(1, 1, 1)',
              width: '337px',
              opacity: 1,
            }}
            className="portfolio-item one-four isotope-item effect-oscar"
          >
            <div className="portfolio_img">
              {' '}
              <img src={CoopShotIMG} alt="Portfolio 1" />{' '}
            </div>
            <figcaption>
              <div>
                <a href={CoopShotIMG} className="fancybox">
                  <h2>Coming soon..</h2>
                  <p>CoopShot is B.sc Final project</p>
                </a>
              </div>
            </figcaption>
          </figure>
          {/* Portfolio Item */}
          {/* Portfolio Item */}
          <figure
            className="portfolio-item one-four isotope-item effect-oscar"
            style={{
              position: 'absolute',
              left: '0px',
              top: '0px',
              transform: 'translate3d(337px, 0px, 0px) scale3d(1, 1, 1)',
              width: '337px',
              opacity: 1,
            }}
          >
            <div className="portfolio_img">
              <img src={FlightGearIMG} alt="Portfolio 1" />{' '}
            </div>
            <figcaption>
              <div>
                <a
                  href="https://github.com/yariv245/FlightGear"
                  className="fancybox"
                >
                  <h2>FlightGear Simulator</h2>
                  <p>MVVM | Java | JavaFX</p>
                </a>
              </div>
            </figcaption>
          </figure>
          {/*/Portfolio Item */}
        </div>
        {/*/Portfolio Wrapper */}
      </div>
      {/*/Portfolio Filters */}
      <div className="portfolio_btm" />
      <div id="project_container">
        <div className="clear" />
        <div id="project_data" />
      </div>
    </section>
  );
}

export default Projects;
