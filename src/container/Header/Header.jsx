import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Header.css';
const Header = () => {
  const title = 'Chase the new flavour';
  const paragraph =
    'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.';

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      {/* Content */}
      <div className="app__wrapper_info">
        <SubHeading title={title} />
        <h1 className="app__header-h1">The Key to Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          {paragraph}
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>

      {/* Images */}
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="welcome" />
      </div>
      {/*  */}
    </div>
  );
};

export default Header;
