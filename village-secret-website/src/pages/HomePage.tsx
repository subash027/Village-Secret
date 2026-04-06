import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight, FiChevronDown, FiCheck, FiMonitor, FiHeart, FiStar } from 'react-icons/fi'
import { GiRiceCooker, GiHeartBottle, GiFruitBowl } from 'react-icons/gi'

const products = [
  { name: 'Pazhaya Soru', tagline: 'The Original Classic', color: '#d4a017', badge: 'Classic', image: '/pazhaya_soru_meal.png' },
  { name: 'Black Booster', tagline: 'Antioxidant Powerhouse', color: '#2d2d2d', badge: 'Premium', image: '/black_rice.png' },
  { name: 'Red Booster', tagline: 'Iron Rich Energy', color: '#c0392b', badge: 'Popular', image: '/red_rice.png' },
  { name: 'Special Booster', tagline: 'Strength & Stamina', color: '#d4a017', badge: 'Special', image: '/special_booster.png' },
  { name: 'Brown Booster', tagline: 'Whole Grain Goodness', color: '#8b6914', badge: 'Healthy', image: '/brown_rice.png' },
]

const quickBenefits = [
  'Supports better digestion with high fiber',
  'Helps control blood sugar levels naturally',
  'Rich in antioxidants for heart health',
  'Boosts energy and stamina throughout the day',
  'Supports healthy skin, hair, and overall well-being',
  'Aids in weight management with whole grains',
]

export default function HomePage() {
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const { ref: prodRef, inView: prodInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: whyRef, inView: whyInView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="hero-floating-shapes">
          <div className="shape" />
          <div className="shape" />
          <div className="shape" />
        </div>
        <div className="hero-content">
          <div className="hero-badge">100% Natural Probiotic Drinks</div>
          <h1>
            Uncork The Secret <br />
            To <span className="highlight">Vibrant Health</span>
          </h1>
          <p>
            Traditional fermented rice transformed into a refreshing, ready-to-drink
            probiotic beverage. Bringing the goodness of village nutrition into your modern
            lifestyle.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">
              Shop Our Drinks <FiArrowRight />
            </Link>
            <Link to="/about" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <FiChevronDown size={20} />
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="about section-padding" ref={aboutRef}>
        <div className="container">
          <div className="about-grid">
            <div className={`about-image-wrapper fade-in-left ${aboutInView ? 'visible' : ''}`}>
              <img
                src="/pazhaya_soru_drink.png"
                alt="Traditional fermented rice"
                className="about-image"
              />
              <div className="about-image-accent" />
            </div>
            <div className={`about-text fade-in-right ${aboutInView ? 'visible' : ''}`}>
              <h2>Our Story</h2>
              <div className="gold-line" />
              <p>
                <strong>Village Secret</strong> is a Probiotic drink brand bringing you beneficial
                bacteria to support and improve overall health. We introduce a traditional food
                generations have cherished — <em>fermented rice (Pazhaya Soru)</em>.
              </p>
              <p>
                We've transformed this ancient concept into a convenient energy drink. Fresh,
                delicious, and rich in probiotics — supporting overall well-being.
              </p>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: 20 }}>
                Read Full Story <FiArrowRight />
              </Link>
              <div className="about-stats">
                <div className="stat-card">
                  <div className="number"><GiRiceCooker /></div>
                  <div className="label">Traditional Recipe</div>
                </div>
                <div className="stat-card">
                  <div className="number"><GiHeartBottle /></div>
                  <div className="label">Probiotic Rich</div>
                </div>
                <div className="stat-card">
                  <div className="number"><GiFruitBowl /></div>
                  <div className="label">100% Natural</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS PREVIEW ===== */}
      <section className="products section-padding" ref={prodRef}>
        <div className="container">
          <div className="gold-line" />
          <h2 className="section-title">Our Probiotic Drinks</h2>
          <p className="section-subtitle">
            Five unique varieties crafted from different rice types, each packed with probiotics
            and natural health benefits.
          </p>
          <div className="products-grid">
            {products.map((p, i) => (
              <Link
                to="/products"
                key={p.name}
                className={`product-card fade-in ${prodInView ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="product-badge" style={{ background: p.color, color: p.color === '#2d2d2d' ? '#fff' : '#1a2744' }}>
                  {p.badge}
                </div>
                <img src={p.image} alt={p.name} className="product-card-image" />
                <div className="product-card-body">
                  <h3>{p.name}</h3>
                  <p style={{ fontSize: '.78rem', color: p.color === '#2d2d2d' ? '#666' : p.color, fontWeight: 600 }}>
                    {p.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/products" className="btn btn-primary">
              View All Products <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY VILLAGE SECRET ===== */}
      <section className="benefits section-padding" ref={whyRef}>
        <div className="container">
          <div className="gold-line" />
          <h2 className="section-title">Why Village Secret?</h2>
          <p className="section-subtitle">
            Nature's best probiotic, rooted in tradition, designed for modern life.
          </p>
          <div className="home-why-grid">
            <div className={`home-why-left fade-in-left ${whyInView ? 'visible' : ''}`}>
              <div className="home-why-card">
                <div className="feature-icon"><FiHeart /></div>
                <div>
                  <h4>Probiotic Powerhouse</h4>
                  <p>Every bottle is rich in beneficial bacteria that support digestion and overall gut health.</p>
                </div>
              </div>
              <div className="home-why-card">
                <div className="feature-icon"><FiStar /></div>
                <div>
                  <h4>Traditional Wisdom</h4>
                  <p>Based on generations-old Indian village recipe of fermented rice (Pazhaya Soru).</p>
                </div>
              </div>
              <div className="home-why-card">
                <div className="feature-icon"><FiMonitor /></div>
                <div>
                  <h4>Smart Vending Access</h4>
                  <p>Available at high-traffic locations through our automated vending machines.</p>
                </div>
              </div>
            </div>
            <div className={`home-why-right fade-in-right ${whyInView ? 'visible' : ''}`}>
              <h3>Key Health Benefits</h3>
              <ul>
                {quickBenefits.map((b, i) => (
                  <li key={i}>
                    <FiCheck className="benefit-check" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link to="/benefits" className="btn btn-primary" style={{ marginTop: 24 }}>
                Explore All Benefits <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner section-padding" ref={ctaRef}>
        <div className={`container cta-inner fade-in ${ctaInView ? 'visible' : ''}`}>
          <h2>Ready to Experience the Secret?</h2>
          <p>
            Join thousands who trust Village Secret for their daily probiotic boost.
            Natural, fresh, and packed with health benefits.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">
              Explore Products <FiArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-outline-dark">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
