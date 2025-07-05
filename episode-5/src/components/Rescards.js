import { IMG_URL } from "../utils/constants";

const Rescards = (props) => {
  const { resdata } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resdata.index;
  return (
    <div className="cards">
      <img src={IMG_URL + cloudinaryImageId} alt="restcard"></img>
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} ⭐</p>
    </div>
  );
};
export default Rescards;
