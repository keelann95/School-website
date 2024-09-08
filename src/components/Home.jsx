import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  // Blog post data
  const blogPosts = [
    {
      title: 'Calendar and Newsletter',
      date: 'June 24, 2021',
      image: 'https://scontent-mba1-1.xx.fbcdn.net/v/t1.6435-9/189886691_896796587540726_432644374218936796_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeE_N6g9V1s_hEwnSHWMp5w4uZPr9zhLT1e5k-v3OEtPVwo91e7J-tFQrVtcbkhqoNSbTx3xQ1Qs0RGC6Wa2UkLT&_nc_ohc=QUndNBYuR-AQ7kNvgGO4VkF&_nc_ht=scontent-mba1-1.xx&oh=00_AYCYlH78qzEeNc_hem0xOH1zSyb2dSfSw_cYCg2Ds7VHJw&oe=66F962D5',
      link: '#',
    },
    {
      title: 'School News',
      date: 'October 4, 2021',
      image: 'https://scontent-mba1-1.xx.fbcdn.net/v/t1.6435-9/189886691_896796587540726_432644374218936796_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeE_N6g9V1s_hEwnSHWMp5w4uZPr9zhLT1e5k-v3OEtPVwo91e7J-tFQrVtcbkhqoNSbTx3xQ1Qs0RGC6Wa2UkLT&_nc_ohc=QUndNBYuR-AQ7kNvgGO4VkF&_nc_ht=scontent-mba1-1.xx&oh=00_AYCYlH78qzEeNc_hem0xOH1zSyb2dSfSw_cYCg2Ds7VHJw&oe=66F962D5',
      link: '#',
    },
    {
      title: 'Student Voice',
      date: 'October 20, 2021',
      image: 'https://scontent-mba1-1.xx.fbcdn.net/v/t1.6435-9/189886691_896796587540726_432644374218936796_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeE_N6g9V1s_hEwnSHWMp5w4uZPr9zhLT1e5k-v3OEtPVwo91e7J-tFQrVtcbkhqoNSbTx3xQ1Qs0RGC6Wa2UkLT&_nc_ohc=QUndNBYuR-AQ7kNvgGO4VkF&_nc_ht=scontent-mba1-1.xx&oh=00_AYCYlH78qzEeNc_hem0xOH1zSyb2dSfSw_cYCg2Ds7VHJw&oe=66F962D5',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen font-roboto">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative h-[vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage: `url("https://www.businesslist.co.ke/img/cats/secondary-schools.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-gray-300  p-4 sm:p-6 md:p-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-4">
            UNLOCK YOUR CREATIVE POTENTIAL
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
            The Katwanyaa School of Art, one of the premier graduate art programs,
            <br className="hidden sm:block" /> cultivates artists who are inventive,
            rigorous, and engaged.
          </p>
          <div className="flex items-center justify-center text-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              type="button"
              className="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-lg transition duration-300"
            >
              Enroll Now
            </button>
            <button
              type="button"
              className="bg-transparent border border-gray-400 hover:bg-gray-400 hover:text-black text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Why Katwanyaa Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center  p-5">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h1 className="text-2xl sm:text-3xl font-bold font-playfair mb-2">
            WHY KATWANYAA SCHOOL OF ART
          </h1>
          <div className="w-16 sm:w-24 h-1.5 rounded-lg bg-red-500 mt-2 mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Katwanyaa School of Art is a premier graduate institution offering MFAs in diverse artistic disciplines...
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://angazacenter.org/katwanyaaaic010/"
            alt="Library"
            className="rounded-xl w-full h-auto max-h-[500px] object-cover"
          />
        </div>
      </div>

      {/* Apply for Admission Section */}
      <div className="border border-black h-auto lg:h-[130vh] bg-[#2c3034] w-full bg-cover p-5">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-16 space-y-6 lg:space-y-0">
          <img
            src="https://angazacenter.org/wp-content/uploads/2023/07/A.I.C_Katwanyaa_High_School6-300x225.png"
            alt=""
            className="rounded-xl w-[80%] lg:w-[30%] h-auto object-cover"
          />
          <div className="p-4 text-white text-center lg:text-left">
            <h1 className="text-2xl lg:text-3xl font-playfair pb-4">APPLY FOR ADMISSION</h1>
            <div className="w-16 sm:w-24 h-1.5 rounded-lg bg-red-500 mt-2 mb-6"></div>
            <h2>2024 Applications are now open</h2>
            <p className="text-sm mt-4">
              University and college admission is now open for individuals who want to pursue art courses on campus.
            </p>
            <button
              className="bg-white text-black font-semibold mt-4 py-2 px-4 hover:bg-gray-800 transition duration-300 hover:text-white"
              type="button"
            >
              APPLY NOW
            </button>
          </div>
        </div>

        {/* Blog Post Section */}
        <div className="mt-12">
          <h1 className="text-white text-3xl text-center mb-8 font-playfair">Our Blog Post</h1>
          <div className="flex overflow-x-auto space-x-6 p-4">
            {blogPosts.map((post, index) => (
              <div key={index} className="border border-white flex-shrink-0 w-[300px] h-[50vh] rounded-lg bg-white">
                <div className="h-[58%] overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-gray-800 font-semibold font-playfair">{post.title}</h2>
                  <p className="text-gray-500 text-sm">{post.date}</p>
                  <a href={post.link} className="text-purple-600 hover:underline">
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Issue Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-16 mt-16 mb-16 px-8 lg:px-0">
        <h1 className="text-2xl sm:text-3xl font-bold font-playfair">
          The Yale School Of Art Magazine
        </h1>
        <div className="max-w-2xl text-center lg:text-left">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            In our latest issue: Making Yale School Of Art more accessible, an ambitious tri-campus plan, and how to master graphic design and art.
          </p>
          <a href="#" className="text-blue-700 hover:underline">Explore the issue</a>
        </div>
      </div>

      {/* Image with Text Overlay */}
      <div className="relative pb-24 flex justify-center">
        <img
          className="min-w-[100%] shadow-lg"
          src="https://thumbs.dreamstime.com/b/black-white-shot-african-high-school-students-uniform-attentively-listening-classroom-black-white-shot-327215726.jpg"
          alt="Issue feature"
        />
        <div className="absolute top-0 left-0 p-8 text-white bg-opacity-60 bg-black w-full h-full flex flex-col justify-center items-start">
          <span className="bg-purple-600 px-4 py-2 uppercase text-sm font-bold">Feature</span>
          <h2 className="text-4xl font-semibold mt-4">Campus</h2>
          <p className="mt-4 text-lg max-w-lg">
            Who is included. Lorem ipsum dolor sit amet consectetur adipiscing elit. Error excepturi, ducimus
            asperiores cupiditate fugiat adipisci.
          </p>
        </div>
      </div>

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
  );
};

export default Home;
