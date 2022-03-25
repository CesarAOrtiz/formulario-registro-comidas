import React from "react";
import Input from "./Input";

export default function Form() {
  return (
    <form className="w-[380px] p-2">
      <div className="grid ">
        <div className="relative z-0 mb-6 w-full group">
          <Input
            name="floating_first_name"
            helperText="Error"
            label="First Name"
            required
          />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <Input
            name="floating_last_name"
            helperText="Error"
            label="Last Name"
            required
          />
        </div>
      </div>
      <div className="grid ">
        <div className="relative z-0 mb-6 w-full group">
          <Input
            type="number"
            name="floating_age"
            helperText="Error"
            label="Age"
            required
          />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <Input
            type="email"
            name="floating_email"
            helperText="Error"
            label="Email addressge"
            required
          />
        </div>
      </div>
      <div className="grid ">
        <div className="relative z-0 mb-6 w-full group">
          <Input
            type="text"
            name="floating_address"
            helperText="Error"
            label="Address"
            required
          />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <Input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="floating_phone"
            helperText="Error"
            label="Phone number (123-456-7890)"
            required
          />
        </div>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <div className="relative inline-block w-12 mr-2 align-middle select-none">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className="absolute block w-6 h-6 rounded-full bg-white border-gray-300 border-2 hover:bg-gray-500 appearance-none cursor-pointer checked:bg-blue-600 checked:hover:bg-blue-800 checked:translate-x-6 transition-transform duration-200 ease-in"
          />
          <label
            htmlFor="toggle"
            className="block overflow-hidden h-6 rounded-full bg-gray-200 cursor-pointer"
          ></label>
        </div>
        <label htmlFor="toggle" className="text-sm text-gray-500 mt-1">
          Delivered ()
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <textarea
          name="floating_observation"
          id="floating_observation"
          rows="4"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        ></textarea>
        <label
          htmlFor="floating_observation"
          className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Observation
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </form>
  );
}
