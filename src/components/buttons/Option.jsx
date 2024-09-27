import hoverSound from "../../../public/audio/hoverSound.wav"
import clickSound from "../../../public/audio/clickSound.wav"

// eslint-disable-next-line react/prop-types
const Option = ({ text, truth, handle }) => {
  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <button
      onMouseEnter={() => playSound(hoverSound)}
      onClick={() => {
        playSound(clickSound)
        handle(truth)
      }}
      className="h-fit p-2 md:p-0 md:h-40 lg:h-48 w-64 hover:scale-110 transition-all duration-150 rounded-xl bg-white border-4 md:border-4 border-primer flex justify-center items-center text-sm md:text-lg"
    >
      {text}
    </button>
  );
};

export default Option;
