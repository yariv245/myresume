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
                    Looking for: Full-time | Part-time Development job. <br />
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
                      <a href="http://www.linkedin.com/in/YarivMen">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li
                      className="facebook animated bounceIn wow delay-03s animated"
                      style={{
                        visibility: 'visible',
                        animationName: 'bounceIn',
                      }}
                    >
                      <a href="https://github.com/yariv245">
                        <i className="fa fa-github" />
                      </a>
                    </li>
                    <li
                      className="pinterest animated bounceIn wow delay-04s animated"
                      style={{
                        visibility: 'visible',
                        animationName: 'bounceIn',
                      }}
                    >
                      <a href="mailto: yariv220895@gmail.com">
                        <i className="fa fa-envelope" />
                      </a>
                    </li>
                    <li
                      className="gplus animated bounceIn wow delay-05s animated"
                      style={{
                        visibility: 'visible',
                        animationName: 'bounceIn',
                      }}
                    >
                      <a href="tel: +972524594598">
                        <i className="fa fa-phone" />
                      </a>
                    </li>
                    <li
                      className="gplus animated bounceIn wow delay-05s animated"
                      style={{
                        visibility: 'visible',
                        animationName: 'bounceIn',
                      }}
                    >
                      <a href="https://docs.google.com/document/d/17dzWDbH9zsfozB2zIY2XmzzHJnkSfKHytDS6-HB7BuI/export?format=pdf">
                        <i className="fa fa-download" />
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
