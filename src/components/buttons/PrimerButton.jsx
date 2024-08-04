
// eslint-disable-next-line react/prop-types
const PrimerButton = ({handle, text}) => {
  return (
    <button onClick={handle} className='bg-primer w-full rounded-lg py-2 text-s flex justify-center text-white font-semibold focus:outline-none'>{text}</button>
  )
}

export default PrimerButton