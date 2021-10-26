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
        {
          return (
            <img
              className={style.star}
              src={index < props.yellow ? yellowStar : whiteRatingStar}
              alt="yellowStar"
              key={index}
            />
          );
        }
      })}
    </>
  );
};

export default StarsGenerator;
