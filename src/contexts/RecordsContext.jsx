import React, { useReducer, useEffect, createContext, useContext } from "react";
import { actions, reducer } from "../reducers/recordsReducer";
import StorageManager from "../utils/StorageManager";
import Record from "../models/Record";

const KEY = "records";

const Records = createContext();

export const useRecords = () => useContext(Records);

export const RecordsProvider = ({ children }) => {
  const [records, dispatch] = useReducer(
    reducer,
    Record.fromJsonArray(StorageManager.load(KEY) || [])
  );

  const getRecord = (id) => records.find((record) => record.id === id);

  const addRecord = (record) => {
    dispatch({ type: actions.ADD_RECORD, payload: record });
  };

  const editRecord = (record) => {
    dispatch({ type: actions.EDIT_RECORD, payload: record });
  };

  const deleteRecord = (id) => {
    dispatch({ type: actions.DELETE_RECORD, payload: id });
  };

  useEffect(() => {}, []);

  useEffect(() => {
    if (JSON.stringify(records) !== JSON.stringify(StorageManager.load(KEY))) {
      StorageManager.save(KEY, records);
    }
  }, [records]);

  return (
    <Records.Provider
      value={{ records, getRecord, addRecord, deleteRecord, editRecord }}
    >
      {children}
    </Records.Provider>
  );
};
