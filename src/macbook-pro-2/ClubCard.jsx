import React from 'react'
import logo from '../assets/Asce1.png'
import { Carousel } from './Carousel'

const image = [
    { src: "/image1.png", text: "House of Cards" },
    { src: "/image2.png", text: "Real Estate" },
    { src: "/image3.png", text: "Bridge Designing" },
    { src: "/image4.png", text: "Shipwreck Cove" },
    { src: "/image3.png", text: "Bridge Designing" },
    { src: "/image4.png", text: "Shipwreck Cove" }
]

const ClubCard = () => {
    return (
        <div className="h-screen w-full flex flex-col lg:flex-row bg-blue-300">
            <div className="w-[350px] lg:w-1/5 h-[400px] lg:h-full mx-auto lg:mx-0 overflow-y-hidden overflow-x-hidden object-cover relative">
                <img className='absolute w-72 h-fit lg:h-full lg:w-72 mx-auto top-[-380px] lg:top-0' src={logo} alt='logo' />
            </div>
            <div className="w-full lg:w-4/5 h-full lg:h-screen flex flex-col items-center bg-blue-200 p-5 justify-center">
                <Carousel img={image} />
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Show All</button>
            </div>
        </div>
    )
}

export default ClubCard
