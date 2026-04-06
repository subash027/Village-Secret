import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FiCheck, FiArrowRight } from 'react-icons/fi'

const benefitsData = [
  {
    name: 'Pazhaya Soru',
    iconClass: 'pazhaya',
    emoji: '🍚',
    desc: 'Our flagship fermented rice drink based on the traditional South Indian Pazhaya Soru recipe.',
    items: [
      'High in fiber → supports better digestion',
      'Low Glycemic Index → helps control blood sugar (good for Type 2 Diabetes)',
      'Keeps you full for a longer time → prevents overeating',
      'Natural probiotic content supports gut health',
      'Aids in nutrient absorption and metabolism',
    ],
  },
  {
    name: 'Black Booster',
    iconClass: 'black',
    emoji: '⚫',
    desc: 'Crafted from nutrient-dense black rice, known as "forbidden rice" for its incredible health properties.',
    items: [
      'Rich in antioxidants → supports heart health and slows aging',
      'Helps in blood purification',
      'Contains properties that may help reduce cancer risk',
      'Improves energy and stamina',
      'High in anthocyanins — powerful plant compounds',
    ],
  },
  {
    name: 'Red Booster',
    iconClass: 'red',
    emoji: '🔴',
    desc: 'Harnesses the iron-rich power of red rice for hemoglobin support and vitality.',
    items: [
      'High in iron → helps increase hemoglobin levels',
      'Supports healthy skin and hair',
      'Reduces risk of heart disease',
      'Helps in weight management',
      'Rich in essential minerals like zinc and magnesium',
    ],
  },
  {
    name: 'Special Booster',
    iconClass: 'special',
    emoji: '🌰',
    desc: 'A unique formulation traditionally used for building physical strength and endurance.',
    items: [
      'Traditionally known for boosting strength and stamina',
      'Supports muscle, nerve, and bone strength',
      'Keeps you full for a longer time → sustained energy',
      'Ideal for athletes and active individuals',
      'Provides balanced nutrition for daily performance',
    ],
  },
  {
    name: 'Brown Booster',
    iconClass: 'brown',
    emoji: '🟤',
    desc: 'Made from fiber-rich brown rice for those focused on weight management and heart health.',
    items: [
      'Whole grain → high in fiber',
      'Supports weight loss',
      'Helps reduce cholesterol levels',
      'Releases sugar slowly into the bloodstream',
      'Supports cardiovascular health',
    ],
  },
]

export default function BenefitsPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Health <span className="highlight">Benefits</span></h1>
          <p>Each variety offers unique health benefits backed by traditional wisdom and modern nutrition science</p>
        </div>
      </section>

      {/* Probiotic Intro */}
      <section className="section-padding" style={{ background: 'var(--bg-warm)' }}>
        <div className="container">
          <div className="gold-line" />
          <h2 className="section-title">What Are Probiotics?</h2>
          <p className="section-subtitle">
            Probiotics are live beneficial bacteria that support your digestive system, boost
            immunity, and improve overall health. Village Secret drinks are naturally rich in
            these good bacteria through the traditional fermentation process.
          </p>
          <div className="probiotic-info-grid">
            <div className="probiotic-info-card">
              <div className="probiotic-icon">🦠</div>
              <h4>Good Bacteria</h4>
              <p>Probiotics introduce beneficial microorganisms into your gut, creating a healthy microbiome balance.</p>
            </div>
            <div className="probiotic-info-card">
              <div className="probiotic-icon">🛡️</div>
              <h4>Immune Support</h4>
              <p>A healthy gut is the foundation of a strong immune system. Probiotics strengthen your body's natural defenses.</p>
            </div>
            <div className="probiotic-info-card">
              <div className="probiotic-icon">⚡</div>
              <h4>Better Digestion</h4>
              <p>Fermented foods aid in breaking down nutrients, improving absorption and reducing digestive discomfort.</p>
            </div>
            <div className="probiotic-info-card">
              <div className="probiotic-icon">🧠</div>
              <h4>Mental Clarity</h4>
              <p>The gut-brain connection means a healthy gut supports better mood, focus, and cognitive function.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="benefits-variety section-padding" ref={ref}>
        <div className="container">
          <div className="gold-line" />
          <h2 className="section-title">Benefits by Variety</h2>
          <p className="section-subtitle">
            Each Village Secret drink uses a different type of rice, offering targeted health benefits.
          </p>
          <div className="benefits-detail-list">
            {benefitsData.map((b, i) => (
              <div
                key={b.name}
                className={`benefit-detail-card fade-in ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="benefit-detail-header">
                  <div className={`benefit-icon ${b.iconClass}`}>{b.emoji}</div>
                  <div>
                    <h3>{b.name}</h3>
                    <p className="benefit-detail-desc">{b.desc}</p>
                  </div>
                </div>
                <ul>
                  {b.items.map((item, j) => (
                    <li key={j}>
                      <FiCheck className="benefit-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/products" className="btn btn-primary">
              View Our Products <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
