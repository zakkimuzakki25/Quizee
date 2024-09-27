
// eslint-disable-next-line react/prop-types
const PrimerButton = ({handle, text, widthType='full'}) => {
  return (
    <button onClick={handle} className={`bg-primer w-${widthType} rounded-lg py-2 text-s md:text-s lg:text-s flex justify-center text-white font-semibold focus:outline-none hover:scale-105 transition-all`}>{text}</button>
  )
}

export default PrimerButton