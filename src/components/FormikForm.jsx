import { Formik, Form } from "formik";
import * as Yup from "yup";
import Card from "./Card";
import Field from "./Input/Field";

const yupSchema = Yup.object({
  name: Yup.string().required("Required"),
  textarea: Yup.string().required("Required"),
  select: Yup.string().required("Required"),
  checkbox: Yup.boolean().oneOf([true], "Must be marked").required("Required"),
});
const initailValues = {
  name: "",
  textarea: "",
  select: "",
  checkbox: false,
};

export default function FormikForm() {
  return (
    <Card className="bg-white min-w-[250px] w-full max-w-[1100px] h-full max-h-[770px] mx-auto">
      <Formik
        initialValues={initailValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={yupSchema}
      >
        <Form>
          <Field name={"name"} type={"text"} label={"Name"} />
          <Field
            name={"textarea"}
            type={"textarea"}
            label={"Textarea"}
            rows={4}
          />
          <Field name={"select"} type={"select"} label={"Select"}>
            <option value="">Select an option</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Field>
          <Field
            name={"checkbox"}
            id={"checkbox"}
            type={"checkbox"}
            label={"Checkbox"}
          />

          <button
            type="submit"
            className="text-white shadow-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full px-5 py-2.5 text-sm text-center font-medium disabled:opacity-50 disabled:pointer-events-none"
          >
            Enviar
          </button>
        </Form>
      </Formik>
    </Card>
  );
}
