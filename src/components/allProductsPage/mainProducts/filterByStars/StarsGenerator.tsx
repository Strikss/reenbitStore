import s from "./FilterByStars.module.css";
import yellowStar from "../../../../generalStuff/yellowStar.svg";
import whiteStar from "../../../../generalStuff/Products/whiteStar.svg";

type StarsProps = {
  yellow: number;
  white: number;
};

const StarsGenerator = (props: StarsProps) => {
  const yellowStars = Array(props.yellow);
  const whiteStars = Array(props.white);
  return (
    <div>
      {whiteStars.map((_, index) => (
        <img key={index} src={yellowStar} alt="star" />
      ))}
    </div>
  );
};

export default StarsGenerator;
