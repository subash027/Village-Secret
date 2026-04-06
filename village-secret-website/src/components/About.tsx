import { useInView } from 'react-intersection-observer'
import { GiRiceCooker, GiHeartBottle, GiFruitBowl } from 'react-icons/gi'

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-grid" ref={ref}>
          <div className={`about-image-wrapper fade-in-left ${inView ? 'visible' : ''}`}>
            <img
              src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80"
              alt="Traditional fermented rice"
              className="about-image"
            />
            <div className="about-image-accent" />
          </div>

          <div className={`about-text fade-in-right ${inView ? 'visible' : ''}`}>
            <h2>Our Story</h2>
            <div className="gold-line" />
            <p>
              <strong>Village Secret</strong> is a Probiotic drink brand that brings you beneficial
              bacteria to support and improve your overall health. We are introducing a traditional
              food that generations have deeply cherished — <em>fermented rice (Pazhaya Soru)</em>.
            </p>
            <p>
              We've transformed this ancient concept into a convenient energy drink format —
              easy to carry and consume anytime, anywhere. A refreshing, ready-to-drink beverage
              that combines both taste and health.
            </p>
            <p>
              We are proud to bring the goodness of traditional nutrition into a modern lifestyle
              under our brand <strong>"Village Secret"</strong>.
            </p>

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
  )
}
