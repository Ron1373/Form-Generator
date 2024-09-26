import { useState } from "react";
import Form from "./components/Form";
import sampleSchema from "./sampleSchema.json";

const App = () => {
  const [schema, setSchema] = useState(JSON.stringify(sampleSchema));
  const handleSubmit = (formData) => {
    //Make POST request here
    console.log("Form data:", formData);
  };

  const handleSchema = ({ target }) => {
    setSchema(target.value);
  };

  return (
    <div>
      <h1>React Form Generator</h1>
      <div>
        <h2>JSON schema:</h2>
        <textarea value={schema} onChange={handleSchema} rows="30" cols="50" />
      </div>
      <Form schema={JSON.parse(schema)} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
