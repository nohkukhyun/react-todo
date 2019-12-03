import React from "react";
import styles from "./DiaryList.scss";
import classNames from "classnames/bind";
import DiaryListItem from "../DiaryListItem/DiaryListItem";

const cx = classNames.bind(styles);

const DiaryList = ({ todos }) => {
  console.log({ todos });
  return (
    <div className={cx("DiaryList")}>
      {todos.map((data, i) => {
        return (
          <DiaryListItem todoItem={data} key={`todo-list-${i}`} index={i} />
        );
      })}
    </div>
  );
};

export default DiaryList;
