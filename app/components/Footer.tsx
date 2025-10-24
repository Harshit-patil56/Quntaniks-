export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Quntaniks<sup className="text-sm">®</sup>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building exceptional digital experiences for ambitious businesses worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Static Website</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Business Website</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">E-Commerce</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Premium Brand</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Custom Web App</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="mailto:contact@quntaniks.com" className="hover:text-white transition-colors">Email</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 Quntaniks. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
