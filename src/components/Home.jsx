import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="min-h-screen font-roboto">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage: `url("https://www.businesslist.co.ke/img/cats/secondary-schools.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-gray-300 p-6 md:p-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4">
            UNLOCK YOUR CREATIVE POTENTIAL
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            The Katwanyaa School of Art, one of the premier graduate art programs, <br className="hidden sm:block" />
            cultivates artists who are inventive, rigorous, and engaged.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              type="button"
              className="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-lg transition duration-[0.4s]"
            >
              Enroll Now
            </button>
            <button
              type="button"
              className="bg-transparent border border-gray-400 hover:bg-gray-400 hover:text-black text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition duration-[0.4s]"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Why Katwanyaa Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center p-5">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h1 className="text-2xl sm:text-3xl font-bold font-playfair mb-2">
            WHY KATWANYAA SCHOOL OF ART
          </h1>
          <div className="w-24 sm:w-32 h-1.5 rounded-lg bg-red-500 mt-2 mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Katwanyaa School of Art is a premier graduate institution offering MFAs in diverse artistic disciplines. Our programs are designed to propel you into a thriving market with competitive salaries. Perfect for aspiring graphic designers, we provide comprehensive training in brand consistency, logo creation, layout design, typography, and a blend of digital and traditional techniques. Our holistic approach ensures you develop a versatile skill set, preparing you for a successful career in the dynamic world of art and design.
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
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pr-5 lg:space-x-16 space-y-6 lg:space-y-0">
          <img
            src="https://angazacenter.org/wp-content/uploads/2023/07/A.I.C_Katwanyaa_High_School6-300x225.png"
            alt=""
            className="rounded-xl w-[80%] lg:w-[30%] h-auto lg:h-[70%] object-cover"
          />
          <div className="p-4 text-white text-center lg:text-left">
            <h1 className="text-2xl lg:text-3xl pb-7 font-playfair">APPLY FOR ADMISSION</h1>
            <div className="w-24 sm:w-32 h-1.5 rounded-lg bg-red-500 mt-2 mb-6"></div>
            <h2 className="pt-2 lg:pt-7">2024 Applications are now open</h2>
            <p className="text-sm pt-4 lg:pt-7 pb-6">
              University and college admission is now open for individuals who want to pursue art courses on campus.
            </p>
            <button
              className="bg-white text-black font-semibold mt-4 py-2 px-4 sm:py-3 sm:px-6 hover:bg-gray-800 transition duration-[0.4s] hover:text-white"
              type="button"
            >
              APPLY NOW
            </button>
          </div>
        </div>

        {/* Blog Post Section */}
        <div>
          <div className="flex justify-center items-center text-center mt-12">
            <h1 className="text-white text-3xl p-5 font-playfair">Our Blog Post</h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-10 space-x-0 lg:space-x-16 pb-8">
            <div className="border border-white w-[80%] lg:w-[15%] h-[50vh] rounded-lg bg-white">
              <div className="h-[70%] overflow-hidden rounded-t-lg">
                <img
                  src="https://scontent-mba1-1.xx.fbcdn.net/v/t1.6435-9/189886691_896796587540726_432644374218936796_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeE_N6g9V1s_hEwnSHWMp5w4uZPr9zhLT1e5k-v3OEtPVwo91e7J-tFQrVtcbkhqoNSbTx3xQ1Qs0RGC6Wa2UkLT&_nc_ohc=QUndNBYuR-AQ7kNvgGO4VkF&_nc_ht=scontent-mba1-1.xx&oh=00_AYCYlH78qzEeNc_hem0xOH1zSyb2dSfSw_cYCg2Ds7VHJw&oe=66F962D5"
                  alt="Calendar and Newsletter"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-gray-800 font-semibold font-playfair">Calendar and Newsletter</h2>
                <p className="text-gray-500 text-sm">June 24, 2021</p>
                <a href="#" className="text-purple-600 hover:underline">Read about our operations</a>
              </div>
            </div>

            <div className="border border-white w-[80%] lg:w-[15%] h-[50vh] rounded-lg bg-white">
              <div className="h-[70%] overflow-hidden rounded-t-lg">
                <img
                  src="https://scontent-mba1-1.xx.fbcdn.net/v/t1.6435-9/189121077_896796477540737_5900973817657309439_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeEcZjNweYU3dmM8o0OT3bm5qlt-ikgUCxCqW36KSBQLEBtKJaC_iboH2I9X2XSgV27Qs_kA6pGfyZInmcBNz2bb&_nc_ohc=k2wPin7dttMQ7kNvgFcPk8f&_nc_ht=scontent-mba1-1.xx&_nc_gid=A_Ob8Y3bK8GkxVHF0USomlj&oh=00_AYClegP-1gHUaV4G4akGdgqbmwhv8B9syY11Zx9JTzCEmg&oe=66F97097"
                  alt="School News"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-gray-800 font-semibold font-playfair">School News</h2>
                <p className="text-gray-500 text-sm">October 4, 2021</p>
                <a href="#" className="text-purple-600 hover:underline">Read the latest news about our development</a>
              </div>
            </div>

            <div className="border border-white w-[80%] lg:w-[15%] h-[50vh] rounded-lg bg-white">
              <div className="h-[70%] overflow-hidden rounded-t-lg">
                <img
                  src="https://scontent-mba1-1.xx.fbcdn.net/v/t1.6435-9/186558358_896796554207396_3430534477415907757_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeFJpIbUfJ0avOBfkjGBOatyk3AXkF6R9rCTcBeQXpH2sGRfRYebCGm1OE-wotrAOJWzC00nnl0fSf0ubpmhbjGC&_nc_ohc=bYO83wDrk8EQ7kNvgG54x21&_nc_ht=scontent-mba1-1.xx&oh=00_AYATmSZN3TmTD9qk70fiMqmdbHeCAvbawgEstEz467Fkjg&oe=66F96ACD"
                  alt="Student Voice"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-gray-800 font-semibold font-playfair">Student Voice</h2>
                <p className="text-gray-500 text-sm">October 20, 2021</p>
                <a href="#" className="text-purple-600 hover:underline">What the students have to say and what they think...</a>
              </div>
            </div>
          </div>
        </div>
      </div>
             {/* daily issue*/}
             <div className='  flex justify-center items-center mt-[75px] mb-[75px]'>
          <div className=' flex pl-[100px] space-x-96 justify-center items-center'>
          <h1 className="text-2xl sm:text-3xl font-bold font-playfair  " >The Yale School Of Art Magazine</h1>
         <div>
          <p className=' text-lg text-gray-600 leading-relaxed'>In our latest issue:Making Yale School Of Art more accessible, an ambitiuos <br />tri-campus plan,how to master graphic design and art,photographic , charting <br />the history of best Art college in th world</p>
          <a className=' text-blue-700 hover:underline' href="#">Explore the issue</a>
         </div> 
          </div>
        </div>

        {/* image  */}
        <div className=' flex justify-center items-center w-[50%] h-[10vh]'>
          <img src="https://scontent.fnbo8-1.fna.fbcdn.net/v/t39.30808-6/272889533_10225195305742615_667979901182999086_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHEFbDEAs-06Eqfnn4piTkuPbvJkPnToUw9u8mQ-dOhTIUtRipVai1UGuBT4KDcysKZPsrtyBUueN1OXF_SzHLV&_nc_ohc=lwUEBYGgNP8Q7kNvgGOClGC&_nc_ht=scontent.fnbo8-1.fna&oh=00_AYCWzHS1yWxXeGm6UzgjE4zXMTxk5DSYUJVAcHvWI0UWYA&oe=66DB62AE" alt="" />
        </div>
    </div>
  );
};

export default Home;
