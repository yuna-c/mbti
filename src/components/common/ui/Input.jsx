export default function Input({ type, name, value, onChange, placeholder, required = false }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customPink"
    />
  );
}
