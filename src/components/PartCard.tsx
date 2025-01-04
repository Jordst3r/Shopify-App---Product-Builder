import React from 'react';
import { Part } from '../types/skateboard';

interface PartCardProps {
  part: Part;
  onClick: () => void;
}

export function PartCard({ part, onClick }: PartCardProps) {
  return (
    <div
      className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData('application/json', JSON.stringify(part));
      }}
    >
      <img
        src={part.imageUrl}
        alt={part.name}
        className="w-full h-32 object-cover rounded-md mb-2"
      />
      <h3 className="font-semibold text-gray-800 mb-1">{part.name}</h3>
      <p className="text-green-600 font-medium">${part.price.toFixed(2)}</p>
    </div>
  );
}