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
    <section id="contact" className="bg-navy py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px bg-gold/30" />
          <span className="text-gold text-2xl opacity-60">◇</span>
          <div className="flex-1 h-px bg-gold/30" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-gold mb-4">
                Start your project
              </h2>
              <p className="text-cream/70 text-lg leading-relaxed">
                Let's discuss how we can help bring your digital vision to life. Our team is ready to explore your project requirements and create a tailored solution.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6 pt-8 border-t border-gold/20">
              <div>
                <p className="text-gold/60 text-sm uppercase tracking-widest mb-2">
                  Email
                </p>
                <a
                  href="mailto:hello@avenir.uz"
                  className="text-cream hover:text-gold transition-colors text-lg"
                >
                  hello@avenir.uz
                </a>
              </div>

              <div>
                <p className="text-gold/60 text-sm uppercase tracking-widest mb-2">
                  Phone
                </p>
                <a
                  href="tel:+998712345678"
                  className="text-cream hover:text-gold transition-colors text-lg"
                >
                  +998 71 234 5678
                </a>
              </div>

              <div>
                <p className="text-gold/60 text-sm uppercase tracking-widest mb-2">
                  Location
                </p>
                <p className="text-cream">Tashkent, Uzbekistan</p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-6 pt-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center text-cream hover:text-gold hover:bg-gold/10 rounded-full transition-all duration-200"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center text-cream hover:text-gold hover:bg-gold/10 rounded-full transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.435-.103.25-.129.599-.129.948v5.422h-3.554s.047-8.733 0-9.646h3.554v1.364c.43-.664 1.189-1.609 2.894-1.609 2.113 0 3.695 1.38 3.695 4.346v5.545zM5.337 9.432c-1.144 0-1.915-.758-1.915-1.706 0-.968.77-1.707 1.968-1.707 1.197 0 1.916.738 1.94 1.707 0 .948-.743 1.706-1.993 1.706zm1.582 11.02H3.755V9.806h3.164v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>

            {/* Trust elements */}
            <div className="pt-8 border-t border-gold/20 space-y-2">
              <p className="text-cream/70 text-sm">
                ✓ Response within 24h
              </p>
              <p className="text-cream/70 text-sm">
                ✓ NDA available
              </p>
              <p className="text-cream/70 text-sm">
                ✓ Free consultation
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="bg-gold/10 border border-gold/30 p-12 rounded-lg text-center space-y-4">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-serif font-bold text-cream">
                  Thank you!
                </h3>
                <p className="text-cream/70">
                  We'll be in touch within 24 hours to discuss your project details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-cream text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-navy/50 border border-gold/30 text-cream placeholder-cream/40 px-4 py-3 focus:border-gold focus:outline-none transition-colors duration-200"
                    placeholder="Amir Karimov"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-cream text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-navy/50 border border-gold/30 text-cream placeholder-cream/40 px-4 py-3 focus:border-gold focus:outline-none transition-colors duration-200"
                    placeholder="Your Company"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-cream text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-navy/50 border border-gold/30 text-cream placeholder-cream/40 px-4 py-3 focus:border-gold focus:outline-none transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-cream text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-navy/50 border border-gold/30 text-cream placeholder-cream/40 px-4 py-3 focus:border-gold focus:outline-none transition-colors duration-200"
                    placeholder="+998 71 234 5678"
                  />
                </div>

                {/* Project description */}
                <div>
                  <label className="block text-cream text-sm font-medium mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-navy/50 border border-gold/30 text-cream placeholder-cream/40 px-4 py-3 focus:border-gold focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Describe your project, goals, and timeline..."
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-cream text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-navy/50 border border-gold/30 text-cream px-4 py-3 focus:border-gold focus:outline-none transition-colors duration-200"
                  >
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-20k">$5,000 - $20,000</option>
                    <option value="20k-plus">$20,000+</option>
                    <option value="custom">Let's discuss</option>
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-gold text-navy font-serif font-bold py-3 hover:bg-gold-light transition-colors duration-200 tracking-wide text-lg"
                >
                  Send Request →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
