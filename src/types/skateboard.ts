export interface Part {
  id: string;
  name: string;
  price: number;
  type: 'deck' | 'trucks' | 'wheels' | 'bearings' | 'hardware' | 'grip';
  imageUrl: string;
  description: string;
}

export interface SkateboardSetup {
  deck?: Part;
  trucks?: Part;
  wheels?: Part;
  bearings?: Part;
  hardware?: Part;
  grip?: Part;
}

export type PartType = 'deck' | 'trucks' | 'wheels' | 'bearings' | 'hardware' | 'grip';