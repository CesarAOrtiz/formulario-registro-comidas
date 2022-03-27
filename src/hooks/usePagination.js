import { useEffect, useReducer } from "react";
import { defaultState, actions, reducer } from "../reducers/paginationReducer";

export default function usePagination(elements, size) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    dispatch({
      type: actions.SET_PAGINATION,
      payload: {
        current: 1,
        size: size,
        elementsLength: elements.length,
      },
    });
  }, [elements, size]);

  const first = () => dispatch({ type: actions.FIRST_PAGE });
  const last = () => dispatch({ type: actions.LAST_PAGE });

  const next = () =>
    state.current < state.total && dispatch({ type: actions.NEXT_PAGE });
  const prev = () => state.current > 1 && dispatch({ type: actions.PREV_PAGE });

  const page = elements.slice(
    state.current * state.size - state.size,
    state.current * state.size
  );

  const cursor = state.current * state.size - state.size;
  const start = cursor + 1;
  const end = cursor + page.length;

  return {
    ...state,
    first,
    last,
    next,
    prev,
    page,
    start,
    end,
    length: elements.length,
  };
}
