import { actions, reducer, defaultState } from "./paginationReducer";
import records from "../utils/testRecords";

describe("paginationReducer", () => {
  test("should return the initial state", () => {
    expect(reducer(defaultState, {})).toEqual(defaultState);
  });

  test("should handle SET_PAGINATION", () => {
    expect(
      reducer(defaultState, {
        type: actions.SET_PAGINATION,
        payload: {
          current: 1,
          size: 1,
          elementsLength: records.length,
        },
      })
    ).toEqual({
      current: 1,
      size: 1,
      total: records.length,
    });
  });

  test("should handle NEXT_PAGE", () => {
    expect(
      reducer(
        {
          current: 1,
          size: 1,
          total: records.length,
        },
        {
          type: actions.NEXT_PAGE,
        }
      )
    ).toEqual({
      current: 2,
      size: 1,
      total: records.length,
    });
  });

  test("should handle PREV_PAGE", () => {
    expect(
      reducer(
        {
          current: 2,
          size: 1,
          total: records.length,
        },
        {
          type: actions.PREV_PAGE,
        }
      )
    ).toEqual({
      current: 1,
      size: 1,
      total: records.length,
    });
  });

  test("should handle FIRST_PAGE", () => {
    expect(
      reducer(
        {
          current: 3,
          size: 1,
          total: records.length,
        },
        {
          type: actions.FIRST_PAGE,
        }
      )
    ).toEqual({
      current: 1,
      size: 1,
      total: records.length,
    });
  });

  test("should handle LAST_PAGE", () => {
    expect(
      reducer(
        {
          current: 1,
          size: 1,
          total: records.length,
        },
        {
          type: actions.LAST_PAGE,
        }
      )
    ).toEqual({
      current: records.length,
      size: 1,
      total: records.length,
    });
  });
});
