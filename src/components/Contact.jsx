import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-[#0a192f] w-full h-screen flex justify-center items-center p-4'>
            <form action="https://getform.io/f/bgdyynma" method="POST" className='flex flex-col max-w-[600px] w-full '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#ff1470] text-gray-300'>Contacto</p>
                    <p className='text-gray-300 py-4'>Rellena este formulario para contactarme</p>
                </div>
                <input type="text" placeholder='Nombre' name='name' className='bg-[#ccd6f6] my-4 p-2 rounded-md outline-0 focus-within:border-2 focus-within:border-[#ff1470] border-2'/>
                <input type="text" placeholder='Correo' name='email' className='bg-[#ccd6f6] my-4 p-2 rounded-md outline-0 focus-within:border-2 focus-within:border-[#ff1470] border-2'/>
                <textarea name="message" rows="10" id="" className='bg-[#ccd6f6] my-4 p-2 rounded-md outline-0 focus-within:border-2 focus-within:border-[#ff1470] border-2' placeholder="Mensaje..."></textarea>
                <button className='  text-white  border-2 px-4 py-3 my-8 mx-auto hover:border-[#ff1470] hover:text-[#ff1470] duration-300 rounded-md w-28'>Enviar</button>

            </form>
    </div>
  )
}

export default Contact