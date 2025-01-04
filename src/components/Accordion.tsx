import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { PartType } from '../types/skateboard';
import { useAccordion } from '../contexts/AccordionContext';

interface AccordionProps {
  title: PartType;
  children: React.ReactNode;
}

export function Accordion({ title, children }: AccordionProps) {
  const { openSection, setOpenSection } = useAccordion();
  const isOpen = openSection === title;

  const handleToggle = () => {
    setOpenSection(isOpen ? null : title);
  };

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-4 px-2 flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium capitalize">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      <div
        className={`transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        {children}
      </div>
    </div>
  );
}