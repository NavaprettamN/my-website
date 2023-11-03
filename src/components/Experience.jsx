import React from 'react'

import trail_image from '../assets/trail_image.jpg'

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: trail_image,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: trail_image,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: trail_image,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: trail_image,
            title: 'React',
            style: 'shadow-purple-800'
        },
        {
            id: 5,
            src: trail_image,
            title: 'Tailwind',
            style: 'shadow-sky-200'
        },
        {
            id: 6,
            src: trail_image,
            title: 'NEXT JS',
            style: 'shadow-green-100'
        },
        {
            id: 7,
            src: trail_image,
            title: 'GitHub',
            style: 'shadow-pink-200'
        },
        {
            id: 8,
            src: trail_image,
            title: 'Python',
            style: 'shadow-blue-200'
        },
    ]

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 borger-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>Something to check</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    techs.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                    ))
                }

                
            </div>
        </div>
    </div>
  )
}

export default Experience