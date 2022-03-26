import { useReducer, useEffect, createContext, useContext } from "react";
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

  const dispatcher = new RecordDispatcher(state, dispatch);

  useEffect(() => {
    if (JSON.stringify(state) !== JSON.stringify(StorageManager.load(KEY))) {
      StorageManager.save(KEY, state);
      console.log(state);
    }
  }, [state]);

  return (
    <Records.Provider value={{ state, dispatcher }}>
      {children}
    </Records.Provider>
  );
};
