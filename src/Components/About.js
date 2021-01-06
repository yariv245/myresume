import profile from '../img/profile.JPG';
function About() {
  return (
    <section id="aboutUs">
      {/*Aboutus*/}
      <div className="inner_wrapper aboutUs-container fadeInLeft animated wow">
        <div className="container">
          <h2>Who Am I</h2>
          <h6>
            I am Yariv Menachem, Third-year Computer Science (B.sc) student.
          </h6>
          <div className="inner_section">
            <div className="row">
              <div className="col-lg-12 about-us">
                <div className="row">
                  <div className="col-md-6">
                    {' '}
                    <img className="img-responsive" src={profile} align />{' '}
                  </div>
                  {/* /.col-md-6 */}
                  <div className="col-md-6">
                    <h3>I Design Awesome Web Apps</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur Morbi sagittis,
                      sem quisci ipsum gravida tortor orci ipsum gravida tortor.
                      Lorem ipsum dolor sit amet, tortor orci ipsum gravida
                      tortor. Lorem ipsum dolor sit amet, conseconsectetur.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur Morbi sagittis,
                      sem quisci ipsum gravida tortor orci ipsum gravida tortor.
                    </p>
                    <ul className="about-us-list">
                      <li className="points">
                        Consectetur Morbi sagittis, sem quisci ipsum gravida
                        tortor
                      </li>
                      <li className="points">
                        Morbi sagittis, sem quis lacinia faucibus, orci ipsum
                        gravida{' '}
                      </li>
                      <li className="points">
                        Lorem ipsum dolor sit amet, consectetur Morbi sagittis,
                        sem quisci gravida{' '}
                      </li>
                      <li className="points">
                        Sagittis, sem quis lacinia faucibus, orci ipsum gravida{' '}
                      </li>
                      <li className="points">
                        Ipsum dolor sit amet, consectetur Morbi sagittis, sem
                        quisci
                      </li>
                    </ul>
                    {/* /.about-us-list */}
                  </div>
                  {/* /.col-md-6 */}
                </div>
                {/* /.row */}
              </div>
              {/* /.col-lg-12 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
