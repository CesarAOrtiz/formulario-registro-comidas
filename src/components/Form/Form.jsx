import { useState } from "react";
import Input from "./Input";
import Switch from "./Switch";
import Textarea from "./Textarea";
import { useRecords } from "../../contexts/RecordsContext";
import Record from "../../models/Record";

import inputs from "./inputs";

import swal from "sweetalert2";
import { useForm } from "react-hook-form";

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

  // función para simular el tiempo de carga de una petición
  const [isLoading, setIsLoading] = useState(false);
  const [clicks, setClicks] = useState(1);
  const simulateAwaitResponse = (data) => {
    setIsLoading(true);
    setClicks((prev) => prev + 1);
    setTimeout(() => {
      reset();
      setIsLoading(false);
      if (clicks % 3 === 0) {
        swal.fire("¡Error!", "No se pudo guardar el registro", "error");
      } else {
        dispatcher.addRecord(Record.fromJson({ ...data, id: Date.now() }));
        swal.fire("¡Registro creado!", "", "success");
      }
    }, 500);
  };

  return (
    <form {...props} onSubmit={handleSubmit(simulateAwaitResponse)}>
      {inputs.map((input) => {
        const {
          type,
          id,
          name,
          required,
          pattern,
          validate,
          helperText,
          ...rest
        } = input;

        const { ref: innerRef, ...field } = register(name || id, {
          required: required && helperText,
          pattern: {
            value: pattern,
            message: helperText,
          },
          validate: validate,
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
        disabled={isLoading}
        type="submit"
        className="text-white shadow-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full px-5 py-2.5 text-sm text-center font-medium disabled:opacity-50 disabled:pointer-events-none"
      >
        Submit
      </button>
    </form>
  );
}
