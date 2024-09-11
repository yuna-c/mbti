export default function Article({ children, className = '' }) {
  return (
    <article
      className={`flex flex-col justify-center md:p-14 p-5 xl:w-1/2 max-w-full min-h-[calc(100vh-11rem)] md:w-full sm:w-full rounded-lg bg-white  ${className}`}
    >
      {children}
    </article>
  );
}
