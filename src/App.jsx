import { useState } from "react";
import Form from "./components/Form";
import sampleSchema from "./sampleSchema.json";

const App = () => {
  const [schema, setSchema] = useState(JSON.stringify(sampleSchema));
  const [inputSchema, setInputSchema] = useState(schema);
  const handleSubmit = (formData) => {
    //Make POST request here
    console.log("Form data:", formData);
  };

  const handleSchema = ({ target }) => {
    setInputSchema(target.value);
  };

  return (
    <div>
      <h1>React Form Generator</h1>
      <div className="container">
        <div>
          <h2>JSON schema:</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSchema(inputSchema);
            }}
          >
            <textarea
              value={inputSchema}
              onChange={handleSchema}
              rows="30"
              cols="50"
            />
            <button type="submit">Generate Form</button>
          </form>
        </div>
        <div>
          <Form schema={JSON.parse(schema)} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default App;
