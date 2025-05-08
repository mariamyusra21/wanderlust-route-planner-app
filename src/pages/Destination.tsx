
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, 
  Star, 
  Calendar, 
  Image, 
  Mail, 
  Clock, 
  Navigation, 
  Hotel, 
  Compass, 
  Bookmark,
  BookmarkCheck
} from 'lucide-react';

// Sample destinations data
const destinations = {
  "1": {
    id: '1',
    name: 'Bali',
    fullName: 'Bali, Indonesia',
    description: 'Bali is a living postcard, an Indonesian paradise that feels like a fantasy. Soak up the sun on a stretch of fine white sand, or commune with the tropical creatures as you dive along coral ridges or the colorful wreck of a WWII war ship.',
    image: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=1920&q=80',
    rating: 4.8,
    price: '$450',
    duration: '5-7 days recommended',
    bestTime: 'April to October',
    language: 'Indonesian, English',
    currency: 'Indonesian Rupiah (IDR)',
    attractions: [
      {
        name: 'Ubud Monkey Forest',
        image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80',
        rating: 4.6
      },
      {
        name: 'Tanah Lot Temple',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
        rating: 4.8
      },
      {
        name: 'Tegallalang Rice Terraces',
        image: 'https://images.unsplash.com/photo-1531592937781-344ad608fabf?auto=format&fit=crop&w=800&q=80',
        rating: 4.7
      },
      {
        name: 'Uluwatu Temple',
        image: 'https://images.unsplash.com/photo-1588698947572-f2eb5033d24a?auto=format&fit=crop&w=800&q=80',
        rating: 4.5
      }
    ]
  },
  "2": {
    id: '2',
    name: 'Santorini',
    fullName: 'Santorini, Greece',
    description: 'Santorini is one of the most beautiful and romantic islands in the world. The towns of Fira and Oia, with their famous white-washed buildings and blue church domes, are perched on the edge of the steep caldera cliffs.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80',
    rating: 4.9,
    price: '$650',
    duration: '4-6 days recommended',
    bestTime: 'April to October',
    language: 'Greek, English',
    currency: 'Euro (EUR)',
    attractions: [
      {
        name: 'Oia Sunset',
        image: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      },
      {
        name: 'Red Beach',
        image: 'https://images.unsplash.com/photo-1593105522751-992729718d66?auto=format&fit=crop&w=800&q=80',
        rating: 4.7
      },
      {
        name: 'Ancient Thera',
        image: 'https://images.unsplash.com/photo-1602763288580-84af63f3d836?auto=format&fit=crop&w=800&q=80',
        rating: 4.5
      },
      {
        name: 'Akrotiri Archaeological Site',
        image: 'https://images.unsplash.com/photo-1576924440262-167150875aca?auto=format&fit=crop&w=800&q=80',
        rating: 4.6
      }
    ]
  }
}

const Destination = () => {
  const { id } = useParams<{ id: string }>();
  const [destination, setDestination] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // In a real app, this would be an API call
    setTimeout(() => {
      setDestination(destinations[id as keyof typeof destinations] || destinations["1"]);
      setLoading(false);
    }, 500);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-travel-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Destination not found</h1>
        <Link to="/" className="text-travel-primary">Return to home</Link>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[60vh]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${destination.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 hero-gradient" />
          
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12 relative z-10">
            <div className="flex items-center mb-3">
              <MapPin className="text-travel-primary h-5 w-5 mr-2" />
              <span className="text-white/90">{destination.fullName}</span>
            </div>
            
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {destination.name}
                </h1>
                
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < Math.floor(destination.rating) ? 'text-travel-accent fill-travel-accent' : 'text-white/40'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-white ml-2 font-medium">
                    {destination.rating.toFixed(1)}
                  </span>
                  <span className="text-white/70 mx-2">•</span>
                  <span className="text-white/70">
                    Starting from {destination.price}
                  </span>
                </div>
              </div>
              
              <Button
                variant="outline"
                onClick={() => setIsSaved(!isSaved)}
                className="bg-white/10 border-white/50 backdrop-blur-sm text-white hover:bg-white/20"
              >
                {isSaved ? (
                  <>
                    <BookmarkCheck className="mr-2 h-5 w-5" />
                    Saved
                  </>
                ) : (
                  <>
                    <Bookmark className="mr-2 h-5 w-5" />
                    Save
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="attractions">Attractions</TabsTrigger>
              <TabsTrigger value="plan">Plan Your Trip</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-semibold mb-4">About {destination.name}</h2>
                  <p className="text-muted-foreground mb-6">
                    {destination.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-travel-primary/10 text-travel-primary mr-4">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Best Time to Visit</h3>
                        <p className="text-muted-foreground">{destination.bestTime}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-travel-primary/10 text-travel-primary mr-4">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Recommended Duration</h3>
                        <p className="text-muted-foreground">{destination.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-travel-primary/10 text-travel-primary mr-4">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Language</h3>
                        <p className="text-muted-foreground">{destination.language}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-travel-primary/10 text-travel-primary mr-4">
                        <Navigation className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Currency</h3>
                        <p className="text-muted-foreground">{destination.currency}</p>
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-semibold mb-4">Top Attractions</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {destination.attractions.slice(0, 4).map((attraction: any) => (
                      <div 
                        key={attraction.name} 
                        className="border rounded-xl overflow-hidden hover-card"
                      >
                        <div className="aspect-video relative">
                          <img 
                            src={attraction.image} 
                            alt={attraction.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-md text-sm flex items-center">
                            <Star className="h-3 w-3 fill-travel-accent text-travel-accent mr-1" />
                            {attraction.rating.toFixed(1)}
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium">{attraction.name}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                    <h3 className="text-xl font-semibold mb-4">Plan Your Visit</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center p-3 border rounded-md">
                        <Calendar className="h-5 w-5 text-travel-primary mr-3" />
                        <div>
                          <p className="text-sm text-muted-foreground">When</p>
                          <p className="font-medium">Select dates</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 border rounded-md">
                        <Hotel className="h-5 w-5 text-travel-primary mr-3" />
                        <div>
                          <p className="text-sm text-muted-foreground">Accommodation</p>
                          <p className="font-medium">Find hotels</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 border rounded-md">
                        <Compass className="h-5 w-5 text-travel-primary mr-3" />
                        <div>
                          <p className="text-sm text-muted-foreground">Activities</p>
                          <p className="font-medium">Explore options</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full mb-3">
                      Start Planning
                    </Button>
                    
                    <p className="text-center text-sm text-muted-foreground">
                      Free cancellation available
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="attractions">
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-muted-foreground">
                  We're working on adding more detailed attraction information.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="plan">
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-muted-foreground">
                  Detailed trip planning tools will be available soon.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-muted-foreground">
                  Traveler reviews and ratings will be available soon.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Similar Destinations */}
        <section className="py-12 px-4 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Object.values(destinations).map((dest: any) => (
                dest.id !== destination.id && (
                  <Link
                    key={dest.id}
                    to={`/destination/${dest.id}`}
                    className="bg-white rounded-xl overflow-hidden hover-card"
                  >
                    <div className="aspect-[4/3] relative">
                      <img 
                        src={dest.image} 
                        alt={dest.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-md text-sm flex items-center">
                        <Star className="h-3 w-3 fill-travel-accent text-travel-accent mr-1" />
                        {dest.rating.toFixed(1)}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{dest.name}</h3>
                      <p className="text-sm text-muted-foreground">{dest.fullName.split(',')[1]}</p>
                    </div>
                  </Link>
                )
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Destination;
