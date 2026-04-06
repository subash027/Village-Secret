import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { GiRiceCooker, GiHeartBottle, GiFruitBowl } from 'react-icons/gi'

export default function AboutPage() {
  const { ref: r1, inView: v1 } = useInView({ triggerOnce: true, threshold: 0.2 })
  const { ref: r2, inView: v2 } = useInView({ triggerOnce: true, threshold: 0.2 })
  const { ref: r3, inView: v3 } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About <span className="highlight">Village Secret</span></h1>
          <p>Our journey from village tradition to modern wellness</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="about section-padding" ref={r1}>
        <div className="container">
          <div className="about-grid">
            <div className={`about-image-wrapper fade-in-left ${v1 ? 'visible' : ''}`}>
              <img
                src="/pazhaya_soru_drink.png"
                alt="Traditional fermented rice"
                className="about-image"
              />
              <div className="about-image-accent" />
            </div>
            <div className={`about-text fade-in-right ${v1 ? 'visible' : ''}`}>
              <h2>Our Story</h2>
              <div className="gold-line" />
              <p>
                <strong>Village Secret</strong> is a Probiotic drink meaning it contains beneficial
                bacteria that support and improve overall health. We have many probiotic foods
                available, but what we are introducing now is a traditional food that we are deeply
                familiar with — <em>fermented rice (Pazhaya Soru)</em>.
              </p>
              <p>
                We are transforming this traditional concept into a convenient energy drink format
                that is easy for everyone to carry and consume anytime, anywhere. Our goal is to
                present it as a refreshing, ready-to-drink beverage that combines both taste and health.
              </p>
              <p>
                This drink will serve as a natural energy booster while also being highly beneficial
                for the body. It is fresh, delicious, and rich in probiotics, supporting overall
                well-being.
              </p>
              <p>
                We are proud and happy to introduce this unique product under our brand
                <strong> "Village Secret"</strong>, bringing the goodness of traditional nutrition
                into a modern lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding" style={{ background: 'var(--bg-warm)' }} ref={r2}>
        <div className="container">
          <div className="gold-line" />
          <h2 className="section-title">Our Mission & Vision</h2>
          <p className="section-subtitle">
            Making traditional nutrition accessible to everyone, everywhere
          </p>
          <div className={`mission-grid fade-in ${v2 ? 'visible' : ''}`}>
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To bring the time-tested health benefits of fermented rice to modern consumers
                through a convenient, delicious, and accessible probiotic drink format. We believe
                everyone deserves easy access to natural, gut-friendly nutrition.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To become India's leading probiotic beverage brand, making Village Secret available
                at every corner through our smart vending machine network — from parks and hospitals
                to metro stations and malls.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">💚</div>
              <h3>Our Values</h3>
              <p>
                We stand for authenticity, health, and accessibility. Every bottle of Village Secret
                is crafted with 100% natural ingredients, no preservatives, and the same love that
                village grandmothers put into their Pazhaya Soru.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding" ref={r3}>
        <div className="container">
          <div className="gold-line" />
          <h2 className="section-title">What Makes Us Different</h2>
          <p className="section-subtitle">
            Village Secret isn't just another health drink — it's a cultural revolution in a bottle
          </p>
          <div className={`diff-grid fade-in ${v3 ? 'visible' : ''}`}>
            <div className="stat-card" style={{ padding: 28 }}>
              <div className="number"><GiRiceCooker /></div>
              <div className="label" style={{ fontSize: '1rem', fontWeight: 600 }}>Traditional Recipe</div>
              <p style={{ fontSize: '.85rem', color: 'var(--text-muted)', marginTop: 8 }}>
                Based on the age-old South Indian tradition of fermented rice, passed down through generations.
              </p>
            </div>
            <div className="stat-card" style={{ padding: 28 }}>
              <div className="number"><GiHeartBottle /></div>
              <div className="label" style={{ fontSize: '1rem', fontWeight: 600 }}>Probiotic Rich</div>
              <p style={{ fontSize: '.85rem', color: 'var(--text-muted)', marginTop: 8 }}>
                Packed with beneficial bacteria that support digestion, immunity, and overall gut health.
              </p>
            </div>
            <div className="stat-card" style={{ padding: 28 }}>
              <div className="number"><GiFruitBowl /></div>
              <div className="label" style={{ fontSize: '1rem', fontWeight: 600 }}>100% Natural</div>
              <p style={{ fontSize: '.85rem', color: 'var(--text-muted)', marginTop: 8 }}>
                No artificial preservatives, colors, or flavors. Just pure, natural goodness from the village.
              </p>
            </div>
            <div className="stat-card" style={{ padding: 28 }}>
              <div className="number">🌾</div>
              <div className="label" style={{ fontSize: '1rem', fontWeight: 600 }}>5 Rice Varieties</div>
              <p style={{ fontSize: '.85rem', color: 'var(--text-muted)', marginTop: 8 }}>
                Five unique formulations using different rice types — each with distinct health benefits.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/products" className="btn btn-primary">
              Explore Our Products <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
