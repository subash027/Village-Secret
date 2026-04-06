import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiPhone, FiUser, FiMail } from 'react-icons/fi'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="contact section-padding" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-grid">
          <div className={`contact-info fade-in-left ${inView ? 'visible' : ''}`}>
            <h2>Get In Touch</h2>
            <div className="gold-line" />
            <p>
              Have questions about our probiotic drinks or want to partner with us for vending
              machine placement? We'd love to hear from you!
            </p>

            <div className="contact-detail">
              <div className="contact-detail-icon"><FiUser /></div>
              <div>
                <h4>Contact Person</h4>
                <p>Chandru</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon"><FiPhone /></div>
              <div>
                <h4>Phone Number</h4>
                <p>
                  <a href="tel:+918072336590" style={{ color: '#d4a017', fontWeight: 600 }}>
                    +91 80723 36590
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon"><FiMapPin /></div>
              <div>
                <h4>Our Address</h4>
                <p>No. 2, Sanker Nagar, Kuppankulam Road,<br />TPR, Cuddalore – 607002</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon"><FiMail /></div>
              <div>
                <h4>Email</h4>
                <p>info@villagesecret.com</p>
              </div>
            </div>
          </div>

          <div className={`fade-in-right ${inView ? 'visible' : ''}`}>
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thank you for your message! We will get back to you soon.')
              }}
            >
              <h3>Send Us a Message</h3>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="you@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="How can we help you?" required />
              </div>
              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
