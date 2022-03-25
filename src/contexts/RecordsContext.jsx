import { useReducer, useEffect, createContext, useContext } from "react";
import { reducer, Dispatcher } from "../reducers/recordsReducer";
import StorageManager from "../services/StorageManager";
import Record from "../models/Record";

const KEY = "records";

const Records = createContext();

export const useRecords = () => useContext(Records);

export const RecordsProvider = ({ children }) => {
  const [records, dispatch] = useReducer(
    reducer,
    Record.fromJsonArray(StorageManager.load(KEY) || [])
  );

  const dispatcher = new Dispatcher(records, dispatch);

  useEffect(() => {
    if (JSON.stringify(records) !== JSON.stringify(StorageManager.load(KEY))) {
      StorageManager.save(KEY, records);
    }
  }, [records]);

  return (
    <Records.Provider value={{ records, dispatcher }}>
      {children}
    </Records.Provider>
  );
};
