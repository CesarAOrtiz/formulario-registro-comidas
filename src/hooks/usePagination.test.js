import usePagination from "./usePagination";
import { renderHook, act } from "@testing-library/react-hooks";
import records from "../utils/testRecords";

const defaultState = {
  page: [records[0]],
  current: 1,
  size: 1,
  total: 2,
  start: 1,
  end: 1,
  length: 2,
};

describe("usePagination", () => {
  test("should return the initial state", () => {
    const { result } = renderHook(() => usePagination(records, 1));
    expect(result.current.current).toEqual(defaultState.current);
    expect(result.current.page).toEqual(defaultState.page);
    expect(result.current.size).toEqual(defaultState.size);
    expect(result.current.total).toEqual(defaultState.total);
    expect(result.current.start).toEqual(defaultState.start);
    expect(result.current.end).toEqual(defaultState.end);
  });

  test("should return the next page", () => {
    const { result } = renderHook(() => usePagination(records, 1));
    act(() => {
      result.current.next();
    });
    expect(result.current.current).toEqual(2);
    expect(result.current.page).toEqual([records[1]]);
  });

  test("should return the previous page", () => {
    const { result } = renderHook(() => usePagination(records, 1));
    act(() => {
      result.current.next();
    });
    act(() => {
      result.current.prev();
    });
    expect(result.current.current).toEqual(1);
    expect(result.current.page).toEqual([records[0]]);
  });

  test("should return the first page", () => {
    const { result } = renderHook(() => usePagination(records, 1));
    act(() => {
      result.current.next();
    });
    act(() => {
      result.current.first();
    });
    expect(result.current.current).toEqual(1);
    expect(result.current.page).toEqual([records[0]]);
  });

  test("should return the last page", () => {
    const { result } = renderHook(() => usePagination(records, 1));
    act(() => {
      result.current.last();
    });
    expect(result.current.current).toEqual(2);
    expect(result.current.page).toEqual([records[1]]);
  });
});
