const Input = ({ field, value, onChange }) => {
  const { type, name, required, label, options, minLength } = field;

  switch (type) {
    case "text":
    case "email":
    case "number":
    case "password":
      return (
        <div>
          <label>
            {label}:
            <input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              required={required}
              minLength={minLength}
            />
          </label>
        </div>
      );
    case "select":
      return (
        <div>
          <label>
            {label}:
            <select
              name={name}
              value={value}
              onChange={onChange}
              required={required}
            >
              <option value="">Select {name}</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      );
    case "textarea":
      return (
        <div>
          <label>
            {label}:
            <textarea
              name={name}
              value={value}
              onChange={onChange}
              required={required}
            />
          </label>
        </div>
      );
    default:
      return null;
  }
};

export default Input;
