import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const NewsItem = ({ title, date, content, readMoreLink }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-bold mb-2">{title}</h2>
    <p className="text-gray-500 mb-4">{date}</p>
    <div className="bg-gray-200 w-full h-64 mb-4"></div>
    <p className="mb-4">{content}</p>
    <a href={readMoreLink} className="text-purple-600 hover:underline">Read More</a>
  </div>
);

const TrendingNewsItem = ({ title, date, content, readMoreLink }) => (
  <div className="mb-8">
    <div className="bg-gray-200 w-full h-48 mb-4"></div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-500 mb-2">{date}</p>
    <p className="mb-2">{content}</p>
    <a href={readMoreLink} className="text-purple-600 hover:underline">Read More</a>
  </div>
);

const SidebarItem = ({ title, content }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2">
      <a href="#" className="text-purple-600 hover:underline">{title} &gt;&gt;</a>
    </h3>
    <p className="text-sm">{content}</p>
  </div>
);

const News = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">NEWS</h1>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 md:pr-8">
            <NewsItem 
              title="ANOKA FARUQEE APPOINTED ASSOCIATE DEAN AT THE YALE SCHOOL OF ART"
              date="APRIL 26, 2022"
              content="The Yale School of Art is pleased to announce that Co-Director of Graduate Studies in Painting and Printmaking, Anoka Faruqee, has been appointed Associate Dean, filling a position at the School of Art that has been vacant since 2018. Beginning her new role in the 2022-2023 academic year, Faruqee has been a faculty member in Painting and Printmaking for over a decade and has led the department since her appointment as Director in 2015."
              readMoreLink="#"
            />
          </div>
          
          <div className="md:w-1/3">
            <SidebarItem 
              title="Events archive"
              content="a continuously maintained archive initiated in the spring of 2021 of events hosted by the Yale School of Art"
            />
            <SidebarItem 
              title="Yale School of Art in the World"
              content="events, exhibitions, publications, and other projects created by and featuring members of the School of Art community"
            />
            <SidebarItem 
              title="Newsletter archive"
              content="Mailchimp emails and announcements sent out by the Yale School of Art's Communications Office"
            />
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Trending News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <TrendingNewsItem 
                key={i}
                title="SEVEN YALE SCHOOL OF ART ALUMS NAMED 2022 GUGGENHEIM FELLOWS"
                date="APRIL 8, 2022"
                content="The Yale School of Art is pleased to announce that alumni Guggenheim Memorial Foundation........."
                readMoreLink="#"
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;