import { useInView } from 'react-intersection-observer'

const products = [
  {
    name: 'Pazhaya Soru',
    tagline: 'The Original Classic',
    color: '#f4dfba',
    badge: 'Classic',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80',
    desc: 'Traditional fermented rice drink — high fiber, low glycemic, probiotic powerhouse.',
  },
  {
    name: 'Black Booster',
    tagline: 'Antioxidant Powerhouse',
    color: '#2d2d2d',
    badge: 'Premium',
    image: 'https://images.unsplash.com/photo-1536304993881-460a67632553?w=400&q=80',
    desc: 'Black rice probiotic — rich in antioxidants, supports heart health & energy.',
  },
  {
    name: 'Red Booster',
    tagline: 'Iron Rich Energy',
    color: '#c0392b',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400&q=80',
    desc: 'Red rice probiotic — high in iron, boosts hemoglobin, supports skin & hair.',
  },
  {
    name: 'Special Booster',
    tagline: 'Strength & Stamina',
    color: '#d4a017',
    badge: 'Special',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=80',
    desc: 'Traditionally known for boosting strength — supports muscles, nerves & bones.',
  },
  {
    name: 'Brown Booster',
    tagline: 'Whole Grain Goodness',
    color: '#8b6914',
    badge: 'Healthy',
    image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=400&q=80',
    desc: 'Brown rice probiotic — whole grain, high fiber, supports weight loss & cholesterol.',
  },
]

export default function Products() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="products section-padding" id="products" ref={ref}>
      <div className="container">
        <div className="gold-line" />
        <h2 className="section-title">Our Probiotic Drinks</h2>
        <p className="section-subtitle">
          Five unique varieties crafted from different rice types, each packed with probiotics and
          natural health benefits.
        </p>

        <div className="products-grid">
          {products.map((p, i) => (
            <div
              key={p.name}
              className={`product-card fade-in ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="product-badge" style={{ background: p.color, color: p.color === '#2d2d2d' ? '#fff' : '#1a2744' }}>
                {p.badge}
              </div>
              <img
                src={p.image}
                alt={p.name}
                className="product-card-image"
              />
              <div className="product-card-body">
                <h3>{p.name}</h3>
                <p style={{ fontSize: '.78rem', color: p.color === '#2d2d2d' ? '#666' : p.color, fontWeight: 600, marginBottom: 6 }}>
                  {p.tagline}
                </p>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
