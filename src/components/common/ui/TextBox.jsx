export default function TextBox({ data }) {
  return (
    <div
      className="flex flex-col w-full gap-3 p-4 border border-black rounded-lg shadow-md md:w-1/3 hover:shadow-lg TextBox"
      key={data.id}
    >
      <h2>{data.title}</h2>
      <p>{data.content}</p>
    </div>
  );
}
