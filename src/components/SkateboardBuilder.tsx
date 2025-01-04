import React, { useState } from 'react';
import { Part, SkateboardSetup, PartType } from '../types/skateboard';
import { PartsAccordion } from './PartsAccordion';
import { DropZone } from './DropZone';
import { PartPreview } from './PartPreview';
import { mockParts } from '../data/mockParts';
import { ShoppingCart } from 'lucide-react';

export function SkateboardBuilder() {
  const [setup, setSetup] = useState<SkateboardSetup>({});
  const [previewPart, setPreviewPart] = useState<Part | null>(null);

  const handleDrop = (e: React.DragEvent, type: PartType) => {
    e.preventDefault();
    const partData = e.dataTransfer.getData('application/json');
    const part: Part = JSON.parse(partData);
    if (part.type === type) {
      setSetup(prev => ({ ...prev, [type]: part }));
    }
  };

  const handleRemove = (type: PartType) => {
    setSetup(prev => {
      const newSetup = { ...prev };
      delete newSetup[type];
      return newSetup;
    });
  };

  const handleAddPart = (part: Part) => {
    setSetup(prev => ({ ...prev, [part.type]: part }));
    setPreviewPart(null);
  };

  const calculateTotal = () => {
    return Object.values(setup).reduce((total, part) => total + (part?.price || 0), 0);
  };

  const addToCart = () => {
    // Implement Shopify cart integration here
    console.log('Adding to cart:', setup);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Your Board Your Way</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">My Build</h2>
          
          {(['deck', 'trucks', 'wheels', 'bearings', 'hardware', 'grip'] as PartType[]).map(type => (
            <DropZone
              key={type}
              type={type}
              part={setup[type]}
              onDrop={(e) => handleDrop(e, type)}
              onRemove={() => handleRemove(type)}
            />
          ))}

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Total:</h3>
              <span className="text-2xl text-green-600">${calculateTotal().toFixed(2)}</span>
            </div>
            <button
              onClick={addToCart}
              className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Available Parts</h2>
          <PartsAccordion
            parts={mockParts}
            onPreviewPart={setPreviewPart}
          />
        </div>
      </div>

      {previewPart && (
        <PartPreview
          part={previewPart}
          onClose={() => setPreviewPart(null)}
          onAdd={handleAddPart}
        />
      )}
    </div>
  );
}