function Landing() {
  return (
    <section id="hero_section" className="top_cont_outer">
      <div className="hero_wrapper">
        <div className="container">
          <div className="hero_section">
            <div className="row">
              <div className="col-md-12">
                <div className="top_left_cont intro zoomIn wow animated">
                  <h2>
                    I AM YARIV
                    <br /> <strong>THIRD-YEAR STUDENT</strong>
                  </h2>
                  <p>
                    I am Yariv Menachem, Third-year Computer Science (B.sc)
                    student. <br />
                    Looking for: Full-time | Part-time | Development. <br />
                  </p>
                  <div className="underline" />
                  <ul className="social_links">
                    <li
                      className="twitter animated bounceIn wow delay-02s animated"
                      style={{
                        visibility: 'visible',
                        animationName: 'bounceIn',
                      }}
                    >
                      <a href="javascript:void(0)">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li
                      className="facebook animated bounceIn wow delay-03s animated"
                      style={{
                        visibility: 'visible',
                        animationName: 'bounceIn',
                      }}
                    >
                      <a href="javascript:void(0)">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li
                      className="pinterest animated bounceIn wow delay-04s animated"
                      style={{
                        visibility: 'visible',
                        animationName: 'bounceIn',
                      }}
                    >
                      <a href="javascript:void(0)">
                        <i className="fa fa-pinterest" />
                      </a>
                    </li>
                    <li
                      className="gplus animated bounceIn wow delay-05s animated"
                      style={{
                        visibility: 'visible',
                        animationName: 'bounceIn',
                      }}
                    >
                      <a href="javascript:void(0)">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                  </ul>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
