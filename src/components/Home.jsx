import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* CONTAINER */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#ff1470]'>Hola, mi nombre es</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Jonathan R. Mascareño</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Soy Full Stack Developer</h2>
                {/* <p className='text-[#8892b0] py-4 max-w-[700px]'>Tratando de aprender cosas nuevas constantemente</p> */}

                <div>
                <Link to="work" smooth={true} duration={500}>
                    <button className='text-white group border-2 px-6 py-3 my-5 flex items-center hover:border-[#ff1470] hover:text-[#ff1470] duration-300 rounded-md'>Mis proyectos 
                        <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-2'/></span>
                        
                    </button>
                    </Link>
                </div>
        </div>
    </div>
  )
}

export default Home