export interface ServiceData {
  slug: string;
  title: string;
  shortIntro: string;
  overview: string;
  problems: string[];
  includes: string[];
  whyProfessional: string;
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const services: ServiceData[] = [
  {
    slug: 'air-conditioning',
    title: 'Air Conditioning Installation & Repairs',
    shortIntro: 'Professional air conditioning installation, maintenance and repair for homes and businesses across Zimbabwe.',
    overview: 'Daniel\'s Arctic Touch provides complete air conditioning services, from new installations to emergency repairs. Whether you need a split system for your home, a ducted solution for your office, or urgent repairs on a failing unit, our certified technicians deliver reliable, professional service.',
    problems: [
      'AC unit not cooling or blowing warm air',
      'Strange noises or vibrations from the unit',
      'Water leaking from the indoor or outdoor unit',
      'System frequently turning on and off',
      'Unpleasant odours when the AC runs',
      'High electricity bills from an inefficient system',
    ],
    includes: [
      'Site assessment and cooling load calculation',
      'Split, ducted and portable AC installation',
      'Comprehensive system diagnostics',
      'Refrigerant regassing and leak detection',
      'Compressor and fan motor repairs',
      'Filter cleaning and replacement',
      'Thermostat calibration and control wiring',
      'Preventive maintenance contracts',
    ],
    whyProfessional: 'Air conditioning systems contain high-pressure refrigerant and complex electrical components. Improper handling can lead to system damage, reduced efficiency, or safety hazards. Professional installation ensures correct sizing, proper refrigerant charges, and compliance with manufacturer specifications — protecting your investment and warranty.',
    faqs: [
      { question: 'How often should I service my air conditioner?', answer: 'We recommend servicing your AC at least once a year. Regular servicing maintains efficiency, prevents breakdowns, and extends the lifespan of your system.' },
      { question: 'Do you install both split and ducted systems?', answer: 'Yes. We install all types of air conditioning systems including split units, multi-split systems, ducted systems, and portable units for both residential and commercial properties.' },
      { question: 'How do I know if my AC needs regassing?', answer: 'Signs include reduced cooling performance, ice forming on the unit, or hissing sounds near the indoor unit. Our technicians can check refrigerant levels during a routine service call.' },
      { question: 'What brands do you service?', answer: 'We service all major air conditioning brands including Daikin, Mitsubishi, Samsung, LG, Carrier, and more. Our technicians are trained to work on all makes and models.' },
    ],
    metaTitle: 'Air Conditioning Installation & Repairs | Daniel\'s Arctic Touch',
    metaDescription: 'Professional air conditioning installation, maintenance and repair services. Split systems, ducted AC, regassing and diagnostics. 24HR assistance in Zimbabwe.',
  },
  {
    slug: 'cold-freezer-rooms',
    title: 'Cold & Freezer Room Solutions',
    shortIntro: 'Custom cold room and freezer room design, installation and maintenance for commercial and industrial storage needs.',
    overview: 'From restaurants and hotels to warehouses and pharmaceutical storage, Daniel\'s Arctic Touch designs and installs cold rooms and freezer rooms tailored to your specific temperature requirements. We handle everything from new builds to upgrades and ongoing maintenance.',
    problems: [
      'Temperature fluctuations threatening stored goods',
      'Ice buildup on walls, ceiling or evaporator',
      'Door seals failing and letting warm air in',
      'Compressor running constantly without reaching temperature',
      'Condensation or water pooling inside the room',
      'Energy costs spiralling from an inefficient system',
    ],
    includes: [
      'Custom cold room design and layout',
      'Insulated panel installation',
      'Refrigeration unit selection and installation',
      'Door and seal fitting (sliding, hinged, strip curtains)',
      'Temperature monitoring and control systems',
      'Defrost cycle configuration',
      'Emergency breakdown repairs',
      'Scheduled maintenance contracts',
    ],
    whyProfessional: 'Cold rooms are critical infrastructure for businesses. A failure can mean thousands of dollars in spoiled stock. Professional installation ensures correct insulation, proper airflow design, and reliable temperature control — keeping your products safe and your energy costs predictable.',
    faqs: [
      { question: 'What temperature range can you achieve?', answer: 'We can design cold rooms for any temperature range from +15°C down to -30°C, covering fresh produce storage, frozen goods, blast chilling, and deep freeze requirements.' },
      { question: 'How long does a cold room installation take?', answer: 'A standard cold room installation typically takes 3-5 days depending on size and complexity. Larger commercial installations may take longer. We provide a detailed timeline during the quoting process.' },
      { question: 'Can you upgrade an existing cold room?', answer: 'Yes. We can upgrade insulation, replace refrigeration units, install new control systems, or reconfigure the layout of your existing cold room to improve performance and efficiency.' },
      { question: 'Do you offer maintenance contracts?', answer: 'Yes. We offer preventive maintenance contracts that include regular inspections, cleaning, refrigerant checks, and priority response for breakdowns. This helps prevent costly unexpected failures.' },
    ],
    metaTitle: 'Cold & Freezer Room Solutions | Daniel\'s Arctic Touch',
    metaDescription: 'Custom cold room and freezer room design, installation and maintenance. Temperature-controlled storage solutions for restaurants, warehouses and more.',
  },
  {
    slug: 'diagnostics-repairs',
    title: 'Diagnostics & Refrigeration Repairs',
    shortIntro: 'Expert fault finding and repair services to get your cooling systems back up and running quickly.',
    overview: 'When your refrigeration or cooling system breaks down, you need fast, accurate diagnostics and reliable repairs. Daniel\'s Arctic Touch uses professional diagnostic equipment to identify faults quickly, then provides transparent repair options before any work begins.',
    problems: [
      'Refrigerator or freezer not holding temperature',
      'AC unit showing error codes or not starting',
      'Unusual noises from compressors or fans',
      'Electrical faults or tripped breakers',
      'System short-cycling or running constantly',
      'Unexpected increase in energy consumption',
    ],
    includes: [
      'Comprehensive system diagnostics',
      'Electrical and mechanical fault finding',
      'Compressor testing and replacement',
      'Fan motor and blade repairs',
      'Thermostat and control board diagnostics',
      'Refrigerant leak detection and repair',
      'Capacitor and relay replacements',
      'Post-repair performance verification',
    ],
    whyProfessional: 'Accurate diagnostics save time and money. Our technicians use specialised tools to pinpoint the exact fault, avoiding unnecessary part replacements. We carry common parts for same-day repairs and provide a warranty on all completed work.',
    faqs: [
      { question: 'How quickly can you respond to a breakdown?', answer: 'We offer same-day and emergency response for critical situations. For non-urgent repairs, we typically schedule within 24-48 hours. Call us and we\'ll prioritise based on your situation.' },
      { question: 'Do you provide a quote before starting repairs?', answer: 'Yes. After diagnostics, we provide a transparent quote covering the fault, required parts, and labour costs. No work proceeds without your approval.' },
      { question: 'What if the repair cost is too high?', answer: 'We\'ll explain the situation honestly and discuss your options, including whether repair or replacement is more cost-effective. There\'s no obligation to proceed if the numbers don\'t make sense.' },
      { question: 'Do you repair all brands and models?', answer: 'Yes. Our technicians are experienced with all major refrigeration and AC brands including Daikin, Mitsubishi, Samsung, LG, Hisense, and many more.' },
    ],
    metaTitle: 'Diagnostics & Refrigeration Repairs | Daniel\'s Arctic Touch',
    metaDescription: 'Expert refrigeration diagnostics and repair services. Same-day response, transparent pricing, warranty on all work. 24HR assistance available.',
  },
  {
    slug: 'commercial-refrigeration',
    title: 'Commercial Refrigeration Services',
    shortIntro: 'Reliable refrigeration systems for supermarkets, restaurants, hotels and other commercial establishments.',
    overview: 'Commercial refrigeration is the backbone of food service, retail and hospitality businesses. Daniel\'s Arctic Touch provides end-to-end commercial refrigeration services — from new installations and system design to emergency repairs and preventive maintenance contracts that keep your business running.',
    problems: [
      'Display fridges not maintaining temperature',
      'Walk-in cooler failures during peak hours',
      'Condenser coils icing up or overheating',
      'Multiple units failing simultaneously',
      'Energy costs exceeding budget forecasts',
      'Compliance issues with food safety regulations',
    ],
    includes: [
      'Commercial refrigeration system design',
      'Display fridge and cabinet installation',
      'Walk-in cooler and freezer construction',
      'Blast chiller and shock freezer installation',
      'Multi-unit system integration',
      'Energy efficiency assessments',
      '24/7 emergency breakdown service',
      'Preventive maintenance programmes',
    ],
    whyProfessional: 'Commercial refrigeration failures can halt your business operations and result in significant stock losses. Professional servicing ensures compliance with food safety regulations, optimises energy efficiency, and provides the reliability your business depends on.',
    faqs: [
      { question: 'Do you service restaurants and supermarkets?', answer: 'Yes. We service all types of commercial food service and retail businesses, from small cafés to large supermarkets and hotel kitchens. We understand the critical nature of commercial refrigeration.' },
      { question: 'Can you design a refrigeration system for a new build?', answer: 'Absolutely. We work with architects and contractors to design commercial refrigeration systems tailored to your business needs, including load calculations, equipment selection, and installation.' },
      { question: 'Do you offer maintenance contracts for businesses?', answer: 'Yes. Our commercial maintenance contracts include regular inspections, cleaning, performance testing, and priority emergency response. This helps prevent breakdowns and extends equipment life.' },
      { question: 'What about food safety compliance?', answer: 'Our maintenance and repair services help you maintain compliance with food safety regulations. We can also advise on temperature monitoring solutions and documentation requirements.' },
    ],
    metaTitle: 'Commercial Refrigeration Services | Daniel\'s Arctic Touch',
    metaDescription: 'Commercial refrigeration installation, maintenance and emergency repairs for restaurants, supermarkets and hotels. 24HR service in Zimbabwe.',
  },
  {
    slug: 'vehicle-air-conditioning',
    title: 'Vehicle Air Conditioning',
    shortIntro: 'Complete vehicle AC services including regassing, leak detection, compressor repairs and system diagnostics.',
    overview: 'Your vehicle\'s air conditioning system needs regular maintenance to keep you comfortable and safe. Daniel\'s Arctic Touch provides professional vehicle AC services for cars, trucks, commercial vehicles and fleet vehicles — from simple regassing to complete system overhauls.',
    problems: [
      'AC blowing warm or lukewarm air',
      'Strange smells when the AC is turned on',
      'AC system making clicking or hissing noises',
      'Windows fogging up despite the AC running',
      'Compressor clutch not engaging',
      'Refrigerant leaking onto the garage floor',
    ],
    includes: [
      'Full system diagnostic assessment',
      'Refrigerant regassing (all types)',
      'Leak detection and repair',
      'Compressor testing and replacement',
      'Condenser and evaporator cleaning',
      'Cabin filter replacement',
      'Belt and hose inspection',
      'System performance testing',
    ],
    whyProfessional: 'Vehicle AC systems operate under high pressure and require specialised equipment for safe handling. Incorrect regassing or repairs can damage the compressor, reduce fuel efficiency, or create safety risks. Professional service ensures the system is charged correctly and all components are functioning properly.',
    faqs: [
      { question: 'How often should I service my vehicle AC?', answer: 'We recommend servicing your vehicle AC at least once a year. Regular maintenance prevents refrigerant loss, keeps the system efficient, and helps avoid costly compressor failures.' },
      { question: 'How much does a vehicle AC regas cost?', answer: 'The cost depends on your vehicle type and the refrigerant required. We provide a clear quote before starting any work. Regassing typically takes 30-60 minutes.' },
      { question: 'Can you fix AC in any vehicle?', answer: 'Yes. We service all vehicle types including cars, SUVs, trucks, minibuses and commercial vehicles. Our technicians work with all AC system configurations.' },
      { question: 'Why does my AC stop working in winter?', answer: 'If your AC hasn\'t been used for months, the refrigerant may have leaked through seals that rely on pressure to stay sealed. A pre-season service call can catch this before summer.' },
    ],
    metaTitle: 'Vehicle Air Conditioning Services | Daniel\'s Arctic Touch',
    metaDescription: 'Professional vehicle AC regassing, leak detection, compressor repairs and diagnostics. Cars, trucks and fleet vehicles serviced. Zimbabwe.',
  },
  {
    slug: 'domestic-refrigeration',
    title: 'Domestic Refrigerator Repairs',
    shortIntro: 'Keep your home cool and your food fresh with our domestic refrigerator and freezer repair services.',
    overview: 'A broken refrigerator or freezer is more than an inconvenience — it means spoiled food and wasted money. Daniel\'s Arctic Touch provides fast, affordable domestic refrigeration repairs for all major brands, getting your appliances back to proper working order.',
    problems: [
      'Refrigerator not cooling but freezer works',
      'Freezer forming excessive ice buildup',
      'Water pooling under or inside the fridge',
      'Fridge making loud or unusual noises',
      'Temperature fluctuations ruining food',
      'Door seal damaged or not closing properly',
    ],
    includes: [
      'Comprehensive appliance diagnostics',
      'Compressor and motor repairs',
      'Thermostat replacement and calibration',
      'Door seal replacement',
      'Defrost system repairs',
      'Drain line clearing',
      'Gas regassing and leak repair',
      'Energy efficiency assessment',
    ],
    whyProfessional: 'Modern refrigerators use complex sealed systems that require specialist knowledge and tools. DIY repairs can damage the system, void your warranty, or create safety hazards. Professional repair ensures the job is done right the first time.',
    faqs: [
      { question: 'What refrigerator brands do you repair?', answer: 'We repair all major brands including Samsung, LG, Bosch, Hisense, Defy, Whirlpool, GE and more. If your fridge has a cooling problem, we can help.' },
      { question: 'Is it worth repairing an old fridge?', answer: 'It depends on the fault and the age of the unit. We\'ll give you an honest assessment and help you decide whether repair or replacement is the better option for your situation.' },
      { question: 'How quickly can you come out?', answer: 'For domestic repairs, we typically offer same-day or next-day service. We understand that a broken fridge is urgent, so we prioritise getting to you as fast as possible.' },
      { question: 'Do you offer a warranty on repairs?', answer: 'Yes. All our domestic refrigeration repairs come with a warranty on both parts and labour. If the same issue recurs within the warranty period, we\'ll fix it at no extra cost.' },
    ],
    metaTitle: 'Domestic Refrigerator Repairs | Daniel\'s Arctic Touch',
    metaDescription: 'Fast domestic refrigerator and freezer repairs. All major brands serviced. Same-day response, warranty on all work. Zimbabwe.',
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug);
}
