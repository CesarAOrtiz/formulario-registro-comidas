const inputs = [
  {
    type: "text",
    name: "name",
    id: "name",
    label: "Nombre",
    required: true,

    helperText: "Este campo es requerido",
    autoFocus: true,
  },
  {
    type: "text",
    name: "lastName",
    id: "lastName",
    label: "Apellido",
    required: true,

    helperText: "Este campo es requerido",
  },
  {
    type: "number",
    name: "age",
    id: "age",
    label: "Edad",
    required: true,

    helperText: "Este campo es requerido",
  },
  {
    type: "text",
    name: "email",
    id: "email",
    label: "Email",
    required: true,

    helperText: "Debe ser un email válido",
    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
  },
  {
    type: "text",
    name: "address",
    id: "address",
    label: "Dirección",
    required: true,

    helperText: "Este campo es requerido",
  },
  {
    type: "tel",
    name: "phone",
    id: "phone",
    label: "Teléfono",
    required: false,

    validate: {
      pattern: (v) =>
        !v ||
        /^[+]?[0-9]?[0-9]{10}$/.test(v) ||
        "Debe ser un número de teléfono válido",
    },
  },
  {
    type: "checkbox",
    name: "delivered",
    id: "delivered",
    label: "Entregado",
  },
  {
    type: "textarea",
    name: "observation",
    id: "observation",
    label: "Observaciones",
    required: false,
  },
];

export default inputs;
