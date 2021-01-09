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
                    <img className="img-responsive" src={profile} alt="" />{' '}
                  </div>
                  {/* /.col-md-6 */}
                  <div className="col-md-6">
                    <br />
                    <h4>Experience</h4>
                    <p>
                      Automation Developer - DBmaestro, Petah Tikva 2019 - 2020
                      <br />
                      ● Develop automation test scripts using Pytest, Selenium,
                      and Jenkins.
                      <br />
                    </p>
                    <br />
                    <br />
                    <br />
                    <h4>Education</h4>
                    <p>
                      Computer Science (B.sc) Student - The College of
                      Management Academic Studies
                      <br />
                      2018 - Present
                      <br />
                      ● Third-year student.
                      <br />
                    </p>

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
