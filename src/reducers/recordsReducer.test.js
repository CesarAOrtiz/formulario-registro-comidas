import { reducer, actions } from "./recordsReducer";

const records = [
  {
    id: 2,
    name: "Pablo",
    lastName: "Alfredo",
    phone: "987654321",
    email: "q@gmail.com",
    age: 24,
    address: "Calle falsa 321",
    delivered: true,
    observation: "",
  },
  {
    id: 1,
    name: "Juan",
    lastName: "Perez",
    phone: "123456789",
    email: "r@gmail.com",
    age: 20,
    address: "Calle falsa 123",
    delivered: false,
    observation: "No hay observaciones",
  },
];

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
