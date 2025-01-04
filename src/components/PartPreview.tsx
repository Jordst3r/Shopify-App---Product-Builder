import React from 'react';
import { Part } from '../types/skateboard';
import { X, Plus } from 'lucide-react';

interface PartPreviewProps {
  part: Part;
  onClose: () => void;
  onAdd: (part: Part) => void;
}

export function PartPreview({ part, onClose, onAdd }: PartPreviewProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[min(800px,90vh)] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start p-6 pb-4">
          <h2 className="text-2xl font-bold">{part.name}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
            aria-label="Close preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Content */}
        <div className="px-6 overflow-y-auto">
          <img
            src={part.imageUrl}
            alt={part.name}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600 whitespace-pre-line mb-6">{part.description}</p>
        </div>
        
        {/* Footer */}
        <div className="border-t p-6 bg-white mt-auto">
          <p className="text-2xl font-bold text-green-600 mb-4">${part.price.toFixed(2)}</p>
          <button
            onClick={() => onAdd(part)}
            className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Add to Setup</span>
          </button>
        </div>
      </div>
    </div>
  );
}