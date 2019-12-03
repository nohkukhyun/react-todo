import React from "react";
import styles from "./DiaryList.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const DiaryList = () => {
  return (
    <div className={cx("DiaryList")}>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default DiaryList;
