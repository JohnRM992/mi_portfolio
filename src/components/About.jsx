import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#ff1470]'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hola, soy Jonathan. Bienvenido a mi pagína </p>
                    </div>
                    <div>
                        <p>Soy desarrollador Full Stack enfocado en el stack MERN actualmente,aunque intento aprender constantemente sobre nuevas tecnologías y mejorar mis habilidades de desarrollador.
                           En mi tiempo libre me gusta crear musica utilizando el software FL Studio y un controlador MIDI.                             
                        </p>
                    </div>
                </div>
         
        </div>
    </div>
  )
}

export default About