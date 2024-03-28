import React from 'react'

function Footer() {
  return (
  <footer  className='bg-black pt-12'>
    <div className='container'>
    <div className='sm:flex justify-between items-center w-full md:gap-8'>
        <div className='w-full sm:w-1/2 flex-col flex justify-center items-center '>
          <div>
          <h2 className='text-[30px] font-[700]  leading-10 text-white pb-8'>Do you want to make beautifull <br/> products?</h2>
          </div>
          
          <div className='pb-5'>
            <a href="#contact">
                <button className='bg-violet-600 text-white font-[500] flex items-center py-2 px-6 rounded-[8px] hover:bg-slate-900 duration-300 ease-in  '><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"className='h-[20px]'><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg> hire me</button> </a>
             </div>

        </div>
        <div className='w-full sm:w-1/2'>
          <p className='text-white text-center'> “Responsive Web Design always plays an important role whenever going to promote your website.” </p>
        </div>
      </div>
    </div>
     
      
    
  </footer>
    
  )
}

export default Footer
