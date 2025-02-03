import React from 'react';

const Card = ({ image, name, description, url }) => {
  return (
    <div className="bg-gray-800 p-4 m-1 rounded-lg shadow-md max-w-sm">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-lg font-semibold text-white mt-3">{name}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 mt-3 block hover:underline">
        View Project
      </a>
    </div>
  );
};

export default Card;
