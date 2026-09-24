import { ServiceItem, PortfolioItem, OrgNode, ESGStrategy } from '../types';

export const COMPANY_INFO = {
  name: 'NRC MEGA RESOURCES SDN BHD',
  tagline: {
    en: 'Reliable Services. One Versatile Partner.',
    bm: 'Perkhidmatan Boleh Dipercayai. Satu Rakan Serba Boleh.',
  },
  contactPerson: 'Mr Chan (Chandran)',
  phoneDisplay: '011-10789912',
  phoneCall: '+601110789912',
  whatsappUrl: 'https://wa.me/601110789912',
  whatsappNumber: '601110789912',
  emails: [
    'bb4459613@gmail.com',
    'sundrisupramaniam@gmail.com',
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'construction',
    title: {
      en: 'Construction & Civil Works',
      bm: 'Pembinaan & Kerja-kerja Sivil',
    },
    shortDesc: {
      en: 'Comprehensive structural construction, earthworks, reinforced foundation, scaffolding, and civil site engineering.',
      bm: 'Pembinaan struktur menyeluruh, kerja tanah, asas konkrit bertetulang, perancah dan kejuruteraan tapak sivil.',
    },
    fullDesc: {
      en: 'NRC delivers robust construction services across industrial, infrastructure, and commercial sectors. From initial excavation and ground foundation to complex structural framing, concrete pouring, and high-standard site execution, we maintain stringent safety and engineering standards.',
      bm: 'NRC membekalkan perkhidmatan pembinaan berkualiti merentasi sektor industri, infrastruktur, dan komersial. Daripada penggalian awal dan tapak asas sehingga pembinaan struktur konkrit, pemasangan perancah dan pengurusan tapak berintegriti tinggi.',
    },
    iconName: 'Hammer',
    imageRectId: '05',
    features: {
      en: [
        'Site preparation, earth excavation, and grading',
        'Reinforced concrete foundations and column structures',
        'Scaffolding installation and timber/steel formwork',
        'Structural steel frame erection and night work operations',
        'Comprehensive construction site safety oversight',
      ],
      bm: [
        'Penyediaan tapak, penggalian tanah dan perataan tapak',
        'Asas konkrit bertetulang dan struktur tiang bangunan',
        'Pemasangan perancah dan acuan kayu/keluli selamat',
        'Pemasangan rangka keluli dan operasi kerja malam berlampu limpah',
        'Penyeliaan keselamatan tapak binaan secara menyeluruh',
      ],
    },
    scope: {
      en: [
        'Civil infrastructure and industrial facility construction',
        'Deep foundation piling, rebar grids, and footing slabs',
        'Structural beam and slab casting',
        'Site access roads and temporary site infrastructure',
      ],
      bm: [
        'Infrastruktur sivil dan pembinaan premis industri',
        'Penanaman cerucuk, jalinan tetulang besi dan papak tapak',
        'Kerja penuangan konkrit rasuk dan papak struktur',
        'Jalan laluan tapak dan kemudahan tapak sementara',
      ],
    },
    waMessage: {
      en: 'Hello Mr Chan, I would like to enquire about NRC Construction & Civil Works services.',
      bm: 'Salam Mr Chan, saya ingin membuat pertanyaan mengenai perkhidmatan Pembinaan & Kerja Sivil NRC.',
    },
  },
  {
    id: 'cleaning',
    title: {
      en: 'Professional Cleaning & Sanitation',
      bm: 'Pembersihan Profesional & Sanitasi',
    },
    shortDesc: {
      en: 'Industrial premises cleaning, corporate facility maintenance, post-construction cleanup, and thorough hygienic sanitation.',
      bm: 'Pembersihan premis industri, penyelenggaraan fasiliti korporat, pembersihan pasca-pembinaan dan sanitasi kebersihan rapi.',
    },
    fullDesc: {
      en: 'NRC provides dedicated, rigorous cleaning and hygiene solutions tailored for industrial facilities, commercial buildings, corporate offices, and post-construction sites. Our trained teams adhere to proper safety protocols and use professional-grade equipment.',
      bm: 'NRC menyediakan penyelesaian pembersihan dan kebersihan rapi yang disesuaikan untuk fasiliti industri, bangunan komersial, pejabat korporat dan tapak pasca-pembinaan. Tenaga kerja kami yang terlatih mematuhi protokol keselamatan dan menggunakan kelengkapan profesional.',
    },
    iconName: 'Sparkles',
    imageRectId: '13',
    features: {
      en: [
        'Commercial and corporate office routine cleaning',
        'Industrial factory and warehouse floor degreasing & washdown',
        'Post-construction deep dust, debris, and surface cleaning',
        'Comprehensive washroom hygiene and sanitary maintenance',
        'Safe, environmentally considerate cleaning formulations',
      ],
      bm: [
        'Pembersihan berkala pejabat korporat dan komersial',
        'Penyentalan lantai kilang industri dan bilasan gudang',
        'Pembersihan habuk mendalam, sisa binaan dan permukaan pasca-binaan',
        'Penyelenggaraan sanitasi bilik air dan tandas secara menyeluruh',
        'Bahan pencuci selamat dan mesra alam sekitar',
      ],
    },
    scope: {
      en: [
        'Daily, weekly, or contractual routine maintenance',
        'Industrial facility turnaround cleaning',
        'Heavy-duty tile, concrete, and epoxy floor maintenance',
        'High-touch surface sanitisation',
      ],
      bm: [
        'Penyelenggaraan berkala harian, mingguan atau berkontrak',
        'Pembersihan menyeluruh fasiliti dan loji industri',
        'Penyelenggaraan lantai jubin, konkrit dan epoksi bertaraf berat',
        'Sanitasi permukaan berinteraksi tinggi',
      ],
    },
    waMessage: {
      en: 'Hello Mr Chan, I would like to enquire about NRC Professional Cleaning services.',
      bm: 'Salam Mr Chan, saya ingin membuat pertanyaan mengenai perkhidmatan Pembersihan Profesional NRC.',
    },
  },
  {
    id: 'landscaping',
    title: {
      en: 'Landscaping & Grounds Maintenance',
      bm: 'Landskap & Penyelenggaraan Kawasan',
    },
    shortDesc: {
      en: 'Turf management, commercial grounds upkeep, topiary maintenance, overgrown land rehabilitation, and landscape enhancement.',
      bm: 'Pengurusan rumput, penyelenggaraan kawasan komersial, pemangkasan topiary, pemulihan kawasan semak dan penaiktarafan landskap.',
    },
    fullDesc: {
      en: 'NRC manages commercial, corporate, and municipal outdoor environments. We transform overgrown or unkempt grounds into manicured, pleasant green spaces through regular mowing, turf conditioning, shrub sculpting, drainage clearance, and debris haulage.',
      bm: 'NRC menguruskan persekitaran luar kawasan komersial, korporat dan perbandaran. Kami memulihkan kawasan semak yang tidak terurus menjadi kawasan hijau yang tersusun kemas melalui pemotongan rumput berkala, pembentukan pokok hiasan, pembersihan parit dan pelupusan sisa hijau.',
    },
    iconName: 'Trees',
    imageRectId: '03',
    features: {
      en: [
        'Commercial grounds and industrial compound maintenance',
        'Overgrown vegetation clearing and land rehabilitation',
        'Topiary sculpting, shrub pruning, and ornamental care',
        'Grass cutting, edging, and leaf blowing operations',
        'Organic waste and branch disposal management',
      ],
      bm: [
        'Penyelenggaraan kawasan komersial dan pekarangan industri',
        'Pembersihan semak belukar dan pemulihan tanah lapang',
        'Pemangkasan pokok hiasan, topiary dan penjagaan tumbuhan',
        'Operasi mesin rumput, perapian tepi dan peniup daun',
        'Pengurusan pelupusan sisa ranting dan daun hijau',
      ],
    },
    scope: {
      en: [
        'Scheduled landscape maintenance contracts',
        'One-time land clearing and pre-development brush clearance',
        'Decorative pebble installation and plant bed rejuvenation',
        'Perimeter fence line clearing for security visibility',
      ],
      bm: [
        'Kontrak penyelenggaraan landskap berjadual',
        'Pembersihan tanah semak sekali jalan sebelum pembangunan',
        'Pemasangan batu kelikir hiasan dan peremajaan batas tanaman',
        'Pembersihan laluan pagar sempadan untuk jarak penglihatan keselamatan',
      ],
    },
    waMessage: {
      en: 'Hello Mr Chan, I would like to enquire about NRC Landscaping & Grounds Maintenance services.',
      bm: 'Salam Mr Chan, saya ingin membuat pertanyaan mengenai perkhidmatan Landskap NRC.',
    },
  },
  {
    id: 'manpower',
    title: {
      en: 'Manpower for Small & Large Industries',
      bm: 'Tenaga Kerja untuk Industri Kecil & Besar',
    },
    shortDesc: {
      en: 'Dependable, compliant workforce solutions supplying skilled and general personnel across production, logistics, and technical operations.',
      bm: 'Penyelesaian tenaga kerja yang berwibawa dan patuh undang-undang, membekalkan pekerja mahir dan am untuk sektor pengeluaran, logistik dan operasi teknikal.',
    },
    fullDesc: {
      en: 'Finding reliable workforce resources is vital for operational agility. NRC supplies dependable general and skilled personnel to small, medium, and large industrial clients, with dedicated management of foreign welfare affairs, safety induction, and day-to-day administrative support.',
      bm: 'Mencari sumber tenaga kerja yang berdisiplin amat penting bagi kelancaran operasi. NRC membekalkan pekerja am dan berkemahiran kepada industri kecil, sederhana dan besar, disokong oleh pengurusan hal ehwal kebajikan pekerja asing, induksi keselamatan dan pentadbiran harian yang rapi.',
    },
    iconName: 'Users',
    features: {
      en: [
        'Tailored deployment for factories, warehouses, and sites',
        'Support for both short-term projects and long-term operations',
        'Dedicated Foreign Welfare Affairs department management',
        'Safety and occupational health compliance induction',
        'Active on-site coordination and dispute resolution',
      ],
      bm: [
        'Penempatan tenaga kerja mengikut keperluan kilang, gudang dan tapak',
        'Sokongan bagi projek jangka pendek dan operasi jangka panjang',
        'Pengurusan berdedikasi oleh jabatan Hal Ehwal Kebajikan Pekerja Asing',
        'Induksi keselamatan dan pematuhan kesihatan pekerjaan',
        'Penyelarasan aktif di tapak dan pengurusan kebajikan pekerja',
      ],
    },
    scope: {
      en: [
        'Assembly line and manufacturing floor operators',
        'Warehouse pickers, packers, and material handlers',
        'General site helpers and cleaning assistants',
        'Skilled trade assistants for civil and maintenance projects',
      ],
      bm: [
        'Operator barisan pengeluaran dan pemasangan kilang',
        'Pekerja gudang, pembungkusan dan pengendalian bahan',
        'Pembantu am tapak binaan dan kru pembersihan',
        'Pembantu teknikal mahir bagi kerja-kerja sivil dan penyelenggaraan',
      ],
    },
    waMessage: {
      en: 'Hello Mr Chan, I would like to enquire about NRC Manpower Supply services.',
      bm: 'Salam Mr Chan, saya ingin membuat pertanyaan mengenai perkhidmatan Pembekalan Tenaga Kerja NRC.',
    },
  },
  {
    id: 'logistics',
    title: {
      en: 'Logistics Solutions',
      bm: 'Penyelesaian Logistik',
    },
    shortDesc: {
      en: 'Dependable transport, equipment haulage, and coordinated delivery networks ensuring prompt, safe transit of goods and machinery.',
      bm: 'Pengangkutan yang boleh dipercayai, pemindahan jentera dan rangkaian penghantaran tersusun untuk barangan dan jentera dengan selamat.',
    },
    fullDesc: {
      en: 'NRC provides coordinated logistics and transport services to support industrial and commercial supply chains. We facilitate smooth cargo movements, construction gear dispatch, and prompt delivery across project locations with a strong emphasis on road safety and cargo integrity.',
      bm: 'NRC menyediakan perkhidmatan pengangkutan dan logistik yang tersusun untuk menyokong rantaian bekalan industri dan komersial. Kami memudahkan pergerakan kargo, penghantaran kelengkapan pembinaan dan penghantaran tepat pada masa dengan fokus utama terhadap keselamatan.',
    },
    iconName: 'Truck',
    features: {
      en: [
        'Industrial cargo and heavy machinery transport',
        'Construction equipment transfer and site mobilization',
        'Scheduled delivery routes and dedicated logistics support',
        'Experienced drivers and verified vehicle inspections',
        'Coordination with material storage depots',
      ],
      bm: [
        'Pengangkutan kargo industri dan jentera berat',
        'Pemindahan kelengkapan pembinaan dan mobilisasi tapak',
        'Laluan penghantaran berjadual dan sokongan logistik berdedikasi',
        'Pemandu berpengalaman dan pemeriksaan kenderaan yang kerap',
        'Penyelarasan lancar dengan depoh simpanan bahan binaan',
      ],
    },
    scope: {
      en: [
        'Bulk material haulage for infrastructure jobs',
        'Plant machinery and generator relocation',
        'Inter-facility inventory transfer',
        'Urgent dispatch for construction supplies',
      ],
      bm: [
        'Pengangkutan bahan pukal untuk projek infrastruktur',
        'Pemindahan jentera loji, pam dan set penjana kuasa',
        'Pemindahan inventori antara fasiliti',
        'Penghantaran segera bekalan dan peralatan pembinaan',
      ],
    },
    waMessage: {
      en: 'Hello Mr Chan, I would like to enquire about NRC Logistics Solutions.',
      bm: 'Salam Mr Chan, saya ingin membuat pertanyaan mengenai penyelesaian Logistik NRC.',
    },
  },
  {
    id: 'storage',
    title: {
      en: 'Construction Material Storage',
      bm: 'Penyimpanan Bahan Binaan',
    },
    shortDesc: {
      en: 'Secure storage yard space, organized staging depots, and weather-protected warehousing for building materials and site assets.',
      bm: 'Ruang tapak simpanan selamat, depoh pengumpulan tersusun dan pergudangan terlindung cuaca untuk bahan binaan dan aset tapak.',
    },
    fullDesc: {
      en: 'Site congestion and material damage are major bottlenecks in construction. NRC offers safe, organized storage solutions for construction materials, structural steel, piping, scaffolding components, and heavy equipment, keeping your site lean and your assets protected.',
      bm: 'Kesesakan tapak binaan dan kerosakan bahan merupakan cabaran besar dalam pembinaan. NRC menawarkan kemudahan penyimpanan bahan binaan yang selamat dan teratur bagi keluli struktur, paip, komponen perancah dan peralatan berat.',
    },
    iconName: 'Warehouse',
    features: {
      en: [
        'Dedicated yard space for bulky structural materials',
        'Gated compound with active security oversight',
        'Structured staging for just-in-time site dispatch',
        'Protection against ground moisture and weathering',
        'Direct link with NRC logistics fleet for fast mobilization',
      ],
      bm: [
        'Kawasan lapang berkawal untuk bahan struktur yang besar',
        'Pekarangan berpagar dengan pengawasan keselamatan berterusan',
        'Peringkat simpanan teratur untuk penghantaran tepat masa ke tapak',
        'Perlindungan daripada kelembapan tanah dan cuaca buruk',
        'Hubungan terus dengan armada logistik NRC untuk mobilisasi pantas',
      ],
    },
    scope: {
      en: [
        'Rebar, structural steel beams, and precast elements',
        'Scaffolding frames, pipes, clamps, and platform boards',
        'Piping spools, valves, and water treatment equipment',
        'Temporary storage between demolition and rebuild phases',
      ],
      bm: [
        'Besi tetulang, rasuk keluli struktur dan elemen pasang siap',
        'Rangka perancah, paip, penyepit dan papan pelantar',
        'Paip industri, injap dan peralatan loji rawatan air',
        'Penyimpanan sementara antara fasa perobohan dan pembinaan semula',
      ],
    },
    waMessage: {
      en: 'Hello Mr Chan, I would like to enquire about NRC Construction Material Storage services.',
      bm: 'Salam Mr Chan, saya ingin membuat pertanyaan mengenai perkhidmatan Penyimpanan Bahan Binaan NRC.',
    },
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '01',
    number: '01',
    title: {
      en: 'Landscaping Clearance (Before)',
      bm: 'Pembersihan Landskap (Sebelum)',
    },
    category: 'landscaping',
    categoryLabel: {
      en: 'Landscaping',
      bm: 'Landskap',
    },
    timing: 'before',
    rect: { x: 40, y: 665, w: 920, h: 575 },
    aspectRatio: '16 / 10',
    description: {
      en: 'Initial stage of ground clearing: Indian Malaysian operator in green uniform shirt with company logo mobilizing power brush cutter and clearing overgrown grass.',
      bm: 'Peringkat awal pembersihan tanah: operator India Malaysia berbaju seragam hijau dengan logo syarikat mengendalikan mesin rumput dan membersihkan laluan semak.',
    },
    details: {
      en: 'Systematic perimeter vegetation overgrowth clearing and wild brush cutting prior to ground restoration.',
      bm: 'Pembersihan semak samun sempadan yang teratur dan pemotongan belukar liar sebelum pemulihan tanah.',
    },
  },
  {
    id: '02',
    number: '02',
    title: {
      en: 'Open Field Maintenance (Before)',
      bm: 'Penyelenggaraan Padang Terbuka (Sebelum)',
    },
    category: 'landscaping',
    categoryLabel: {
      en: 'Landscaping',
      bm: 'Landskap',
    },
    timing: 'before',
    rect: { x: 1040, y: 665, w: 920, h: 575 },
    aspectRatio: '16 / 10',
    description: {
      en: 'Untamed field terrain with Indian Malaysian landscape crew in green work shirts with logo raking cut vegetation and clearing boundary lines.',
      bm: 'Kawasan padang terbuka dengan kru landskap India Malaysia berbaju kerja hijau berlogo mengaut sisa rumput dan membersihkan sempadan.',
    },
    details: {
      en: 'Systematic raking and collection of organic debris to uncover demarcated boundary markers and perimeter fences.',
      bm: 'Pengautan dan pengumpulan sisa organik secara teratur bagi menampakkan penanda sempadan dan pagar keselamatan.',
    },
  },
  {
    id: '03',
    number: '03',
    title: {
      en: 'Manicured Topiary Garden (After)',
      bm: 'Taman Topiary Rapi (Selepas)',
    },
    category: 'landscaping',
    categoryLabel: {
      en: 'Landscaping',
      bm: 'Landskap',
    },
    timing: 'after',
    rect: { x: 2040, y: 665, w: 920, h: 575 },
    aspectRatio: '16 / 10',
    description: {
      en: 'Transformed corporate grounds featuring sculpted spiral topiary shrubs, pristine stone walkways, and lush lawn inspected by our groundskeeper.',
      bm: 'Landskap korporat yang dinaiktaraf dengan pokok topiary berputar, laluan pejalan kaki bersih dan rumput subur yang diselia kemas.',
    },
    details: {
      en: 'Complete aesthetic turnaround delivering pristine architectural greenery and immaculate decorative rock bed installation.',
      bm: 'Transformasi estetik menyeluruh menghasilkan kehijauan seni bina landskap yang indah berserta susunan batu hiasan yang kemas.',
    },
  },
  {
    id: '04',
    number: '04',
    title: {
      en: 'Pristine Commercial Lawn & Compound (After)',
      bm: 'Kawasan Rumput & Kompaun Komersial Sempurna (Selepas)',
    },
    category: 'landscaping',
    categoryLabel: {
      en: 'Landscaping',
      bm: 'Landskap',
    },
    timing: 'after',
    rect: { x: 3040, y: 665, w: 920, h: 575 },
    aspectRatio: '16 / 10',
    description: {
      en: 'Cleanly pruned hedges and expansive turf with uniform cutting height, cleared boundary zones, and clean asphalt access.',
      bm: 'Pagar tanaman dipotong kemas dan padang rumput luas dengan ketinggian seragam, sempadan bersih dan laluan jalan teratur.',
    },
    details: {
      en: 'Industrial compound restored to pristine municipal and corporate standards with all green waste removed.',
      bm: 'Kompaun industri dipulihkan mengikut piawaian korporat tertinggi dengan pembersihan sisa landskap menyeluruh.',
    },
  },
  {
    id: '05',
    number: '05',
    title: {
      en: 'Heavy Earth Excavation & Foundation Trenching',
      bm: 'Penggalian Tanah Berat & Parit Asas Binaan',
    },
    category: 'construction',
    categoryLabel: {
      en: 'Construction',
      bm: 'Pembinaan',
    },
    rect: { x: 40, y: 1665, w: 920, h: 575 },
    aspectRatio: '16 / 10',
    description: {
      en: 'Hydraulic excavator executing bulk earthworks, deep ground excavation, directed by Indian Malaysian site supervisor in green company shirt with logo.',
      bm: 'Jengkaut hidraulik menjalankan kerja tanah pukal dan parit asas di bawah seliaan penyelia tapak India Malaysia berbaju hijau berlogo.',
    },
    details: {
      en: 'Precise ground leveling and soil clearance to establish the structural building footprint under active safety management.',
      bm: 'Perataan tanah yang tepat dan pembersihan tanah untuk membentuk tapak asas bangunan di bawah kawalan keselamatan rapi.',
    },
  },
  {
    id: '06',
    number: '06',
    title: {
      en: 'Rebar Cage Foundation & Formwork Installation',
      bm: 'Asas Rangka Besi Tetulang & Pemasangan Acuan',
    },
    category: 'construction',
    categoryLabel: {
      en: 'Construction',
      bm: 'Pembinaan',
    },
    rect: { x: 1040, y: 1665, w: 920, h: 575 },
    aspectRatio: '16 / 10',
    description: {
      en: 'Intricate steel rebar grid tying and perimeter timber formwork assembly by Indian Malaysian steel fixers in green company work shirts with logo.',
      bm: 'Pemasangan jalinan besi tetulang rapi dan acuan kayu oleh tukang besi India Malaysia memakai baju kerja hijau dengan logo syarikat.',
    },
    details: {
      en: 'High-tensile steel reinforcement verified for structural load tolerances, spacing, and cover depths.',
      bm: 'Tetulang keluli tegangan tinggi disemak untuk ketahanan beban struktur, penjarakan dan ketebalan litupan konkrit.',
    },
  },
  {
    id: '07',
    number: '07',
    title: {
      en: 'Illuminated Night Construction Operations',
      bm: 'Operasi Pembinaan Malam Berlampu Limpah',
    },
    category: 'construction',
    categoryLabel: {
      en: 'Construction',
      bm: 'Pembinaan',
    },
    rect: { x: 2040, y: 1665, w: 920, h: 575 },
    aspectRatio: '16 / 10',
    description: {
      en: 'Round-the-clock site progress: expansive concrete slab pour guided by Indian Malaysian crew in green high-visibility shirts with company logo.',
      bm: 'Kemajuan tapak tanpa henti: penuangan konkrit papak dibimbing oleh krew India Malaysia memakai baju hijau keselamatan berlogo syarikat.',
    },
    details: {
      en: 'Accelerated structural schedule maintaining stringent night-time occupational safety standards and illumination.',
      bm: 'Jadual pembinaan pantas dengan pematuhan piawaian keselamatan kerja waktu malam dan pencahayaan menyeluruh.',
    },
  },
  {
    id: '08',
    number: '08',
    title: {
      en: 'Multi-Tier Scaffolding & Falsework Assembly',
      bm: 'Pemasangan Perancah Bertingkat & Acuan Sokongan',
    },
    category: 'construction',
    categoryLabel: {
      en: 'Construction',
      bm: 'Pembinaan',
    },
    rect: { x: 3040, y: 1665, w: 920, h: 575 },
    aspectRatio: '16 / 10',
    description: {
      en: 'Tubular steel scaffolding framework erected by Indian Malaysian scaffolders in green work shirts with logo and safety harnesses.',
      bm: 'Rangka perancah paip keluli dipasang selamat oleh pekerja perancah India Malaysia berbaju kerja hijau dengan logo dan abah-abah keselamatan.',
    },
    details: {
      en: 'Rigid load-bearing falsework providing safe access platforms and reliable staging for high-altitude exterior structural works.',
      bm: 'Struktur sokongan beban kukuh yang menyediakan pelantar kerja selamat untuk kerja-kerja struktur aras tinggi.',
    },
  },
  {
    id: '09',
    number: '09',
    title: {
      en: 'Structural Concrete Column & Beam Formwork',
      bm: 'Acuan Tiang Konkrit Struktur & Rasuk',
    },
    category: 'construction',
    categoryLabel: {
      en: 'Construction',
      bm: 'Pembinaan',
    },
    rect: { x: 40, y: 2665, w: 920, h: 575 },
    aspectRatio: '16 / 10',
    description: {
      en: 'Vertical column shuttering boxes and acrow props inspected by Indian Malaysian construction carpenters in green shirts with company logo.',
      bm: 'Kotak acuan tiang menegak dan tupang sokongan keluli diperiksa oleh tukang kayu pembinaan India Malaysia berbaju hijau berlogo syarikat.',
    },
    details: {
      en: 'Precision leveling, plumb-line verification, and rigid bracing ensuring true dimensional accuracy before casting.',
      bm: 'Pemeriksaan jajaran tegak dan pendakap kukuh bagi memastikan ketepatan dimensi struktur sebelum kerja tuangan konkrit.',
    },
  },
  {
    id: '10',
    number: '10',
    title: {
      en: 'Crane Hoisting & Precast Element Positioning',
      bm: 'Kerja Mengangkat Kren & Kedudukan Rasuk Pasang Siap',
    },
    category: 'construction',
    categoryLabel: {
      en: 'Construction',
      bm: 'Pembinaan',
    },
    rect: { x: 1040, y: 2665, w: 920, h: 575 },
    aspectRatio: '16 / 10',
    description: {
      en: 'Crane lifting beam maneuver directed by certified Indian Malaysian rigger in green work shirt with logo and safety helmet using standard hand signals.',
      bm: 'Manuver pengangkatan rasuk oleh kren dipandu oleh pengisyarat India Malaysia berbaju hijau berlogo dan topi keselamatan dengan isyarat tangan piawai.',
    },
    details: {
      en: 'Safe rigging procedures, synchronized load management, and precision alignment of heavy structural components.',
      bm: 'Prosedur keselamatan pengangkatan beban berat dan penjajaran tepat bagi komponen struktur binaan.',
    },
  },
  {
    id: '11',
    number: '11',
    title: {
      en: 'Wastewater Treatment Plant (WWTP) Clarifier Tank',
      bm: 'Tangki Penjernih Loji Rawatan Air Sisa (WWTP)',
    },
    category: 'wwtp',
    categoryLabel: {
      en: 'Wastewater Treatment',
      bm: 'Rawatan Air Sisa',
    },
    rect: { x: 2040, y: 2665, w: 920, h: 575 },
    aspectRatio: '16 / 10',
    description: {
      en: 'Circular biological clarifier tank with Indian Malaysian plant operator in green polo shirt with logo testing effluent water clarity on the bridge.',
      bm: 'Tangki penjernih biologi bulat dengan operator loji India Malaysia berbaju polo hijau dengan logo menyemak kualiti air efluen di atas jejantas.',
    },
    details: {
      en: 'Environmental effluent management maintaining industrial compliance with Department of Environment discharge standards.',
      bm: 'Pengurusan pelepasan efluen alam sekitar mengikut piawaian ketat Jabatan Alam Sekitar.',
    },
  },
  {
    id: '12',
    number: '12',
    title: {
      en: 'WWTP Chemical Dosing & Pump Manifold Skid',
      bm: 'Skid Manifold Pam & Dos Kimia WWTP',
    },
    category: 'wwtp',
    categoryLabel: {
      en: 'Wastewater Treatment',
      bm: 'Rawatan Air Sisa',
    },
    rect: { x: 3040, y: 2665, w: 920, h: 575 },
    aspectRatio: '16 / 10',
    description: {
      en: 'Industrial chemical feed manifold, pressure gauges, and dosing pumps inspected by Indian Malaysian technician in green work shirt with logo.',
      bm: 'Rangkaian paip dos kimia industri, tolok tekanan dan pam dos diselenggara oleh juruteknik India Malaysia berbaju hijau berlogo syarikat.',
    },
    details: {
      en: 'High-precision metering, corrosion-resistant pipe runs, and automated flow calibration for stable industrial effluent neutrality.',
      bm: 'Pengukuran kepekatan kimia tepat, paip kalis kakisan dan penentukuran aliran automatik untuk kestabilan rawatan air.',
    },
  },
  {
    id: '13',
    number: '13',
    title: {
      en: 'Commercial Deep Floor Scrubbing & Buffing',
      bm: 'Pembersihan & Pengilapan Lantai Komersial',
    },
    category: 'cleaning',
    categoryLabel: {
      en: 'Cleaning',
      bm: 'Pembersihan',
    },
    rect: { x: 40, y: 3665, w: 920, h: 575 },
    aspectRatio: '16 / 10',
    description: {
      en: 'Indian Malaysian cleaning operator in green collared polo uniform with company logo operating rotary floor scrubbing and buffing equipment in a modern lobby.',
      bm: 'Operator pembersihan India Malaysia berbaju polo hijau dengan logo syarikat mengendalikan mesin pengilap dan pencuci lantai berputar di lobi moden.',
    },
    details: {
      en: 'Heavy-duty rotary polishing and surface conditioning restoring deep mirror-like shine to high-traffic commercial flooring.',
      bm: 'Pengilapan berkuasa tinggi yang mengembalikan kilauan cermin pada lantai komersial berintensiti trafik tinggi.',
    },
  },
  {
    id: '14',
    number: '14',
    title: {
      en: 'Corporate Washroom Sanitation & Facility Maintenance',
      bm: 'Sanitasi Bilik Air Korporat & Penyelenggaraan Fasiliti',
    },
    category: 'cleaning',
    categoryLabel: {
      en: 'Cleaning',
      bm: 'Pembersihan',
    },
    rect: { x: 1040, y: 3665, w: 920, h: 575 },
    aspectRatio: '16 / 10',
    description: {
      en: 'Indian Malaysian janitorial technician in green uniform shirt with logo performing hygienic sanitization of corporate restroom facilities and vanities.',
      bm: 'Juruteknik pembersihan India Malaysia berbaju seragam hijau dengan logo menjalankan sanitasi higienik bilik air korporat.',
    },
    details: {
      en: 'Spotless surface disinfection, chrome fixture polishing, and anti-bacterial hygiene maintenance according to international standards.',
      bm: 'Pembasmian kuman permukaan menyeluruh, pengilapan lekapan krom dan penyelenggaraan kebersihan standard antarabangsa.',
    },
  },
];

export const ORG_CHART: OrgNode[] = [
  {
    name: 'N. RAVI CHANDRAN',
    role: {
      en: 'Director',
      bm: 'Pengarah',
    },
    department: {
      en: 'Executive Leadership',
      bm: 'Kepimpinan Eksekutif',
    },
    description: {
      en: 'Provides overall strategic direction, corporate oversight, and governance across all operational divisions.',
      bm: 'Menyediakan hala tuju strategik, pengawasan korporat dan tadbir urus di semua bahagian operasi.',
    },
  },
  {
    name: 'ARVINDRAJ',
    role: {
      en: 'Manager',
      bm: 'Pengurus',
    },
    department: {
      en: 'Finance and Admin',
      bm: 'Kewangan dan Pentadbiran',
    },
    reportsTo: 'N. RAVI CHANDRAN',
    description: {
      en: 'Oversees financial planning, accounting integrity, procurement, statutory compliance, and administrative operations.',
      bm: 'Menguruskan perancangan kewangan, perakaunan, perolehan, pematuhan berkanun dan operasi pentadbiran.',
    },
  },
  {
    name: 'DEEPANRAJ',
    role: {
      en: 'Manager',
      bm: 'Pengurus',
    },
    department: {
      en: 'Foreign Welfare Affairs',
      bm: 'Hal Ehwal Kebajikan Pekerja Asing',
    },
    reportsTo: 'N. RAVI CHANDRAN',
    description: {
      en: 'Manages workforce welfare, foreign worker documentation, accommodation standards, and social well-being.',
      bm: 'Mengurus kebajikan tenaga kerja, dokumentasi pekerja asing, piawaian tempat tinggal dan kesejahteraan pekerja.',
    },
  },
  {
    name: 'SASIKUMAR',
    role: {
      en: 'Manager',
      bm: 'Pengurus',
    },
    department: {
      en: 'Operation & Business Development',
      bm: 'Operasi & Pembangunan Perniagaan',
    },
    reportsTo: 'N. RAVI CHANDRAN',
    description: {
      en: 'Drives client partnerships, market expansion, service delivery coordination, and cross-division operational synergy.',
      bm: 'Memacu hubungan pelanggan, perluasan pasaran, penyelarasan perkhidmatan dan sinergi operasi rentas bahagian.',
    },
  },
  {
    name: 'KUMAR',
    role: {
      en: 'Manager',
      bm: 'Pengurus',
    },
    department: {
      en: 'Safety & Health',
      bm: 'Keselamatan & Kesihatan',
    },
    reportsTo: 'N. RAVI CHANDRAN',
    description: {
      en: 'Enforces occupational health and safety standards, site risk assessments, hazard mitigation, and safety induction programs.',
      bm: 'Menguatkuasakan piawaian keselamatan dan kesihatan pekerjaan (OSHA), penilaian risiko tapak dan induksi keselamatan.',
    },
  },
  {
    name: 'MOHD SHAHRIL BIN ABDULLAH',
    role: {
      en: 'Manager',
      bm: 'Pengurus',
    },
    department: {
      en: 'Security',
      bm: 'Keselamatan & Kawalan',
    },
    reportsTo: 'N. RAVI CHANDRAN',
    description: {
      en: 'Directs physical security protocols, asset protection, site access control, and yard surveillance across storage and active projects.',
      bm: 'Mengetuai protokol keselamatan fizikal, perlindungan aset, kawalan akses tapak dan pengawasan depoh simpanan.',
    },
  },
];

export const CORPORATE_VALUES = [
  {
    id: 'sustainability',
    title: {
      en: 'Sustainability',
      bm: 'Kelestarian',
    },
    desc: {
      en: 'Integrating environmentally responsible practices in civil works, waste reduction in cleaning, and ecological stewardship in landscaping.',
      bm: 'Mengintegrasikan amalan bertanggungjawab terhadap alam sekitar dalam kerja sivil, pengurangan sisa pembersihan dan pemuliharaan landskap.',
    },
  },
  {
    id: 'integrity',
    title: {
      en: 'Integrity',
      bm: 'Integriti',
    },
    desc: {
      en: 'Operating with unwavering honesty, transparent communication, ethical workforce management, and full compliance with regulations.',
      bm: 'Beroperasi dengan kejujuran tulus, komunikasi telus, pengurusan pekerja beretika dan pematuhan penuh kepada undang-undang.',
    },
  },
  {
    id: 'innovation',
    title: {
      en: 'Innovation',
      bm: 'Inovasi',
    },
    desc: {
      en: 'Adopting practical methods, modern equipment, and streamlined logistical coordination to deliver smarter outcomes for our clients.',
      bm: 'Mengguna pakai kaedah praktikal, peralatan moden dan penyelarasan logistik yang cekap untuk hasil terbaik buat pelanggan.',
    },
  },
  {
    id: 'community',
    title: {
      en: 'Community',
      bm: 'Komuniti',
    },
    desc: {
      en: 'Fostering worker welfare, enhancing local public environments, and creating shared social value through respectful employment.',
      bm: 'Memperkasa kebajikan pekerja, menambah baik persekitaran tempatan dan mencipta nilai sosial bersama melalui penggajian yang adil.',
    },
  },
  {
    id: 'quality',
    title: {
      en: 'Quality',
      bm: 'Kualiti',
    },
    desc: {
      en: 'Rigorous attention to detail, strict engineering tolerances, uncompromised cleanliness, and dependable consistency across every delivery.',
      bm: 'Ketelitian dalam setiap perincian kerja, toleransi kejuruteraan yang ketat, kebersihan mutlak dan ketekalan mutu yang boleh diharap.',
    },
  },
];

export const ESG_STRATEGY: ESGStrategy[] = [
  {
    pillar: 'Environmental',
    title: {
      en: 'Environmental Stewardship',
      bm: 'Penjagaan Alam Sekitar',
    },
    points: {
      en: [
        'Green waste recycling and responsible vegetative debris composting in landscaping works',
        'Promotion of eco-friendly, biodegradable cleaning agents and water-saving sanitization equipment',
        'Responsible handling and containment of industrial wastewater in WWTP support projects',
        'Optimized logistics routing to curb unnecessary vehicle emissions and fuel consumption',
      ],
      bm: [
        'Kitar semula sisa hijau dan pengkomposan sisa tumbuhan secara bertanggungjawab dalam kerja landskap',
        'Penggunaan bahan pembersih biodegradasi mesra alam dan kelengkapan penjimatan air',
        'Pengendalian selamat dan kawalan air sisa industri dalam sokongan projek loji rawatan efluen (WWTP)',
        'Pengoptimuman laluan logistik bagi mengurangkan pelepasan asap kenderaan dan penggunaan bahan api',
      ],
    },
  },
  {
    pillar: 'Social',
    title: {
      en: 'Social Impact & Worker Welfare',
      bm: 'Impak Sosial & Kebajikan Pekerja',
    },
    points: {
      en: [
        'Dedicated Foreign Welfare Affairs department ensuring respectful accommodation and medical access',
        'Strict zero-tolerance policy against hazardous site conditions; continuous PPE and safety briefings',
        'Equal-opportunity workforce placement and transparent, timely compensation for all personnel',
        'Community beautification through safe public ground clearing and commercial perimeter upkeep',
      ],
      bm: [
        'Jabatan Hal Ehwal Kebajikan Pekerja Asing khusus bagi memastikan tempat tinggal selesa dan akses kesihatan',
        'Polisi sifar toleransi terhadap keadaan berbahaya; taklimat keselamatan dan pemakaian PPE berterusan',
        'Peluang saksama penempatan kerja dan pembayaran gaji yang telus tepat pada masanya untuk semua pekerja',
        'Pengindahan komuniti melalui pembersihan kawasan awam yang selamat dan penyelenggaraan sempadan komersial',
      ],
    },
  },
  {
    pillar: 'Governance',
    title: {
      en: 'Corporate Governance & Integrity',
      bm: 'Tadbir Urus Korporat & Integriti',
    },
    points: {
      en: [
        'Clear managerial hierarchy and documented reporting lines across executive and departmental levels',
        'Stringent adherence to Malaysian statutory laws, employment acts, and occupational safety regulations',
        'Transparent client contracting, fair procurement practices, and accurate material custody documentation',
        'Continuous internal quality reviews to preserve accountability and long-term client trust',
      ],
      bm: [
        'Hierarki pengurusan yang jelas dan garis pelaporan bertulis di peringkat eksekutif serta jabatan',
        'Pematuhan ketat terhadap undang-undang statutori Malaysia, akta kerja dan peraturan keselamatan pekerja',
        'Kontrak pelanggan yang telus, amalan perolehan adil dan dokumentasi penyimpanan bahan yang tepat',
        'Semakan kualiti dalaman berterusan bagi mengekalkan kebertanggungjawaban dan kepercayaan jangka panjang pelanggan',
      ],
    },
  },
];
