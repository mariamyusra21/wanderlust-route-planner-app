
import { Link } from 'react-router-dom';
import { Map, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-travel-secondary text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Intro */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Map className="h-6 w-6 text-travel-primary" />
              <span className="font-bold text-xl">Wanderlust</span>
            </div>
            <p className="text-gray-300 mb-4">
              Discover amazing destinations around the world. Plan your next adventure with confidence.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-300 hover:text-travel-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-travel-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-travel-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-travel-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-300 hover:text-travel-primary transition-colors">
                  Travel Guides
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-travel-primary transition-colors">
                  City Reviews
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-travel-primary transition-colors">
                  Travel Articles
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-travel-primary transition-colors">
                  Destination Tips
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-travel-primary transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-300 hover:text-travel-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-travel-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-travel-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-travel-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-travel-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Join Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for travel tips and exclusive deals
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l-md text-travel-secondary flex-1 focus:outline-none" 
              />
              <button 
                type="submit" 
                className="bg-travel-primary hover:bg-travel-primary/90 text-white px-4 py-2 rounded-r-md"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Wanderlust. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-travel-primary transition-colors">
              Privacy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-travel-primary transition-colors">
              Terms
            </Link>
            <Link to="#" className="text-gray-400 hover:text-travel-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
