import './menu.scss';
import MenuItem from './MenuItem';
const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`menu ${menuOpen ? 'active' : ''}`}>
      <ul>
        <MenuItem scrollTo="intro" text="Home" setMenuOpen={setMenuOpen} />
        <MenuItem
          scrollTo="portfolio"
          text="Portfolio"
          setMenuOpen={setMenuOpen}
        />
        <MenuItem scrollTo="works" text="Works" setMenuOpen={setMenuOpen} />
        <MenuItem
          scrollTo="testimonials"
          text="Testimonials"
          setMenuOpen={setMenuOpen}
        />
        <MenuItem scrollTo="contact" text="Contact" setMenuOpen={setMenuOpen} />
      </ul>
    </div>
  );
};

export default Menu;
