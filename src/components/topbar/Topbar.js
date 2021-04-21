import { Person, Mail } from '@material-ui/icons';

import './topbar.scss';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            devKappa.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+382 11 11 11</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>devKappa@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
