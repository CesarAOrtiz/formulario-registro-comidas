import { useState } from "react";
import { Formik, Form } from "formik";
import Card from "./Card";
import Field from "./Input/Field";
import fields, { initialValues, validationSchema } from "./Input/formJson";

export default function FormikForm() {
  const [loading, setLoading] = useState(false);
  return (
    <Card className="bg-white min-w-[250px] w-full max-w-[1100px] h-full max-h-[770px] mx-auto">
      <Formik
        initialValues={{ ...initialValues, picked: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        }}
      >
        <Form>
          {fields.map((field, i) => {
            return field.props.type === "select" ? (
              <Field key={field.props.name} {...field.props}>
                {field.options.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Field>
            ) : field.props.type === "radio" ? (
              <Field
                key={field.props.name + field.props.value}
                {...field.props}
              />
            ) : (
              <Field key={field.props.name} {...field.props} />
            );
          })}

          <button
            type="submit"
            disabled={loading}
            className="text-white shadow-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full px-5 py-2.5 text-sm text-center font-medium disabled:opacity-50 disabled:pointer-events-none"
          >
            Enviar
          </button>
        </Form>
      </Formik>
    </Card>
  );
}
