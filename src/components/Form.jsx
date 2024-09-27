import React, { useState } from "react";
import Input from "./Input";

const Form = ({ schema, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name, checkedValue, isChecked) => {
    setFormData((prevData) => {
      const currentValues = prevData[name] || [];
      if (isChecked) {
        return {
          ...prevData,
          [name]: [...currentValues, checkedValue],
        };
      } else {
        return {
          ...prevData,
          [name]: currentValues.filter((value) => value !== checkedValue),
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({});
  };

  return (
    <>
      <h2>{schema.title}</h2>
      <form onSubmit={handleSubmit}>
        {schema.fields.map((field) => {
          const { type, name } = field;
          return (
            <Input
              key={name}
              field={field}
              value={formData[name] || (type === "checkbox" ? [] : "")}
              onChange={
                type === "checkbox"
                  ? (e) =>
                      handleCheckboxChange(
                        name,
                        e.target.value,
                        e.target.checked
                      )
                  : (e) => handleChange(name, e.target.value)
              }
            />
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
