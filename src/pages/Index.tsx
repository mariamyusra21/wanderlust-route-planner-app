
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PopularDestinations from '@/components/PopularDestinations';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Star, Compass, BookmarkCheck } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Features Section */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-travel-secondary mb-12">
              Plan Your Dream Vacation Effortlessly
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover-card">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-travel-primary/10 text-travel-primary mb-4">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Discover</h3>
                <p className="text-muted-foreground">
                  Explore top destinations and hidden gems around the world
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover-card">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-travel-primary/10 text-travel-primary mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Attractions</h3>
                <p className="text-muted-foreground">
                  Find the best places to visit and things to do in each location
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover-card">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-travel-primary/10 text-travel-primary mb-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Itineraries</h3>
                <p className="text-muted-foreground">
                  Build custom travel plans and organize your perfect trip
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover-card">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-travel-primary/10 text-travel-primary mb-4">
                  <BookmarkCheck className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Save & Share</h3>
                <p className="text-muted-foreground">
                  Bookmark favorite places and share your travel plans with friends
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <PopularDestinations />
        
        {/* CTA Section */}
        <section className="py-20 px-4 bg-travel-primary text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Next Adventure?</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Start planning your dream vacation today with our powerful travel tools and personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="secondary" size="lg">
                Browse Destinations
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white hover:bg-white/20 text-white">
                Create an Account
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-travel-secondary mb-12">
              What Travelers Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-muted p-6 rounded-xl">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-travel-accent fill-travel-accent" />
                    ))}
                  </div>
                  <p className="text-travel-secondary mb-4">
                    "Wanderlust made planning my trip so easy. The recommendations were spot-on and I discovered places I never would have found otherwise!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-travel-primary/20 mr-3" />
                    <div>
                      <h4 className="font-medium">Sarah Johnson</h4>
                      <p className="text-sm text-muted-foreground">Tokyo Trip • June 2024</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
