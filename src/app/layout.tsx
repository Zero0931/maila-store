// app/layout.tsx
import './globals.css';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Maila\'s Store',
  description: 'A professional webpage for a company or organization',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <nav className="bg-orange-800 p-4 text-white">
          <ul className="flex justify-between font-roboto">
            <li className="font-bold text-xl">Maila's Souvenir Shop</li> {/* Left side content */}
            <div className="ml-auto space-x-4 font-bold"> {/* Adjust text to the right */}
              <Link href="/" className="hover:text-gray-200">Home</Link>
              <Link href="/products" className="hover:text-gray-200">Products</Link>
              <Link href="/about-us" className="hover:text-gray-200">About Us</Link>
              <Link href="/contact-us" className="hover:text-gray-200">Contact Us</Link>
            </div>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
