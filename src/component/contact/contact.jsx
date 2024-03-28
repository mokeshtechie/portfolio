import React from 'react'

const contact = () => {
  return (
   <section id="contact" className='pb-16'>
    <div className='container'>
      <h2 className='text-black font-[700] text-[30px] mb-12 '>Get in touch</h2>
        <div className='md:flex justify-between items-center'>
             <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
             <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124430.06719605015!2d78.86956698780031!3d12.94369832230951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad6c46a7ae8895%3A0xcdcbae4e2409ca70!2sGudiyattam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711535734130!5m2!1sen!2sin" className='border-0 w-full h-full' allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade"></iframe>
             </div>
             <div className=' lg:w-1/2 bg-indigo-100 md:1/2-w sm:w-450px px-4 lg:px-8 py-8 px-4 items-center'>
              <form className='w-full'>
                <div className='mb-5'>
                  <input type="enter your name" className=' focus:outline-none rounded-[5px] w-full p-3' />
                </div>
                <div className='mb-5'>
                  <input type="enter your email" className=' focus:outline-none rounded-[5px] w-full p-3' />
                </div>
                <div className='mb-5'>
                  <input type="enter your subject" className=' focus:outline-none rounded-[5px] w-full p-3' />
                </div>
                <div className='mb-5'>
                  <input type="enter your subject" className=' focus:outline-none rounded-[5px] w-full p-3' />
                </div>
                <div className='mb-5'>
                  <textarea type={Text} rows={3} className=' focus:outline-none rounded-[5px] w-full p-3' />
                </div>
                <button className='w-full p-4 text-[20px] font-[700] text-white bg-slate-600 hover:bg-black rounded-[5px]text-center ease-linear duriation-150'>send message</button>
              </form>
             </div>
        </div>
    </div>
   </section>

  )
}

export default contact