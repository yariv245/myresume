import Gallery from './Gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngular,
  faCss3Alt,
  faJava,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
function Skills() {
  const handleDragStart = (e) => e.preventDefault();

  const development = [
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <FontAwesomeIcon icon={faJava} />
    </div>,
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <FontAwesomeIcon icon={faPython} />
    </div>,
  ];
  const design = [
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <FontAwesomeIcon icon={faReact} />
    </div>,
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <FontAwesomeIcon icon={faAngular} />
    </div>,
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <FontAwesomeIcon icon={faCss3Alt} />
    </div>,
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <FontAwesomeIcon icon={faJsSquare} />
    </div>,
  ];
  return (
    <section id="service">
      <div className="container">
        <h2>Skills</h2>
        <div className="service_wrapper">
          <div className="row">
            <div className="col-md-4">
              <div className="service_icon">
                {' '}
                <i className="fa fa-android"></i>{' '}
              </div>
              <div className="service_block">
                <h3 className="animated fadeInUp wow">Android</h3>
                <p className="animated fadeInDown wow">
                  'GetFitness' app project coming soon...{' '}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service_icon">
                {' '}
                <span>
                  <Gallery items={design} />{' '}
                </span>{' '}
              </div>
              <div className="service_block">
                <h3 className="animated fadeInUp wow">Design</h3>
                <p className="animated fadeInDown wow">
                  'MovieStore' project using: HTML CSS JS. 'juskAsk' designed
                  using React and Angular{' '}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service_icon">
                {' '}
                <span>
                  <Gallery items={development} direction="rtl" />
                </span>{' '}
              </div>
              <div className="service_block">
                <h3 className="animated fadeInUp wow">Development</h3>
                <p className="animated fadeInDown wow">
                  B.sc students learn JAVA,C,C++,C# to develop future project,
                  Python selflearning{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
