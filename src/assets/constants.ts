import { sortPropertyEnum } from "../redux/slices/filter/types";

enum popupValue {
  POPULAR = "Сначала популярные",
  PRICE_LOW = "Сначала недорогие",
  PRICE_HIGH = "Сначала дорогие",
}

enum popupType {
  RATING = "rating",
  PRICE = "price",
}

type popupTypes = {
  value: popupValue.POPULAR | popupValue.PRICE_HIGH | popupValue.PRICE_LOW;
  type: popupType.PRICE | popupType.RATING;
  sort: sortPropertyEnum.DESC | sortPropertyEnum.ASC;
};

export const popup: popupTypes[] = [
  {
    value: popupValue.POPULAR,
    type: popupType.RATING,
    sort: sortPropertyEnum.DESC,
  },
  {
    value: popupValue.PRICE_LOW,
    type: popupType.PRICE,
    sort: sortPropertyEnum.ASC,
  },
  {
    value: popupValue.PRICE_HIGH,
    type: popupType.PRICE,
    sort: sortPropertyEnum.DESC,
  },
];
