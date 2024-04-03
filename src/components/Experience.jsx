import React from 'react'

import trail_image from '../assets/trail_image.jpg'
import html_img from "../assets/html_img.png"
import css_img from "../assets/css_img.png"
import js_img from "../assets/js_img.png"
import python_img from "../assets/python_img.png"
import java_img from "../assets/java_img.png"
import tailwind_img from "../assets/tailwind_img.png"
import github_img from "../assets/github_img.png"
import react_img from "../assets/react_img.png"
import nodejs from "../assets/Nodejs.png"
import nextjs from "../assets/nextjs.png"
import mongodb from "../assets/mongodb.png"
import redux from "../assets/redux.png"
import scss from "../assets/scss.png"
import expressjs from "../assets/expressjs.png"
import bun from "../assets/bun.png"
import styledcomponents from "../assets/styledcomponents.png"
import typescript from "../assets/typescript.png"

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html_img,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css_img,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: js_img,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react_img,
            title: 'React',
            style: 'shadow-purple-800'
        },
        {
            id: 5,
            src: tailwind_img,
            title: 'Tailwind',
            style: 'shadow-sky-200'
        },
        {
            id: 6,
            src: java_img,
            title: 'Java',
            style: 'shadow-green-100'
        },
        {
            id: 7,
            src: github_img,
            title: 'GitHub',
            style: 'shadow-pink-200'
        },
        {
            id: 8,
            src: python_img,
            title: 'Python',
            style: 'shadow-blue-200'
        },
        {
            id: 9,
            src: nodejs,
            title: 'Node.js',
            style: 'shadow-blue-200'
        },
        {
            id: 10,
            src: expressjs,
            title: 'Express.js',
            style: 'shadow-blue-200'
        },
        {
            id: 11,
            src: mongodb,
            title: 'MongoDB',
            style: 'shadow-blue-200'
        },
        {
            id: 12,
            src: styledcomponents,
            title: 'styled components',
            style: 'shadow-blue-200'
        },
        {
            id: 13,
            src: redux,
            title: 'redux',
            style: 'shadow-blue-200'
        },
        {
            id: 14,
            src: typescript,
            title: 'Typescript',
            style: 'shadow-blue-200'
        },
        {
            id: 15,
            src: nextjs,
            title: 'NextJS',
            style: 'shadow-blue-200'
        },
        {
            id: 16,
            src: scss,
            title: 'SCSS',
            style: 'shadow-blue-200'
        },
        {
            id: 17,
            src: bun,
            title: 'Bun',
            style: 'shadow-blue-200'
        },

    ]

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 borger-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>Something to check</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:gap-x-40  gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    techs.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md flex flex-col hover:scale-105 duration-300 py-auto rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-auto mx-auto h-12'/>
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