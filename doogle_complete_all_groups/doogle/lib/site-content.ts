export type PageContent = {
  title: string
  eyebrow: string
  intro: string
  sections: { heading: string; body: string; bullets?: string[] }[]
}

export const pageContent: Record<string, PageContent> = {
  'sales/flash-deals': {
    eyebrow: 'Sales',
    title: 'Flash deals',
    intro: 'Limited-time pricing on gear built to keep moving. New drops every week, while supplies last.',
    sections: [
      {
        heading: 'Move fast, stay ready',
        body: 'Flash pricing rotates weekly across rugged phones, tablets, and accessories. Once a drop sells out, it is gone until the next cycle.',
        bullets: ['New drops every Monday', 'Up to 30% off select devices', 'Stock levels shown on each product page'],
      },
      {
        heading: 'How it works',
        body: 'Deals are first-come, first-served with no reservation system. Sign up for restock alerts if a model sells out before you check out.',
        bullets: ['No promo code needed', 'Free shipping over $99 still applies', '30-day returns on flash-deal items too'],
      },
    ],
  },
  'sales/bundle-save': {
    eyebrow: 'Sales',
    title: 'Bundle & save',
    intro: 'Pair dependable gear and get more from every expedition, at a lower combined price than buying separately.',
    sections: [
      {
        heading: 'Build your kit',
        body: 'Combine a phone, tablet, and wearable into a single checkout and unlock automatic bundle pricing.',
        bullets: ['Phone + case + charger bundles', 'Phone + smartwatch bundles', 'Save 10-15% versus buying separately'],
      },
      {
        heading: 'Popular pairings',
        body: 'The Blade GT Ultra with a vehicle mount and fast charger is our most-bundled combination for field and travel use.',
        bullets: ['Rugged phone + rugged case', 'Tablet + keyboard folio', 'Smartwatch + charging dock'],
      },
    ],
  },
  'sales/clearance': {
    eyebrow: 'Sales',
    title: 'Clearance',
    intro: 'Last-chance pricing on proven rugged technology. Every unit still carries our full build and testing standard.',
    sections: [
      {
        heading: 'Final units',
        body: 'These are previous-generation models or limited color runs being phased out. Functionally identical, priced to move.',
        bullets: ['Final sale — no additional discounts stack', 'Factory-tested before listing', 'Standard warranty still applies'],
      },
      {
        heading: 'Ships fast',
        body: 'Clearance inventory is limited to what is in the warehouse right now, so orders typically dispatch within 24 hours.',
        bullets: ['Fast dispatch', 'Limited color and storage options', 'Once sold out, not restocked'],
      },
    ],
  },
  'products/rugged-phones': {
    eyebrow: 'Products',
    title: 'Rugged phones',
    intro: 'Powerful smartphones for places ordinary phones cannot go — drop-tested, water-sealed, and built to outlast the job.',
    sections: [
      {
        heading: 'Built beyond ordinary',
        body: 'Every rugged phone in the lineup passes IP68/IP69K sealing and MIL-STD-810H drop testing before it ships.',
        bullets: ['IP68 / IP69K water and dust protection', '1.8m drop protection standard', 'Glove-friendly, sunlight-readable displays'],
      },
      {
        heading: 'Choose your power level',
        body: 'From the flagship V Max Pro Duo to the value-focused S110 Pro Max, every model shares the same durability standard at different price points.',
        bullets: ['Flagship: V Max Pro Duo', 'Gaming: Blade GT Ultra', 'Everyday value: S110 Pro Max'],
      },
    ],
  },
  'products/tablets': {
    eyebrow: 'Products',
    title: 'Tablets',
    intro: 'Big-screen productivity with field-ready protection, for work that does not stop when you leave the desk.',
    sections: [
      {
        heading: 'Your command center',
        body: 'Take maps, plans, media, and communication anywhere your work leads, on a display bright enough to read outdoors.',
        bullets: ['Sunlight-readable screens up to 1000 nits', 'Durable reinforced chassis', 'All-day, multi-day battery life'],
      },
      {
        heading: 'Built for the field',
        body: 'The T30 Ultra pairs a 10.4" display with a battery rated for a full multi-day shift away from a charger.',
        bullets: ['10.4" 2K display', 'IP68-rated body', 'Optional rugged keyboard folio'],
      },
    ],
  },
  'products/smartwatches': {
    eyebrow: 'Products',
    title: 'Smartwatches',
    intro: 'Stay connected without reaching for your phone — built for the outdoors, not just the gym.',
    sections: [
      {
        heading: 'Always within reach',
        body: 'Track movement, weather, health, and notifications in a wearable designed to survive drops, sweat, and rain.',
        bullets: ['24/7 heart rate and SpO2 tracking', 'Weather-ready 5ATM water resistance', 'Up to 14 days battery life'],
      },
      {
        heading: 'Pairs with any phone',
        body: 'Compatible with both DOOGEE and non-DOOGEE Android or iOS phones over Bluetooth. New models joining this lineup soon.',
        bullets: ['iOS and Android compatible', 'Offline GPS route tracking', 'Always-on display option'],
      },
    ],
  },
  'products/accessories': {
    eyebrow: 'Products',
    title: 'Accessories',
    intro: 'The right extras for every route — protect, mount, charge, and carry your DOOGEE setup with purpose-built gear.',
    sections: [
      {
        heading: 'Go further equipped',
        body: 'Every accessory is tested against the same device it is designed for, so fit and durability are never an afterthought.',
        bullets: ['Rugged cases and screen protectors', 'Vehicle and bike mounts', 'Fast chargers and power banks'],
      },
      {
        heading: 'Popular right now',
        body: 'The magnetic vehicle mount and 33W fast charger are the two most-added accessories at checkout. Full accessory catalog launching soon.',
        bullets: ['Magnetic vehicle mount', '33W fast charger', 'Rugged carrying holster'],
      },
    ],
  },
  'shop-by-need/outdoor-adventures': {
    eyebrow: 'Shop by need',
    title: 'Outdoor adventures',
    intro: 'Gear for trails, campsites, and the next horizon — technology that keeps up when the terrain gets difficult.',
    sections: [
      {
        heading: 'Find your outside',
        body: 'Choose technology that stays useful when the signal, weather, and terrain change without warning.',
        bullets: ['Offline maps and GPS-ready hardware', 'Weather and dust resistant builds', 'High-visibility displays in direct sun'],
      },
      {
        heading: 'Recommended for the trail',
        body: 'The V Max Pro Duo carries a battery built for multi-day trips away from an outlet, and survives the drops that come with them.',
        bullets: ['V Max Pro Duo — flagship durability', 'Offline-ready navigation apps', 'Rugged case bundles available'],
      },
    ],
  },
  'shop-by-need/work-field': {
    eyebrow: 'Shop by need',
    title: 'Work & field',
    intro: 'Reliable equipment for demanding workdays, from construction sites to remote job locations.',
    sections: [
      {
        heading: 'Work without compromise',
        body: 'Keep teams connected and information accessible across jobsites and remote locations with no signal to spare.',
        bullets: ['Drop-tested against jobsite conditions', 'Push-to-talk app compatible', 'Large battery capacity for full shifts'],
      },
      {
        heading: 'Fleet and team orders',
        body: 'Ordering for a crew? Contact us for volume pricing on 5 or more devices, including the T30 Ultra for shared jobsite tablets.',
        bullets: ['Volume pricing available', 'Bulk case and accessory bundling', 'Dedicated support contact for fleet orders'],
      },
    ],
  },
  'shop-by-need/gaming': {
    eyebrow: 'Shop by need',
    title: 'Gaming',
    intro: 'Performance and personality in a tougher frame — built for long sessions, not just a photo op.',
    sections: [
      {
        heading: 'Play without limits',
        body: 'Fast displays, immersive audio, and serious battery life make every session count, indoors or out.',
        bullets: ['High-refresh-rate displays', 'Dedicated performance cooling', 'Stereo speakers tuned for gaming'],
      },
      {
        heading: 'Built around the Blade GT Ultra',
        body: 'Our gaming flagship pairs a gaming-tuned chipset with shoulder-mounted trigger buttons and RGB accent lighting.',
        bullets: ['Gaming-tuned chipset, 12GB RAM', 'Shoulder trigger buttons', 'RGB accent lighting'],
      },
    ],
  },
  'shop-by-need/everyday-durability': {
    eyebrow: 'Shop by need',
    title: 'Everyday durability',
    intro: 'Confidence for commutes, weekends, and everything between — a durable daily driver, not an overbuilt tool.',
    sections: [
      {
        heading: 'Ready for real life',
        body: 'A durable daily driver gives you fewer worries and more freedom, without the bulk of a full expedition phone.',
        bullets: ['Everyday drop and splash protection', 'Comfortable, lighter-weight design', 'Reliable connectivity'],
      },
      {
        heading: 'Best fit for everyday use',
        body: 'The S110 Pro Max balances rugged protection with a lighter frame better suited to daily carry.',
        bullets: ['S110 Pro Max — daily-carry pick', 'Slimmer profile than expedition models', 'Full IP68 rating retained'],
      },
    ],
  },
  'use-cases/construction': {
    eyebrow: 'Use cases',
    title: 'Construction',
    intro: 'Technology that works as hard as you do — stay in touch through dust, drops, noise, and long shifts.',
    sections: [
      {
        heading: 'Built for the jobsite',
        body: 'Loud speakers, glove-friendly touchscreens, and rugged mounting options keep devices usable on an active site.',
        bullets: ['Loudspeaker audio for noisy environments', 'Glove-friendly touch controls', 'Rugged mounting options for vehicles and gear'],
      },
      {
        heading: 'Site-tested',
        body: 'Every device in this category is rated for concrete dust, drop impacts on hard surfaces, and extended sun exposure.',
        bullets: ['IP69K rated against dust and pressure washing', '1.8m drop rating', 'Sunlight-readable at up to 1000 nits'],
      },
    ],
  },
  'use-cases/travel': {
    eyebrow: 'Use cases',
    title: 'Travel',
    intro: 'One dependable companion for every departure — from airport layovers to trailheads with no signal.',
    sections: [
      {
        heading: 'Pack confidence',
        body: 'Long battery life, dual-SIM flexibility, and durable protection keep you moving across time zones and terrain.',
        bullets: ['Dual-SIM for local carrier switching', 'Multi-day battery life', 'Travel-ready camera in low light'],
      },
      {
        heading: 'Before you go',
        body: 'Check band compatibility for your destination and consider a portable charger for long transit days.',
        bullets: ['Global band compatibility varies by model', 'Portable chargers sold as accessories', 'Offline maps supported on all models'],
      },
    ],
  },
  'use-cases/emergency-services': {
    eyebrow: 'Use cases',
    title: 'Emergency services',
    intro: 'Clarity and resilience when every second matters — hardware designed for demanding response environments.',
    sections: [
      {
        heading: 'Ready when it counts',
        body: 'Keep communication accessible with a bright, readable display and a battery that outlasts a long shift.',
        bullets: ['Emergency-ready battery capacity', 'Bright, readable display in any light', 'One-handed operation in gloves'],
      },
      {
        heading: 'Durability that matters here',
        body: 'Devices in this category are chosen for their combination of drop resistance and audio clarity in high-stress moments.',
        bullets: ['1.8m drop protection', 'Loud, clear speaker output', 'Push-to-talk app compatible'],
      },
    ],
  },
  'use-cases/family-protection': {
    eyebrow: 'Use cases',
    title: 'Family protection',
    intro: 'Durability that brings peace of mind for active families and growing explorers.',
    sections: [
      {
        heading: 'Connected, wherever they go',
        body: 'Choose reliable devices for active families, with a durability standard that survives being dropped, more than once.',
        bullets: ['Location-friendly, GPS-ready hardware', 'Strong drop and water protection', 'Simple setup for less tech-confident family members'],
      },
      {
        heading: 'A good first rugged phone',
        body: 'The S110 Pro Max is our most-recommended starter model for teens or first-time smartphone users who are hard on gear.',
        bullets: ['S110 Pro Max — recommended starter model', 'Simple, durable design', 'Lower price point than the flagship line'],
      },
    ],
  },
  'explore/our-story': {
    eyebrow: 'Explore',
    title: 'Our story',
    intro: 'We make technology for people who refuse to stay inside the lines.',
    sections: [
      {
        heading: 'Fearless by design',
        body: 'DOOGEE exists to turn rugged engineering into freedom: devices that invite you further, not hold you back. We started with a simple frustration — phones that could not survive the places we actually wanted to take them.',
      },
      {
        heading: 'Where we build',
        body: 'Every device goes through the same testing floor before it ships: drop rigs, dust chambers, and pressure-washing stations, regardless of which model it is.',
        bullets: ['In-house durability testing lab', 'Every unit factory-tested before shipping', 'Design led by field feedback, not trend cycles'],
      },
    ],
  },
  'explore/technology': {
    eyebrow: 'Explore',
    title: 'Technology',
    intro: 'Engineering that earns its place in your kit.',
    sections: [
      {
        heading: 'Tested beyond expected',
        body: 'Our devices are developed around three pillars: protection, power, and practical performance in real conditions, not lab-only benchmarks.',
        bullets: ['IP68 / IP69K protection standard', 'Battery endurance built for multi-day use', 'Drop and vibration testing on every model'],
      },
      {
        heading: 'What IP68 and IP69K actually mean',
        body: 'IP68 protects against submersion; IP69K adds resistance to high-pressure, high-temperature washdowns — the standard used for industrial and jobsite equipment.',
      },
    ],
  },
  'explore/journal': {
    eyebrow: 'Explore',
    title: 'Journal',
    intro: 'Field notes, gear guides, and stories from the road.',
    sections: [
      {
        heading: 'Latest from the field',
        body: 'Practical advice and inspiration for making more of every route — from packing lists to long-term device reviews written by people who actually use the gear.',
        bullets: ['How we test drop resistance', 'A week with the V Max Pro Duo on the trail', 'Choosing the right IP rating for your work'],
      },
    ],
  },
  'explore/reviews': {
    eyebrow: 'Explore',
    title: 'Reviews',
    intro: 'See how DOOGEE performs in the real world.',
    sections: [
      {
        heading: 'Proof in the field',
        body: 'Read experiences from people who work, travel, and play beyond the ordinary — unedited, star-rated, and tied to a verified purchase.',
        bullets: ['4.7 average rating across all models', 'Over 2,000 verified reviews', 'Every review tied to a verified order'],
      },
    ],
  },
  'contact-us/contact-us': {
    eyebrow: 'Contact us',
    title: 'Contact us',
    intro: 'Tell us what you need and our team will get back to you.',
    sections: [
      {
        heading: 'Send a message',
        body: 'Use the form below for product questions, order help, partnerships, or anything else you need help with.',
        bullets: ['Replies within 1-2 business days', 'Order support available by email', 'Product specialists on hand for pre-purchase questions'],
      },
    ],
  },
  'contact-us/support': {
    eyebrow: 'Contact us',
    title: 'Support',
    intro: 'Get practical help for your DOOGEE device.',
    sections: [
      {
        heading: 'We are here to help',
        body: 'Find setup guidance, troubleshooting, and direct assistance for your device, whether it just arrived or has been with you for years.',
        bullets: ['Setup and activation assistance', 'Troubleshooting for common issues', 'Replacement and repair guidance'],
      },
    ],
  },
  'contact-us/faq': {
    eyebrow: 'Contact us',
    title: 'FAQ',
    intro: 'Quick answers to common questions.',
    sections: [
      {
        heading: 'Shipping & orders',
        body: 'Orders ship within 1-2 business days. Standard shipping takes 5-7 business days; express takes 2-3.',
      },
      {
        heading: 'Returns & warranty',
        body: 'You have 30 days from delivery to return an unused device in original packaging. All devices carry a 12-month manufacturer warranty against defects.',
      },
      {
        heading: 'Device compatibility',
        body: 'All DOOGEE phones are unlocked and compatible with most GSM carriers. Check your carrier band compatibility before ordering if you are outside the US.',
      },
    ],
  },
  'contact-us/warranty': {
    eyebrow: 'Contact us',
    title: 'Warranty',
    intro: 'Coverage information for your DOOGEE purchase.',
    sections: [
      {
        heading: 'Protection after purchase',
        body: 'Keep your order details on hand and reach out to support if your device needs attention within the coverage window.',
        bullets: ['12-month manufacturer warranty on all devices', 'Proof of purchase required for claims', 'Coverage varies for accessories — check the product page'],
      },
    ],
  },
  'legal/privacy-policy': {
    eyebrow: 'Legal',
    title: 'Privacy policy',
    intro: 'Last updated August 2026. This explains what information we collect and how we use it.',
    sections: [
      {
        heading: 'Information we collect',
        body: 'We collect information you provide directly — name, email, shipping address, payment details — and information collected automatically, such as device type and browsing behavior on our site, to process orders and improve the shopping experience.',
      },
      {
        heading: 'How we use it',
        body: 'Your information is used to fulfill orders, provide customer support, and — only with your consent — send product updates and offers. We do not sell personal information to third parties.',
      },
      {
        heading: 'Your choices',
        body: 'You can request a copy of your data, ask us to delete it, or unsubscribe from marketing emails at any time by contacting support.',
        bullets: ['Request a copy of your data', 'Request deletion of your data', 'Unsubscribe from marketing emails anytime'],
      },
    ],
  },
  'legal/terms-of-service': {
    eyebrow: 'Legal',
    title: 'Terms of service',
    intro: 'Last updated August 2026. By using this site or placing an order, you agree to these terms.',
    sections: [
      {
        heading: 'Orders and pricing',
        body: 'All prices are listed in USD and subject to change without notice. We reserve the right to refuse or cancel an order at our discretion, including in cases of suspected fraud or pricing errors.',
      },
      {
        heading: 'Product use',
        body: 'IP ratings and durability claims reflect factory testing under controlled conditions and are not a guarantee against damage from misuse. Devices carry the specific protection rating listed on their product page.',
      },
      {
        heading: 'Limitation of liability',
        body: 'DOOGEE is not liable for indirect or incidental damages arising from product use beyond the remedies described in our warranty policy.',
      },
    ],
  },
  'legal/shipping-returns': {
    eyebrow: 'Legal',
    title: 'Shipping & returns',
    intro: 'Everything you need to know about getting your order and sending it back if needed.',
    sections: [
      {
        heading: 'Shipping',
        body: 'Orders ship within 1-2 business days. Standard shipping takes 5-7 business days domestically; express takes 2-3. Free shipping applies automatically on orders over $99.',
        bullets: ['Standard: 5-7 business days', 'Express: 2-3 business days', 'Free shipping over $99'],
      },
      {
        heading: 'Returns',
        body: 'You have 30 days from delivery to return an unused item in its original packaging for a full refund. A prepaid return label is provided; a small restocking fee may apply to opened accessories.',
        bullets: ['30-day return window', 'Prepaid return label included', 'Refunds processed within 5-7 business days of receipt'],
      },
    ],
  },
  'legal/cookie-policy': {
    eyebrow: 'Legal',
    title: 'Cookie policy',
    intro: 'How we use cookies and similar technologies on this site.',
    sections: [
      {
        heading: 'What we use cookies for',
        body: 'Essential cookies keep your cart and session working. Analytics cookies help us understand which pages are useful. You can disable non-essential cookies in your browser at any time.',
        bullets: ['Essential cookies — required for cart and checkout', 'Analytics cookies — help us improve the site', 'Disable non-essential cookies anytime in your browser'],
      },
    ],
  },
}

export const navItems = [
  { label: 'Sales', options: ['Flash deals', 'Bundle & save', 'Clearance'] },
  { label: 'Products', options: ['Rugged phones', 'Tablets', 'Smartwatches', 'Accessories'] },
  { label: 'Shop by need', options: ['Outdoor adventures', 'Work & field', 'Gaming', 'Everyday durability'] },
  { label: 'Use cases', options: ['Construction', 'Travel', 'Emergency services', 'Family protection'] },
  { label: 'Explore', options: ['Our story', 'Technology', 'Journal', 'Reviews'] },
  { label: 'Contact us', options: ['Support', 'FAQ', 'Warranty', 'Contact us'] },
]

export const routeFor = (label: string, option: string) =>
  `/${label.toLowerCase().replaceAll(' ', '-')}/${option
    .toLowerCase()
    .replaceAll('&', '')
    .replace(/\s+/g, '-')}`
