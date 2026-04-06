import { useInView } from 'react-intersection-observer'
import { FiMonitor, FiCreditCard, FiMapPin, FiTrendingUp } from 'react-icons/fi'

export default function BusinessModel() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="business-model section-padding" id="business" ref={ref}>
      <div className="container">
        <div className="business-grid">
          <div className={`business-text fade-in-left ${inView ? 'visible' : ''}`}>
            <h2>Smart Vending Machines</h2>
            <div className="gold-line" />
            <p>
              At Village Secret, we aim to revolutionize healthy drinking by offering our probiotic
              beverages through smart vending machines, ensuring quick access, hygiene, and
              convenience for customers everywhere.
            </p>
            <p>
              Our vending machines will be installed across high-footfall public locations such as
              parks, beaches, hospitals, bus stops, metro stations, malls, supermarkets, and medical shops.
            </p>

            <div className="business-features">
              <div className="feature-item">
                <div className="feature-icon"><FiMonitor /></div>
                <div>
                  <h4>Smart Display</h4>
                  <p>Browse all probiotic drink options easily</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><FiCreditCard /></div>
                <div>
                  <h4>Quick Payments</h4>
                  <p>Multiple secure payment options available</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><FiMapPin /></div>
                <div>
                  <h4>High-Traffic Locations</h4>
                  <p>Strategically placed for maximum reach</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><FiTrendingUp /></div>
                <div>
                  <h4>Scalable Growth</h4>
                  <p>Cost-effective distribution model</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`vending-visual fade-in-right ${inView ? 'visible' : ''}`}>
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&q=80"
              alt="Smart Vending Machine"
              className="vending-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
