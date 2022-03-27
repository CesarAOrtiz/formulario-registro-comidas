export const defaultState = {
  current: 1,
  total: 1,
  size: 1,
};

export const actions = {
  SET_PAGINATION: "SET_PAGINATION",
  NEXT_PAGE: "NEXT_PAGE",
  PREV_PAGE: "PREV_PAGE",
  FIRST_PAGE: "FIRST_PAGE",
  LAST_PAGE: "LAST_PAGE",
};

export const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case actions.SET_PAGINATION:
      return {
        current: payload.current,
        size: payload.size,
        total: Math.ceil(payload.elementsLength / payload.size) || 1,
      };
    case actions.NEXT_PAGE:
      return {
        ...state,
        current: state.current + 1,
      };
    case actions.PREV_PAGE:
      return {
        ...state,
        current: state.current - 1,
      };
    case actions.FIRST_PAGE:
      return {
        ...state,
        current: 1,
      };
    case actions.LAST_PAGE:
      return {
        ...state,
        current: state.total,
      };
    default:
      return state;
  }
};
