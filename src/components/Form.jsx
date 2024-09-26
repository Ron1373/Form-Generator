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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
      <h2>{schema.title}</h2>
      <form onSubmit={handleSubmit}>
        {schema.fields.map((field) => (
          <Input
            key={field.name}
            field={field}
            value={formData[field.name] || ""}
            onChange={(e) => handleChange(field.name, e.target.value)}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
