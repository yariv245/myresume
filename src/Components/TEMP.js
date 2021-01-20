import moviestoreIMG from '../img/moviestore.png';
import GetFitnessIMG from '../img/GetFitness.jpg';
import JustAskIMG from '../img/comingsoon.png';
import CoopShotIMG from '../img/finalsoon.jpeg';
function Projects() {
  return (
    <section id="Portfolio" className="content">
      {/* Container */}
      <div className="container portfolio_title">
        {/* Title */}
        <div className="section-title">
          <h2>Projects</h2>
          <h6>
            Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci
            ipsum
          </h6>
        </div>
        {/*/Title */}
      </div>
      {/* Container */}
      <div className="portfolio-top" />
      {/* Portfolio Filters */}
      <div className="portfolio">
        <div id="filters" className="sixteen columns">
          <ul className="clearfix">
            <li>
              <a id="all" href="#" data-filter="*" className="active">
                <h5>All</h5>
              </a>
            </li>
            <li>
              <a className href="#" data-filter=".prototype">
                <h5>Prototype</h5>
              </a>
            </li>
            <li>
              <a className href="#" data-filter=".design">
                <h5>Design</h5>
              </a>
            </li>
            <li>
              <a className href="#" data-filter=".android">
                <h5>Android</h5>
              </a>
            </li>
            <li>
              <a className href="#" data-filter=".appleIOS">
                <h5>Apple IOS</h5>
              </a>
            </li>
            <li>
              <a className href="#" data-filter=".web">
                <h5>Web App</h5>
              </a>
            </li>
          </ul>
        </div>
        {/*/Portfolio Filters */}
        {/* Portfolio Wrapper */}
        <div
          className="isotope fadeInLeft animated wow grid"
          style={{ position: 'relative', overflow: 'hidden', height: '480px' }}
          id="portfolio_wrapper"
        >
          {/* Portfolio Item */}
          <figure
            style={{
              position: 'absolute',
              left: '0px',
              top: '0px',
              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)',
              width: '337px',
              opacity: 1,
            }}
            className="portfolio-item one-four   appleIOS isotope-item effect-oscar"
          >
            <div className="portfolio_img">
              <img src="img/portfolio_pic1.jpg" alt="Portfolio 1" />{' '}
            </div>
            <figcaption>
              <div>
                <a href="img/portfolio_pic1.jpg" className="fancybox">
                  <h2>
                    Warm <span>Oscar</span>
                  </h2>
                  <p>
                    Oscar is a decent man. He used to clean porches with
                    pleasure.
                  </p>
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
              transform: 'translate3d(337px, 0px, 0px) scale3d(1, 1, 1)',
              width: '337px',
              opacity: 1,
            }}
            className="portfolio-item one-four  design isotope-item effect-oscar"
          >
            <div className="portfolio_img">
              {' '}
              <img src="img/portfolio_pic2.jpg" alt="Portfolio 1" />{' '}
            </div>
            <figcaption>
              <div>
                <a href="img/portfolio_pic2.jpg" className="fancybox">
                  <h2>
                    Warm <span>Oscar</span>
                  </h2>
                  <p>
                    Oscar is a decent man. He used to clean porches with
                    pleasure.
                  </p>
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
              transform: 'translate3d(674px, 0px, 0px) scale3d(1, 1, 1)',
              width: '337px',
              opacity: 1,
            }}
            className="portfolio-item one-four  design  isotope-item effect-oscar"
          >
            <div className="portfolio_img">
              {' '}
              <img src="img/portfolio_pic3.jpg" alt="Portfolio 1" />{' '}
            </div>
            <figcaption>
              <div>
                <a href="img/portfolio_pic3.jpg" className="fancybox">
                  <h2>
                    Warm <span>Oscar</span>
                  </h2>
                  <p>
                    Oscar is a decent man. He used to clean porches with
                    pleasure.
                  </p>
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
              transform: 'translate3d(1011px, 0px, 0px) scale3d(1, 1, 1)',
              width: '337px',
              opacity: 1,
            }}
            className="portfolio-item one-four  android  prototype web isotope-item effect-oscar"
          >
            <div className="portfolio_img">
              {' '}
              <img src="img/portfolio_pic4.jpg" alt="Portfolio 1" />{' '}
            </div>
            <figcaption>
              <div>
                <a href="img/portfolio_pic4.jpg" className="fancybox">
                  <h2>
                    Warm <span>Oscar</span>
                  </h2>
                  <p>
                    Oscar is a decent man. He used to clean porches with
                    pleasure.
                  </p>
                </a>
              </div>
            </figcaption>
          </figure>
          {/* Portfolio Item */}
          {/* Portfolio Item */}
          <figure
            style={{
              position: 'absolute',
              left: '0px',
              top: '0px',
              transform: 'translate3d(0px, 240px, 0px) scale3d(1, 1, 1)',
              width: '337px',
              opacity: 1,
            }}
            className="portfolio-item one-four  design isotope-item effect-oscar"
          >
            <div className="portfolio_img">
              {' '}
              <img src="img/portfolio_pic5.jpg" alt="Portfolio 1" />{' '}
            </div>
            <figcaption>
              <div>
                <a href="img/portfolio_pic5.jpg" className="fancybox">
                  <h2>
                    Warm <span>Oscar</span>
                  </h2>
                  <p>
                    Oscar is a decent man. He used to clean porches with
                    pleasure.
                  </p>
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
            className="portfolio-item one-four  web isotope-item effect-oscar"
          >
            <div className="portfolio_img">
              {' '}
              <img src="img/portfolio_pic6.jpg" alt="Portfolio 1" />{' '}
            </div>
            <figcaption>
              <div>
                <a href="img/portfolio_pic6.jpg" className="fancybox">
                  <h2>
                    Warm <span>Oscar</span>
                  </h2>
                  <p>
                    Oscar is a decent man. He used to clean porches with
                    pleasure.
                  </p>
                </a>
              </div>
            </figcaption>
          </figure>
          {/*/Portfolio Item */}
          {/* Portfolio Item  */}
          <figure
            style={{
              position: 'absolute',
              left: '0px',
              top: '0px',
              transform: 'translate3d(674px, 240px, 0px) scale3d(1, 1, 1)',
              width: '337px',
              opacity: 1,
            }}
            className="portfolio-item one-four  design web isotope-item effect-oscar"
          >
            <div className="portfolio_img">
              {' '}
              <img src="img/portfolio_pic7.jpg" alt="Portfolio 1" />{' '}
            </div>
            <figcaption>
              <div>
                <a href="img/portfolio_pic7.jpg" className="fancybox">
                  <h2>
                    Warm <span>Oscar</span>
                  </h2>
                  <p>
                    Oscar is a decent man. He used to clean porches with
                    pleasure.
                  </p>
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
              transform: 'translate3d(1011px, 240px, 0px) scale3d(1, 1, 1)',
              width: '337px',
              opacity: 1,
            }}
            className="portfolio-item one-four   android isotope-item effect-oscar"
          >
            <div className="portfolio_img">
              {' '}
              <img src="img/portfolio_pic8.jpg" alt="Portfolio 1" />{' '}
            </div>
            <figcaption>
              <div>
                <a href="img/portfolio_pic8.jpg" className="fancybox">
                  <h2>
                    Warm <span>Oscar</span>
                  </h2>
                  <p>
                    Oscar is a decent man. He used to clean porches with
                    pleasure.
                  </p>
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
