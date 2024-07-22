import React from 'react';

export  const MapJEC = () => {

  return (
    <div>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7065.981226302556!2d85.31243600000002!3d27.686685!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194be4c7eb7f%3A0xc69a5e26c21fb3ef!2sJanakpur%20Engineering%20College!5e0!3m2!1sen!2snp!4v1721615870386!5m2!1sen!2snp"
        style={{ border: 0, width: '100%', height: '50vh', alignItems: 'end', justifyContent:'flex-end', marginTop:'4rem' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    </div>
  );
};


