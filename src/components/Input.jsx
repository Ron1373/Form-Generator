const Input = ({ field, value, onChange }) => {
  const { type, name, required, label, options, minLength, rows, cols } = field;

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
              <option value="">Select {label}</option>
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
              rows={rows}
              cols={cols}
            />
          </label>
        </div>
      );
    case "checkbox":
      return (
        <div>
          <label>{label}:</label>
          {options.map((option) => (
            <div key={option}>
              <input
                type="checkbox"
                name={name}
                value={option}
                onChange={onChange}
                checked={value.includes(option)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      );
    case "radio":
      return (
        <div>
          <label>{label}:</label>
          {options.map((option) => (
            <div key={option}>
              <input
                type="radio"
                name={name}
                value={option}
                onChange={onChange}
                required={required}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      );
    case "date":
      return (
        <div>
          <label>
            {label}:
            <input
              type="date"
              name={name}
              value={value}
              onChange={onChange}
              required={required}
            />
          </label>
        </div>
      );
    case "file":
      return (
        <div>
          <label>
            {label}:
            <input type="file" name={name} onChange={onChange} />
          </label>
        </div>
      );
    default:
      return null;
  }
};

export default Input;
