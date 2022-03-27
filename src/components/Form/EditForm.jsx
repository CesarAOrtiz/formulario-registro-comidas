import { useState, useEffect } from "react";
import Input from "./Input";
import Switch from "./Switch";
import Textarea from "./Textarea";
import Record from "../../models/Record";

import inputs from "../../utils/inputs";

import swal from "sweetalert2";
import { useForm } from "react-hook-form";

export default function RecordForm({ selected, onSubmit, ...props }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  // función para simular el tiempo de carga de una petición
  const [isLoading, setIsLoading] = useState(false);
  const [clicks, setClicks] = useState(1);
  const simulateAwaitResponse = (data) => {
    setIsLoading(true);
    setClicks((prev) => prev + 1);
    reset({});
    setTimeout(() => {
      setIsLoading(false);

      if (clicks % 3 === 0) {
        swal.fire("¡Error!", "No se pudo editar el registro", "error");
      } else {
        onSubmit && onSubmit(Record.fromJson(data));
        swal.fire("¡Registro editado!", "", "success");
      }
    }, 500);
  };

  useEffect(() => {
    console.log("selected", selected);
    reset(selected);
  }, [reset, selected]);

  return (
    <form {...props} onSubmit={handleSubmit(simulateAwaitResponse)}>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-1 lg:gap-0">
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
            value: selected[name] || "",
            shouldUnregister: true,
          });

          const props = {
            type,
            id,
            name,
            innerRef,
            ...field,
            ...rest,
            error: errors[id] && true,
            helperText: errors[id] && errors[id].message,
          };

          return (
            <div className="relative z-0 mb-6 w-full" key={id}>
              {type === "checkbox" ? (
                <Switch
                  {...props}
                  {...{ checked: selected["delivered"] || false }}
                />
              ) : type === "textarea" ? (
                <Textarea {...props} />
              ) : (
                <Input {...props} />
              )}
            </div>
          );
        })}
      </div>
      <button
        disabled={isLoading}
        type="submit"
        className="text-white shadow-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full px-5 py-2.5 text-sm text-center font-medium disabled:opacity-50 disabled:pointer-events-none"
      >
        Save
      </button>
    </form>
  );
}
