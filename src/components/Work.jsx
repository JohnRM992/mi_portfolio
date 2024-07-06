import React from "react";
import CafeTinta from '../assets/WorkImage1.jpg'
const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
      {/* CONTAINER */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#ff1470]">Trabajo</p>
          <p className="py-6">Algunos de mis recientes proyectos</p>
        </div>

        <div 
        // Container
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}
          <div
          style={{backgroundImage: `url(${CafeTinta})`}}
           className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* HOVER EFFECT  */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="flex flex-col text-center">
                <span className='text-2xl font-bold text-white'>Editorial/Blog</span>
                <span className="text-2xl font-bold text-white tracking-wider">
                  Full Stack(MERN)
                </span>
                </div>

                <div className="pt-8 text-center">
                  <a href="https://editorialmern-repo.onrender.com/" target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                  </a>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
