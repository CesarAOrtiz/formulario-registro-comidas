import { actions } from "../reducers/recordsReducer";

export default class RecordDispatcher {
  #state;
  #dispatch;
  constructor(state, dispatch) {
    this.#state = state;
    this.#dispatch = dispatch;
  }
  addRecord(record) {
    this.#dispatch({ type: actions.ADD_RECORD, payload: record });
  }
  deleteRecord(id) {
    this.#dispatch({ type: actions.DELETE_RECORD, payload: id });
  }
  editRecord(record) {
    this.#dispatch({ type: actions.EDIT_RECORD, payload: record });
  }
  getRecord(id) {
    return this.#state.find((record) => record.id === id);
  }
}
