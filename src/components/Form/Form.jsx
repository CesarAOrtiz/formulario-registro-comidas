import React from "react";
import Input from "./Input";
import Switch from "./Switch";
import Textarea from "./Textarea";
import { useForm } from "react-hook-form";
import { useRecords } from "../../contexts/RecordsContext";
import Record from "../../models/Record";

import inputs from "./inputs";

export default function RecordForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const { dispatcher } = useRecords();

  return (
    <form
      {...props}
      onSubmit={handleSubmit((data) => {
        dispatcher.addRecord(Record.fromJson(data));
        reset();
      })}
    >
      {inputs.map((input) => {
        const { type, id, name, required, pattern, helperText, ...rest } =
          input;

        const { ref: innerRef, ...field } = register(name || id, {
          required: helperText,
          pattern: {
            value: pattern,
            message: helperText,
          },
        });

        const props = {
          type,
          id,
          innerRef,
          ...field,
          ...rest,
          error: errors[id] && true,
          helperText: errors[id] && errors[id].message,
        };

        return (
          <div className="relative z-0 mb-6 w-full" key={id}>
            {type === "switch" ? (
              <Switch {...props} {...{ type: "checkbox" }} />
            ) : type === "textarea" ? (
              <Textarea {...props} />
            ) : (
              <Input {...props} />
            )}
          </div>
        );
      })}

      <button
        type="submit"
        className="text-white shadow-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full px-5 py-2.5 text-sm text-center font-medium"
      >
        Submit
      </button>
    </form>
  );
}
