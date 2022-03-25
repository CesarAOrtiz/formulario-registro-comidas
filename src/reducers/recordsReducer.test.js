import { actions, reducer } from "./recordsReducer";
import records from "../utils/testRecords";

describe("recordsReducer", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  test("should handle ADD_RECORD", () => {
    expect(
      reducer([], { type: actions.ADD_RECORD, payload: records[0] })
    ).toEqual([records[0]]);
  });

  test("should handle DELETE_RECORD", () => {
    expect(
      reducer([records[0]], {
        type: actions.DELETE_RECORD,
        payload: records[0].id,
      })
    ).toEqual([]);
  });

  test("should handle EDIT_RECORD", () => {
    expect(
      reducer([records[0]], {
        type: actions.EDIT_RECORD,
        payload: {
          id: records[0].id,
          name: "Pedro",
          lastName: "Martinez",
        },
      })
    ).toEqual([{ ...records[0], name: "Pedro", lastName: "Martinez" }]);
  });
});
