export enum sortPropertyEnum {
  DESC = "desc",
  ASC = "asc",
}

export enum popupValue {
  POPULAR = "Сначала популярные",
  PRICE_LOW = "Сначала недорогие",
  PRICE_HIGH = "Сначала дорогие",
}

export enum popupType {
  RATING = "rating",
  PRICE = "price",
}

export type sortItem = {
  value: popupValue.POPULAR | popupValue.PRICE_HIGH | popupValue.PRICE_LOW;
  type: popupType.PRICE | popupType.RATING;
  sortProperty: sortPropertyEnum.DESC | sortPropertyEnum.ASC;
};

export interface FilterSliceTypes {
  searchValue: string;
  categoryId: number | string;
  sort: {
    sortProperty: sortPropertyEnum.DESC | sortPropertyEnum.ASC;
    type: popupType.PRICE | popupType.RATING;
  };
}
