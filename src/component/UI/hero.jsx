import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from "./image.jpg"
import CountUp from 'react-countup';


const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500 // Setting default duration for all animations to 1500ms
    });
  }, []);
  return (
    <section className='pt-0    ' id="about"> {/* Corrected syntax */}
      <div className='container pt-14 '>
        <div className='lg:flex items-center  sm:flex-col md:flex-row  '>
          <div className='w-full md:basis-1/2'>
            <h5 data-aos="fade-right" className='text-slate-600 '>hello welcome</h5> {/* Removed data-aos-duration attribute */}
            <h1 data-aos="fade-up" className='text-[1.8rem] sm:text-[40px] text-black mt-7 leading-6 font-[800]md:leadind-14 md:[60px]'>
              hi I'am Mokesh  <br/>
             <p className='mt-6 '>software developer</p> 
            </h1>
            <div data-aos="fade-up" 
            data-aos-duration="1800"
            data-aos-delay="200"
            className='flex item-center gap-9 mt-7'
            >
              <a href="#contact">
                <button className='bg-violet-600 text-white font-[500] flex items-center py-2 px-6 rounded-[8px] hover:bg-slate-900 duration-300 ease-in  '><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"className='h-[20px]'><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg> hire me</button> </a>
                <a href="portfolio" className='text-voilet-600 border-b border-slate-900 font-[600] text-16px border-solid sm:text-[20px]'> see my portfolio</a>
             
            </div>
            <div data-aos="fade-left" 
            data-aos-duration="1800" className='mt-9 text-slate-900 font-[500] text-[18px]'>
              <p>hi this mokesh , i have proud and love <br/>to be an fronend developer.<br/>
              has a fresher waiting for nice oppturtunity to convey my knownledge</p>
            </div>
            <div className='flex items-center gap-7 mt-9 '>
              <span className='font-[500] text-[35px]  text-violet-800'>follow me :</span>
              <span><a href="https://github.com/mokeshtechie"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='h-[38px] text-black'><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg></a></span>
              <span><a href="linkedin.com/in/mokesh-ramadoss-1bb3682a2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='h-[38px] text-black'><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></a></span>
            </div>
          </div>
          <div className='  border-red-400 max-w-[410px] p-8 sm:mt-0 basis-1/2 mx-auto'>
        <div className=' px-30 bg-violet-800 py-40 rounded-full items-center mt-7  '>
        <img  className='rounded-full w-[250px] h-[250px] flex  items-center ml-12 lg:w-100px ' src={image}alt="" />
        
        </div>
        </div>
        <div className=' lg:basis-1/5 flex justify-between items-center mt-10 flex-warp gap-3 md:mt-0 md:flex-row lg:flex-col md:justify-end md:text-end md:flex-row gap-4'>
          <div className=' mb-10'>
          <h2 className="text-black font-[700] text-[32px]">
            <CountUp start={2019} end={2023} duration={4} suffix="+"/>
          </h2>
          <h3 className='text-[18px] font-[500] text-slate-900 '>
            year of graduation
          </h3>
          </div>
          <div className=' mb-10'>
            <h2 className='text-[32px] text-black font-[700] '>
              <CountUp start={0} end={6} duriation={4} suffix='+'/>
            </h2>
            <h4 className='text-[18px] font-[500] text-slate-900 '>
              exprience of mern stack
            </h4>
          </div>
          <div className=' mb-10 '>
            <h2 className='text-[32px] text-black font-[700] '>
              <CountUp start={0} end={34} duriation={4} suffix='+'/>
            </h2>
            <h4 className='text-[18px] font-[500] text-slate-900 '>
              no of projects
            </h4>
          </div>
          <div className=' mb-10'>
            <h2 className='text-[32px] text-black font-[700] '>
              <CountUp start={0} end={100} duriation={4} suffix='%'/>
            </h2>
            <h4 className='text-[18px] font-[500] text-slate-900 '>
              Skills and communication 
            </h4>
          </div>
         
        </div>
       
      </div>
      </div>
    
    </section>
  );
};

export default Hero;
