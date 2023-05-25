import { MenuItem, SubHeading } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    {/* Title */}
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>
    {/* Menu  container 3/3*/}
    <div className="app__specialMenu-menu">
      {/* 1/3 */}
      <div className="app__specialMenu-menu_wine flex__center ">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map(({ title, price, tags }, index) => (
            <MenuItem
              key={title + index}
              title={title}
              price={price}
              tags={tags}
            />
          ))}
        </div>
      </div>

      {/* 2/3 */}
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      {/* 3/3 */}
      <div className="app__specialMenu-menu_cocltails flex__center ">
        <p className="app__specialMenu-menu_heading">Cocktail</p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map(({ title, price, tags }, index) => (
            <MenuItem
              key={title + index}
              title={title}
              price={price}
              tags={tags}
            />
          ))}
        </div>
      </div>
      {/*  */}
    </div>

    {/* Button */}
    <div style={{ marginTop: '15px' }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>

    {/*  */}
  </div>
);

export default SpecialMenu;
