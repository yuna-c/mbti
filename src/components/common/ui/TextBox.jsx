export default function TextBox({ data }) {
  return (
    <div
      className="flex flex-col w-1/3 gap-3 p-4 border border-black rounded-lg shadow-md hover:shadow-lg TextBox"
      key={data.id || index}
    >
      <h2>{data.title}</h2>
      <p>{data.content}</p>
    </div>
  );
}
