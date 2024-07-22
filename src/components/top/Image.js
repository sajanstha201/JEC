import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import jecaboutimg from '../../media/images/jec-about.png'; // Ensure correct path to your image
import { Link, useLocation } from 'react-router-dom';

const BackDivImg = styled.div`
  background-image: url(${jecaboutimg});
  background-size: cover;
  background-position: center;
  height: 50vh;
  width: 100%;
  background-attachment: fixed;
`;

export default function Image() {
  const [name, setName] = useState('');
  const location = useLocation();

  useEffect(() => {
  
    const pathName = location.pathname;
    setName(pathName.replace('/', '').toUpperCase() || 'HOMEPAGE'); 
  }, [location]);

  return (
    <div>
  
      <div className="font-sans text-2xl ">
        <BackDivImg className=' flex align-start justify-start'>
          <div className="flex flex-col justify-center ms-[100px]    h-full w-full  mt-7 ">
          <h1 className="text-5xl text-white font-bold">{name}</h1>
          </div>
        </BackDivImg>

      
      </div>
    </div>
  );
}
