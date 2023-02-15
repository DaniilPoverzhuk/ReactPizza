import React, { useState, useEffect, useRef } from "react";
import { popup } from "../../assets/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import style from "./sort.module.scss";
import Popup from "../Popup";

type PopupClick = MouseEvent & {
  path: Node[];
};

const Sort: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const refSort = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;
      if (refSort.current && !_event.composedPath().includes(refSort.current)) {
        setShowPopup(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={refSort} className={style.root}>
      <div className={style.inner}>
        <div className={style.label} onClick={() => setShowPopup(!showPopup)}>
          <span className={style.text}>
            <FontAwesomeIcon
              icon={faCaretDown}
              className={showPopup ? style.iconActive : style.icon}
            />
            Сортировка:
          </span>
          <span className={style.selectedItem}>
            {popup[activeItemIndex].value}
          </span>
        </div>
        {showPopup && (
          <Popup
            activeItemIndex={activeItemIndex}
            setActiveItemIndex={setActiveItemIndex}
            setShowPopup={setShowPopup}
          />
        )}
      </div>
    </div>
  );
};

export default Sort;
