import React,{useRef,useEffect} from 'react'

function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const stickyHeaderFunc = ()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header')
      }else{
        headerRef.current.classList.remove('sticky_header')
      }
      })
  }
  useEffect(()=>{
     stickyHeaderFunc();
     return window.removeEventListener('scroll',stickyHeaderFunc);
  },[]);
  const handleClick = e => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute('href'); // Corrected 'herf' to 'href'
    const targetElement = document.querySelector(targetAttr);
    
    if (targetElement) { // Check if the target element exists
      const location = targetElement.offsetTop;
  
      window.scrollTo({
        top: location - 80,
        left: 0,
      });
    }
  };
 

// Somewhere in your component function or outside of it


const toggleMenu = () => {
  if (menuRef.current) {
    menuRef.current.classList.toggle('show__menu');
  }
};

  
  return (
    <div 
    ref={headerRef} 
    className='w-full h-[80px] leading-[80px] flex items-center '>
      <div className='container'>
        <div className='flex items-center justify-between '>
          <div className="flex ">
          <div className='flex item-center gap-[10px] '>
          <span className=' bg-purple-500 text-white text-[18px] w-[35px] h-[35px] items-center justify-cneter rounded-full flex p-3'>
            R
          </span>
          
          </div>
         
          <div className='leading-[20px]'>
            <h2 className='text-xl text-purple-600 font-[700]'>mokesh</h2>
            <p className='text-purple-600 text-[16px] font-[500]'>profile</p>
          </div>
          </div>
       
<div>
<div className='menu' onClick={toggleMenu} Ref={menuRef}>
  <ul className='flex gap-10 item-center'>
    <li>    <a onClick={handleClick} className='font-[500] text-purple-400' href='#about'>about </a></ li>
    <li>  <a  onClick={handleClick} className='font-[500] text-purple-400' href='#services'>services</a></li>
    <li> <a onClick={handleClick}  className='font-[500] text-purple-400'href='#portfolio'>portfolio </a></li>
    <li>  <a  onClick={handleClick} className='font-[500] text-purple-400' href='#contact'>contact</a></li>
  </ul> 
</div>
</div>
<div className='p-5 flex gap-7'>
<button className=' flex items-center gap-4 text-black  border border-solid border-black px-2 h-[50px]  hover:text-white  hover:font-[500] hover:bg-slate-900 rounded-xl ease-in duration-300'>
  <i ><svg className='h-[25px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg></i>  <p classname="text-xl">lets talk </p>
</button>
<span  className='text-2xl text-slate-950 cursor-pointer'>

<svg  onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-[30px] h-[30px] mt-3'><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
</span>
</div>

</div>
</div>
</div>
  )
}

export default Header

