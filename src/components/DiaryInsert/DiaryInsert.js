import React, { useState, useCallback } from "react";
import styles from "./DiaryInsert.scss";
import classNames from "classnames/bind";
import { FaPlus } from "react-icons/fa";

const cx = classNames.bind(styles);

const DiaryInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChage = useCallback(e => {
    setValue(e.target.value);
    console.log(e.target.value);
  });

  return (
    <form className={cx("DiaryInsert")}>
      <input
        type="text"
        className="txt__title"
        placeholder=" 제목을 입력하세요"
        autoFocus
        value={value}
        onChange={onChage}
      />
      <button type="submit" className="btn__submit" onClick={() => onInsert}>
        <FaPlus />
      </button>
    </form>
  );
};

export default DiaryInsert;
