import React from 'react'

const index = ({title, children}) => {
  return (
    <div className='bg-card_background rounded-3xl h-[420px] sm:h-[520px] overflow-hidden relative'>
    <div className="mt-10 sm:mt-14 text-center relative z-10">
      <h3 className="text-2xl tracking-[-0.02em] sm:text-3xl z-10">{title}</h3></div>
    <div className="flex-grow flex items-center justify-center mt-10 md:mt-14 scale-90 sm:scale-100">
    </div>
    {children}
    </div>
  )
}

export default index