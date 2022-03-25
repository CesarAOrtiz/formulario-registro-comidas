export const actions = {
  ADD_RECORD: "ADD_RECORD",
  DELETE_RECORD: "DELETE_RECORD",
  EDIT_RECORD: "EDIT_RECORD",
};

export const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_RECORD:
      return [...state, action.payload];
    case actions.DELETE_RECORD:
      // return state.filter((record) => record.id !== action.payload);
      const delete_idx = state.findIndex(
        (record) => record.id === action.payload
      );
      delete_idx !== -1 && state.splice(delete_idx, 1);
      return state;
    case actions.EDIT_RECORD:
      // return state.map((record) =>
      //   record.id === action.payload.id
      //     ? { ...record, ...action.payload }
      //     : record
      // );
      const edit_idx = state.findIndex(
        (record) => record.id === action.payload.id
      );
      edit_idx !== -1 &&
        (state[edit_idx] = { ...state[edit_idx], ...action.payload });
      return state;
    default:
      return state;
  }
};
