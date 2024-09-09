export default function Button({ children, onClick, className, type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-3 py-1 ml-3 text-sm text-white rounded-md bg-stone-950 hover:bg-stone-500 
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
    >
      {children}
    </button>
  );
}
