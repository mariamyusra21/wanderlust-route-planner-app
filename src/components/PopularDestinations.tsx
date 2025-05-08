
import { useState } from 'react';
import { motion } from 'framer-motion';
import DestinationCard from './DestinationCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const destinations = [
  {
    id: '1',
    name: 'Bali, Indonesia',
    location: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    price: '$450'
  },
  {
    id: '2',
    name: 'Santorini',
    location: 'Greece',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    price: '$650'
  },
  {
    id: '3',
    name: 'Paris',
    location: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    price: '$550'
  },
  {
    id: '4',
    name: 'Tokyo',
    location: 'Japan',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    price: '$700'
  },
  {
    id: '5',
    name: 'New York',
    location: 'United States',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    price: '$600'
  },
  {
    id: '6',
    name: 'Venice',
    location: 'Italy',
    image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    price: '$500'
  }
];

const PopularDestinations = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const maxScroll = destinations.length * 300 - window.innerWidth;
  
  const scrollLeft = () => {
    const newPosition = Math.max(0, scrollPosition - 600);
    setScrollPosition(newPosition);
  };
  
  const scrollRight = () => {
    const newPosition = Math.min(maxScroll, scrollPosition + 600);
    setScrollPosition(newPosition);
  };

  return (
    <section id="destinations" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-travel-secondary">Popular Destinations</h2>
            <p className="text-muted-foreground mt-2">Discover the world's most breathtaking places</p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollLeft}
              disabled={scrollPosition <= 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollRight}
              disabled={scrollPosition >= maxScroll}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-6"
            initial={{ x: 0 }}
            animate={{ x: -scrollPosition }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: `${destinations.length * 350}px` }}
          >
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                {...destination}
                className="w-[300px] flex-shrink-0"
              />
            ))}
          </motion.div>
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" className="mr-3">View All Destinations</Button>
          <Button>Start Planning</Button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
