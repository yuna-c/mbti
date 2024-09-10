export default function Button({ children, onClick, className, type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white rounded-md bg-red-400 hover:bg-red-300 transition
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300 ${className}`}
    >
      {children}
    </button>
  );
}
