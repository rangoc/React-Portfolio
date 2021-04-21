import './topbar.scss';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            devKappa.
          </a>
        </div>
        <div className="right">this is right</div>
      </div>
    </div>
  );
};

export default Topbar;
