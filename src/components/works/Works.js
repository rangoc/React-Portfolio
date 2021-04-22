import './works.scss';
import mobile from 'assets/mobile.png';
const Works = () => {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={mobile} alt="mobile" />
                </div>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto eum ratione a quaerat minima repellat, quod natus
                  voluptate expedita! Neque, sit. Aliquid quos placeat
                  temporibus laboriosam unde, tempora tenetur illo?
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img
                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                alt="works"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
