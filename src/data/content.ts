import { ServiceItem, PortfolioItem, OrgNode, ESGStrategy } from '../types';

// Content reconciled with supplied NRC company profile. Artwork preserved separately.

export const COMPANY_INFO = {
  "name": "NRC MEGA RESOURCES SDN BHD",
  "tagline": {
    "en": "Reliable Services. One Versatile Partner.",
    "bm": "Perkhidmatan Boleh Dipercayai. Satu Rakan Serba Boleh."
  },
  "contactPerson": "Mr Chan (Chandran)",
  "phoneDisplay": "011-10789912",
  "phoneCall": "+601110789912",
  "whatsappUrl": "https://wa.me/601110789912",
  "whatsappNumber": "601110789912",
  "emails": [
    "bb4459613@gmail.com",
    "sundrisupramaniam@gmail.com"
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    "id": "construction",
    "title": {
      "en": "Construction",
      "bm": "Pembinaan"
    },
    "shortDesc": {
      "en": "Construction services for your project requirements.",
      "bm": "Perkhidmatan pembinaan mengikut keperluan projek anda."
    },
    "fullDesc": {
      "en": "Construction services for your project requirements. Discuss the required scope with Mr Chan. Availability, arrangements, pricing and timelines are subject to confirmation.",
      "bm": "Perkhidmatan pembinaan mengikut keperluan projek anda. Bincangkan skop yang diperlukan dengan Mr Chan. Ketersediaan, aturan, harga dan jadual tertakluk kepada pengesahan."
    },
    "iconName": "Hammer",
    "imageRectId": "05",
    "features": {
      "en": [
        "Construction",
        "Access to other NRC services through one provider"
      ],
      "bm": [
        "Pembinaan",
        "Akses kepada perkhidmatan NRC lain melalui satu pembekal"
      ]
    },
    "scope": {
      "en": [
        "Tell us the site location and required work",
        "Share your preferred schedule and requirements",
        "Agree the scope and terms before proceeding"
      ],
      "bm": [
        "Nyatakan lokasi tapak dan kerja yang diperlukan",
        "Kongsikan jadual pilihan dan keperluan anda",
        "Persetujui skop dan terma sebelum meneruskan"
      ]
    },
    "waMessage": {
      "en": "Hello Mr Chan, I would like to enquire about NRC Construction.",
      "bm": "Salam Mr Chan, saya ingin bertanya tentang Pembinaan NRC."
    }
  },
  {
    "id": "cleaning",
    "title": {
      "en": "Cleaning Services",
      "bm": "Perkhidmatan Pembersihan"
    },
    "shortDesc": {
      "en": "Cleaning services for client premises.",
      "bm": "Perkhidmatan pembersihan untuk premis pelanggan."
    },
    "fullDesc": {
      "en": "Cleaning services for client premises. Discuss the required scope with Mr Chan. Availability, arrangements, pricing and timelines are subject to confirmation.",
      "bm": "Perkhidmatan pembersihan untuk premis pelanggan. Bincangkan skop yang diperlukan dengan Mr Chan. Ketersediaan, aturan, harga dan jadual tertakluk kepada pengesahan."
    },
    "iconName": "Sparkles",
    "imageRectId": "13",
    "features": {
      "en": [
        "Cleaning Services",
        "Access to other NRC services through one provider"
      ],
      "bm": [
        "Perkhidmatan Pembersihan",
        "Akses kepada perkhidmatan NRC lain melalui satu pembekal"
      ]
    },
    "scope": {
      "en": [
        "Tell us the site location and required work",
        "Share your preferred schedule and requirements",
        "Agree the scope and terms before proceeding"
      ],
      "bm": [
        "Nyatakan lokasi tapak dan kerja yang diperlukan",
        "Kongsikan jadual pilihan dan keperluan anda",
        "Persetujui skop dan terma sebelum meneruskan"
      ]
    },
    "waMessage": {
      "en": "Hello Mr Chan, I would like to enquire about NRC Cleaning Services.",
      "bm": "Salam Mr Chan, saya ingin bertanya tentang Perkhidmatan Pembersihan NRC."
    }
  },
  {
    "id": "landscaping",
    "title": {
      "en": "Landscaping Services",
      "bm": "Perkhidmatan Landskap"
    },
    "shortDesc": {
      "en": "Landscaping services for client sites.",
      "bm": "Perkhidmatan landskap untuk kawasan pelanggan."
    },
    "fullDesc": {
      "en": "Landscaping services for client sites. Discuss the required scope with Mr Chan. Availability, arrangements, pricing and timelines are subject to confirmation.",
      "bm": "Perkhidmatan landskap untuk kawasan pelanggan. Bincangkan skop yang diperlukan dengan Mr Chan. Ketersediaan, aturan, harga dan jadual tertakluk kepada pengesahan."
    },
    "iconName": "Trees",
    "imageRectId": "03",
    "features": {
      "en": [
        "Landscaping Services",
        "Access to other NRC services through one provider"
      ],
      "bm": [
        "Perkhidmatan Landskap",
        "Akses kepada perkhidmatan NRC lain melalui satu pembekal"
      ]
    },
    "scope": {
      "en": [
        "Tell us the site location and required work",
        "Share your preferred schedule and requirements",
        "Agree the scope and terms before proceeding"
      ],
      "bm": [
        "Nyatakan lokasi tapak dan kerja yang diperlukan",
        "Kongsikan jadual pilihan dan keperluan anda",
        "Persetujui skop dan terma sebelum meneruskan"
      ]
    },
    "waMessage": {
      "en": "Hello Mr Chan, I would like to enquire about NRC Landscaping Services.",
      "bm": "Salam Mr Chan, saya ingin bertanya tentang Perkhidmatan Landskap NRC."
    }
  },
  {
    "id": "manpower",
    "title": {
      "en": "Manpower for Small & Large Industries",
      "bm": "Tenaga Kerja untuk Industri Kecil & Besar"
    },
    "shortDesc": {
      "en": "Manpower services for small and large industries.",
      "bm": "Perkhidmatan tenaga kerja untuk industri kecil dan besar."
    },
    "fullDesc": {
      "en": "Manpower services for small and large industries. Discuss the required scope with Mr Chan. Availability, arrangements, pricing and timelines are subject to confirmation.",
      "bm": "Perkhidmatan tenaga kerja untuk industri kecil dan besar. Bincangkan skop yang diperlukan dengan Mr Chan. Ketersediaan, aturan, harga dan jadual tertakluk kepada pengesahan."
    },
    "iconName": "Users",
    "features": {
      "en": [
        "Manpower for Small & Large Industries",
        "Access to other NRC services through one provider"
      ],
      "bm": [
        "Tenaga Kerja untuk Industri Kecil & Besar",
        "Akses kepada perkhidmatan NRC lain melalui satu pembekal"
      ]
    },
    "scope": {
      "en": [
        "Tell us the site location and required work",
        "Share your preferred schedule and requirements",
        "Agree the scope and terms before proceeding"
      ],
      "bm": [
        "Nyatakan lokasi tapak dan kerja yang diperlukan",
        "Kongsikan jadual pilihan dan keperluan anda",
        "Persetujui skop dan terma sebelum meneruskan"
      ]
    },
    "waMessage": {
      "en": "Hello Mr Chan, I would like to enquire about NRC Manpower for Small & Large Industries.",
      "bm": "Salam Mr Chan, saya ingin bertanya tentang Tenaga Kerja untuk Industri Kecil & Besar NRC."
    }
  },
  {
    "id": "logistics",
    "title": {
      "en": "Logistics Services",
      "bm": "Perkhidmatan Logistik"
    },
    "shortDesc": {
      "en": "Logistics services to support client requirements.",
      "bm": "Perkhidmatan logistik bagi menyokong keperluan pelanggan."
    },
    "fullDesc": {
      "en": "Logistics services to support client requirements. Discuss the required scope with Mr Chan. Availability, arrangements, pricing and timelines are subject to confirmation.",
      "bm": "Perkhidmatan logistik bagi menyokong keperluan pelanggan. Bincangkan skop yang diperlukan dengan Mr Chan. Ketersediaan, aturan, harga dan jadual tertakluk kepada pengesahan."
    },
    "iconName": "Truck",
    "features": {
      "en": [
        "Logistics Services",
        "Access to other NRC services through one provider"
      ],
      "bm": [
        "Perkhidmatan Logistik",
        "Akses kepada perkhidmatan NRC lain melalui satu pembekal"
      ]
    },
    "scope": {
      "en": [
        "Tell us the site location and required work",
        "Share your preferred schedule and requirements",
        "Agree the scope and terms before proceeding"
      ],
      "bm": [
        "Nyatakan lokasi tapak dan kerja yang diperlukan",
        "Kongsikan jadual pilihan dan keperluan anda",
        "Persetujui skop dan terma sebelum meneruskan"
      ]
    },
    "waMessage": {
      "en": "Hello Mr Chan, I would like to enquire about NRC Logistics Services.",
      "bm": "Salam Mr Chan, saya ingin bertanya tentang Perkhidmatan Logistik NRC."
    }
  },
  {
    "id": "storage",
    "title": {
      "en": "Construction Material Storage",
      "bm": "Penyimpanan Bahan Binaan"
    },
    "shortDesc": {
      "en": "Storage services for construction materials.",
      "bm": "Perkhidmatan penyimpanan bahan binaan."
    },
    "fullDesc": {
      "en": "Storage services for construction materials. Discuss the required scope with Mr Chan. Availability, arrangements, pricing and timelines are subject to confirmation.",
      "bm": "Perkhidmatan penyimpanan bahan binaan. Bincangkan skop yang diperlukan dengan Mr Chan. Ketersediaan, aturan, harga dan jadual tertakluk kepada pengesahan."
    },
    "iconName": "Warehouse",
    "features": {
      "en": [
        "Construction Material Storage",
        "Access to other NRC services through one provider"
      ],
      "bm": [
        "Penyimpanan Bahan Binaan",
        "Akses kepada perkhidmatan NRC lain melalui satu pembekal"
      ]
    },
    "scope": {
      "en": [
        "Tell us the site location and required work",
        "Share your preferred schedule and requirements",
        "Agree the scope and terms before proceeding"
      ],
      "bm": [
        "Nyatakan lokasi tapak dan kerja yang diperlukan",
        "Kongsikan jadual pilihan dan keperluan anda",
        "Persetujui skop dan terma sebelum meneruskan"
      ]
    },
    "waMessage": {
      "en": "Hello Mr Chan, I would like to enquire about NRC Construction Material Storage.",
      "bm": "Salam Mr Chan, saya ingin bertanya tentang Penyimpanan Bahan Binaan NRC."
    }
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    "id": "01",
    "number": "01",
    "title": {
      "en": "Landscaping — 01",
      "bm": "Landskap — 01"
    },
    "category": "landscaping",
    "categoryLabel": {
      "en": "Landscaping",
      "bm": "Landskap"
    },
    "timing": "before",
    "rect": {
      "x": 40,
      "y": 665,
      "w": 920,
      "h": 575
    },
    "aspectRatio": "16 / 10",
    "description": {
      "en": "Explore landscaping and discuss your requirements with Mr Chan.",
      "bm": "Terokai landskap dan bincangkan keperluan anda dengan Mr Chan."
    },
    "details": {
      "en": "Work scope, availability, costs and schedule are subject to confirmation.",
      "bm": "Skop kerja, ketersediaan, kos dan jadual tertakluk kepada pengesahan."
    }
  },
  {
    "id": "02",
    "number": "02",
    "title": {
      "en": "Landscaping — 02",
      "bm": "Landskap — 02"
    },
    "category": "landscaping",
    "categoryLabel": {
      "en": "Landscaping",
      "bm": "Landskap"
    },
    "timing": "before",
    "rect": {
      "x": 1040,
      "y": 665,
      "w": 920,
      "h": 575
    },
    "aspectRatio": "16 / 10",
    "description": {
      "en": "Explore landscaping and discuss your requirements with Mr Chan.",
      "bm": "Terokai landskap dan bincangkan keperluan anda dengan Mr Chan."
    },
    "details": {
      "en": "Work scope, availability, costs and schedule are subject to confirmation.",
      "bm": "Skop kerja, ketersediaan, kos dan jadual tertakluk kepada pengesahan."
    }
  },
  {
    "id": "03",
    "number": "03",
    "title": {
      "en": "Landscaping — 03",
      "bm": "Landskap — 03"
    },
    "category": "landscaping",
    "categoryLabel": {
      "en": "Landscaping",
      "bm": "Landskap"
    },
    "timing": "after",
    "rect": {
      "x": 2040,
      "y": 665,
      "w": 920,
      "h": 575
    },
    "aspectRatio": "16 / 10",
    "description": {
      "en": "Explore landscaping and discuss your requirements with Mr Chan.",
      "bm": "Terokai landskap dan bincangkan keperluan anda dengan Mr Chan."
    },
    "details": {
      "en": "Work scope, availability, costs and schedule are subject to confirmation.",
      "bm": "Skop kerja, ketersediaan, kos dan jadual tertakluk kepada pengesahan."
    }
  },
  {
    "id": "04",
    "number": "04",
    "title": {
      "en": "Landscaping — 04",
      "bm": "Landskap — 04"
    },
    "category": "landscaping",
    "categoryLabel": {
      "en": "Landscaping",
      "bm": "Landskap"
    },
    "timing": "after",
    "rect": {
      "x": 3040,
      "y": 665,
      "w": 920,
      "h": 575
    },
    "aspectRatio": "16 / 10",
    "description": {
      "en": "Explore landscaping and discuss your requirements with Mr Chan.",
      "bm": "Terokai landskap dan bincangkan keperluan anda dengan Mr Chan."
    },
    "details": {
      "en": "Work scope, availability, costs and schedule are subject to confirmation.",
      "bm": "Skop kerja, ketersediaan, kos dan jadual tertakluk kepada pengesahan."
    }
  },
  {
    "id": "05",
    "number": "05",
    "title": {
      "en": "Construction — 05",
      "bm": "Pembinaan — 05"
    },
    "category": "construction",
    "categoryLabel": {
      "en": "Construction",
      "bm": "Pembinaan"
    },
    "rect": {
      "x": 40,
      "y": 1665,
      "w": 920,
      "h": 575
    },
    "aspectRatio": "16 / 10",
    "description": {
      "en": "Explore construction and discuss your requirements with Mr Chan.",
      "bm": "Terokai pembinaan dan bincangkan keperluan anda dengan Mr Chan."
    },
    "details": {
      "en": "Work scope, availability, costs and schedule are subject to confirmation.",
      "bm": "Skop kerja, ketersediaan, kos dan jadual tertakluk kepada pengesahan."
    }
  },
  {
    "id": "06",
    "number": "06",
    "title": {
      "en": "Construction — 06",
      "bm": "Pembinaan — 06"
    },
    "category": "construction",
    "categoryLabel": {
      "en": "Construction",
      "bm": "Pembinaan"
    },
    "rect": {
      "x": 1040,
      "y": 1665,
      "w": 920,
      "h": 575
    },
    "aspectRatio": "16 / 10",
    "description": {
      "en": "Explore construction and discuss your requirements with Mr Chan.",
      "bm": "Terokai pembinaan dan bincangkan keperluan anda dengan Mr Chan."
    },
    "details": {
      "en": "Work scope, availability, costs and schedule are subject to confirmation.",
      "bm": "Skop kerja, ketersediaan, kos dan jadual tertakluk kepada pengesahan."
    }
  },
  {
    "id": "07",
    "number": "07",
    "title": {
      "en": "Construction — 07",
      "bm": "Pembinaan — 07"
    },
    "category": "construction",
    "categoryLabel": {
      "en": "Construction",
      "bm": "Pembinaan"
    },
    "rect": {
      "x": 2040,
      "y": 1665,
      "w": 920,
      "h": 575
    },
    "aspectRatio": "16 / 10",
    "description": {
      "en": "Explore construction and discuss your requirements with Mr Chan.",
      "bm": "Terokai pembinaan dan bincangkan keperluan anda dengan Mr Chan."
    },
    "details": {
      "en": "Work scope, availability, costs and schedule are subject to confirmation.",
      "bm": "Skop kerja, ketersediaan, kos dan jadual tertakluk kepada pengesahan."
    }
  },
  {
    "id": "08",
    "number": "08",
    "title": {
      "en": "Construction — 08",
      "bm": "Pembinaan — 08"
    },
    "category": "construction",
    "categoryLabel": {
      "en": "Construction",
      "bm": "Pembinaan"
    },
    "rect": {
      "x": 3040,
      "y": 1665,
      "w": 920,
      "h": 575
    },
    "aspectRatio": "16 / 10",
    "description": {
      "en": "Explore construction and discuss your requirements with Mr Chan.",
      "bm": "Terokai pembinaan dan bincangkan keperluan anda dengan Mr Chan."
    },
    "details": {
      "en": "Work scope, availability, costs and schedule are subject to confirmation.",
      "bm": "Skop kerja, ketersediaan, kos dan jadual tertakluk kepada pengesahan."
    }
  },
  {
    "id": "09",
    "number": "09",
    "title": {
      "en": "Construction — 09",
      "bm": "Pembinaan — 09"
    },
    "category": "construction",
    "categoryLabel": {
      "en": "Construction",
      "bm": "Pembinaan"
    },
    "rect": {
      "x": 40,
      "y": 2665,
      "w": 920,
      "h": 575
    },
    "aspectRatio": "16 / 10",
    "description": {
      "en": "Explore construction and discuss your requirements with Mr Chan.",
      "bm": "Terokai pembinaan dan bincangkan keperluan anda dengan Mr Chan."
    },
    "details": {
      "en": "Work scope, availability, costs and schedule are subject to confirmation.",
      "bm": "Skop kerja, ketersediaan, kos dan jadual tertakluk kepada pengesahan."
    }
  },
  {
    "id": "10",
    "number": "10",
    "title": {
      "en": "Construction — 10",
      "bm": "Pembinaan — 10"
    },
    "category": "construction",
    "categoryLabel": {
      "en": "Construction",
      "bm": "Pembinaan"
    },
    "rect": {
      "x": 1040,
      "y": 2665,
      "w": 920,
      "h": 575
    },
    "aspectRatio": "16 / 10",
    "description": {
      "en": "Explore construction and discuss your requirements with Mr Chan.",
      "bm": "Terokai pembinaan dan bincangkan keperluan anda dengan Mr Chan."
    },
    "details": {
      "en": "Work scope, availability, costs and schedule are subject to confirmation.",
      "bm": "Skop kerja, ketersediaan, kos dan jadual tertakluk kepada pengesahan."
    }
  },
  {
    "id": "11",
    "number": "11",
    "title": {
      "en": "Wastewater Treatment Plant (WWTP) — 11",
      "bm": "Loji Rawatan Air Sisa (WWTP) — 11"
    },
    "category": "wwtp",
    "categoryLabel": {
      "en": "Wastewater Treatment",
      "bm": "Rawatan Air Sisa"
    },
    "rect": {
      "x": 2040,
      "y": 2665,
      "w": 920,
      "h": 575
    },
    "aspectRatio": "16 / 10",
    "description": {
      "en": "Explore wastewater treatment plant (wwtp) and discuss your requirements with Mr Chan.",
      "bm": "Terokai loji rawatan air sisa (wwtp) dan bincangkan keperluan anda dengan Mr Chan."
    },
    "details": {
      "en": "Work scope, availability, costs and schedule are subject to confirmation.",
      "bm": "Skop kerja, ketersediaan, kos dan jadual tertakluk kepada pengesahan."
    }
  },
  {
    "id": "12",
    "number": "12",
    "title": {
      "en": "Wastewater Treatment Plant (WWTP) — 12",
      "bm": "Loji Rawatan Air Sisa (WWTP) — 12"
    },
    "category": "wwtp",
    "categoryLabel": {
      "en": "Wastewater Treatment",
      "bm": "Rawatan Air Sisa"
    },
    "rect": {
      "x": 3040,
      "y": 2665,
      "w": 920,
      "h": 575
    },
    "aspectRatio": "16 / 10",
    "description": {
      "en": "Explore wastewater treatment plant (wwtp) and discuss your requirements with Mr Chan.",
      "bm": "Terokai loji rawatan air sisa (wwtp) dan bincangkan keperluan anda dengan Mr Chan."
    },
    "details": {
      "en": "Work scope, availability, costs and schedule are subject to confirmation.",
      "bm": "Skop kerja, ketersediaan, kos dan jadual tertakluk kepada pengesahan."
    }
  },
  {
    "id": "13",
    "number": "13",
    "title": {
      "en": "Cleaning Services — 13",
      "bm": "Perkhidmatan Pembersihan — 13"
    },
    "category": "cleaning",
    "categoryLabel": {
      "en": "Cleaning",
      "bm": "Pembersihan"
    },
    "rect": {
      "x": 40,
      "y": 3665,
      "w": 920,
      "h": 575
    },
    "aspectRatio": "16 / 10",
    "description": {
      "en": "Explore cleaning services and discuss your requirements with Mr Chan.",
      "bm": "Terokai perkhidmatan pembersihan dan bincangkan keperluan anda dengan Mr Chan."
    },
    "details": {
      "en": "Work scope, availability, costs and schedule are subject to confirmation.",
      "bm": "Skop kerja, ketersediaan, kos dan jadual tertakluk kepada pengesahan."
    }
  },
  {
    "id": "14",
    "number": "14",
    "title": {
      "en": "Cleaning Services — 14",
      "bm": "Perkhidmatan Pembersihan — 14"
    },
    "category": "cleaning",
    "categoryLabel": {
      "en": "Cleaning",
      "bm": "Pembersihan"
    },
    "rect": {
      "x": 1040,
      "y": 3665,
      "w": 920,
      "h": 575
    },
    "aspectRatio": "16 / 10",
    "description": {
      "en": "Explore cleaning services and discuss your requirements with Mr Chan.",
      "bm": "Terokai perkhidmatan pembersihan dan bincangkan keperluan anda dengan Mr Chan."
    },
    "details": {
      "en": "Work scope, availability, costs and schedule are subject to confirmation.",
      "bm": "Skop kerja, ketersediaan, kos dan jadual tertakluk kepada pengesahan."
    }
  }
];

export const ORG_CHART: OrgNode[] = [
  {
    "name": "N. RAVI CHANDRAN",
    "role": {
      "en": "Director",
      "bm": "Pengarah"
    },
    "department": {
      "en": "NRC MEGA RESOURCES SDN BHD",
      "bm": "NRC MEGA RESOURCES SDN BHD"
    }
  },
  {
    "name": "Finance and Admin",
    "role": {
      "en": "Department",
      "bm": "Jabatan"
    },
    "department": {
      "en": "Finance and Admin",
      "bm": "Kewangan dan Pentadbiran"
    },
    "reportsTo": "N. RAVI CHANDRAN"
  },
  {
    "name": "Foreign Welfare Affairs",
    "role": {
      "en": "Department",
      "bm": "Jabatan"
    },
    "department": {
      "en": "Foreign Welfare Affairs",
      "bm": "Hal Ehwal Kebajikan Pekerja Asing"
    },
    "reportsTo": "N. RAVI CHANDRAN"
  },
  {
    "name": "Sales & Marketing",
    "role": {
      "en": "Department",
      "bm": "Jabatan"
    },
    "department": {
      "en": "Sales & Marketing",
      "bm": "Jualan & Pemasaran"
    },
    "reportsTo": "N. RAVI CHANDRAN"
  },
  {
    "name": "ARVINDRAJ",
    "role": {
      "en": "Manager",
      "bm": "Pengurus"
    },
    "department": {
      "en": "Finance and Admin",
      "bm": "Kewangan dan Pentadbiran"
    },
    "reportsTo": "Finance and Admin"
  },
  {
    "name": "DEEPANRAJ",
    "role": {
      "en": "Manager",
      "bm": "Pengurus"
    },
    "department": {
      "en": "Foreign Welfare Affairs",
      "bm": "Hal Ehwal Kebajikan Pekerja Asing"
    },
    "reportsTo": "Foreign Welfare Affairs"
  },
  {
    "name": "CHANDRAN",
    "role": {
      "en": "Sales Manager",
      "bm": "Pengurus Jualan"
    },
    "department": {
      "en": "Sales & Marketing",
      "bm": "Jualan & Pemasaran"
    },
    "reportsTo": "Sales & Marketing"
  },
  {
    "name": "RANA",
    "role": {
      "en": "Construction Manager",
      "bm": "Pengurus Pembinaan"
    },
    "department": {
      "en": "Sales & Marketing",
      "bm": "Jualan & Pemasaran"
    },
    "reportsTo": "Sales & Marketing"
  }
];

export const CORPORATE_VALUES = [
  {
    "id": "sustainability",
    "title": {
      "en": "Sustainability",
      "bm": "Kelestarian"
    },
    "desc": {
      "en": "We prioritize practices that contribute to the well-being of our planet and future generations.",
      "bm": "Kami mengutamakan amalan yang menyumbang kepada kesejahteraan bumi dan generasi akan datang."
    }
  },
  {
    "id": "integrity",
    "title": {
      "en": "Integrity",
      "bm": "Integriti"
    },
    "desc": {
      "en": "Ethical practices and transparency are the foundation of our business.",
      "bm": "Amalan beretika dan ketelusan ialah asas perniagaan kami."
    }
  },
  {
    "id": "innovation",
    "title": {
      "en": "Innovation",
      "bm": "Inovasi"
    },
    "desc": {
      "en": "Embracing technology and creative solutions to deliver excellence.",
      "bm": "Menerapkan teknologi dan penyelesaian kreatif untuk mencapai kecemerlangan."
    }
  },
  {
    "id": "community",
    "title": {
      "en": "Community",
      "bm": "Komuniti"
    },
    "desc": {
      "en": "Supporting and uplifting the communities we serve.",
      "bm": "Menyokong dan memperkasakan komuniti yang kami berkhidmat."
    }
  },
  {
    "id": "quality",
    "title": {
      "en": "Quality",
      "bm": "Kualiti"
    },
    "desc": {
      "en": "Consistently providing high-value services tailored to client needs.",
      "bm": "Menyediakan perkhidmatan bernilai tinggi yang disesuaikan dengan keperluan pelanggan."
    }
  }
];

export const ESG_STRATEGY: ESGStrategy[] = [
  {
    "pillar": "Environmental",
    "title": {
      "en": "Environmental Stewardship",
      "bm": "Penjagaan Alam Sekitar"
    },
    "points": {
      "en": [
        "Committed to energy-efficient methods, waste reduction and responsible land use.",
        "Our environmental approach includes adopting green technologies in logistics, cleaning and landscaping."
      ],
      "bm": [
        "Komited kepada kaedah cekap tenaga, pengurangan sisa dan penggunaan tanah yang bertanggungjawab.",
        "Pendekatan alam sekitar kami merangkumi penerapan teknologi hijau dalam logistik, pembersihan dan landskap."
      ]
    }
  },
  {
    "pillar": "Social",
    "title": {
      "en": "Social Impact & Worker Welfare",
      "bm": "Impak Sosial & Kebajikan Pekerja"
    },
    "points": {
      "en": [
        "Our social commitments include job opportunities, skills development, inclusivity and diversity.",
        "Supporting community projects to improve infrastructure and quality of life."
      ],
      "bm": [
        "Komitmen sosial kami merangkumi peluang pekerjaan, pembangunan kemahiran, keterangkuman dan kepelbagaian.",
        "Menyokong projek komuniti untuk menambah baik infrastruktur dan kualiti hidup."
      ]
    }
  },
  {
    "pillar": "Governance",
    "title": {
      "en": "Corporate Governance & Integrity",
      "bm": "Tadbir Urus Korporat & Integriti"
    },
    "points": {
      "en": [
        "Committed to transparency, ethics and regulatory compliance.",
        "Building trust through governance policies and stakeholder engagement."
      ],
      "bm": [
        "Komited kepada ketelusan, etika dan pematuhan peraturan.",
        "Membina kepercayaan melalui dasar tadbir urus dan penglibatan pihak berkepentingan."
      ]
    }
  }
];
