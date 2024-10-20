import React from 'react'

type ConvertableProps = {
    text: string,
    zIndex:number
}

const ConvertableSlide = (props:ConvertableProps) => {
    const {text,zIndex} = props
  return (
    <div style={{zIndex}} className={`bg-slate-500 shadow-xl -mr-4 w-12 h-12 flex justify-center items-center hover:-translate-y-5 transition-transform slide-rotate-3d`}>
        {text}
    </div>
  )
}

export default ConvertableSlide