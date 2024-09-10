export default function Article({ children, className = '' }) {
  return <article className={`flex flex-col items-center justify-center p-8 Home ${className}`}>{children}</article>;
}
