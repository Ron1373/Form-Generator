# React Form Generator

A dynamic form generator built with React that takes a JSON schema as input and renders a form with various input types such as text, email, checkboxes, radio buttons, and more. The app allows you to modify the form structure on the fly by updating the JSON schema and instantly generating a new form.

## Live Demo

The app is live at: [Form Generator](https://form-generator-react-ron.netlify.app/)

## Features

- **Dynamic Form Generation**: Forms are generated based on a JSON schema, allowing flexible and customizable form structures.
- **Supports Multiple Input Types**: Supports text, email, number, password, textarea, select (dropdown), checkboxes, radio buttons, and more.
- **Real-time Schema Editing**: The JSON schema can be edited directly in the app, and the form updates automatically.
- **Field Validation**: Supports required fields, `minLength` for text fields, and `required` validation.
- **Styled with CSS Grid**: The app uses a clean and responsive layout powered by CSS Grid for a seamless user experience across devices.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

```bash
git clone git@github.com:Ron1373/Form-Generator.git
```

2. **Navigate to project directory**:

```bash
cd Form-Generator
```

3. **Install dependencies**:

  ```bash
  npm install
  ```

4. **Run the development server**:

  ```bash
  npm run dev
  ```

5. **Open your browser at**:

  ```bash
  http://localhost:5173
  ```

## Usage

1. **Input Schema**: The form is generated dynamically from a JSON schema. The schema defines:

   - Field label
   - Field name (used as the input's `name` attribute)
   - Field type (e.g., text, checkbox, select, textarea, etc.)
   - Field options (for select, checkbox, and radio inputs)
   - Additional attributes such as `required`, `minLength`, `rows`, and `cols`.

2. **Modify Schema**: The schema can be updated in the app by editing the provided JSON in the text area. A new form is generated on the fly when you click the "Generate Form" button.

3. **Form Submission**: On submission, the form data is logged in the console for further processing. It can be easily adapted to send data to a backend API or store it locally.
