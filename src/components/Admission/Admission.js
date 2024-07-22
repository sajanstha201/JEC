import React from 'react';
import Image from '../top/Image';
import requirement from '../../media/images/required.jfif';

export default function Admission() {
  return (
    <>
      <Image />

      <div className="font-bold text-4xl md:text-6xl flex items-center justify-center p-5 text-gray-800 font-inter">
        <h1>Admission Requirements</h1>
      </div>

      <div id="requirement" className="flex flex-col md:flex-row items-center justify-center gap-5 p-5">
        <div className="flex flex-col justify-center text-lg md:text-xl text-gray-800 font-semibold bg-gray-200 p-5 md:h-auto rounded-2xl w-full md:w-1/2">
          <p className="text-2xl md:text-3xl text-gray-800 mb-5">Admission to the JEC is based on the following:</p>
          <ol className="list-decimal ml-5 space-y-3">
            <li>Students must have passed their Intermediate Level examination.</li>
            <li>Students must score at least 40% in the IOE Entrance Examination.</li>
          </ol>
        </div>
        <div className="flex items-center justify-center w-full md:w-1/2">
          <img src={requirement} className="w-full h-auto rounded-3xl" alt="Requirement" />
        </div>
      </div>

      <div className="bg-gray-200 mx-5 my-10 p-5 rounded-2xl flex items-center justify-center text-gray-800 text-xl md:text-3xl font-semibold">
        <h4>Score Card (Color Printed)</h4>
      </div>

      <div className="bg-gray-200 mx-5 my-10 p-5 rounded-2xl flex flex-col items-center justify-center text-gray-800 font-semibold">
        <h1 className="text-2xl md:text-4xl text-gray-800 mb-5">Personal Document</h1>
        <ul className="text-lg md:text-2xl text-center space-y-3">
          <li>PP size photo 2x</li>
          <li>SLC Original Marksheet photo</li>
          <li>+2 Original Marksheet photo</li>
        </ul>
      </div>

      <div className="flex items-center justify-center my-10">
        <button className="hover:bg-gray-600 h-12 md:h-16 w-32 md:w-40 text-white font-bold rounded-2xl text-lg md:text-xl bg-gray-800">Apply Now</button>
      </div>
    </>
  );
}
