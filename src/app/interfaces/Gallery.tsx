"use client";
import React, { useState } from 'react';

const GalleryItems = [
  {
    id: 1,
    title: 'Sunset Over Mountains',
    location: 'Rocky Mountains',
    imageUrl: '/About.jpg'
  },
  {
    id: 2,
    title: 'City Lights',
    location: 'New York City',
    imageUrl: '/About.jpg'

  },
  {
    id: 3,
    title: 'Forest Path',
    location: 'Black Forest',
    imageUrl: '/About.jpg'

  },
  // Add more gallery items as needed
];

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const openModal = (item:any) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-center text-3xl font-bold mb-8">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GalleryItems.map((item) => (
          <div key={item.id} className="border dark:border-white shadow-lg rounded-xl p-6">
            <div className="cursor-pointer" onClick={() => openModal(item)}>
              <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm mb-2">{item.location}</p>
          </div>
        ))}
      </div>

      {modalIsOpen && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg max-w-3xl w-full mx-4 relative">
            <button onClick={closeModal} className="absolute top-2 right-2 hover:text-gray-700 transition-all duration-300">
              Close
            </button>
            <img src={selectedItem.imageUrl} alt={selectedItem.title} className="w-full h-64 object-cover rounded mb-4 mt-4" />
            <h3 className="text-2xl font-bold mb-4">{selectedItem.title}</h3>
            <p className="text-sm mb-2">{selectedItem.location}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
