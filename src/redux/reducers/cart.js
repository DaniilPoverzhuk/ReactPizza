import { types } from "../actions/cart";

const defaultState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const countTotal = (arr) => {
  if (arr.length) {
    const totalPrice = arr
      .map((item) =>
        item.items.reduce((sum, obj) => {
          return obj.price + sum;
        }, 0)
      )
      .reduce((sum, item) => item + sum, 0);
    const totalCount = arr.reduce((sum, item) => item.itemsLength + sum, 0);
    return { totalCount, totalPrice };
  }
  return { totalCount: 0, totalPrice: 0 };
};

export const cart = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_CART": {
      const currentBlock = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const obj = {
        ...state.items,
        [action.payload.id]: {
          items: currentBlock,
          itemsLength: currentBlock.length,
        },
      };

      const arr = [].concat.apply([], Object.values(obj));
      const { totalCount, totalPrice } = countTotal(arr);

      return {
        ...state,
        items: obj,
        totalCount,
        totalPrice,
      };
    }

    case "CLEAR_CART":
      return {
        ...state,
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };

    case "CHANGE_COUNT": {
      const currentBlock = [...state.items[action.payload.id].items];
      currentBlock.pop();

      const obj = {
        ...state.items,
        [action.payload.id]: {
          items: currentBlock,
          itemsLength: currentBlock.length,
        },
      };

      const arr = [].concat.apply([], Object.values(obj));
      const { totalCount, totalPrice } = countTotal(arr);

      return {
        ...state,
        items: obj,
        totalCount,
        totalPrice,
      };
    }

    case "REMOVE_PIZZA": {
      const newItems = {
        ...state.items,
      };

      const totalCount = newItems[action.payload.id].items.length;
      const totalPrice = newItems[action.payload.id].items.reduce(
        (sum, item) => item.price + sum,
        0
      );
      delete newItems[action.payload.id];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - totalPrice,
        totalCount: state.totalCount - totalCount,
      };
    }

    default:
      return state;
  }
};
