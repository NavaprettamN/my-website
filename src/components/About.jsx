import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>Welcome to my digital space! I'm Navaprettam N, an astute programmer with a rich background in Computer Science and Engineering. Fueled by an insatiable curiosity, I deftly navigate the technological landscape. Proficient in HTML, CSS, JavaScript (including React.js), Node.js, Express.js, MongoDB, PHP, Python, C, and Java, my diverse skill set is finely honed.</p>
            <br />
            <p className='text-xl'>With a solid academic foundation, I adeptly apply core software development principles to fashion elegant solutions. I've excelled in projects spanning dynamic front-end interfaces, robust server-side applications, and intricate database management. Renowned for diligence and adaptability, I am poised to contribute exceptional value to any tech-driven endeavor. Explore my portfolio for a glimpse into my world of innovation and problem-solving prowess.</p>
        </div>
    </div>
  )
}

export default About