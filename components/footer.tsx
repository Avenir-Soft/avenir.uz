import { Logo } from './logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-cream border-t-2 border-gold">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Content sections */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and company info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-cream/70 text-sm leading-relaxed">
              Building digital futures for ambitious businesses across the world.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-serif font-bold text-cream mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-cream/70 hover:text-gold transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 hover:text-gold transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 hover:text-gold transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 hover:text-gold transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold text-cream mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-cream/70 hover:text-gold transition-colors text-sm">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 hover:text-gold transition-colors text-sm">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 hover:text-gold transition-colors text-sm">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 hover:text-gold transition-colors text-sm">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-cream mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@avenir.uz"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  hello@avenir.uz
                </a>
              </li>
              <li>
                <a
                  href="tel:+998712345678"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  +998 71 234 5678
                </a>
              </li>
              <li className="text-cream/70 text-sm">
                Tashkent, Uzbekistan
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gold/20 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-cream/60 text-sm">
            © {currentYear} Avenir.uz · All rights reserved
          </p>

          {/* Legal links */}
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="#" className="text-cream/60 hover:text-gold transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-cream/60 hover:text-gold transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
