import { Logo } from './logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="" style={{ backgroundColor: '#042147', color: '#F5F4F0', borderTop: '2px solid #C9A84C' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Content sections */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and company info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(245, 244, 240, 0.7)' }}>
              Building digital futures for ambitious businesses across the world.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-serif font-bold mb-6" style={{ color: '#F5F4F0' }}>Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm transition-colors" style={{ color: 'rgba(245, 244, 240, 0.7)' }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors" style={{ color: 'rgba(245, 244, 240, 0.7)' }}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors" style={{ color: 'rgba(245, 244, 240, 0.7)' }}>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors" style={{ color: 'rgba(245, 244, 240, 0.7)' }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold mb-6" style={{ color: '#F5F4F0' }}>Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm transition-colors" style={{ color: 'rgba(245, 244, 240, 0.7)' }}>
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors" style={{ color: 'rgba(245, 244, 240, 0.7)' }}>
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors" style={{ color: 'rgba(245, 244, 240, 0.7)' }}>
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors" style={{ color: 'rgba(245, 244, 240, 0.7)' }}>
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold mb-6" style={{ color: '#F5F4F0' }}>Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@avenir.uz"
                  className="text-sm transition-colors"
                  style={{ color: 'rgba(245, 244, 240, 0.7)' }}
                >
                  hello@avenir.uz
                </a>
              </li>
              <li>
                <a
                  href="tel:+998712345678"
                  className="text-sm transition-colors"
                  style={{ color: 'rgba(245, 244, 240, 0.7)' }}
                >
                  +998 71 234 5678
                </a>
              </li>
              <li className="text-sm" style={{ color: 'rgba(245, 244, 240, 0.7)' }}>
                Tashkent, Uzbekistan
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ backgroundColor: 'rgba(201, 168, 76, 0.2)' }} />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm" style={{ color: 'rgba(245, 244, 240, 0.6)' }}>
            © {currentYear} Avenir.uz · All rights reserved
          </p>

          {/* Legal links */}
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="#" className="text-sm transition-colors" style={{ color: 'rgba(245, 244, 240, 0.6)' }}>
              Privacy Policy
            </a>
            <a href="#" className="text-sm transition-colors" style={{ color: 'rgba(245, 244, 240, 0.6)' }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
