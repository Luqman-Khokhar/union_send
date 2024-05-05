import React from 'react';
import { TiThMenu } from 'react-icons/ti';
import { FaPlay } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import Logo from '../images/logo.png';
import Pic1 from '../images/Ellipse 1.png';
import Pic2 from '../images/Ellipse 2.png';
import Pic3 from '../images/Ellipse 3.png';
import Pic4 from '../images/Ellipse 4.png';
import Rectangle from '../images/Rectangle 1.png';
import BG from '../images/background.png';
const HomePage = () => {
  return (

    <div className='relative'>

    {/* Background Image */}
    <img src={BG} alt='background'  loading="eager" className='absolute top-80 left-0  z-0 '   />
    <div className=' px-2 py-5 md:py-10 md:px-5 sm:px-2 sm:py-10 relative z-10'>

        {/* MENU BAR STARTS */}
    <div className='flex flex-row flex-1 justify-around items-center px-8 md:px-16 lg:px-24 lg:my-5 '>
      <img src={Logo} alt='logo' className='flex-none w-32 lg:w-80 sm:w-32 md:w-60 ' />
      <div className='flex-grow' />
      <div className='flex-none bg-[#2097fb] rounded-full p-2'>
      <TiThMenu className='text-white lg:text-4xl md:text-3xl text-md' />
    </div>
      </div>
        {/* MENU BAR ENDS */}

     {/* CONVERT SECTION STARTS */}
<div className='flex flex-col justify-center items-center my-24 px-[20px] md:gap-10 gap-10 md:px-16 xl:px-[190px] lg:px-[100px] sm:px-20'>

    <div className=' text-white  text-4xl sm:text-6xl lg:text-8xl xl:text-9xl righteous-regular'>
 <h1 className=' '>
 Convert and 
 </h1>
 <h1 className=' '> Send money
 </h1>
    </div>

<p className='text-[#F3F3F399] px-2 text-xl sm:px-30 sm:text-4xl xl:text-5xl '>Quickly and easily send, receive and request money online with UnionSend. Over 180 Countries adn 120 currencies Supported</p>

<div className=' flex flex-col text-2xl lg:text-4xl sm:text-2xl gap-8 mt-3 sm:mt-16'>
<button className=" px-3 py-3  md:px-6 md:py-6 min-w-[120px] text-center   text-white bg-[#2097FB] border border-[#2097FB] rounded active:text-[#2097FB]-500 hover:bg-transparent hover:text-[#2097FB] focus:outline-none focus:ring">
Exchange Rate
  </button> 
  <button className="flex justify-center  sm:text-2xl item-center gap-2 px-3 py-3 md:px-6 md:py-6 min-w-[120px] text-center  text-white border border-white rounded active:text-[#2097FB]-500 hover:bg-transparent hover:text-[#2097FB] focus:outline-none focus:ring">
   <FaPlay className='text-white text-xl mt-2'/>
  See How it Works
</button>   
</div> 
</div>
    {/* CONVERT SECTION ENDS */}

   {/* PRO CONS SECTION STARTS  */}
<div className='flex flex-1 flex-col my-32 md:my-32 px-2 md:ml-20 gap-12 md:gap-14'>

<div className='flex flex-row items-center text-start gap-4 md:gap-10'>
<img src={Pic1} alt='logo' className='w-[80px]   md:w-[200px] h-auto' />
< div className="flex flex-col gap-1 md:gap-6 ">
    
        <h1 className='text-white text-md md:text-5xl'>Why choose unionsend</h1>
        <p className='text-[#F3F3F399] text-sm md:text-4xl'>Top 4 reasons to use unionsend</p>
    
    </div>
</div>

<div className='flex flex-row items-center text-start gap-4 md:gap-10'>
<img src={Pic2} alt='logo' className='w-[80px]   md:w-[200px] h-auto' />
< div className="flex flex-col gap-1 md:gap-6 ">
    
<h1 className='text-white text-md md:text-5xl'>What you can do with union send</h1>
<p className='text-[#F3F3F399] text-md md:text-4xl'>Check out what you can do with unionsend</p>

    </div>
</div>

<div className='flex flex-row items-center text-start gap-4 md:gap-10'>
<img src={Pic3} alt='logo' className='w-[80px]   md:w-[200px] h-auto' />
< div className="flex flex-col gap-1 md:gap-6 ">
  
<h1 className='text-white text-md md:text-5xl'>What people are saying about unionsend</h1>
<p className='text-[#F3F3F399] text-md md:text-4xl'>A payments experience people love a talk about</p>

    </div>
</div>

<div className='flex flex-row items-center text-start gap-4 md:gap-10'>
<img src={Pic4} alt='logo' className='w-[80px]   md:w-[200px] h-auto' />
< div className="flex flex-col gap-1 md:gap-6 ">
    
<h1 className='text-white text-md md:text-5xl'>Payment Solutions for everyone</h1>
<p className='text-[#F3F3F399] text-md md:text-4xl'>Pay online withease</p>
   
    </div>
</div>



</div>
 {/* PRO CONS SECTION ENDS */}

{/* SOCIAL SECTION STARTS */}
<div className='flex flex-row flex-1 text-white ml-5 md:gap-16 md:ml-20 md:mt-30 '>
      <img src={Rectangle} loading="eager" alt='rectangle' className='xl:w-[550px] lg:w-96 sm:w-60 w-36    lg:h-auto sm:h-96 h-80' />
      <div className="flex flex-col justify-start items-start h-screen xl:text-7xl lg:text-5xl sm:text-4xl text-center text-3xl md:text-left font-semibold md:gap-16 gap-8 font-sans pl-5">
        <h1 className=''>Stay in Touch</h1>
        <div className="flex flex-row xl:gap-20 lg:gap-12 sm:gap-10 gap-3 xl:text-7xl lg:text-5xl sm:text-5xl text-3xl sm:pl-0 pl-6 ">
          <FaTwitter />
          <RiInstagramFill />
          <MdMessage />
        </div>
        <h1>Contact us</h1>
        <h1>Monday to Friday</h1>
      </div>
    </div>
{/* SOCIAL SECTION ENDS */}

{/* LICSENSE SECTION STARTS */}
<div className="flex-col  text-left  md:my-20 my-10 mt-[-300px] text-xl md:text-4xl space-y-5 lg:mr-60 ml-3 md:ml-20 mr-2">

<p className='text-[#F3F3F399]'>@2024 unionsend inc.</p>
<p className='text-[#F3F3F399] leading-[2]'>
  UnionSend is regulated and authorised to conduct money transmission in multiple countries around the world. Which is regulated in each country that it operates in.
</p>
<p className='text-[#F3F3F399]'>Banking services provided by unionsend bank.</p>
</div>
{/* LICSENSE SECTION ENDS */}


<button className="md:px-24 md:py-8 md:mt-24 md:mb-10 px-10 py-4 my-16  min-w-[120px] rounded-2xl text-center text-white bg-[#2097FB] border border-[#2097FB]  active:text-[#2097FB]-500 hover:bg-transparent hover:text-[#2097FB] focus:outline-none focus:ring">
<h1 className='text-2xl md:text-6xl'>Download</h1>
<h1 className='text-2xl md:text-6xl'>UnionSend</h1>
  </button>
    </div>
    </div>
  );
};

export default HomePage;
