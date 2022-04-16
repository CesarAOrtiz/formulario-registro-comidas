import Switch from "./Switch";

export default function Input(props) {
  if (props.type === "textarea") {
    return <textarea {...props} />;
  }
  if (props.type === "select") {
    return <select {...props}></select>;
  }
  if (props.type === "checkbox") {
    return <Switch {...props} />;
  }
  return <input {...props} />;
}
