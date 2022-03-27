import {
  useState,
  useReducer,
  useEffect,
  createContext,
  useContext,
} from "react";
import { reducer } from "../reducers/recordsReducer";
import RecordDispatcher from "../services/RecordDispatcher";
import StorageManager from "../services/StorageManager";
import Record from "../models/Record";

const KEY = "records";

const Records = createContext();

export const useRecords = () => useContext(Records);

export const RecordsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    Record.fromJsonArray(StorageManager.load(KEY) || [])
  );
  const [filterValue, setFilterValue] = useState("");
  const [filteredRecords, setFilteredRecords] = useState(state);

  const dispatcher = new RecordDispatcher(state, dispatch);

  useEffect(() => {
    if (JSON.stringify(state) !== JSON.stringify(StorageManager.load(KEY))) {
      StorageManager.save(KEY, state);
    }
  }, [state]);

  useEffect(() => {
    const filtered = state.filter(({ name, lastName, email }) => {
      return `${name} ${lastName} ${email}`
        .toLowerCase()
        .trim()
        .includes(filterValue.toLowerCase().trim());
    });
    setFilteredRecords(filtered);
  }, [state, filterValue]);

  return (
    <Records.Provider
      value={{ state, dispatcher, filteredRecords, setFilterValue }}
    >
      {children}
    </Records.Provider>
  );
};
