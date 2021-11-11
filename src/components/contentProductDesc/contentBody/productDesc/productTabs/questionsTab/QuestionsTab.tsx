import React, { useEffect } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import style from "./QuestionsTab.module.css";

interface Props {
  questions: number;
}

const QuestionsTab: React.FC<Props> = ({ questions }) => {
  const comments = Array(questions)
    .fill(0)
    .map((_, i) => (
      <Comment
        key={i}
        author={<a>Han Solo</a>}
        avatar={
          <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
        }
        content={
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quia
            ipsum ratione totam eum aut fuga, delectus mollitia hic rem illo
            obcaecati eligendi, aspernatur nesciunt aliquam et cupiditate
            voluptatibus natus.
          </p>
        }
        datetime={
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
    ));

  return <>{comments}</>;
};
export default QuestionsTab;
