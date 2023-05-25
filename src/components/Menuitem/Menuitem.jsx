import './Menuitem.css';
const Menuitem = ({ title, price, tags }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      {/*title  */}
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>
          {title}
        </p>
      </div>
      {/* dash */}
      <div className="app__menuitem-dash" />
      {/* price */}
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
      {/*  */}
    </div>

    {/* tags */}
    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: '#AAA' }}>
        {tags}
      </p>
    </div>
    {/*  */}
  </div>
);

export default Menuitem;
