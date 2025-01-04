import React from 'react';
import { Part, PartType } from '../types/skateboard';
import { PartCard } from './PartCard';

interface PartSelectorProps {
  parts: Part[];
  type: PartType;
  onPreviewPart: (part: Part) => void;
}

export function PartSelector({ parts, type, onPreviewPart }: PartSelectorProps) {
  const filteredParts = parts.filter(part => part.type === type);

  return (
    <div className="h-[600px] overflow-y-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        {filteredParts.map(part => (
          <PartCard
            key={part.id}
            part={part}
            onClick={() => onPreviewPart(part)}
          />
        ))}
      </div>
    </div>
  );
}