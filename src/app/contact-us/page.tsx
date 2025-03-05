import React from 'react';

const ContactUs = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/background-image.jpg')" }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div> {/* Adjust opacity as needed */}
      
      <h1 className="text-8xl text-center z-20 relative">Contact Us</h1>
      <p className="text-center text-xl mt-6 z-20 relative">Feel free to reach out to us through email or phone.</p>

      <div className="relative mt-12 z-20 p-6 bg-black bg-opacity-30 rounded-lg shadow-lg max-w-lg text-center">
      <div className="flex items-center justify-center">
        <img src="/images/phone.png" alt="Phone Icon" className="h-7 mr-4" /> {/* Phone Icon */}
        <p className="mb-6 mt-5 text-xl"><strong>09205337257</strong></p> 
      </div>
      <div className="flex items-center justify-center">
        <img src="/images/facebook.png" alt="Facebook Icon" className="h-7 mr-4" /> {/* Phone Icon */}
        <p className="mb-6 mt-6 text-xl"><a href="https://www.facebook.com/maila.c.barrios">Maila Carandang Barrios</a></p>
      </div>
      <div className="flex items-center justify-center">
        <img src="/images/gmail.png" alt="Email Icon" className="h-7 mr-4" /> {/* Phone Icon */}
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=maila.barrios@gmail.com" className="mb-6 mt-6 text-xl">maila.barrios@gmail.com</a>
      </div>
      </div>
    </div>
  );
};

export default ContactUs;
