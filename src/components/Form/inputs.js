const inputs = [
  {
    type: "text",
    name: "name",
    id: "name",
    label: "Name",
    required: true,

    helperText: "Is required",
    autoFocus: true,
  },
  {
    type: "text",
    name: "lastName",
    id: "lastName",
    label: "Last Name",
    required: true,

    helperText: "Is required",
  },
  {
    type: "number",
    name: "age",
    id: "age",
    label: "Age",
    required: true,

    helperText: "Is required",
  },
  {
    type: "text",
    name: "email",
    id: "email",
    label: "Email",
    required: true,

    helperText: "Must be a valid email",
    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
  },
  {
    type: "text",
    name: "address",
    id: "address",
    label: "Address",
    required: true,

    helperText: "Is required",
  },
  {
    type: "tel",
    name: "phone",
    id: "phone",
    label: "Phone",
    required: false,

    validate: {
      pattern: (v) =>
        !v || /^[0-9]{10}$/.test(v) || "Must be a valid phone number",
    },
  },
  {
    type: "switch",
    name: "delivered",
    id: "delivered",
    label: "Delivered",
  },
  {
    type: "textarea",
    name: "observations",
    id: "observations",
    label: "Observations",
    required: false,
  },
];

export default inputs;
