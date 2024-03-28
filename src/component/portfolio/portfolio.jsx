import React from 'react' 
import Foodwebsite from "./food website.png"
import Netflix from "./netflix.png"
import Nike from "./nike.png"
import Responsive from "./responsive.png"
import Weather from "./weather.png"
import Image from "./image search.png"
import Movies from "./movies.png"
import Ecorrmerce from "./e-corrmerce.png"
const Portfolio = () => {
  return (
    <section id='portfolio'>
        <div className='container '>
            <div className='flex items-center justify-center flex-warp'>
                <div className='mb-7 sm:mb-0'>
                <h2 className='text-slate-600 text-[45px] font-[700]'> My recent projects</h2>
                </div>
                
            </div>
            <div className=' items-center gap-10  mt-12 flex-warp lg:flex md:flex  '>
            
              <div data-aos ="zoom-in" data-aos-duriation="1200" className='group  sm:w-[32.2.5%] md:w-[32.2%] lg:[32.2%] relative z-[1] mt-10 shadow-xl rounded-[8px] border-4 border-slate-600'>
                 <figure>
                  <img  className="rounded-[8px]"src={Foodwebsite} alt="" />
                 </figure>
                 <div className='w-full h-full  absolute top-0 left-0 bg-slate-600 group-hover:block z-[5]  hidden bg-opacity-40 '>
                  <div className='flex items-start justify-start w-full gap-7 p-4'>
                  <div  className='w-full '>
                     <p className='text-[30px] text-white'>foodwebsite</p>
                  </div>
                  </div>
                  <div className='items-center flex justify-center gap-4'>
                    <a href="https://food-search-eight.vercel.app/"><button><svg className='h-[40px] w-[40px] text-[20px] text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 16H20V5H4V16ZM13 18V20H17V22H7V20H11V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H13Z"></path></svg></button></a>
                    <a href="https://github.com/mokeshtechie/food-website"><button><svg className='h-[40px] w-[40px] text-[20px] text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg></button></a>
                  </div>
                 </div>
              </div>
              <div data-aos="zoom-in" data-aos-duriation="1500" className='  group  sm:w-[48.5%] md:w-[31.8%] lg:[32.2%] relative z-[1] mt-10 shadow-xl rounded-[8px] border-4 border-slate-600'>
                 <figure>
                  <img  className="rounded-[8px]"src={Netflix} alt="" />
                 </figure>
                 <div className='w-full h-full  absolute top-0 left-0 bg-slate-600 group-hover:block z-[5]  hidden bg-opacity-40'>
                 <div className='flex items-start justify-start w-full gap-7 p-4'>
                  <div  className='w-full '>
                     <p className='text-[30px] text-white'>netflix cloning</p>
                  </div>
                  </div>
                  <div className='items-center flex justify-center gap-4'>
                    <a href="https://netflix-m3gz.vercel.app/"><button><svg className='h-[40px] w-[40px] text-[20px] text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 16H20V5H4V16ZM13 18V20H17V22H7V20H11V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H13Z"></path></svg></button></a>
                    <a href="https://github.com/mokeshtechie/netflix"><button><svg className='h-[40px] w-[40px] text-[20px] text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg></button></a>
                  </div>
                 </div>
              </div>
              <div data-aos="zoom-in" data-aos-duriation="1500"  className='group  sm:w-[48.5%] md:w-[31.8%] lg:[32.2%] relative z-[1] mt-10 shadow-xl rounded-[8px] border-slate-600 border-4'>
                 <figure>
                  <img  className="rounded-[8px]"src={Image} alt="" />
                 </figure>
                 <div className='w-full h-full  absolute top-0 left-0 bg-slate-600 group-hover:block z-[5]  hidden bg-opacity-40'>
                 <div className='flex items-start justify-start w-full gap-7 p-4'>
                  <div  className='w-full '>
                     <p className='text-[30px] text-white'>image search app</p>
                  </div>
                  </div>
                  <div className='items-center flex justify-center gap-4'>
                    <a href="https://image-search-app-main.vercel.app/"><button><svg className='h-[40px] w-[40px] text-[20px] text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 16H20V5H4V16ZM13 18V20H17V22H7V20H11V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H13Z"></path></svg></button></a>
                    <a href="https://github.com/mokeshtechie/Image-searchapp"><button><svg className='h-[40px] w-[40px] text-[20px] text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg></button></a>
                  </div>
                 </div>
              </div>
             
              </div>
              <div className='lg:flex items-center gap-4 flex-warp mt-12  md:flex'>
              <div data-aos="zoom-in" data-aos-duriation="1500" className='group  sm:w-[48.5%] md:w-[31.8%] lg:[32.2%] relative z-[1] mt-10 shadow-xl rounded-[8px] border-slate-600 border-4'>
                 <figure>
                  <img  className="rounded-[8px]"src={Weather} alt="" />
                 </figure>
                 <div className='w-full h-full  absolute top-0 left-0 bg-slate-600 group-hover:block z-[5]  hidden bg-opacity-40'>
                 <div className='flex items-start justify-start w-full gap-7 p-4'>
                  <div  className='w-full '>
                     <p className='text-[30px] text-white'>Weather</p>
                  </div>
                  </div>
                  <div className='items-center flex justify-center gap-4'>
                    <a href="https://react-weather-jade-psi.vercel.app/"><button><svg className='h-[40px] w-[40px] text-[20px] text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 16H20V5H4V16ZM13 18V20H17V22H7V20H11V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H13Z"></path></svg></button></a>
                    <a href="https://github.com/mokeshtechie/react-weather-app"><button><svg className='h-[40px] w-[40px] text-[20px] text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg></button></a>
                  </div>
                 </div>
              </div>
             
              <div data-aos="zoom-in" data-aos-duriation="1500"  className=' group  sm:w-[48.5%] md:w-[31.8%] lg:[32.2%] relative z-[1] mt-10 shadow-2xl rounded-[8px] border-slate-600 border-4'>
                 <figure>
                  <img  className="rounded-[8px]"src={Movies} alt="" />
                 </figure>
                 <div className='w-full h-full  absolute top-0 left-0 bg-slate-600 group-hover:block z-[5]  hidden bg-opacity-40'>
                 <div className='flex items-start justify-start w-full gap-7 p-4'>
                  <div  className='w-full '>
                     <p className='text-[30px] text-white'>movies search app</p>
                  </div>
                  </div>
                  <div className='items-center flex justify-center gap-4'>
                    <a href="https://imdb-movie-api.netlify.app/"><button><svg className='h-[40px] w-[40px] text-[20px] text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 16H20V5H4V16ZM13 18V20H17V22H7V20H11V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H13Z"></path></svg></button></a>
                    <a href=""><button><svg className='h-[40px] w-[40px] text-[20px] text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg></button></a>
                  </div>
                 </div>
              </div>
              <div data-aos="zoom-in" data-aos-duriation="1500"  className=' group  sm:w-[48.5%] md:w-[31.8%] lg:[32.2%] relative z-[1] mt-10 shadow-xl rounded-[8px] border-slate-600 border-4'>
                 <figure>
                  <img  className="rounded-[8px]"src={Ecorrmerce} alt="" />
                 </figure>
                 <div className='w-full h-full  absolute top-0 left-0  bg-slate-600 group-hover:block z-[5]  hidden bg-opacity-40'>
                 <div className='flex items-start justify-start w-full gap-7 p-4'>
                  <div  className='w-full '>
                     <p className='text-[30px] text-white'>ecormerce</p>
                  </div>
                  </div>
                  <div className='items-center flex justify-center gap-4'>
                    <a href=""><button><svg className='h-[40px] w-[40px] text-[20px] text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 16H20V5H4V16ZM13 18V20H17V22H7V20H11V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H13Z"></path></svg></button></a>
                    <a href="https://github.com/mokeshtechie/e-commerce"><button><svg className='h-[40px] w-[40px] text-[20px] text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg></button></a>
                  </div>
                 </div>
              </div>
              </div>
              <div className='lg:flex items-center justify-center gap-4 flex-warp mt-12  md:flex'>
              <div data-aos="zoom-in" data-aos-duriation="1500" className='  group  sm:w-[48.5%] md:w-[31.8%] lg:[32.2%] relative z-[1] mt-10 shadow-xl rounded-[8px] border-4 border-slate-600'>
                 <figure>
                  <img  className="rounded-[8px]"src={Responsive} alt="" />
                 </figure>
                 <div className='w-full h-full  absolute top-0 left-0  bg-slate-600 group-hover:block z-[5]  hidden bg-opacity-40'>
                 <div className='flex items-start justify-start w-full gap-7 p-4'>
                  <div  className='w-full '>
                     <p className='text-[30px] text-white'>ux/ui website</p>
                  </div>
                  </div>
                  <div className='items-center flex justify-center gap-4'>
                    <a href=""><button><svg className='h-[40px] w-[40px] text-[20px] text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 16H20V5H4V16ZM13 18V20H17V22H7V20H11V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H13Z"></path></svg></button></a>
                    <a href=""><button><svg className='h-[40px] w-[40px] text-[20px] text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg></button></a>
                  </div>
                 </div>
              </div>
             
              
              <div data-aos="zoom-in" data-aos-duriation="1500" className='  group  sm:w-[48.5%] md:w-[31.8%] lg:[32.2%] relative z-[1] mt-10 shadow-xl rounded-[8px] border-4 border-slate-600 '>
                 <figure>
                  <img  className="rounded-[8px]"src={Nike} alt="" />
                 </figure>
                 <div className='w-full h-full  absolute top-0 left-0  bg-slate-600 group-hover:block z-[5]  hidden bg-opacity-40'>
                 <div className='flex items-start justify-start w-full gap-7 p-4'>
                  <div  className='w-full '>
                     <p className='text-[30px] text-white'>nike website</p>
                  </div>
                  </div>
                  <div className='items-center flex justify-center gap-4'>
                    <a href="https://netflix-m3gz.vercel.app/"><button><svg className='h-[40px] w-[40px] text-[20px] text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 16H20V5H4V16ZM13 18V20H17V22H7V20H11V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H13Z"></path></svg></button></a>
                    <a href=""><button><svg className='h-[40px] w-[40px] text-[20px] text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg></button></a>
                  </div>
                 </div>
              </div>
              </div>

            
        </div>
    </section>
  ) 
}

export default Portfolio