import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="navbar-logo" style={{ marginBottom: 8 }}>
            <img src="/logo.png" alt="Village Secret" />
            <span>Village Secret</span>
          </Link>
          <p>
            Bringing the goodness of traditional nutrition into a modern lifestyle.
            100% natural probiotic drinks crafted from fermented rice.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><FiFacebook /></a>
            <a href="#" aria-label="Instagram"><FiInstagram /></a>
            <a href="#" aria-label="YouTube"><FiYoutube /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/products">Products</Link>
          <Link to="/benefits">Benefits</Link>
          <Link to="/business">Business</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <Link to="/products">Pazhaya Soru</Link>
          <Link to="/products">Black Booster</Link>
          <Link to="/products">Red Booster</Link>
          <Link to="/products">Special Booster</Link>
          <Link to="/products">Brown Booster</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="tel:+918072336590">+91 80723 36590</a>
          <Link to="/contact">Chandru</Link>
          <Link to="/contact">Cuddalore, Tamil Nadu</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {year} Village Secret. All rights reserved.</span>
        <span>Crafted with tradition &amp; love</span>
      </div>
    </footer>
  )
}
