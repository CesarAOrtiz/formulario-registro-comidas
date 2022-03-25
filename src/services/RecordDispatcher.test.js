import { useReducer } from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import Dispatcher from "./RecordDispatcher";
import { reducer } from "../reducers/recordsReducer";
import records from "../utils/testRecords";

describe("RecordDispatcher", () => {
  test("should add a record", () => {
    const { result } = renderHook(() => useReducer(reducer, []));
    const dispatcher = new Dispatcher(result.current[0], result.current[1]);

    act(() => {
      dispatcher.addRecord(records[0]);
    });

    expect(result.current[0]).toEqual([records[0]]);
  });

  test("should delete a record", () => {
    const { result } = renderHook(() => useReducer(reducer, [records[0]]));
    const dispatcher = new Dispatcher(result.current[0], result.current[1]);

    act(() => {
      dispatcher.deleteRecord(records[0].id);
    });

    expect(result.current[0]).toEqual([]);
  });

  test("should edit a record", () => {
    const { result } = renderHook(() => useReducer(reducer, [records[0]]));
    const dispatcher = new Dispatcher(result.current[0], result.current[1]);

    act(() => {
      dispatcher.editRecord({
        id: records[0].id,
        name: "Pedro",
        lastName: "Martinez",
      });
    });

    expect(result.current[0]).toEqual([
      { ...records[0], name: "Pedro", lastName: "Martinez" },
    ]);
  });

  test("should get a record", () => {
    const { result } = renderHook(() => useReducer(reducer, [records[0]]));
    const dispatcher = new Dispatcher(result.current[0], result.current[1]);

    expect(dispatcher.getRecord(records[0].id)).toEqual(records[0]);
  });
});
