export interface Product {
  id: number;
  name: string;
  hindiName: string;
  botanicalName: string;
  slug: string;
  category: string;
  rawMaterial: string;
  image: string;
  gallery: string[];
  price: number;
  discount?: number;
  featured: boolean;
  bestseller: boolean;
  description: string;
  benefits: string[];
  ingredients: string[];
  usage: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Stevia Powder",
    hindiName: "स्टीविया पाउडर",
    botanicalName: "Stevia rebaudiana",
    slug: "stevia-powder",
    category: "Natural Sweetener",
    rawMaterial: "Stevia Leaves",
    image: "/Item/STEVIA_POWDER.png",
    gallery: [
      "/Item/STEVIA_POWDER.png",
      
    ],
    price: 199,
    featured: true,
    bestseller: true,
    description:
      "Stevia Powder is a natural, calorie-free sweetener obtained from premium-quality Stevia leaves. It is an excellent alternative to refined sugar and is commonly used in beverages, desserts, and healthy recipes.",
    benefits: [
      "Natural sugar substitute",
      "Zero calorie sweetener",
      "Suitable for healthy lifestyles",
      "Can be added to tea and coffee",
      "Ideal for daily use",
    ],
    ingredients: [
      "100% Pure Stevia Leaves Powder",
    ],
    usage: [
      "Add ½ teaspoon to tea or coffee.",
      "Use in smoothies and desserts.",
      "Use as a replacement for refined sugar.",
    ],
  },

  {
    id: 2,
    name: "Shikakai Powder",
    hindiName: "शिकाकाई चूर्ण",
    botanicalName: "Acacia concinna",
    slug: "shikakai-powder",
    category: "Hair Care",
    rawMaterial: "Shikakai Pods",
    image: "/Item/SHIKAKAI_POWDER.png",
    gallery: [
      "/Item/SHIKAKAI_POWDER.png",
    ],
    price: 199,
    featured: false,
    bestseller: true,
    description:
      "Shikakai Powder is a traditional Ayurvedic hair cleanser known for gently cleansing the scalp while maintaining the natural shine and softness of hair.",
    benefits: [
      "Naturally cleanses the scalp",
      "Helps reduce dandruff",
      "Strengthens hair roots",
      "Adds natural shine",
      "Suitable for all hair types",
    ],
    ingredients: [
      "100% Pure Shikakai Powder",
    ],
    usage: [
      "Mix with water to prepare a paste.",
      "Apply to scalp and hair.",
      "Leave for 10–15 minutes and rinse thoroughly.",
    ],
  },

  {
    id: 3,
    name: "Shatavari Powder",
    hindiName: "शतावरी चूर्ण",
    botanicalName: "Asparagus racemosus",
    slug: "shatavari-powder",
    category: "Women's Wellness",
    rawMaterial: "Shatavari Root",
    image: "/Item/SHATAVARI_POWDER.png",
    gallery: [
     "/Item/SHATAVARI_POWDER.png",
    ],
    price: 199,
    featured: true,
    bestseller: true,
    description:
      "Shatavari Powder is a renowned Ayurvedic herb traditionally used to support women's health, vitality, and overall wellness.",
    benefits: [
      "Supports women's wellness",
      "Promotes vitality",
      "Rich in natural nutrients",
      "Traditional Ayurvedic herb",
      "Supports overall health",
    ],
    ingredients: [
      "100% Pure Shatavari Root Powder",
    ],
    usage: [
      "Mix one teaspoon with warm milk.",
      "Consume once or twice daily.",
      "Use as advised by your healthcare professional.",
    ],
  },

  {
    id: 4,
    name: "Reetha Powder",
    hindiName: "रीठा चूर्ण",
    botanicalName: "Sapindus mukorossi",
    slug: "reetha-powder",
    category: "Hair Care",
    rawMaterial: "Reetha Fruit",
    image: "/Item/REETHA_POWDER.png",
    gallery: [
      "/Item/REETHA_POWDER.png",
    ],
    price: 199,
    featured: false,
    bestseller: false,
    description:
      "Reetha Powder is a natural herbal cleanser traditionally used for maintaining clean, healthy, and shiny hair.",
    benefits: [
      "Natural hair cleanser",
      "Helps remove excess oil",
      "Maintains scalp hygiene",
      "Improves hair texture",
      "Chemical-free hair care",
    ],
    ingredients: [
      "100% Pure Reetha Powder",
    ],
    usage: [
      "Mix with water into a smooth paste.",
      "Apply evenly to scalp and hair.",
      "Wash thoroughly with water.",
    ],
  },

  {
    id: 5,
    name: "Psyllium Husk Powder",
    hindiName: "इसबगोल भूसी",
    botanicalName: "Plantago ovata",
    slug: "psyllium-husk-powder",
    category: "Digestive Wellness",
    rawMaterial: "Psyllium Husk",
    image: "/Item/PSYLLIUM_HUSK_POWDER.png",
    gallery: [
      "/Item/PSYLLIUM_HUSK_POWDER.png",
    ],
    price: 199,
    featured: true,
    bestseller: false,
    description:
      "Psyllium Husk Powder is a natural source of dietary fiber that helps support digestive health and regular bowel movements.",
    benefits: [
      "Rich in dietary fiber",
      "Supports healthy digestion",
      "Promotes gut wellness",
      "Easy to consume",
      "Suitable for daily use",
    ],
    ingredients: [
      "100% Pure Psyllium Husk",
    ],
    usage: [
      "Mix one teaspoon with water.",
      "Drink immediately after mixing.",
      "Consume with plenty of water.",
    ],
  },
    {
    id: 6,
    name: "Orange Peel Powder",
    hindiName: "संतरे के छिलके का चूर्ण",
    botanicalName: "Citrus sinensis",
    slug: "orange-peel-powder",
    category: "Skin Care",
    rawMaterial: "Dried Orange Peel",
    image: "/Item/orange-peel-powder.png",
    gallery: [
      "/Item/orange-peel-powder.png",
    ],
    price: 219,
    featured: false,
    bestseller: true,
    description:
      "Orange Peel Powder is a natural skincare ingredient rich in Vitamin C and antioxidants. It helps cleanse, exfoliate, and brighten the skin while improving its natural glow.",
    benefits: [
      "Rich in Vitamin C",
      "Helps brighten skin",
      "Removes excess oil",
      "Natural exfoliator",
      "Improves skin texture",
    ],
    ingredients: [
      "100% Pure Dried Orange Peel Powder",
    ],
    usage: [
      "Mix with rose water or curd.",
      "Apply evenly on face.",
      "Leave for 15 minutes and rinse.",
    ],
  },

  {
    id: 7,
    name: "Neem Powder",
    hindiName: "नीम चूर्ण",
    botanicalName: "Azadirachta indica",
    slug: "neem-powder",
    category: "Skin & Hair Care",
    rawMaterial: "Neem Leaves",
    image: "/Item/NEEM_POWDER.png",
    gallery: [
      "/Item/NEEM_POWDER.png",
    ],
    price: 169,
    featured: true,
    bestseller: true,
    description:
      "Neem Powder is a traditional Ayurvedic herb known for its cleansing and purifying properties. It is widely used for healthy skin, scalp, and hair care.",
    benefits: [
      "Supports healthy skin",
      "Helps reduce acne",
      "Maintains scalp hygiene",
      "Promotes healthy hair",
      "Rich in natural antioxidants",
    ],
    ingredients: [
      "100% Pure Neem Leaf Powder",
    ],
    usage: [
      "Mix with water into a paste.",
      "Apply to skin or scalp.",
      "Wash after 15–20 minutes.",
    ],
  },

  {
    id: 8,
    name: "Moringa Powder",
    hindiName: "सहजन पत्ती चूर्ण",
    botanicalName: "Moringa oleifera",
    slug: "moringa-powder",
    category: "Superfoods",
    rawMaterial: "Moringa Leaves",
    image: "/Item/MORINGA_POWDER.png",
    gallery: [
      "/Item/MORINGA_POWDER.png",
    ],
    price: 199,
    featured: true,
    bestseller: true,
    description:
      "Moringa Powder is a nutrient-rich superfood packed with vitamins, minerals, antioxidants, and plant-based nutrients that support everyday wellness.",
    benefits: [
      "Rich in vitamins and minerals",
      "Natural source of antioxidants",
      "Supports immunity",
      "Boosts energy naturally",
      "Supports overall wellness",
    ],
    ingredients: [
      "100% Pure Moringa Leaves Powder",
    ],
    usage: [
      "Mix one teaspoon in smoothies.",
      "Can be mixed with water or juice.",
      "Consume daily.",
    ],
  },

  {
    id: 9,
    name: "Methidana Powder",
    hindiName: "मेथीदाना चूर्ण",
    botanicalName: "Trigonella foenum-graecum",
    slug: "methidana-powder",
    category: "Digestive Wellness",
    rawMaterial: "Fenugreek Seeds",
    image: "/Item/METHIDANA_POWDER.png",
    gallery: [
      "/Item/METHIDANA_POWDER.png",
    ],
    price: 219,
    featured: false,
    bestseller: false,
    description:
      "Methidana Powder is made from premium-quality fenugreek seeds and is traditionally used in Ayurveda for digestive and metabolic wellness.",
    benefits: [
      "Supports digestion",
      "Rich in natural fiber",
      "Traditional Ayurvedic herb",
      "Supports metabolism",
      "Suitable for daily use",
    ],
    ingredients: [
      "100% Pure Fenugreek Seed Powder",
    ],
    usage: [
      "Mix with warm water.",
      "Consume before meals.",
      "Use as directed by a healthcare professional.",
    ],
  },

  {
    id: 10,
    name: "Jamun Seeds Powder",
    hindiName: "जामुन गुठली चूर्ण",
    botanicalName: "Syzygium cumini",
    slug: "jamun-seeds-powder",
    category: "Ayurvedic Powders",
    rawMaterial: "Jamun Seeds",
    image: "/Item/JAMUN_SEEDS_POWDER.png",
    gallery: [
      "/Item/JAMUN_SEEDS_POWDER.png",
    ],
    price: 155,
    featured: true,
    bestseller: false,
    description:
      "Jamun Seeds Powder is a traditional Ayurvedic herbal powder prepared from carefully selected jamun seeds to support overall metabolic wellness.",
    benefits: [
      "Traditional Ayurvedic formulation",
      "Supports metabolic health",
      "Rich in natural antioxidants",
      "Suitable for daily wellness",
      "100% Herbal",
    ],
    ingredients: [
      "100% Pure Jamun Seed Powder",
    ],
    usage: [
      "Mix one teaspoon with lukewarm water.",
      "Consume once or twice daily.",
      "Use as advised by your healthcare professional.",
    ],
  },
    {
    id: 11,
    name: "Hibiscus Powder",
    hindiName: "गुड़हल फूल चूर्ण",
    botanicalName: "Hibiscus rosa-sinensis",
    slug: "hibiscus-powder",
    category: "Hair Care",
    rawMaterial: "Hibiscus Flowers",
    image: "/Item/HIBISCUS_POWDER.png",
    gallery: [
      "/Item/HIBISCUS_POWDER.png",
    ],
    price: 199,
    featured: false,
    bestseller: true,
    description:
      "Hibiscus Powder is a natural Ayurvedic hair care ingredient prepared from premium hibiscus flowers. It helps nourish the scalp, strengthen hair roots, and promote naturally healthy, shiny hair.",
    benefits: [
      "Promotes healthy hair growth",
      "Nourishes the scalp",
      "Strengthens hair roots",
      "Adds natural shine",
      "Suitable for all hair types",
    ],
    ingredients: [
      "100% Pure Hibiscus Flower Powder",
    ],
    usage: [
      "Mix with water or aloe vera gel.",
      "Apply evenly to hair and scalp.",
      "Leave for 20 minutes and rinse.",
    ],
  },

  {
    id: 12,
    name: "Harad Powder",
    hindiName: "हरड़ चूर्ण",
    botanicalName: "Terminalia chebula",
    slug: "harad-powder",
    category: "Digestive Wellness",
    rawMaterial: "Harad Fruit",
    image: "/Item/HARAD_POWDER.png",
    gallery: [
      "/Item/HARAD_POWDER.png",
    ],
    price: 189,
    featured: false,
    bestseller: false,
    description:
      "Harad Powder is a traditional Ayurvedic herbal powder widely used for supporting healthy digestion and overall gut wellness. It is one of the three ingredients of the famous Triphala formulation.",
    benefits: [
      "Supports digestion",
      "Promotes gut health",
      "Traditional Ayurvedic herb",
      "Supports detoxification",
      "Suitable for daily wellness",
    ],
    ingredients: [
      "100% Pure Harad Fruit Powder",
    ],
    usage: [
      "Mix one teaspoon with warm water.",
      "Consume after meals.",
      "Use as advised by your healthcare professional.",
    ],
  },

  {
    id: 13,
    name: "Ginger Powder",
    hindiName: "सोंठ चूर्ण",
    botanicalName: "Zingiber officinale",
    slug: "ginger-powder",
    category: "Ayurvedic Powders",
    rawMaterial: "Dry Ginger",
    image: "/Item/Ginger_powder.png",
    gallery: [
      "/Item/Ginger_powder.png",
    ],
    price: NaN,
    featured: true,
    bestseller: true,
    description:
      "Ginger Powder is made from carefully selected dried ginger roots and is valued in Ayurveda for supporting digestion, immunity, and overall wellness.",
    benefits: [
      "Supports digestion",
      "Helps maintain immunity",
      "Natural warming herb",
      "Rich in antioxidants",
      "Suitable for daily use",
    ],
    ingredients: [
      "100% Pure Dry Ginger Powder",
    ],
    usage: [
      "Mix with warm water, tea, or milk.",
      "Can also be used in cooking.",
      "Consume daily as required.",
    ],
  },

  {
    id: 14,
    name: "Giloy Powder",
    hindiName: "गिलोय चूर्ण",
    botanicalName: "Tinospora cordifolia",
    slug: "giloy-powder",
    category: "Immunity",
    rawMaterial: "Giloy Stem",
    image: "/Item/GILOY_POWDER.png",
    gallery: [
      "/Item/GILOY_POWDER.png",
    ],
    price: 179,
    featured: true,
    bestseller: true,
    description:
      "Giloy Powder is a premium Ayurvedic herbal supplement prepared from pure Giloy stems. It is traditionally known for supporting immunity and promoting overall health.",
    benefits: [
      "Supports immunity",
      "Rich in natural antioxidants",
      "Promotes overall wellness",
      "Traditional Ayurvedic herb",
      "Suitable for daily consumption",
    ],
    ingredients: [
      "100% Pure Giloy Stem Powder",
    ],
    usage: [
      "Mix one teaspoon with lukewarm water.",
      "Consume once or twice daily.",
      "Use under professional guidance.",
    ],
  },

  {
    id: 15,
    name: "Bhringraj Powder",
    hindiName: "भृंगराज चूर्ण",
    botanicalName: "Eclipta alba",
    slug: "bhringraj-powder",
    category: "Hair Care",
    rawMaterial: "Bhringraj Leaves",
    image: "/Item/Bhirinjraj_powder.png",
    gallery: [
      "/Item/Bhirinjraj_powder.png",
    ],
    price: 229,
    featured: true,
    bestseller: true,
    description:
      "Bhringraj Powder is one of the most respected Ayurvedic herbs for hair care. It helps nourish hair roots, improve scalp health, and maintain naturally healthy hair.",
    benefits: [
      "Strengthens hair roots",
      "Supports healthy hair growth",
      "Maintains scalp health",
      "Adds shine to hair",
      "Traditional Ayurvedic hair care",
    ],
    ingredients: [
      "100% Pure Bhringraj Leaf Powder",
    ],
    usage: [
      "Mix with water, curd, or aloe vera gel.",
      "Apply evenly to scalp and hair.",
      "Leave for 20–30 minutes before washing.",
    ],
  },
    {
    id: 16,
    name: "Beetroot Powder",
    hindiName: "चुकंदर चूर्ण",
    botanicalName: "Beta vulgaris",
    slug: "beetroot-powder",
    category: "Superfoods",
    rawMaterial: "Fresh Beetroot",
    image: "/Item/BEETROOT_POWDER.png",
    gallery: [
      "/Item/BEETROOT_POWDER.png",
    ],
    price: 219,
    featured: false,
    bestseller: true,
    description:
      "Beetroot Powder is prepared from premium-quality fresh beetroot and is naturally rich in vitamins, minerals, antioxidants, and dietary fiber. It is an excellent addition to smoothies, juices, and healthy recipes.",
    benefits: [
      "Rich in natural antioxidants",
      "Supports stamina and energy",
      "Contains vitamins and minerals",
      "Supports overall wellness",
      "Easy to add to daily diet",
    ],
    ingredients: [
      "100% Pure Beetroot Powder",
    ],
    usage: [
      "Mix one teaspoon with water, milk, or smoothies.",
      "Can also be used in baking and cooking.",
      "Consume once daily.",
    ],
  },

  {
    id: 17,
    name: "Baheda Powder",
    hindiName: "बहेड़ा चूर्ण",
    botanicalName: "Terminalia bellirica",
    slug: "baheda-powder",
    category: "Digestive Wellness",
    rawMaterial: "Baheda Fruit",
    image: "/Item/BAHEDA_POWDER.png",
    gallery: [
      "/Item/BAHEDA_POWDER.png",
    ],
    price: 149,
    featured: false,
    bestseller: false,
    description:
      "Baheda Powder is a premium Ayurvedic herbal powder made from carefully selected Baheda fruits. It is one of the three key ingredients of Triphala and is traditionally valued in Ayurveda.",
    benefits: [
      "Supports digestive wellness",
      "Traditional Ayurvedic herb",
      "Rich in natural plant compounds",
      "Promotes overall well-being",
      "Suitable for daily use",
    ],
    ingredients: [
      "100% Pure Baheda Fruit Powder",
    ],
    usage: [
      "Mix one teaspoon with warm water.",
      "Consume once daily.",
      "Use under professional guidance.",
    ],
  },

  {
    id: 18,
    name: "Ashwagandha Powder",
    hindiName: "अश्वगंधा चूर्ण",
    botanicalName: "Withania somnifera",
    slug: "ashwagandha-powder",
    category: "Ayurvedic Powders",
    rawMaterial: "Ashwagandha Root",
    image: "/Item/Ashwgandha_powder.png",
    gallery: [
      "/Item/Ashwgandha_powder.png",
    ],
    price: 199,
    featured: true,
    bestseller: true,
    description:
      "Ashwagandha Powder is one of Ayurveda's most renowned herbs, prepared from premium-quality Ashwagandha roots. It is traditionally used to support strength, vitality, stress management, and overall wellness.",
    benefits: [
      "Supports stress management",
      "Promotes strength and stamina",
      "Supports overall wellness",
      "Traditional adaptogenic herb",
      "Suitable for daily use",
    ],
    ingredients: [
      "100% Pure Ashwagandha Root Powder",
    ],
    usage: [
      "Mix one teaspoon with warm milk or water.",
      "Consume once daily, preferably at night.",
      "Use as advised by a healthcare professional.",
    ],
  },

  {
    id: 19,
    name: "Arjun Chhal Powder",
    hindiName: "अर्जुन छाल चूर्ण",
    botanicalName: "Terminalia arjuna",
    slug: "arjun-chhal-powder",
    category: "Heart Wellness",
    rawMaterial: "Arjun Bark",
    image: "/Item/Arjunchhal_powder.png",
    gallery: [
      "/Item/Arjunchhal_powder.png",
    ],
    price: 149,
    featured: true,
    bestseller: false,
    description:
      "Arjun Chhal Powder is made from carefully selected Arjun tree bark and has been traditionally used in Ayurveda to support cardiovascular wellness and overall vitality.",
    benefits: [
      "Supports heart wellness",
      "Traditional Ayurvedic herb",
      "Rich in natural antioxidants",
      "Promotes overall health",
      "Suitable for regular use",
    ],
    ingredients: [
      "100% Pure Arjun Bark Powder",
    ],
    usage: [
      "Mix one teaspoon with warm water or milk.",
      "Consume once daily.",
      "Use under professional guidance.",
    ],
  },

  {
    id: 20,
    name: "Amla Powder",
    hindiName: "आंवला चूर्ण",
    botanicalName: "Phyllanthus emblica",
    slug: "amla-powder",
    category: "Ayurvedic Powders",
    rawMaterial: "Indian Gooseberry",
    image: "/Item/AMLA_POWDER.png",
    gallery: [
      "/Item/AMLA_POWDER.png",
    ],
    price: 159,
    featured: true,
    bestseller: true,
    description:
      "Amla Powder is made from premium-quality Indian Gooseberries and is naturally rich in Vitamin C and antioxidants. It has been used in Ayurveda for centuries to support immunity, digestion, healthy skin, and hair.",
    benefits: [
      "Rich source of natural Vitamin C",
      "Supports immunity",
      "Promotes healthy skin and hair",
      "Rich in antioxidants",
      "Supports overall wellness",
    ],
    ingredients: [
      "100% Pure Amla Fruit Powder",
    ],
    usage: [
      "Mix one teaspoon with warm water, juice, or smoothies.",
      "Can also be mixed with honey.",
      "Consume daily or as directed by a healthcare professional.",
    ],
  },
];