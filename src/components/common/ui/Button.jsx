export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`text-white rounded-md bg-customPink hover:bg-customPink-light
      focus:ring-2 focus:ring-customPink-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-customPink-dark ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
