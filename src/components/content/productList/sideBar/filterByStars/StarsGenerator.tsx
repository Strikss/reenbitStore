import style from "./FilterByStars.module.css";
import whiteRatingStar from "../../../../../assets/images/whiteRatingStar.svg";
import yellowStar from "../../../../../assets/images/yellowStar.svg";

type StarsProps = {
  yellow: number;
};

const StarsGenerator = (props: StarsProps) => {
  const yellowStars = Array(5).fill(0);
  return (
    <>
      {yellowStars.map((_, index) => {
        if (index < props.yellow) {
          return <img src={yellowStar} alt="yellowStar" key={index} />;
        } else {
          return <img src={whiteRatingStar} alt="whiteStar" key={index} />;
        }
      })}
    </>
  );
};

export default StarsGenerator;
