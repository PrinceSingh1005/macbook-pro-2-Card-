import React from 'react'

const Card = ({img, text}) => {
    return (
        <div className='relative lg:top-[-120px]'>
            <img className="w-full h-60 md:h-80" src={img} alt={text} />
            <p className='text-center mt-6'>{text}</p>
        </div>
    )
}

export default Card