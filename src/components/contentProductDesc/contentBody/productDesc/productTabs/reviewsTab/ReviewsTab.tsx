import React from "react";
import { Statistic } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import style from "./ReviewsTab.module.css";
import yellowStar from "../../../../../../assets/images/yellowStar.svg";
import whiteStar from "../../../../../../assets/images/whiteRatingStar.svg";

interface Props {
  reviewCount: number;
  rating: number;
}

const ReviewsTab: React.FC<Props> = ({ reviewCount, rating }) => {
  //STARS
  const starsArray = Array(5).fill(0);
  const stars = starsArray.map((_, index) => (
    <li key={index}>
      <img
        className={style.star}
        src={rating > index ? yellowStar : whiteStar}
        alt="star"
      />
    </li>
  ));

  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <label className={style.title}>Average Rating</label>
        <ul className={style.starContainer}>{stars}</ul>
      </div>
      <Statistic
        title="Feedback"
        value={reviewCount}
        prefix={<LikeOutlined />}
      />
    </div>
  );
};

export default ReviewsTab;
