import React from "react";
import Input from "./Input";
import Switch from "./Switch";
import Textarea from "./Textarea";

export default function Form(props) {
  return (
    <form {...props}>
      <div className="grid">
        <div className="relative z-0 mb-6 w-full group">
          <Input
            name="first_name"
            helperText="Error"
            label="First Name"
            required
          />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <Input
            name="last_name"
            helperText="Error"
            label="Last Name"
            required
          />
        </div>
      </div>
      <div className="grid">
        <div className="relative z-0 mb-6 w-full group">
          <Input
            type="number"
            name="age"
            helperText="Error"
            label="Age"
            required
          />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <Input
            type="email"
            name="email"
            helperText="Error"
            label="Email addressge"
            required
          />
        </div>
      </div>
      <div className="grid">
        <div className="relative z-0 mb-6 w-full group">
          <Input
            type="text"
            name="address"
            helperText="Error"
            label="Address"
            required
          />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <Input
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            type="tel"
            name="phone"
            helperText="Error"
            label="Phone number (123-456-7890)"
          />
        </div>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <Switch id="delivered" name="delivered" label="Delivered ()" />
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <Textarea
          rows="4"
          name="observation"
          helperText="Error"
          label="Observation"
        />
      </div>
      <button
        type="submit"
        className="text-white shadow-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full px-5 py-2.5 text-sm text-center font-medium"
      >
        Submit
      </button>
    </form>
  );
}
