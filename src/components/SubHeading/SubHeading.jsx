import images from '../../constants/images';

// eslint-disable-next-line react/prop-types
const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </div>
);
export default SubHeading;
