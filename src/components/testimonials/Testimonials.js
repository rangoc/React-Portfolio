import './testimonials.scss';
import rightArrow from 'assets/right-arrow.png';
import youtube from 'assets/youtube.png';
import twitter from 'assets/twitter.png';
import linkedin from 'assets/linkedin.png';
const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: 'Tom Durden',
      title: 'Senior Developer',
      img:
        'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      icon: `${twitter}`,
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.',
    },
    {
      id: 2,
      name: 'Alex Kalinski',
      title: 'Co-Founder of DELKA',
      img:
        'https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      icon: `${youtube}`,
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ',
      featured: true,
    },
    {
      id: 3,
      name: 'Martin Harold',
      title: 'CEO of ALBI',
      img:
        'https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      icon: `${linkedin}`,
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem',
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={`card ${d.featured ? 'featured' : ''}`}>
            <div className="top">
              <img src={rightArrow} className="left" alt="right arrow" />
              <img src={d.img} className="user" alt="testimonial" />
              <img src={d.icon} className="right" alt={`${d.icon}`} />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
