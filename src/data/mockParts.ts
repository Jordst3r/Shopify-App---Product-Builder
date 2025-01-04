import { Part } from "../types/skateboard";

const originalParts: Part[] = [
  // Decks
  {
    id: "deck-1",
    name: "Pro Deck 8.25\"",
    price: 59.99,
    type: "deck",
    imageUrl: "https://images.unsplash.com/photo-1547447134-cd3f5c716030",
    description: "Professional grade maple deck with medium concave. Features a specialized 7-ply construction with steep concave and medium-sized kicks. The symmetrical shape provides versatile performance for all styles of skating. Each deck is individually pressed for consistent pop and durability. Perfect for technical street skating and transition riding."
  },
  {
    id: "deck-2",
    name: "Street Deck 8.0\"",
    price: 54.99,
    type: "deck",
    imageUrl: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e",
    description: "Perfect for technical street skating with its responsive 7-ply maple construction. Features a medium concave with symmetrical kicks for consistent flip tricks. The narrower width allows for quicker flip tricks and precise control. Each deck undergoes strict quality control for consistent pop. Ideal for technical street skaters who prefer a nimble setup."
  },
  {
    id: "deck-3",
    name: "Park Deck 8.5\"",
    price: 64.99,
    type: "deck",
    imageUrl: "https://images.unsplash.com/photo-1572776685600-aca8c3456337",
    description: "Wide deck ideal for transition and park riding. Features a mellow concave and wide platform for stable landings. The 7-ply maple construction provides excellent durability for high-impact skating. The wider nose and tail offer more room for foot placement on grabs and stalls. Perfect for skaters who focus on transition and park terrain."
  },

  // Trucks
  {
    id: "trucks-1",
    name: "Thunder Hi 149mm",
    price: 49.99,
    type: "trucks",
    imageUrl: "https://images.unsplash.com/photo-1531565637446-32307b194362",
    description: "High-performance trucks with superior turning radius. Features Thunder's signature geometry for responsive turning and stable grinds. The hollow kingpin reduces weight while maintaining strength. Premium-grade aluminum ensures long-lasting performance. Includes high-rebound bushings for smooth turning response. Perfect for all-around skating."
  },
  {
    id: "trucks-2",
    name: "Independent Stage 11 159mm",
    price: 54.99,
    type: "trucks",
    imageUrl: "https://images.unsplash.com/photo-1621950031507-9649c18d0d36",
    description: "Classic trucks trusted by pros worldwide. Features Independent's time-tested geometry for stability and grind performance. The Stage 11 design offers improved strength and reduced weight. Includes genuine Independent bushings for signature turning feel. The precision-machined hangers ensure consistent grinding performance. Perfect for all types of skating."
  },
  {
    id: "trucks-3",
    name: "Venture Low 5.25\"",
    price: 46.99,
    type: "trucks",
    imageUrl: "https://images.unsplash.com/photo-1626909014067-c1b6802fc300",
    description: "Low-profile trucks for technical skating. Features a lower ride height for improved stability and flip trick control. The precision-machined hangers provide consistent grinding performance. Includes medium-hard bushings for balanced turning response. The lightweight design reduces overall setup weight. Perfect for technical street skating."
  },

  // Wheels
  {
    id: "wheels-1",
    name: "Spitfire Formula Four 54mm",
    price: 34.99,
    type: "wheels",
    imageUrl: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
    description: "Classic street wheels with proven durability. Features Spitfire's signature Formula Four urethane for excellent speed and slide control. The 99a durometer provides ideal hardness for street skating. The rounded profile facilitates consistent sliding performance. The precision core prevents flat spots and maintains shape. Perfect for technical street skating."
  },
  {
    id: "wheels-2",
    name: "Bones STF 52mm",
    price: 32.99,
    type: "wheels",
    imageUrl: "https://images.unsplash.com/photo-1577412647305-991150c7d163",
    description: "Perfect for technical street skating with specialized urethane formula. Features Bones' Street Tech Formula for superior flatspot resistance. The 103a durometer provides maximum hardness for smooth slides. The precision bearing seat ensures consistent roll speed. The narrow contact patch reduces weight and improves slide control. Ideal for technical street skating."
  },
  {
    id: "wheels-3",
    name: "OJ Mini Super Juice 55mm",
    price: 36.99,
    type: "wheels",
    imageUrl: "https://images.unsplash.com/photo-1580274437636-1c384e617d45",
    description: "Smooth riding wheels for all surfaces. Features OJ's premium urethane formula for excellent grip and roll speed. The 78a durometer provides maximum shock absorption. The wide contact patch ensures stability on rough terrain. The precision core maintains shape and prevents deformation. Perfect for cruising and rough street skating."
  },

  // Bearings
  {
    id: "bearings-1",
    name: "Bones Reds",
    price: 19.99,
    type: "bearings",
    imageUrl: "https://images.unsplash.com/photo-1588749635743-797f185a9c0f",
    description: "Industry standard bearings for reliability. Features high-speed, low-friction design for consistent performance. The removable rubber shields allow for easy cleaning. Pre-lubricated with speed cream for immediate use. Each bearing undergoes quality control testing. Perfect for all types of skating."
  },
  {
    id: "bearings-2",
    name: "Bronson Speed Co G3",
    price: 29.99,
    type: "bearings",
    imageUrl: "https://images.unsplash.com/photo-1603744747489-6633e3629945",
    description: "High-speed bearings with built-in spacers. Features Bronson's Deep Groove design for maximum speed. The integrated spacers ensure proper wheel alignment. The ceramic coating provides excellent wear resistance. Each bearing is individually tested for smoothness. Perfect for high-speed skating."
  },
  {
    id: "bearings-3",
    name: "Shake Junt Triple OGs",
    price: 24.99,
    type: "bearings",
    imageUrl: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8",
    description: "Durable bearings with premium lubricant. Features high-grade steel races for long-lasting performance. The removable shields allow for easy maintenance. Pre-lubricated with premium oil for immediate use. Each bearing undergoes strict quality control. Perfect for skaters who demand reliability."
  },

  // Hardware
  {
    id: "hardware-1",
    name: "Independent Cross Bolts 1\"",
    price: 5.99,
    type: "hardware",
    imageUrl: "https://images.unsplash.com/photo-1578167635648-df37ff7278c7",
    description: "Standard skateboard mounting hardware. Features Grade 8 steel construction for maximum strength. The Phillips head design provides excellent tool engagement. Includes self-locking nuts with nylon inserts. The black oxide coating prevents rust and corrosion. Perfect for standard deck mounting."
  },
  {
    id: "hardware-2",
    name: "Thunder Phillips 7/8\"",
    price: 6.99,
    type: "hardware",
    imageUrl: "https://images.unsplash.com/photo-1586864387789-628af9feed72",
    description: "Phillips head hardware with locknuts. Features hardened steel construction for durability. The Phillips head provides excellent driver engagement. Includes premium-grade locknuts with nylon inserts. The zinc coating ensures corrosion resistance. Perfect for standard setups without risers."
  },
  {
    id: "hardware-3",
    name: "Shorty's 1.25\" Allen",
    price: 7.99,
    type: "hardware",
    imageUrl: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8",
    description: "Extra long hardware for risers. Features Allen head design for superior tool engagement. The extended length accommodates various riser heights. Includes self-locking nuts with nylon inserts. The black oxide coating prevents corrosion. Perfect for setups with shock pads or risers."
  },

  // Grip
  {
    id: "grip-1",
    name: "Mob M-80",
    price: 9.99,
    type: "grip",
    imageUrl: "https://images.unsplash.com/photo-1582228096960-d1d0a0dc117e",
    description: "Standard grip tape with perfect grip level. Features Mob's signature grit pattern for excellent grip. The silicon carbide provides long-lasting performance. The water-resistant adhesive ensures reliable bonding. The perforated backing allows for bubble-free application. Perfect for all types of skating."
  },
  {
    id: "grip-2",
    name: "Grizzly Stamp",
    price: 11.99,
    type: "grip",
    imageUrl: "https://images.unsplash.com/photo-1582228095933-cf2f9e42544f",
    description: "Premium grip tape with signature stamp. Features Grizzly's custom grit mixture for optimal grip. The die-cut logo adds style to any setup. The premium adhesive ensures long-lasting hold. The silicon carbide grit maintains grip over time. Perfect for skaters who want style and performance."
  },
  {
    id: "grip-3",
    name: "Jessup Ultra",
    price: 8.99,
    type: "grip",
    imageUrl: "https://images.unsplash.com/photo-1582228095934-404bf1096ab8",
    description: "Classic grip tape trusted for decades. Features Jessup's time-tested grit pattern. The balanced grip level suits all skating styles. The reliable adhesive provides secure bonding. The consistent grit distribution ensures even wear. Perfect for skaters who prefer traditional feel."
  }
];

const additionalParts: Part[] = [
  // Additional Decks
  {
    id: "deck-4",
    name: "Cruiser Deck 8.75\"",
    price: 69.99,
    type: "deck",
    imageUrl: "https://images.unsplash.com/photo-1547447134-cd3f5c716030",
    description: "Extra wide cruiser deck with a mellow concave and kick tail. Features a specialized 8-ply construction with bamboo cross layers for added strength and flex characteristics. The wider platform provides maximum stability for cruising and carving. Ideal for riders who want a stable platform for commuting and casual riding. The durable construction ensures long-lasting performance in all conditions."
  },
  {
    id: "deck-5",
    name: "Mini Deck 7.75\"",
    price: 49.99,
    type: "deck",
    imageUrl: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e",
    description: "Compact deck designed for younger riders or those preferring a narrower platform. Features a responsive 7-ply maple construction with a medium concave. The shorter wheelbase provides quick turning and easy maneuverability. Perfect for beginners or technical street skaters who prefer a lighter, more nimble setup. Each deck undergoes strict quality control to ensure consistent performance."
  },

  // Additional Trucks
  {
    id: "trucks-4",
    name: "ACE AF1 55",
    price: 52.99,
    type: "trucks",
    imageUrl: "https://images.unsplash.com/photo-1531565637446-32307b194362",
    description: "Traditional geometry trucks featuring ACE's signature turning characteristics. The unique geometry provides quick, responsive turns while maintaining stability. Premium-grade aluminum construction ensures durability and consistent performance. Features upgraded bushings and pivot cups for smooth turning. Perfect for transition and pool skating where quick turning is essential."
  },
  {
    id: "trucks-5",
    name: "Tensor Alloys",
    price: 44.99,
    type: "trucks",
    imageUrl: "https://images.unsplash.com/photo-1621950031507-9649c18d0d36",
    description: "Lightweight aluminum trucks featuring Tensor's innovative alloy formula. The magnesium-infused aluminum reduces weight while maintaining strength. Features precision-machined axles and upgraded bushings for consistent performance. The geometry provides stable grinding while maintaining good turning response. Perfect for technical street skaters who prioritize setup weight."
  },

  // Additional Wheels
  {
    id: "wheels-4",
    name: "Ricta Clouds 56mm",
    price: 39.99,
    type: "wheels",
    imageUrl: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
    description: "Hybrid wheels featuring Ricta's specialized urethane formula. The 86a durometer provides excellent shock absorption while maintaining good slide characteristics. The wide contact patch ensures stability and smooth rolling. Perfect for rough streets and park skating. The precision core maintains shape and prevents deformation. Ideal for skaters who encounter varying terrain."
  },
  {
    id: "wheels-5",
    name: "Powell Peralta G-Slides",
    price: 35.99,
    type: "wheels",
    imageUrl: "https://images.unsplash.com/photo-1577412647305-991150c7d163",
    description: "Specialized slide wheels featuring Powell's premium urethane formula. The unique shape and 85a durometer provide excellent slide control while maintaining good grip. The rounded edges facilitate smooth slide initiation and control. Perfect for technical sliding and freestyle skating. The durable core prevents deformation during heavy sliding. Ideal for skaters focusing on slide tricks."
  },

  // Additional Bearings
  {
    id: "bearings-4",
    name: "Mini Logo Bearings",
    price: 15.99,
    type: "bearings",
    imageUrl: "https://images.unsplash.com/photo-1588749635743-797f185a9c0f",
    description: "Budget-friendly bearings featuring precision steel construction. Pre-lubricated with high-speed bearing oil for immediate use. The removable rubber shields allow for easy cleaning and maintenance. Each bearing undergoes quality control testing to ensure consistent performance. Perfect for skaters looking for reliable performance at an affordable price."
  },
  {
    id: "bearings-5",
    name: "Andale Swiss",
    price: 49.99,
    type: "bearings",
    imageUrl: "https://images.unsplash.com/photo-1603744747489-6633e3629945",
    description: "Premium Swiss-made bearings featuring high-precision steel races. The specialized heat treatment process ensures maximum durability and smooth operation. Features removable shields for easy maintenance and premium lubricant. Each bearing is individually tested for smoothness and speed. Perfect for skaters who demand the highest quality and performance."
  },

  // Additional Hardware
  {
    id: "hardware-4",
    name: "Diamond Supply Co. Pro",
    price: 8.99,
    type: "hardware",
    imageUrl: "https://images.unsplash.com/photo-1578167635648-df37ff7278c7",
    description: "Premium hardware featuring Diamond's signature blue coating. The Grade 8 steel construction ensures maximum strength and durability. Features Allen head design for superior tool engagement. Includes self-locking nuts with nylon inserts. The specialized coating provides corrosion resistance and unique styling. Perfect for skaters who want both performance and style."
  },
  {
    id: "hardware-5",
    name: "Primitive Gold",
    price: 9.99,
    type: "hardware",
    imageUrl: "https://images.unsplash.com/photo-1586864387789-628af9feed72",
    description: "High-end hardware featuring 24K gold plating for style and corrosion resistance. The Grade 8 steel core ensures maximum strength and durability. Features Phillips head design for easy installation. Includes premium lock nuts with nylon inserts. The gold plating provides unique styling and excellent corrosion resistance. Perfect for custom builds and showcase setups."
  },

  // Additional Grip
  {
    id: "grip-4",
    name: "Black Diamond Super Coarse",
    price: 12.99,
    type: "grip",
    imageUrl: "https://images.unsplash.com/photo-1582228096960-d1d0a0dc117e",
    description: "Extra coarse grip tape featuring Black Diamond's maximum grip formula. The aggressive grit pattern provides maximum grip for demanding tricks. Features a water-resistant adhesive for reliable performance in all conditions. The thick backing ensures durability and easy application. Perfect for skaters who demand maximum grip. Each sheet includes application tool and instructions."
  },
  {
    id: "grip-5",
    name: "Shake Junt Clear",
    price: 13.99,
    type: "grip",
    imageUrl: "https://images.unsplash.com/photo-1582228095933-cf2f9e42544f",
    description: "Clear grip tape featuring Shake Junt's innovative grip formula. The transparent design allows deck graphics to show through while maintaining excellent grip. Features a specialized adhesive that remains clear over time. The balanced grit size provides good grip while reducing shoe wear. Perfect for showcasing deck graphics. Each sheet includes application instructions and branded squeegee."
  }
];

export const mockParts: Part[] = [...originalParts, ...additionalParts];