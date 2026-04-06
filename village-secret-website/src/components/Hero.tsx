import { FiArrowRight, FiChevronDown } from 'react-icons/fi'

export default function Hero() {
  return (
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
          <a href="#products" className="btn btn-primary">
            Shop Our Drinks <FiArrowRight />
          </a>
          <a href="#about" className="btn btn-outline">
            Learn More
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <FiChevronDown size={20} />
      </div>
    </section>
  )
}
