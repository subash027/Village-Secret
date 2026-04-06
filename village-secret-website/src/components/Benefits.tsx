import { useInView } from 'react-intersection-observer'
import { FiCheck } from 'react-icons/fi'

const benefitsData = [
  {
    name: 'Pazhaya Soru',
    iconClass: 'pazhaya',
    emoji: '🍚',
    items: [
      'High in fiber → supports better digestion',
      'Low Glycemic Index → helps control blood sugar (good for Type 2 Diabetes)',
      'Keeps you full for a longer time → prevents overeating',
    ],
  },
  {
    name: 'Black Booster',
    iconClass: 'black',
    emoji: '⬛',
    items: [
      'Rich in antioxidants → supports heart health and slows aging',
      'Helps in blood purification',
      'Contains properties that may help reduce cancer risk',
      'Improves energy and stamina',
    ],
  },
  {
    name: 'Red Booster',
    iconClass: 'red',
    emoji: '🔴',
    items: [
      'High in iron → helps increase hemoglobin levels',
      'Supports healthy skin and hair',
      'Reduces risk of heart disease',
      'Helps in weight management',
    ],
  },
  {
    name: 'Special Booster',
    iconClass: 'special',
    emoji: '⭐',
    items: [
      'Traditionally known for boosting strength and stamina',
      'Supports muscle, nerve, and bone strength',
      'Keeps you full for a longer time → sustained energy',
    ],
  },
  {
    name: 'Brown Booster',
    iconClass: 'brown',
    emoji: '🟤',
    items: [
      'Whole grain → high in fiber',
      'Supports weight loss',
      'Helps reduce cholesterol levels',
      'Releases sugar slowly into the bloodstream',
    ],
  },
]

export default function Benefits() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="benefits section-padding" id="benefits" ref={ref}>
      <div className="container">
        <div className="gold-line" />
        <h2 className="section-title">Health Benefits</h2>
        <p className="section-subtitle">
          Each variety is crafted from different types of rice, offering unique health benefits
          backed by traditional wisdom.
        </p>

        <div className="benefits-grid">
          {benefitsData.map((b, i) => (
            <div
              key={b.name}
              className={`benefit-card fade-in ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="benefit-card-header">
                <div className={`benefit-icon ${b.iconClass}`}>{b.emoji}</div>
                <h3>{b.name}</h3>
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
      </div>
    </section>
  )
}
