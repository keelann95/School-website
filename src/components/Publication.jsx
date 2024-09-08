import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Publication = () => {
  return (
    <>
      <Navbar />

      <div className='pt-24 px-6 md:px-12'>
        <div className='md:flex md:space-x-12'>
          {/* Left section with publication dates */}
          <div className='md:w-[40%] w-full mb-8'>
            <h1 className='pl-4 md:pl-0 text-black font-bold text-4xl md:text-5xl font-playfair pb-6'>
              Publication
            </h1>
            <p className='pl-4 md:pl-0 text-gray-700 font-playfair pb-8 text-lg md:text-xl'>
              Publications from New Haven
            </p>

            <div className='pl-4 md:pl-0 text-blue-800 font-roboto flex flex-col gap-4'>
              <ul>
                {[
                  'June 25, 2021',
                  'May 22, 2020',
                  'Feb 25, 2020',
                  'Jan 21, 2020',
                  'Nov 18, 2019',
                  'Oct 15, 2019',
                  'Sept 12, 2019',
                  'Jul 10, 2019',
                  'May 15, 2019',
                  'Apr 7, 2019',
                ].map((date) => (
                  <li key={date} className='hover:underline my-4'>
                    <a href='#'>{date}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right section with publication details and images */}
          <div className='md:w-[60%] w-full'>
            {[
              {
                title: 'Body of Work: Yale School of Art MFA 2020',
                published: '2021',
                description:
                  'Body of Work showcases the collected work of the graduating MFA Class of 2020 and marks the fourth installment of Yale School of Art\'s all-school MFA book series.',
                imgSrc: 'https://via.placeholder.com/150',
              },
              {
                title: 'Body of Work: Yale School of Art MFA 2019',
                published: '2019',
                description:
                  'Featuring a foreword by Stavros Niarchos Foundation Dean and Professor of Art Marta Kuzma, with contributions from Emma Gregoline and Emile Mausner.',
                imgSrc: 'https://via.placeholder.com/150',
              },
              {
                title: 'Sermon of the Nonresponse by Fred Moten',
                published: '2018',
                description:
                  'Sermon of the Nonresponse offers profound insights into modern art and culture with preamble by Stavros Niarchos Foundation Dean.',
                imgSrc: 'https://via.placeholder.com/150',
              },
            ].map((publication, index) => (
              <div
                key={index}
                className='mb-8 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white flex space-x-4 items-start'
              >
                <img
                  src={publication.imgSrc}
                  alt={publication.title}
                  className='w-32 h-32 object-cover rounded-lg'
                />
                <div>
                  <h2 className='text-2xl font-semibold mb-2'>{publication.title}</h2>
                  <p className='text-gray-600 mb-4'>Published {publication.published}</p>
                  <p className='text-gray-700'>{publication.description}</p>
                  <button className='mt-4 bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:from-blue-600 hover:to-green-500'>
                    View More Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
    
  );
};

export default Publication;
