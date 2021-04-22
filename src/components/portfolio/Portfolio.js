import { useState } from 'react';
import PortfolioList from 'components/portfolioList/PortfolioList';
import './portfolio.scss';
const Portfolio = () => {
  const [selected, setSelected] = useState('featured');
  const list = [
    { id: 'featured', title: 'Featured' },
    { id: 'web', title: 'Web App' },
    { id: 'mobile', title: 'Mobile App' },
    { id: 'design', title: 'Design' },
    { id: 'content', title: 'Content' },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList // better naming would be PortfolioItem
            title={item.title}
            active={selected === item.id}
            id={item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"
            alt="Banking App"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"
            alt="Banking App"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"
            alt="Banking App"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"
            alt="Banking App"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"
            alt="Banking App"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"
            alt="Banking App"
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
