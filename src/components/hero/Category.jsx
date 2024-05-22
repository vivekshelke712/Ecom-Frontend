import React from 'react';
import Timer from './Timer';

const Category = () => {
  const cardsData = [
    {
      id: 1,
      title: 'Product 1',
      price: 19.99,
      image: 'https://via.placeholder.com/150',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
      description: 'Praesent vel odio eget est pulvinar ullamcorper.',
    },
    {
      id: 3,
      title: 'Product 3',
      price: 39.99,
      image: 'https://via.placeholder.com/150',
      description: 'Nullam vitae lectus nec odio efficitur vestibulum.',
    },
    // Add more dummy data as needed
  ];

  const handleNext = () => {
    // Logic for pagination: show next set of cards
  };

  const handlePrev = () => {
    // Logic for pagination: show previous set of cards
  };

  return (
    <>
      <div className="flex justify-between items-center flex-wrap">
        <h2 className="text-lg font-bold">Category</h2>
        <div className="text-sm text-gray-500">
          <Timer />
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {cardsData.map((card) => (
          <div key={card.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <figure>
                <img src={card.image} alt={card.title} className="w-full h-40 object-cover mb-2" />
              </figure>
              <h2 className="card-title">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
