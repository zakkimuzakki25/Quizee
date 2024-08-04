const Loading = () => {
  return (
    <div className={`flex w-full h-full justify-center items-center bg-white z-40 fixed`}>
        <ul className="flex flex-row lg:gap-3 sm:gap-3 gap-1">
            <li style={{
                animationDelay: '200ms',
            }} className="animate-grow shadow-loading delay-100 lg:w-3 lg:h-3 sm:w-3 sm:h-3 w-1 h-1 bg-primer rounded-full"/>
            <li style={{
                animationDelay: '400ms',
            }} className="animate-grow shadow-loading delay-300 lg:w-3 lg:h-3 sm:w-3 sm:h-3 w-1 h-1 bg-primer rounded-full"/>
            <li style={{
                animationDelay: '600ms',
            }} className="animate-grow shadow-loading delay-500 lg:w-3 lg:h-3 sm:w-3 sm:h-3 w-1 h-1 bg-primer rounded-full"/>
            <li style={{
                animationDelay: '800ms',
            }} className="animate-grow shadow-loading delay-700 lg:w-3 lg:h-3 sm:w-3 sm:h-3 w-1 h-1 bg-primer rounded-full"/>
            <li style={{
                animationDelay: '1000ms',
            }} className="animate-grow shadow-loading delay lg:w-3 lg:h-3 sm:w-3 sm:h-3 w-1 h-1 bg-primer rounded-full"/>
        </ul>
    </div>
  )
}

export default Loading