import React from 'react';
import { PartType } from '../types/skateboard';
import { Accordion } from './Accordion';
import { PartSelector } from './PartSelector';
import { Part } from '../types/skateboard';
import { AccordionProvider } from '../contexts/AccordionContext';

interface PartsAccordionProps {
  parts: Part[];
  onPreviewPart: (part: Part) => void;
}

export function PartsAccordion({ parts, onPreviewPart }: PartsAccordionProps) {
  const partTypes: PartType[] = ['deck', 'trucks', 'wheels', 'bearings', 'hardware', 'grip'];

  return (
    <AccordionProvider>
      <div className="divide-y divide-gray-200 rounded-lg overflow-hidden">
        {partTypes.map((type) => (
          <Accordion key={type} title={type}>
            <PartSelector
              parts={parts}
              type={type}
              onPreviewPart={onPreviewPart}
            />
          </Accordion>
        ))}
      </div>
    </AccordionProvider>
  );
}