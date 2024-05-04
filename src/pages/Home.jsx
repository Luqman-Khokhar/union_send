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
const HomePage = () => {
  return (
    <div className=' px-20 py-20'>

        {/* MENU BAR STARTS */}
    <div className='flex flex-row flex-1 justify-around items-center px-16 '>
      <img src={Logo} alt='logo' className='flex-none w-80 ' />
      <div className='flex-grow' />
      <div className='flex-none bg-[#2097fb] rounded-full p-2'>
      <TiThMenu className='text-white text-5xl' />
    </div>
      </div>
        {/* MENU BAR ENDS */}

     {/* CONVERT SECTION STARTS */}
<div className='flex flex-col justify-center items-center my-24 px-[315px] gap-10'>

    <div className=''>
 <h1 className='text-8xl text-white font-bold  '>
 Convert and 
 </h1>
 <h1 className='text-8xl text-white font-bold  '> Send money
 </h1>
    </div>

<p className='text-[#F3F3F399] px-30 text-4xl'>Quickly and easily send, receive and request money online with UnionSend. Over 180 Countries adn 120 currencies Supported</p>

<div className=' flex flex-col text-4xl gap-8 mt-16'>
<button className="px-6 py-6 min-w-[120px] text-center  text-white bg-[#2097FB] border border-[#2097FB] rounded active:text-[#2097FB]-500 hover:bg-transparent hover:text-[#2097FB] focus:outline-none focus:ring">
Exchange Rate
  </button> 
  <button className="flex justify-center item-center gap-2 px-6 py-6 min-w-[120px] text-center text-white border border-white rounded active:text-[#2097FB]-500 hover:bg-transparent hover:text-[#2097FB] focus:outline-none focus:ring">
   <FaPlay className='text-white'/>
  See How it Works
</button>   
</div> 
</div>
    {/* CONVERT SECTION ENDS */}

   {/* PRO CONS SECTION STARTS  */}
<div className='flex flex-1 flex-col my-32 ml-20 gap-14'>

<div className='flex flex-row items-center text-start gap-10'>
<img src={Pic1} alt='logo' className='w-[200px] h-auto' />
< div className="flex flex-col gap-6 ">
    
        <h1 className='text-white text-5xl'>Why choose unionsend</h1>
        <p className='text-[#F3F3F399] text-4xl'>Top 4 reasons to use unionsend</p>
    
    </div>
</div>

<div className='flex flex-row items-center text-start gap-10'>
<img src={Pic2} alt='logo' className='w-[200px] h-auto' />
<div className="flex flex-col gap-6 ">
    
        <h1 className='text-white text-5xl'>What you can do with union send</h1>
        <p className='text-[#F3F3F399] text-4xl'>Check out what you can do with unionsend</p>

    </div>
</div>

<div className='flex flex-row items-center text-start gap-10'>
<img src={Pic3} alt='logo' className='w-[200px] h-auto' />
<div className="flex flex-col gap-6 ">
  
        <h1 className='text-white text-5xl'>What people are saying about unionsend</h1>
        <p className='text-[#F3F3F399] text-4xl'>A payments experience people love a talk about</p>

    </div>
</div>

<div className='flex flex-row items-center text-start gap-10'>
<img src={Pic4} alt='logo' className='w-[200px] h-auto' />
<div className="flex flex-col gap-6 ">
    
        <h1 className='text-white text-5xl'>Payment Solutions for everyone</h1>
        <p className='text-[#F3F3F399] text-4xl'>Pay online withease</p>
   
    </div>
</div>



</div>
 {/* PRO CONS SECTION ENDS */}

{/* SOCIAL SECTION STARTS */}
<div className='flex flex-row flex-1 text-white gap-16 ml-20'>
      <img src={Rectangle} alt='rectangle' className='w-[550px] h-auto' />
      <div className="flex flex-col justify-start items-start h-screen text-7xl font-semibold gap-16 font-sans pl-8">
        <h1 className=''>Stay in Touch</h1>
        <div className="flex flex-row gap-20 text-8xl">
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
<div className="flex-col  text-left my-20  text-4xl space-y-10 mr-60 ml-20">

<p className='text-[#F3F3F399]'>@2024 unionsend inc.</p>
<p className='text-[#F3F3F399] leading-[2]'>
  UnionSend is regulated and authorised to conduct money transmission in multiple countries around the world. Which is regulated in each country that it operates in.
</p>
<p className='text-[#F3F3F399]'>Banking services provided by unionsend bank.</p>
</div>
{/* LICSENSE SECTION ENDS */}


<button className="px-24 py-8 mt-24 mb-10  min-w-[120px] rounded-2xl text-center text-white bg-[#2097FB] border border-[#2097FB]  active:text-[#2097FB]-500 hover:bg-transparent hover:text-[#2097FB] focus:outline-none focus:ring">
<h1 className='text-6xl'>Download</h1>
<h1 className='text-6xl'>UnionSend</h1>
  </button>
    </div>
  );
};

export default HomePage;
