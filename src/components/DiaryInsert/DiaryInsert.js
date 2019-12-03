import React from "react";
import styles from "./DiaryInsert.scss";
import classNames from "classnames/bind";
import { FaPlus } from "react-icons/fa";

const cx = classNames.bind(styles);

const handleInsert = () => {
  localStorage.setItem("key", "value");
};

const DiaryInsert = () => {
  return (
    <form className={cx("DiaryInsert")}>
      <input
        type="text"
        className="txt__title"
        placeholder=" 제목을 입력하세요"
        autoFocus
      />
      <button type="submit" className="btn__submit">
        <FaPlus />
      </button>
    </form>
  );
};

export default DiaryInsert;
