import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiPhone, FiUser, FiMail, FiClock, FiSend, FiLoader } from 'react-icons/fi'

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzYy9H8IGs4n3F01aaUO4Y6H9EpvdlBlepHUDZ7l5HZfTOgEdtDoOCc3ufyenpXglek/exec'

export default function ContactPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Contact <span className="highlight">Us</span></h1>
          <p>Have questions or want to partner with us? We'd love to hear from you!</p>
        </div>
      </section>

      <section className="contact section-padding" ref={ref}>
        <div className="container">
          <div className="contact-grid">
            <div className={`contact-info fade-in-left ${inView ? 'visible' : ''}`}>
              <h2>Get In Touch</h2>
              <div className="gold-line" />
              <p>
                Whether you're interested in trying our probiotic drinks, exploring vending
                machine partnerships, or just curious about Village Secret — we're here to help.
                Reach out to us through any of the channels below.
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

              <div className="contact-detail">
                <div className="contact-detail-icon"><FiClock /></div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Monday – Saturday: 9:00 AM – 6:00 PM</p>
                </div>
              </div>

              {/* Map embed */}
              <div className="contact-map">
                <iframe
                  title="Village Secret Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.8!2d79.76!3d11.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCuddalore%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: 12, marginTop: 16 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className={`fade-in-right ${inView ? 'visible' : ''}`}>
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <h3>Send Us a Message</h3>

                {status === 'success' && (
                  <div className="form-alert form-alert-success">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="form-alert form-alert-error">
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Your name" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="you@example.com" required value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="How can we help?" required value={formData.subject} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Tell us more about your inquiry..." required value={formData.message} onChange={handleChange} />
                </div>
                <button type="submit" className="btn-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? <><FiLoader className="spin" /> Sending...</> : <><FiSend /> Send Message</>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
