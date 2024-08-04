
// eslint-disable-next-line react/prop-types
const Option = ({ text, truth, handle }) => {
  return (
    <button
      onClick={() => handle(truth)}
      className="h-48 w-64 rounded-xl bg-white border-4 border-primer flex justify-center items-center"
    >
      {text}
    </button>
  );
};

export default Option;
