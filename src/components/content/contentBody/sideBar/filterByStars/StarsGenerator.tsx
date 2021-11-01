import style from "./FilterByStars.module.css";
import whiteRatingStar from "../../../../../assets/images/whiteRatingStar.svg";
import yellowStar from "../../../../../assets/images/yellowStar.svg";
import React from "react";

type StarsProps = {
  yellow: number;
};

const StarsGenerator: React.FC<StarsProps> = (props) => {
  const yellowStarsArray = Array(5).fill(0);
  const yellowStars = yellowStarsArray.map((_, index) => {
    return (
      <li className={style.star} key={index}>
        <img
          src={index < props.yellow ? yellowStar : whiteRatingStar}
          alt="yellowStar"
        />
      </li>
    );
  });

  return <>{yellowStars}</>;
};

export default StarsGenerator;
