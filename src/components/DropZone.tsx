import React from 'react';
import { Part, PartType } from '../types/skateboard';
import { X } from 'lucide-react';

interface DropZoneProps {
  type: PartType;
  part?: Part;
  onDrop: (e: React.DragEvent) => void;
  onRemove: () => void;
}

export function DropZone({ type, part, onDrop, onRemove }: DropZoneProps) {
  return (
    <div
      className="h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center p-4 mb-4"
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
    >
      {part ? (
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-4">
            <img
              src={part.imageUrl}
              alt={part.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div>
              <p className="font-medium">{part.name}</p>
              <p className="text-green-600">${part.price.toFixed(2)}</p>
            </div>
          </div>
          <button
            onClick={onRemove}
            className="p-2 text-gray-500 hover:text-red-500 transition-colors"
            aria-label="Remove part"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <p className="text-gray-500">Drop {type} here</p>
      )}
    </div>
  );
}