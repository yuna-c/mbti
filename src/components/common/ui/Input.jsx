export default function Input({ className, ...props }) {
  return (
    <input
      className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customPink ${className}`}
      {...props}
    />
  );
}
