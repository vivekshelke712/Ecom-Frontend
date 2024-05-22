import React from 'react';

const BrowseByCategory = () => {
    // Dummy category data
    const categories = [
        { id: 1, name: 'Electronics', description: 'Explore the latest gadgets and electronics devices.' },
        { id: 2, name: 'Computer', description: 'Find computer hardware, software, and accessories.' },
        { id: 3, name: 'Books', description: 'Discover a wide range of books on various topics.' },
        { id: 4, name: 'Fashion', description: 'Shop for trendy fashion items and accessories.' },
        { id: 4, name: 'Fashion', description: 'Shop for trendy fashion items and accessories.' },
        { id: 4, name: 'Fashion', description: 'Shop for trendy fashion items and accessories.' },
        
        // Add more categories as needed
    ];

    return (
        <>
            <div className="px-4 py-2 mt-4">
                <h2 className="font-bold text-5xl w-full text-center">Browse By Category</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">
                {categories.map(category => (
                    <div key={category.id} className="bg-white p-4 shadow-md rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                        <p className="text-gray-600">{category.description}</p>
                        {/* Add more details or links related to the category */}
                    </div>
                ))}
            </div>
        </>
    );
}

export default BrowseByCategory;
