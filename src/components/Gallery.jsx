import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Gallery = () => {
  // Placeholder data for gallery items
  const galleryItems = Array(12).fill(null).map((_, index) => ({
    id: index + 1,
    title: `Gallery Item ${index + 1}`,
    imageUrl: `/api/placeholder/300/300`
  }));

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">School of Art Galleries</h2>
          <p className="mb-2">
            The School of Art galleries in Green Hall provide a year-round forum for the exhibition of work by students,
            faculty, and special guests in the four graduate departments of the School and the undergraduate program.
          </p>
          <p>
            During exhibitions, Green Hall Gallery at 1156 Chapel Street is typically open to the public but due to COVID-19,
            it will remain open only to the School of Art and Yale communities until further notice.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-gray-200 aspect-square flex items-center justify-center">
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
            View More
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;