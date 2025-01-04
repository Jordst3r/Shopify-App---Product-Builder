import React, { createContext, useContext, useState } from 'react';
import { PartType } from '../types/skateboard';

interface AccordionContextType {
  openSection: PartType | null;
  setOpenSection: (section: PartType | null) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export function AccordionProvider({ children }: { children: React.ReactNode }) {
  const [openSection, setOpenSection] = useState<PartType | null>('deck');

  return (
    <AccordionContext.Provider value={{ openSection, setOpenSection }}>
      {children}
    </AccordionContext.Provider>
  );
}

export function useAccordion() {
  const context = useContext(AccordionContext);
  if (context === undefined) {
    throw new Error('useAccordion must be used within an AccordionProvider');
  }
  return context;
}