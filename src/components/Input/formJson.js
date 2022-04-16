import * as Yup from "yup";

const fields = [
  {
    props: {
      name: "name",
      type: "text",
      label: "Name",
      placeholder: "Enter your name",
    },
    initialValue: "",
    validation: Yup.string().required("Name is required"),
  },
  {
    props: {
      name: "textarea",
      type: "textarea",
      label: "Textarea",
      placeholder: "Textarea",
      rows: 4,
    },
    initialValue: "",
    validation: Yup.string().required("Textarea is required"),
  },
  {
    props: { name: "select", type: "select", label: "Select" },
    options: [
      { value: "", label: "Select" },
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
    ],
    initialValue: "",
    validation: Yup.string().required("Select is required"),
  },
  {
    props: {
      name: "checkbox",
      id: "checkbox",
      type: "checkbox",
      label: "Checkbox",
    },
    initialValue: false,
    validation: Yup.boolean()
      .oneOf([true], "Must be marked")
      .required("Checkbox is required"),
  },
  {
    props: {
      name: "range",
      type: "range",
      label: "Range",
      min: 0,
      max: 50,
    },
    initialValue: 0,
    validation: Yup.number().required("Range is required"),
  },
  {
    props: {
      name: "radio",
      type: "radio",
      label: "Radio 1",
      value: "1",
    },
    initialValue: "",
  },
  {
    props: {
      name: "radio",
      type: "radio",
      label: "Radio 2",
      value: "2",
    },
    initialValue: "",
  },
];
export default fields;

const getInitialValues = (formJson) =>
  formJson.reduce(
    (acc, { props: { name }, initialValue }) => ({
      ...acc,
      [name]: initialValue,
    }),
    {}
  );
export const initialValues = getInitialValues(fields);

const getValidationSchema = (formJson) =>
  formJson.reduce(
    (acc, { props: { name }, validation }) => ({ ...acc, [name]: validation }),
    {}
  );
export const validationSchema = Yup.object(getValidationSchema(fields));
