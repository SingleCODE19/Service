import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-sm py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-gray-400 hover:text-white cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-gray-400 hover:text-white cursor-pointer">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-400 hover:text-white cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: +91 988 756 1872</li>
              <li className="break-all">Email: arjunmarblepolishcontractor@gmail.com</li>
              <li>Address: 223A, Vaishnav Vihar, Jaipur</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Working Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Saturday: 9:00 AM - 7:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Arjun Marble Polish. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
