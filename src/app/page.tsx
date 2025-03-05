// src/app/page.tsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/background-image.jpg')" }}>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-45 z-0"></div>

      {/* Content (placed above the overlay) */}
      <div className="relative z-10 flex flex-col items-center justify-center font-roboto">
        <h1 className="text-8xl text-center text-white mb-6 mt-[100px]">Welcome to Maila's Souvenir Shop</h1>
        <p className="text-lg gray mb-8">We offer local products that represent Mindanao and the Philippines</p>

        {/* Right-to-Left Slideshow with gap */}
        <div className="relative w-full max-w-8xl overflow-hidden mb-10">
          <div className="flex items-center space-x-4 animate-slide-right-to-left whitespace-nowrap">
            <img src="/images/1.jpg" alt="Placeholder 1" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/3.jpg" alt="Placeholder 3" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/2.jpg" alt="Placeholder 2" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/5.jpg" alt="Placeholder 5" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/6.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/4.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/7.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/8.jpg" alt="Placeholder 2" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/9.jpg" alt="Placeholder 3" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/12.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/11.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/13.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/10.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/1.jpg" alt="Placeholder 1" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/3.jpg" alt="Placeholder 3" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/2.jpg" alt="Placeholder 2" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/5.jpg" alt="Placeholder 5" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/6.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/4.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/7.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/8.jpg" alt="Placeholder 2" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/9.jpg" alt="Placeholder 3" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/12.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/11.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/13.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/10.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
          </div>
        </div>

        {/* Left-to-Right Slideshow with gap */}
        <div className="relative w-full max-w-8xl overflow-hidden">
          <div className="flex items-center space-x-4 animate-slide-left-to-right whitespace-nowrap">
            <img src="/images/16.jpg" alt="Placeholder 2" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/15.jpg" alt="Placeholder 3" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/14.jpg" alt="Placeholder 1" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/17.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/18.jpg" alt="Placeholder 1" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/19.jpg" alt="Placeholder 2" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/20.jpg" alt="Placeholder 3" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/21.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/22.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/23.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/24.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/25.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/16.jpg" alt="Placeholder 2" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/15.jpg" alt="Placeholder 3" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/14.jpg" alt="Placeholder 1" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/17.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/18.jpg" alt="Placeholder 1" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/19.jpg" alt="Placeholder 2" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/20.jpg" alt="Placeholder 3" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/21.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/22.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/23.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/24.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
            <img src="/images/25.jpg" alt="Placeholder 4" className="w-[300px] h-[300px] rounded-lg fade-in" />
          </div>
        </div>
        <br></br><br></br><br></br><br></br>
      </div>
    </div>
  );
};

export default HomePage;
