import React from 'react'

import Node from '../assets/node.png'
import MySql from '../assets/mysql.png'
import Firebase from '../assets/firebase.png'
import ReactJs from '../assets/react.png'
import Mongo from '../assets/mongo.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import JavaScript from '../assets/javascript.png'


const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
                {/* CONTAINER */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
                <div >
                    <p className='text-4xl font-bold inline border-b-4 border-[#ff1470]'>Skills</p>
                    <p className='py-4'>Tecnologías con las que he trabajado</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

                    
                    <div className='border-2 border-gray-300 rounded-md h-24 p-2 hover:border-[#ff1470] hover:scale-110 duration-500'>
                        <img src={Node} alt="Icono de Node" className='w-14 mx-auto'/>
                        <p className='pt-[5px]'>Node</p>
                    </div>
                    <div className='border-2 border-gray-300 rounded-md h-24 p-2 hover:border-[#ff1470] hover:scale-110 duration-500'>
                        <img src={MySql} alt="Icono de Node" className='w-20 mx-auto'/>
                        <p className='pt-[5px]'>MySql</p>
                    </div>
                    <div className='border-2 border-gray-300 rounded-md h-24 p-2 hover:border-[#ff1470] hover:scale-110 duration-500'>
                        <img src={Firebase} alt="Icono de Node" className='w-14 mx-auto'/>
                        <p className='pt-[5px]'>Firebase</p>
                    </div>
                    <div className='border-2 border-gray-300 rounded-md h-24 p-2 hover:border-[#ff1470] hover:scale-110 duration-500'>
                        <img src={ReactJs} alt="Icono de Node" className='w-14 mx-auto'/>
                        <p className='pt-[5px]'>React</p>
                    </div>
                    <div className='border-2 border-gray-300 rounded-md  h-24 p-2 hover:border-[#ff1470] hover:scale-110 duration-500'>
                        <img src={Mongo} alt="Icono de Node" className='w-14 mx-auto'/>
                        <p className='pt-[5px]'>Mongo</p>
                    </div>
                    <div className='border-2 border-gray-300 rounded-md  h-24 p-2 hover:border-[#ff1470] hover:scale-110 duration-500'>
                        <img src={Github} alt="Icono de Node" className='w-14 mx-auto'/>
                        <p className='pt-[5px]'>Github</p>
                    </div>
                    <div className='border-2 border-gray-300 rounded-md  h-24 p-2 hover:border-[#ff1470] hover:scale-110 duration-500'>
                        <img src={Tailwind} alt="Icono de Node" className='w-14 mx-auto'/>
                        <p className='pt-[5px]'>Tailwind</p>
                    </div>
                    <div className='border-2 border-gray-300 rounded-md  h-24 p-2 hover:border-[#ff1470] hover:scale-110 duration-500'>
                        <img src={JavaScript} alt="Icono de Node" className='w-14 mx-auto'/>
                        <p className='pt-[5px]'>JavaScript</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Skills