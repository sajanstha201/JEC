import React from 'react'
import Image from '../top/Image'
import requirement from '../../media/images/required.jfif'


export default function Admission() {
  return (
    
      <>
      <Image/>

      <div className='font-bold text-[70px] '>
      <h1>Admission Requirements</h1>
      </div>
      <div id="requirement" className=' flex  items-center justify-center gap-5 h-[400px] pb-5 pt-5' >
       <div className=' flex flex-col  justify-center text-2xl text-white font-bold bg-[#AEC5EB] h-[380px]   rounded-2xl'>
        <p className='text-[35px] text-black ms-2'>Admission to the JEC is based on the following:</p>
        <ol className='ms-5 mt-10'>
            <li className=''> 1. Students must have passes their Intermediate Level examination.</li>
            <li className=' mt-3'>2. Students must score at least 40% in IOE Entrance Examination.</li>
        </ol>
        </div>
        <div>
             <img src={requirement} className='h-[380px] rounded-3xl'></img>
        </div>
      </div>

      <div className='h-[100px]  bg-[#AEC5EB] m-5  rounded-2xl flex items-center justify-center text-white text-[40px] font-bold'>
      <h4>Score Card(Color Printed)</h4>
      </div>

      <div className='h-[250px] bg-[#AEC5EB] m-5 rounded-2xl flex flex-col items-center justify-center text-white font-bold '>
        <h1 className='text-[40px] text-black mt-3 '>Personal Document</h1>
        <ul className='text-[30px] text-center mb-[30px] mt-[20px]' >
            <li >1. PP size photo 2x</li>
            <li>2. SLC Original Marksheet photo</li>
            <li>3. +2 Original Marksheet photo</li>

        </ul>
        </div>

        <div className='my-[55px]'>
            <button className='hover:bg-green-600 h-[70px] w-[150px] text-white font-bold rounded-2xl text-[25px] bg-sky-700'>Apply Now</button>
        </div>
        


      </>
    
  )
}
