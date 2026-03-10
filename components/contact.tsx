'use client'

import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    project: '',
    budget: 'under-5k',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        project: '',
        budget: 'under-5k',
      })
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 px-6" style={{ backgroundColor: '#042147' }}>
      <div className="max-w-7xl mx-auto">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(201, 168, 76, 0.3)' }} />
          <span className="text-2xl" style={{ color: '#C9A84C', opacity: 0.6 }}>◇</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(201, 168, 76, 0.3)' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4" style={{ color: '#C9A84C' }}>
                Start your project
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(245, 244, 240, 0.7)' }}>
                Let's discuss how we can help bring your digital vision to life. Our team is ready to explore your project requirements and create a tailored solution.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6 pt-8" style={{ borderTop: '1px solid rgba(201, 168, 76, 0.2)' }}>
              <div>
                <p className="text-sm uppercase tracking-widest mb-2" style={{ color: 'rgba(201, 168, 76, 0.6)' }}>
                  Email
                </p>
                <a
                  href="mailto:hello@avenir.uz"
                  className="text-lg transition-colors"
                  style={{ color: '#F5F4F0' }}
                >
                  hello@avenir.uz
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest mb-2" style={{ color: 'rgba(201, 168, 76, 0.6)' }}>
                  Phone
                </p>
                <a
                  href="tel:+998712345678"
                  className="text-lg transition-colors"
                  style={{ color: '#F5F4F0' }}
                >
                  +998 71 234 5678
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest mb-2" style={{ color: 'rgba(201, 168, 76, 0.6)' }}>
                  Location
                </p>
                <p style={{ color: '#F5F4F0' }}>Tashkent, Uzbekistan</p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-6 pt-4">
              <a href="#" className="text-lg transition-colors" style={{ color: '#C9A84C' }}>LinkedIn</a>
              <a href="#" className="text-lg transition-colors" style={{ color: '#C9A84C' }}>Twitter</a>
              <a href="#" className="text-lg transition-colors" style={{ color: '#C9A84C' }}>Instagram</a>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="flex items-center justify-center h-full text-center" style={{ backgroundColor: 'rgba(201, 168, 76, 0.1)', borderRadius: '8px', padding: '40px 24px' }}>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-3" style={{ color: '#C9A84C' }}>
                    Thank you! 🎉
                  </h3>
                  <p style={{ color: 'rgba(245, 244, 240, 0.7)' }}>
                    We've received your message and will get back to you shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border transition-colors"
                    style={{
                      borderColor: 'rgba(201, 168, 76, 0.3)',
                      color: '#F5F4F0',
                      borderRadius: '4px',
                    }}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border transition-colors"
                    style={{
                      borderColor: 'rgba(201, 168, 76, 0.3)',
                      color: '#F5F4F0',
                      borderRadius: '4px',
                    }}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company (optional)"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border transition-colors"
                    style={{
                      borderColor: 'rgba(201, 168, 76, 0.3)',
                      color: '#F5F4F0',
                      borderRadius: '4px',
                    }}
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone (optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border transition-colors"
                    style={{
                      borderColor: 'rgba(201, 168, 76, 0.3)',
                      color: '#F5F4F0',
                      borderRadius: '4px',
                    }}
                  />
                </div>

                <div>
                  <textarea
                    name="project"
                    placeholder="Tell us about your project..."
                    value={formData.project}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-transparent border transition-colors resize-none"
                    style={{
                      borderColor: 'rgba(201, 168, 76, 0.3)',
                      color: '#F5F4F0',
                      borderRadius: '4px',
                    }}
                  />
                </div>

                <div>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border transition-colors"
                    style={{
                      borderColor: 'rgba(201, 168, 76, 0.3)',
                      color: '#F5F4F0',
                      borderRadius: '4px',
                    }}
                  >
                    <option value="under-5k" style={{ color: '#042147' }}>Budget: Under 5k</option>
                    <option value="5k-20k" style={{ color: '#042147' }}>Budget: 5k - 20k</option>
                    <option value="20k-50k" style={{ color: '#042147' }}>Budget: 20k - 50k</option>
                    <option value="50k-plus" style={{ color: '#042147' }}>Budget: 50k+</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 font-serif font-bold transition-all duration-200 text-lg"
                  style={{
                    backgroundColor: '#C9A84C',
                    color: '#042147',
                    borderRadius: '4px',
                  }}
                >
                  Send Message
                </button>

                <p className="text-sm text-center" style={{ color: 'rgba(245, 244, 240, 0.5)' }}>
                  We'll respond within 24 hours
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
