import React from "react";
import styles from "./DiaryListItem.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const DiaryListItem = () => {
  return (
    <div className={cx("DiaryListItem")}>
      <div></div>
    </div>
  );
};

export default DiaryListItem;
