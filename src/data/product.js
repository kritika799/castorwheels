const products = [
  {
    id: "HD-SW-500-PU",
    name: "5-Inch Heavy Duty Swivel Castor with Brake",
    slug: "5-inch-heavy-duty-swivel-castor-with-brake",

    category: {
      name: "Heavy Duty Castors",
      series: "Industrial Series",
      type: "Heavy Duty Swivel with Total Brake",
    },

    highlights: {
      loadCapacityKg: 450,
      wheelDiameterMm: 125,
      wheelDiameterInch: 5,
      bearing: "Double Ball",
      material: "Polyurethane (PU)",
    },

    description:
      "Engineered for high-load industrial applications. Features a noise-reducing Polyurethane tread bonded to a cast iron core. Ideal for heavy machinery, automotive assembly lines, and warehouse trolleys requiring floor protection and durability.",

    technicalSpecifications: {
      wheelDiameter: "125 mm (5 inches)",
      treadWidth: "50 mm",
      loadCapacity: "450 kg per Casters Global",
      overallHeight: "164 mm",
      plateSize: "115 x 100 mm",
      holeCenters: "85 x 73 mm",
      wheelMaterial: "Polyurethane on Cast Iron Core",
      temperatureRange: "-20°C to +80°C",
    },

    media: {
      mainImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCRfHZKZ1QxFqwGXJxMAMvpBBbJ5u7cURhHj5oe7DH4YxDSPYDUYgmgIQhQNeXJFFV4BMrBQx36L-Qdf-TjZs99BxUqvwpByZOpbJCi91HjAtTd1wcLHMAsolhYVcl6DbGF6a-aOT0S8lE4ge301HtpCbvjZOw0x-CGRPF7Ti4nm2_AUwWMn8LJpMSDYMNISZtLcUYxEzYEyHcJpDuQ9jhpyqBlk125A96Sklzt5F18MkLy6fu38Hbd3OAM8QOu5XbKgZb6p-jbUll8",
      gallery: [],
      hasVideoPreview: true,
    },

    downloads: [
      {
        type: "datasheet",
        label: "Technical Datasheet",
        format: "PDF",
        size: "2.4 MB",
      },
      { type: "cad", label: "3D CAD Model", format: "STEP", size: "15 MB" },
    ],

    manufacturer: {
      directManufacturer: true,
      customizationAvailable: true,
      customizationOptions: [
        "Custom branding",
        "Specific colors",
        "Modified stem sizes",
      ],
    },

    inquiry: {
      contactSales: true,
      whatsappAvailable: true,
      brochureAvailable: true,
    },
  },

  // -----------------------------
  // Converted from allProducts
  // -----------------------------

  {
    id: "CC-HD-100-PU",
    name: "Heavy Duty Swivel Castor",
    slug: "heavy-duty-swivel-castor-100mm",

    category: {
      name: "Heavy Duty Castors",
      series: "Industrial Series",
      type: "Swivel",
    },

    highlights: {
      loadCapacityKg: 300,
      wheelDiameterMm: 100,
      wheelDiameterInch: 4,
      bearing: "Ball Bearing",
      material: "Polyurethane (PU)",
    },

    description:
      "Reliable heavy duty swivel castor suitable for industrial trolleys and material handling equipment.",

    technicalSpecifications: {
      wheelDiameter: "100 mm",
      loadCapacity: "300 kg",
      wheelMaterial: "Polyurethane",
    },

    media: {
      mainImage: "/img/medium dutty fixed nylon 1.jpg",
      gallery: [],
      hasVideoPreview: false,
    },
  },

  {
    id: "CC-MD-125-NY",
    name: "Medium Duty Fixed Nylon Castor",
    slug: "medium-duty-fixed-nylon-castor-125mm",

    category: {
      name: "Light Duty Castors",
      series: "Utility Series",
      type: "Fixed",
    },

    highlights: {
      loadCapacityKg: 150,
      wheelDiameterMm: 125,
      wheelDiameterInch: 5,
      bearing: "Plain",
      material: "Nylon",
    },

    description:
      "Durable nylon fixed castor designed for light-duty applications with smooth rolling performance.",

    technicalSpecifications: {
      wheelDiameter: "125 mm",
      loadCapacity: "150 kg",
      wheelMaterial: "Nylon",
    },

    media: {
      mainImage: "/img/medium dutty fixed nylon.jpg",
      gallery: [],
      hasVideoPreview: false,
    },
  },

  {
    id: "CC-LD-050-RB",
    name: "Rubber Twin Wheel Castor",
    slug: "rubber-twin-wheel-castor-50mm",

    category: {
      name: "Furniture Castors",
      series: "Home & Office",
      type: "Swivel",
    },

    highlights: {
      loadCapacityKg: 50,
      wheelDiameterMm: 50,
      wheelDiameterInch: 2,
      bearing: "Plain",
      material: "Rubber",
    },

    description:
      "Compact twin wheel rubber castor ideal for furniture and light office equipment.",

    technicalSpecifications: {
      wheelDiameter: "50 mm",
      loadCapacity: "50 kg",
      wheelMaterial: "Rubber",
    },

    media: {
      mainImage:
        "https://images.unsplash.com/photo-1588286840104-8953a8214a8c?w=800",
      gallery: [],
      hasVideoPreview: false,
    },
  },

  {
    id: "CC-EHD-200-CI",
    name: "Extra Heavy Duty Cast Iron Castor",
    slug: "extra-heavy-duty-cast-iron-castor-200mm",

    category: {
      name: "Heavy Duty Castors",
      series: "Extreme Load Series",
      type: "Fixed",
    },

    highlights: {
      loadCapacityKg: 800,
      wheelDiameterMm: 200,
      wheelDiameterInch: 8,
      bearing: "Roller Bearing",
      material: "Cast Iron",
    },

    description:
      "Designed for extreme industrial loads. Suitable for heavy machinery and steel fabrication plants.",

    technicalSpecifications: {
      wheelDiameter: "200 mm",
      loadCapacity: "800 kg",
      wheelMaterial: "Cast Iron",
    },

    media: {
      mainImage:
        "https://images.unsplash.com/photo-1581092160560-3c6a6e9e6b5?w=800",
      gallery: [],
      hasVideoPreview: false,
    },
  },
];

export default products;
