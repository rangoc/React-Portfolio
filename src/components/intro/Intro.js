import { useEffect, useRef } from 'react';
import { init } from 'ityped';
import './intro.scss';
import man from 'assets/man.png';
import downArrow from 'assets/down.png';
const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ['Developer', 'Designer', 'Creator'],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={man} alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I am</h2>
          <h1>Dev Kappa</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={downArrow} alt="down arrow" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
