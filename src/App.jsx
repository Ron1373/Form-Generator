import Form from "./components/Form";
import schema from "./sampleSchema.json";

const App = () => {
  const handleSubmit = (formData) => {
    //Make POST request here
    console.log("Form data:", formData);
  };

  return (
    <div>
      <h1>React Form Generator</h1>
      <Form schema={schema} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
