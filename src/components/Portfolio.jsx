import React from 'react'
import portfolio_react from "../assets/portfolio_react_img.png"
import portfolio_html from "../assets/portfolio_html_css.png"
import akele_bekar from "../assets/akele_bekar.png"
import todo from "../assets/todo.png"
import fpgrowth from "../assets/fpgrowth.png"
import traffic_sim from "../assets/traffic_sim.png"

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: portfolio_react,
            link_d: 'https://navaprettamn.netlify.app/',
            link_c: 'https://github.com/NavaprettamN/my-website'
        },
        {
            id: 2,
            src: portfolio_html,
            link_d: 'https://navaprettamn.github.io/',
            link_c: 'https://github.com/NavaprettamN/NavaprettamN.github.io'
        },
        {
            id: 3,
            src: akele_bekar,
            link_d: 'https://github.com/jainvpranav/Akele-beCar',
            link_c: 'https://github.com/jainvpranav/Akele-beCar'
        },
        {
            id: 4,
            src: todo,
            link_d: 'https://navas-todo.netlify.app/',
            link_c: 'https://github.com/NavaprettamN/Todo-app'
        },
        {
            id: 5,
            src: fpgrowth,
            link_d: 'https://navaprettamn.github.io/fpgrowth_algo/',
            link_c: 'https://github.com/NavaprettamN/fpgrowth_algo'
        },
        {
            id: 6,
            src: traffic_sim,
            link_d: 'https://github.com/NavaprettamN/traffic_simulation/',
            link_c: 'https://github.com/NavaprettamN/traffic_simulation/'
        }
    ]

    return (

    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>check out my works</p>
            </div>

            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
                portfolios.map(({id, src, link_d, link_c}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
                        <div className=' flex items-center justify-center'>
                            <button className=' w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105'><a href={link_d} target='_blank' rel='noreferrer'>Demo</a></button>
                            <button className=' w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105'><a href={link_c} target='_blank' rel='noreferrer'>Code</a></button>
                        </div>
                    </div>
                ))
            }


                
            </div>
        </div>
    </div>
  )
}

export default Portfolio