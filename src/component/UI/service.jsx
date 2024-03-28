import React from 'react'
import Frontend from"../../assets/data/images/front-end.png"
import Backend from "../../assets/data/images/backend.png"
import Ui from "../../assets/data/images/design.png"
import Apps from "../../assets/data/images/apps.png"


const Service = () => {
  return (
    <section id="services">
    <div className='container lg:pt-5'>
        <div className='text-center '>
            <h3 className='text-[30px] font-[800] text-black mt-5'>The Tech i have learned...</h3>
            <p className='lg:max-w-[600px] lg:mx-auto mt-9 text-center text-slate-600 font-[500] text-[20px] leading-7'>
                basicaly i have specialized towards frontend devlopment , based on that tech stack i have learned : reactjs,tailwind ,bootstrap,figma and module css and so on..
            </p>
        </div>

        <div className='flex flex-col justify-center sm:py-12 '>
            <div className='w-full py-3 px-2 sm:mx-auto sm:px-0 '>
                <div className='relative text-gray-700 antialiased text-sm font-semibold '>
                  <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2'>   
                  </div>
                  <div className='mt-6 sm:mt-0 sm:mb-12'>
                          <div className='flex items-center flex-col sm:flex-row'>
                            <div className='flex justify-start  w-full lg:w-1/2 mx-auto items-center'>
                            <div className='w-full  lg:w-1/2 sm:pr-8'>
                                <div data-aos ="fade-right" data-aos-duriation="1200" className='bg-white p-2 rounded shadow-xl group hover:bg-violet-600 cursor-pointer ease-in duration-150 text-center'>
                                    <h3 className='text-violet-600 font-[700] mb-3 group-hover:text-white text-2xl group-hover:font-[600] mt-8 md:mt-8'>
                                       Frontend Development 
                                    </h3>
                                    <p className='text-[15px] leading-6 text-slate-600 group hover:text-black group hover:font-[800]'>
                                       in frontend devlopment i have done real time project which is considered has responsive website has styled over using tailwind, module css and bootstrap as so on...
                                    </p>
                                </div>
                            </div>
                            </div>
                            <div className='absolute rounded-full w-10 h-10 bg-violet-600 left-1/2 transform-translate-x-1/2 -translate-y-4 border-white border-4 items-center flex justify-center mb-8'>
                                <figure>
                                    <img src={Frontend} alt="" />
                                </figure>
                            </div>
                          </div>

                       </div>
                       <div className='mt-6 sm:mt-0 sm:mb-12'>
                          <div className='flex items-center flex-col sm:flex-row'>
                            <div className='flex justify-end  w-full lg:w-1/2 mx-auto items-center'>
                            <div className='w-full  lg:w-1/2 sm:pl-8'>
                                <div data-aos ="fade-left" data-aos-delay="100"data-aos-duriation="1200" className='bg-white p-2 rounded shadow-xl group hover:bg-violet-600 cursor-pointer ease-in duration-150 text-center'>
                                    <h3 className='text-violet-600 font-[700] mb-3 group-hover:text-white text-2xl group-hover:font-[600] mt-8 md:mt-8'>
                                       backend  Development 
                                    </h3>
                                    <p className='text-[15px] leading-6 text-slate-600 group hover:text-black group hover:font-[800]'>
                                       based on backend i have done some specific project by using node js express js has well database like mango dp ...
                                       the project are mention be basic creating api , otp generator and so on
                                    </p>
                                </div>
                            </div>
                            </div>
                            <div className='absolute rounded-full w-10 h-10 bg-violet-600 left-1/2 transform-translate-x-1/2 -translate-y-4 border-white border-4 items-center flex justify-center mb-8'>
                                <figure>
                                    <img src={Backend} alt="" />
                                </figure>
                            </div>
                          </div>

                       </div>
                       <div className='mt-6 sm:mt-0 sm:mb-12'>
                          <div className='flex items-center flex-col sm:flex-row'>
                            <div className='flex justify-start  w-full lg:w-1/2 mx-auto items-center'>
                            <div className='w-full  lg:w-1/2 sm:pr-8'>
                                <div data-aos ="fade-right" data-aos-duriation="1200" className='bg-white p-2 rounded shadow-xl group hover:bg-violet-600 cursor-pointer ease-in duration-150 text-center'>
                                    <h3 className='text-violet-600 font-[700] mb-3 group-hover:text-white text-2xl group-hover:font-[600] mt-8 md:mt-8'>
                                       ui/ux developer
                                    </h3>
                                    <p className='text-[15px] leading-6 text-slate-600 group hover:text-black group hover:font-[800]'>
                                       in ui/ux developer much created on my own procees using react js  as well i used to colned some ui/ux webpage in current days....
                                    </p>
                                </div>
                            </div>
                            </div>
                            <div className='absolute rounded-full w-10 h-10 bg-violet-600 left-1/2 transform-translate-x-1/2 -translate-y-4 border-white border-4 items-center flex justify-center mb-8'>
                                <figure>
                                    <img src={Ui} alt="" />
                                </figure>
                            </div>
                          </div>

                       </div>
                       <div className='mt-6 sm:mt-0 sm:mb-12'>
                          <div className='flex items-center flex-col sm:flex-row'>
                            <div className='flex justify-end  w-full lg:w-1/2 mx-auto items-center'>
                            <div className='w-full  lg:w-1/2 sm:pl-8'>
                                <div data-aos ="fade-left" data-aos-duriation="1200" className='bg-white p-2 rounded shadow-xl group hover:bg-violet-600 cursor-pointer ease-in duration-150 text-center'>
                                    <h3 className='text-violet-600 font-[700] mb-3 group-hover:text-white text-2xl group-hover:font-[600] mt-8'>
                                       app developer
                                    </h3>
                                    <p className='text-[15px] leading-6 text-slate-600 group hover:text-black group hover:font-[800]'>
                                      the certain apps i have created inthe form of cloning in own data base are with help of firbase i try to cloned an webpage of netflix in hepl of imdb data like so on ...and you can reffer in project 
                                    </p>
                                </div>
                            </div>
                            </div>
                            <div className='absolute rounded-full w-10 h-10 bg-violet-600 left-1/2 transform-translate-x-1/2 -translate-y-4 border-white border-4 items-center flex justify-center mb-8'>
                                <figure>
                                    <img src={Apps} alt="" />
                                </figure>
                            </div>
                          </div>

                       </div>
                </div>
            </div>

        </div>
    </div>
    </section>
  )
}

export default Service