import React from "react";
import Input from "./Input";
import Switch from "./Switch";
import Textarea from "./Textarea";

import inputs from "./inputs";

export default function RecordForm(props) {
  return (
    <form {...props}>
      {inputs.map((input) => {
        const { type, id } = input;

        return (
          <div className="relative z-0 mb-6 w-full">
            {type === "switch" ? (
              <Switch key={id} {...input} />
            ) : type === "textarea" ? (
              <Textarea key={id} {...input} />
            ) : (
              <Input key={id} {...input} />
            )}
          </div>
        );
      })}

      {/* <div className="mb-6 w-full">
        <Input name="name" helperText="Error" label="First Name" required />
      </div>
      <div className="mb-6 w-full">
        <Input name="lastName" helperText="Error" label="Last Name" required />
      </div>
      <div className="mb-6 w-full">
        <Input
          type="number"
          name="age"
          helperText="Error"
          label="Age"
          required
        />
      </div>
      <div className="mb-6 w-full">
        <Input
          type="email"
          name="email"
          helperText="Error"
          label="Email addressge"
          required
        />
      </div>
      <div className="mb-6 w-full">
        <Input
          type="text"
          name="address"
          helperText="Error"
          label="Address"
          required
        />
      </div>
      <div className="mb-6 w-full">
        <Input
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          type="tel"
          name="phone"
          helperText="Error"
          label="Phone number (123-456-7890)"
        />
      </div>
      <div className="mb-6 w-full">
        <Switch id="delivered" name="delivered" label="Delivered ()" />
      </div>
      <div className="mb-6 w-full">
        <Textarea
          rows="4"
          name="observation"
          helperText="Error"
          label="Observation"
        />
      </div> */}
      <button
        type="submit"
        className="text-white shadow-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full px-5 py-2.5 text-sm text-center font-medium"
      >
        Submit
      </button>
    </form>
  );
}
