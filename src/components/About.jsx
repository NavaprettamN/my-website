import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur architecto nemo blanditiis cum eligendi mollitia voluptatibus nobis. Asperiores delectus vero fugit hic harum dicta nihil aperiam magni, inventore consequuntur aut!</p>
            <br />
            <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti cupiditate placeat possimus alias, ipsam iste non, esse quos pariatur perferendis ullam vitae unde aliquam cumque! Mollitia enim impedit ducimus quidem.</p>
        </div>
    </div>
  )
}

export default About