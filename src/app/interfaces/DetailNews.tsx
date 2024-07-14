"use client";
import React, { useState } from 'react';

const newsItems = [
  {
    id: 1,
    title: 'New Community Center Opens',
    description: 'A new community center has opened in the downtown area...',
    longDescription: 'A new community center has opened in the downtown area, providing a space for various community activities and events. The center includes a gym, a library, and several meeting rooms.',
    location: 'Downtown',
    date: '2023-07-10',
    imageUrl: '/About.jpg'
  },
  {
    id: 2,
    title: 'Local Park Renovation Completed',
    description: 'The renovation of the local park has been completed...',
    longDescription: 'The renovation of the local park has been completed, featuring new playground equipment, a splash pad, and improved walking trails. The park is now a safer and more enjoyable place for families to visit.',
    location: 'Greenwood Park',
    date: '2023-06-15',
    imageUrl: '/About.jpg'
  },
  {
    id: 3,
    title: 'New Art Exhibition at City Gallery',
    description: 'A new art exhibition has opened at the City Gallery...',
    longDescription: 'A new art exhibition has opened at the City Gallery, showcasing works from local artists. The exhibition includes paintings, sculptures, and mixed media pieces, all exploring the theme of nature and urban life.',
    location: 'City Gallery',
    date: '2023-05-20',
    imageUrl: '/About.jpg'
  },
  // Add more news items as needed
];

const News = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<any>(null);

  const openModal = (news:any) => {
    setSelectedNews(news);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedNews(null);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-center text-3xl font-bold mb-8">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((news) => (
          <div key={news.id} className="dark:border-white border-2 shadow-lg rounded-xl p-6">
            <div className="cursor-pointer" onClick={() => openModal(news)}>
              <img src={news.imageUrl} alt={news.title} className="w-full h-48 object-cover rounded mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
            <p className=" mb-2">{news.description}</p>
            <p className=" text-sm mb-2">{news.location} - {new Date(news.date).toLocaleDateString()}</p>
            <button onClick={() => openModal(news)} className="text-cyan-500 hover:text-cyan-700 transition-all duration-300">
              Read More
            </button>
          </div>
        ))}
      </div>

      {modalIsOpen && selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg max-w-3xl w-full mx-4 relative">
            <button onClick={closeModal} className="absolute top-2 right-2  hover:text-gray-700 transition-all duration-300">
              Close
            </button>
            <img src={selectedNews.imageUrl} alt={selectedNews.title} className="w-full h-64 object-cover rounded mb-4 mt-4" />
            <h3 className="text-2xl font-bold mb-4">{selectedNews.title}</h3>
            <p className=" mb-2">{selectedNews.longDescription}</p>
            <p className=" text-sm">{selectedNews.location} - {new Date(selectedNews.date).toLocaleDateString()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
