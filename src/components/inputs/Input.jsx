
// eslint-disable-next-line react/prop-types
const Input = ({ type, placeholder, value, onChange, label }) => {
  return (
    <div className="flex flex-col gap-1 md:gap-1.5">
      <label className="font-secularOne text-sm md:text-lg md:font-semibold">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="bg-primer bg-opacity-50 rounded-lg px-4 py-2 text-s md:text-s placeholder:text-xs md:placeholder:text-s placeholder:text-white placeholder:text-opacity-75 text-white font-semibold border-2 border-primer border-opacity-50 focus:outline-none"
      />
    </div>
  );
};

export default Input;
