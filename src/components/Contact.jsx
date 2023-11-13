import React from 'react'
import trail from '../assets/trail_image.jpg'

const Contact = () => {

  const info = [
    {
      id: 1,
      c : trail,
      link : ''
    },
    {
      id: 2,
      c : trail,
      link : ''
    },
    {
      id: 3,
      c : trail,
      link : ''
    },
    {
      id: 4,
      c : trail,
      link : ''
    },
    {
      id: 5,
      c : trail,
      link : ''
    }
  ]


  return (
    <div className=' bg-gradient-to-t from-gray-800 to-black text-white w-full md:h-screen'>
        <div className=' max-w-screen-lg p-4 mx-auto justify-center flex flex-col w-full h-full'>
            <div className=' pb-8'>
                <h1 className=' text-4xl inline font-bold border-b-4 border-white '>Contact Me</h1>
            </div>
            <div className='flex flex-row justify-center align-middle text-center'>
              {
                info.map(({id, c, link}) => (
                  <div key={id} className=''>
                    <a href={link}><img src={c} className='w-1/2 rounded-md shadow-sm shadow-white'/></a>
                    <p></p>
                  </div>
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Contact