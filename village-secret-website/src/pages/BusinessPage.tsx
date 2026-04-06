import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FiMonitor, FiCreditCard, FiMapPin, FiTrendingUp, FiShield, FiUsers, FiArrowRight, FiCheck } from 'react-icons/fi'

const vendingFeatures = [
  { icon: <FiMonitor />, title: 'Smart Display', desc: 'Easily browse all available probiotic drink options on an interactive touch screen.' },
  { icon: <FiCreditCard />, title: 'Quick Payments', desc: 'Multiple secure payment options — UPI, cards, and digital wallets for seamless transactions.' },
  { icon: <FiMapPin />, title: 'Strategic Locations', desc: 'Parks, beaches, hospitals, bus stops, metro stations, malls, supermarkets, and medical shops.' },
  { icon: <FiTrendingUp />, title: 'Scalable Model', desc: 'A cost-effective, automated distribution model that grows with demand.' },
  { icon: <FiShield />, title: 'Hygiene First', desc: 'Fully automated, contactless dispensing ensures maximum hygiene and food safety.' },
  { icon: <FiUsers />, title: 'Self-Service', desc: 'No manual assistance needed — select, pay, and enjoy your drink in seconds.' },
]

const goals = [
  'Increase product visibility and brand awareness',
  'Improve customer reach and accessibility',
  'Drive higher sales volume through impulse purchases',
  'Create a strong presence in everyday consumer environments',
  'Reduce operational complexity while maximizing efficiency',
]

export default function BusinessPage() {
  const { ref: r1, inView: v1 } = useInView({ triggerOnce: true, threshold: 0.2 })
  const { ref: r2, inView: v2 } = useInView({ triggerOnce: true, threshold: 0.2 })
  const { ref: r3, inView: v3 } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Business <span className="highlight">Model</span></h1>
          <p>Revolutionizing healthy drinking through smart vending technology</p>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding" style={{ background: 'var(--bg-warm)' }} ref={r1}>
        <div className="container">
          <div className={`about-grid fade-in ${v1 ? 'visible' : ''}`}>
            <div className="about-text">
              <h2>Our Business Vision</h2>
              <div className="gold-line" />
              <p>
                At Village Secret, we aim to revolutionize healthy drinking by offering our range
                of probiotic beverages through <strong>smart vending machines</strong>, ensuring quick
                access, hygiene, and convenience for customers everywhere.
              </p>
              <p>
                Our company plans to expand the availability of our probiotic drinks by installing
                smart vending machines across high-footfall public locations such as parks, beaches,
                hospitals, bus stops, metro stations, malls, supermarkets, and medical shops.
              </p>
              <p>
                This self-service model ensures convenience, hygiene, and accessibility, enabling
                customers to purchase healthy probiotic beverages anytime without the need for
                manual assistance.
              </p>
            </div>
            <div className="vending-visual">
              <img
                src="/smart_vending_machine.png"
                alt="Smart Vending Machine"
                className="vending-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vending Features */}
      <section className="section-padding" ref={r2}>
        <div className="container">
          <div className="gold-line" />
          <h2 className="section-title">How Our Vending Machines Work</h2>
          <p className="section-subtitle">
            A fully automated and user-friendly experience for healthy beverage access
          </p>
          <div className={`vending-features-grid fade-in ${v2 ? 'visible' : ''}`}>
            {vendingFeatures.map((f, i) => (
              <div key={i} className="vending-feature-card" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="feature-icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Strategy */}
      <section className="benefits section-padding" ref={r3}>
        <div className="container">
          <div className="gold-line" />
          <h2 className="section-title">Expansion Strategy</h2>
          <p className="section-subtitle">
            By strategically placing machines in high-traffic locations, we aim to achieve:
          </p>
          <div className={`expansion-content fade-in ${v3 ? 'visible' : ''}`}>
            <div className="expansion-goals">
              <ul>
                {goals.map((g, i) => (
                  <li key={i}>
                    <FiCheck className="benefit-check" />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: 24, color: 'rgba(255,255,255,.8)', fontSize: '.95rem' }}>
                This approach reduces operational complexity while maximizing efficiency, making it
                a scalable and cost-effective distribution model. Overall, these vending machines will
                not only provide easy access to healthy drinks for consumers, but also help Village
                Secret move to the next stage of business growth and expansion.
              </p>
            </div>
            <div className="expansion-stats">
              <div className="exp-stat">
                <div className="exp-stat-number">📍</div>
                <div className="exp-stat-label">Multiple Cities Targeted</div>
              </div>
              <div className="exp-stat">
                <div className="exp-stat-number">🏪</div>
                <div className="exp-stat-label">High-Traffic Locations</div>
              </div>
              <div className="exp-stat">
                <div className="exp-stat-number">🤖</div>
                <div className="exp-stat-label">Fully Automated</div>
              </div>
              <div className="exp-stat">
                <div className="exp-stat-number">💳</div>
                <div className="exp-stat-label">Cashless Payments</div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/contact" className="btn btn-primary">
              Partner With Us <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
