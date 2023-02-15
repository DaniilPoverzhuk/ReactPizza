import style from "./popup.module.scss";
import { useAppDispatch } from "../../redux/store";
import { setSort } from "../../redux/slices/filter/filterSlice";
import {
  popupType,
  popupValue,
  sortItem,
  sortPropertyEnum,
} from "../../redux/slices/filter/types";

const popup: sortItem[] = [
  {
    value: popupValue.POPULAR,
    type: popupType.RATING,
    sortProperty: sortPropertyEnum.DESC,
  },
  {
    value: popupValue.PRICE_LOW,
    type: popupType.PRICE,
    sortProperty: sortPropertyEnum.ASC,
  },
  {
    value: popupValue.PRICE_HIGH,
    type: popupType.PRICE,
    sortProperty: sortPropertyEnum.DESC,
  },
];

type PopupProps = {
  activeItemIndex: number;
  setActiveItemIndex: (idx: number) => void;
  setShowPopup: (boolean: boolean) => void; // Уточнить этот момент
};

const Popup: React.FC<PopupProps> = ({
  activeItemIndex,
  setActiveItemIndex,
  setShowPopup,
}) => {
  const dispatch = useAppDispatch();

  const changeActiveItem = (idx: number, obj: sortItem) => {
    setActiveItemIndex(idx);
    setShowPopup(false);
    dispatch(setSort(obj));
  };

  return (
    <div className={style.popup}>
      <ul className={style.list}>
        {popup.map((item, idx) => (
          <li
            key={idx}
            className={
              activeItemIndex === idx ? style.listItemActive : style.listItem
            }
            onClick={() => changeActiveItem(idx, item)}
          >
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popup;
