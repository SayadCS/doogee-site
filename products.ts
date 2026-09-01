export type Product = {
  slug: string
  name: string
  type: string
  category: string
  tags?: string[]
  price: number
  tag?: string
  image: string | null
  colors: string[]
  description: string
  specs: { label: string; value: string }[]
}

export const products: Product[] = [
  {
    slug: 'v-max-pro-duo',
    name: 'V Max Pro Duo',
    type: 'Rugged Smartphone',
    category: 'products/rugged-phones',
    tags: ['shop-by-need/outdoor-adventures', 'use-cases/travel', 'sales/flash-deals'],
    price: 499.99,
    tag: 'NEW',
    image: '/images/products/doogee-v-max-pro.png',
    colors: ['Forest Green', 'Storm Silver'],
    description:
      'Our flagship dual-tone rugged phone, built for people who need flagship power without babying their phone.',
    specs: [
      { label: 'Display', value: '6.78" AMOLED, 144Hz, 1200 nits' },
      { label: 'Chipset', value: 'Octa-core flagship, up to 16GB RAM' },
      { label: 'Battery', value: '6000mAh, 33W fast charging' },
      { label: 'Camera', value: '108MP main + ultra-wide + macro' },
      { label: 'Protection', value: 'IP68 / IP69K, MIL-STD-810H' },
      { label: 'Body', value: 'Aluminum frame, reinforced corners' },
    ],
  },
  {
    slug: 'blade-gt-ultra',
    name: 'Blade GT Ultra',
    type: 'Gaming Rugged Phone',
    category: 'shop-by-need/gaming',
    tags: ['use-cases/emergency-services', 'sales/bundle-save'],
    price: 399.99,
    tag: 'BEST SELLER',
    image: '/images/products/doogee-blade-gt.png',
    colors: ['Blaze Black'],
    description:
      'A gaming-first rugged phone with shoulder trigger buttons, performance cooling, and a durability rating that survives being dropped mid-match.',
    specs: [
      { label: 'Display', value: '6.5" IPS, 120Hz refresh' },
      { label: 'Chipset', value: 'Gaming-tuned octa-core, 12GB RAM' },
      { label: 'Battery', value: '5500mAh, 30W fast charging' },
      { label: 'Camera', value: '64MP main + night mode' },
      { label: 'Protection', value: 'IP68 / IP69K, MIL-STD-810H' },
      { label: 'Extras', value: 'Shoulder triggers, RGB accent lighting' },
    ],
  },
  {
    slug: 's110-pro-max',
    name: 'S110 Pro Max',
    type: 'Rugged Smartphone',
    category: 'products/rugged-phones',
    tags: ['shop-by-need/everyday-durability', 'use-cases/family-protection', 'use-cases/construction', 'sales/clearance'],
    price: 329.99,
    tag: 'SALE',
    image: '/images/products/doogee-s200-x.png',
    colors: ['Jet Black'],
    description:
      'The value pick in the lineup — full rugged protection in a lighter, slimmer frame, with the same IP69K rating as the flagship.',
    specs: [
      { label: 'Display', value: '6.58" IPS, 90Hz refresh' },
      { label: 'Chipset', value: 'Octa-core, 8GB RAM' },
      { label: 'Battery', value: '5180mAh, 18W fast charging' },
      { label: 'Camera', value: '50MP quad-camera array' },
      { label: 'Protection', value: 'IP68 / IP69K, MIL-STD-810H' },
      { label: 'Body', value: 'Textured polymer, reinforced corners' },
    ],
  },
  {
    slug: 't30-ultra',
    name: 'T30 Ultra',
    type: 'Rugged Tablet',
    category: 'products/tablets',
    tags: ['shop-by-need/work-field', 'use-cases/construction'],
    price: 279.99,
    tag: 'SALE',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1000&q=90',
    colors: ['Graphite'],
    description:
      'A 10.4" rugged tablet built for planning, mapping, and media on the move, with a multi-day battery.',
    specs: [
      { label: 'Display', value: '10.4" 2K, sunlight-readable' },
      { label: 'Chipset', value: 'Octa-core, 8GB RAM' },
      { label: 'Battery', value: '8280mAh' },
      { label: 'Camera', value: '16MP main + 8MP front' },
      { label: 'Protection', value: 'IP68 rated' },
      { label: 'Extras', value: 'Optional rugged keyboard folio' },
    ],
  },
]

export const findProduct = (slug: string) => products.find((p) => p.slug === slug)

export const productsForRoute = (route: string) =>
  products.filter((p) => p.category === route || p.tags?.includes(route))

export const reviews = [
  {
    name: 'Marcus T.',
    location: 'Verified buyer',
    rating: 5,
    product: 'Blade GT Ultra',
    quote:
      "Dropped this off a scaffold onto concrete. Screen didn't even scratch. Still my daily phone eight months later.",
  },
  {
    name: 'Priya S.',
    location: 'Verified buyer',
    rating: 5,
    product: 'V Max Pro Duo',
    quote:
      "Battery genuinely lasts two full days of heavy use. Camera is way better than I expected from a rugged phone.",
  },
  {
    name: 'Dave R.',
    location: 'Verified buyer',
    rating: 4,
    product: 'S110 Pro Max',
    quote:
      "Great value if you don't need flagship specs. Bought it for my teenager and it's survived a school year already.",
  },
]
