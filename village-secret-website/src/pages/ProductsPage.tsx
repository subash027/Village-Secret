import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const products = [
  {
    name: 'Pazhaya Soru',
    tagline: 'The Original Classic',
    color: '#f4dfba',
    badge: 'Classic',
    image: '/pazhaya_soru_meal.png',
    desc: 'Traditional fermented rice drink — high fiber, low glycemic, probiotic powerhouse.',
    longDesc: 'Our flagship product, Pazhaya Soru, is the heart of Village Secret. Made from traditionally fermented rice, this drink is high in fiber, has a low glycemic index that helps control blood sugar (especially beneficial for Type 2 Diabetes), and keeps you full for a longer time — preventing overeating. It\'s the perfect blend of tradition and modern convenience.',
    benefits: ['High in fiber for better digestion', 'Low Glycemic Index for blood sugar control', 'Keeps you full longer — prevents overeating', 'Rich in natural probiotics'],
  },
  {
    name: 'Black Booster',
    tagline: 'Antioxidant Powerhouse',
    color: '#2d2d2d',
    badge: 'Premium',
    image: '/black_rice.png',
    desc: 'Black rice probiotic — rich in antioxidants, supports heart health & energy.',
    longDesc: 'The Black Booster is crafted from nutrient-dense black rice, known as "forbidden rice" for its incredible health properties. Loaded with anthocyanins — powerful antioxidants that support heart health, slow aging, and purify the blood. This premium drink also contains properties that may help reduce cancer risk while improving your energy and stamina.',
    benefits: ['Rich in antioxidants for heart health', 'Helps in blood purification', 'May help reduce cancer risk', 'Improves energy and stamina'],
  },
  {
    name: 'Red Booster',
    tagline: 'Iron Rich Energy',
    color: '#c0392b',
    badge: 'Popular',
    image: '/red_rice.png',
    desc: 'Red rice probiotic — high in iron, boosts hemoglobin, supports skin & hair.',
    longDesc: 'The Red Booster harnesses the iron-rich power of red rice to help increase hemoglobin levels naturally. Perfect for those looking to support healthy skin and hair, reduce the risk of heart disease, and manage weight effectively. The vibrant red rice provides essential minerals and nutrients your body craves.',
    benefits: ['High in iron — boosts hemoglobin levels', 'Supports healthy skin and hair', 'Reduces risk of heart disease', 'Helps in weight management'],
  },
  {
    name: 'Special Booster',
    tagline: 'Strength & Stamina',
    color: '#d4a017',
    badge: 'Special',
    image: '/special_booster.png',
    desc: 'Traditionally known for boosting strength — supports muscles, nerves & bones.',
    longDesc: 'Our Special Booster is a unique formulation traditionally known for boosting strength and stamina. This drink supports muscle, nerve, and bone strength while keeping you full for a longer time — providing sustained energy throughout the day. Perfect for athletes, workers, and anyone who needs that extra push.',
    benefits: ['Boosts strength and stamina', 'Supports muscle, nerve, and bone strength', 'Sustained energy throughout the day', 'Keeps you full for longer'],
  },
  {
    name: 'Brown Booster',
    tagline: 'Whole Grain Goodness',
    color: '#8b6914',
    badge: 'Healthy',
    image: '/brown_rice.png',
    desc: 'Brown rice probiotic — whole grain, high fiber, supports weight loss & cholesterol.',
    longDesc: 'The Brown Booster is your go-to for whole grain nutrition in a convenient drink. Made from fiber-rich brown rice, it supports weight loss, helps reduce cholesterol levels, and releases sugar slowly into the bloodstream for steady energy without spikes. A smart choice for health-conscious consumers.',
    benefits: ['Whole grain — high in fiber', 'Supports weight loss', 'Helps reduce cholesterol levels', 'Slow sugar release — steady energy'],
  },
]

export default function ProductsPage() {
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Our <span className="highlight">Probiotic Drinks</span></h1>
          <p>Five unique varieties, each crafted from different rice types with distinct health benefits</p>
        </div>
      </section>

      <section className="section-padding" ref={headerRef}>
        <div className="container">
          <div className="gold-line" />
          <h2 className="section-title">Choose Your Booster</h2>
          <p className="section-subtitle">
            Each Village Secret drink is crafted with a specific type of rice, offering targeted health
            benefits while delivering the probiotic goodness of traditional fermented rice.
          </p>

          <div className="product-detail-list">
            {products.map((p, i) => {
              const isEven = i % 2 === 0
              return (
                <ProductDetailCard
                  key={p.name}
                  product={p}
                  reverse={!isEven}
                  index={i}
                  parentInView={headerInView}
                />
              )
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/benefits" className="btn btn-primary">
              See Detailed Benefits <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function ProductDetailCard({ product, reverse, index, parentInView }: {
  product: typeof products[0]
  reverse: boolean
  index: number
  parentInView: boolean
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <div
      ref={ref}
      className={`product-detail-row ${reverse ? 'reverse' : ''} fade-in ${inView || parentInView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="product-detail-image">
        <div className="product-badge" style={{ background: product.color, color: product.color === '#2d2d2d' ? '#fff' : '#1a2744' }}>
          {product.badge}
        </div>
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-detail-info">
        <h3>{product.name}</h3>
        <p className="product-tagline" style={{ color: product.color === '#2d2d2d' ? '#666' : product.color }}>
          {product.tagline}
        </p>
        <p>{product.longDesc}</p>
        <ul className="product-benefits-list">
          {product.benefits.map((b, j) => (
            <li key={j}>✓ {b}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
