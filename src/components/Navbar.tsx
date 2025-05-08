
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Map, User, Search, BookmarkCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Map className="h-6 w-6 text-travel-primary" />
          <span className="font-bold text-xl text-travel-secondary">Wanderlust</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-travel-secondary hover:text-travel-primary transition-colors">Home</Link>
          <Link to="#destinations" className="text-travel-secondary hover:text-travel-primary transition-colors">Destinations</Link>
          <Link to="/itineraries" className="text-travel-secondary hover:text-travel-primary transition-colors">Itineraries</Link>
          <Link to="/about" className="text-travel-secondary hover:text-travel-primary transition-colors">About</Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <BookmarkCheck className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button>Plan a Trip</Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="px-4 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="#destinations" 
              className="px-4 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link 
              to="/itineraries" 
              className="px-4 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Itineraries
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <hr />
            <div className="flex justify-between">
              <Button variant="outline" className="w-full mr-2">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button className="w-full ml-2">
                Plan a Trip
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
