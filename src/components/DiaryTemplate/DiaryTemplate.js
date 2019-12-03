import React from "react";
import classNames from "classnames/bind";
import styles from "./DiaryTemplate.scss";

const cx = classNames.bind(styles);

const DiaryTemplate = ({ children }) => {
  return (
    <div className={cx("tmp__wrap")}>
      <div className="tmp__title">My Diary</div>
      <div className="tmp__content">{children}</div>
    </div>
  );
};

export default DiaryTemplate;
