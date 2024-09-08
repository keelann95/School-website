import React from 'react'

const Footer = () => {
  return (
    <div>
       {/* Footer */}
       <footer className="bg-gray-900 text-white">
        <div className="flex flex-col lg:flex-row justify-between px-8 lg:px-16 py-8">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-xl font-bold font-playfair">Katwanyaa School of Art</h2>
            <p className="text-gray-400 text-sm mt-2">
              © 2024 Katwanyaa School of Art. All rights reserved.
            </p>
          </div>
          <div className="lg:w-1/3">
            <h2 className="text-xl font-bold font-playfair">Explore</h2>
            <ul className="text-gray-400 mt-4">
              <li className="mb-2">
                <a href="#" className="hover:underline">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">About</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Programs</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/3">
            <h2 className="text-xl font-bold font-playfair">Contact Us</h2>
            <p className="text-gray-400 mt-4">
              123 Art Road, Nairobi, Kenya
            </p>
            <p className="text-gray-400 mt-2">
              Phone: +254-123-456-789
            </p>
            <p className="text-gray-400 mt-2">
              Email: info@katwanyaaart.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
