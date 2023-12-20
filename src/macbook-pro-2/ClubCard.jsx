import React from 'react'
import Card from './Card'
import logo from '../assets/Asce.png'
import img1 from '../assets/image1.png'
import img2 from '../assets/image2.png'
import img3 from '../assets/image3.png'
import img4 from '../assets/image4.png'
const ClubCard = () => {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row bg-blue-300">
      <div className="w-96 lg:w-1/4 md:h-[400px] lg:h-[600px] bg-blue-300 mx-auto lg:mx-0">
        <img className='lg:h-fit mt-0 lg:mt-44' src={logo} alt='logo' />
      </div>
      <div className="w-full h-full flex flex-col items-center bg-blue-200 p-5">
          <div className='w-7/10 h-fit lg:h-80 mt-60 grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 md:justify-evenly gap-4 bg-white p-14 rounded-3xl text-sm md:text-lg'>
            <Card img={img1} text="House of Cards" />
            <Card img={img2} text="Real Estate" />
            <Card img={img3} text="Bridge Designing" />
            <Card img={img4} text="Shipwreck Cove" />
            <div class="lg:top-[60px] border-2 border-gray-600 w-10 h-10 rounded-full flex items-center justify-center relative sm:ml-10 md:ml-28 lg:ml-5">
              <div class="border-t-2 border-r-2 transform rotate-45 w-2 h-2 border-black"></div>
            </div>
          </div>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Show All</button>
      </div>
    </div>
  )
}

export default ClubCard
