import React from "react";
import styles from "./DiaryListItem.scss";
import classNames from "classnames/bind";
import { FaMinusCircle, FaRegSquare, FaCheckSquare } from "react-icons/fa";

const cx = classNames.bind(styles);

const DiaryListItem = ({ todoItem, index }) => {
  const { text, checked } = todoItem;
  return (
    <div className={cx("DiaryListItem")}>
      <div className="chk__box">
        {checked === false ? (
          <div className>
            <FaRegSquare />
          </div>
        ) : (
          <div className="checked">
            <FaCheckSquare />
          </div>
        )}
        <div className="text">{text}</div>
      </div>
      <div className="chk__delete">
        <FaMinusCircle />
      </div>
    </div>
  );
};

export default DiaryListItem;
