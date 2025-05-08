
import { useState } from 'react';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const destinations = [
    {
      name: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80',
    },
    {
      name: 'Kyoto, Japan',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=80',
    },
    {
      name: 'Machu Picchu, Peru',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=1920&q=80',
    },
  ];
  
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background Slider */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${destinations[currentSlide].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6">
            Explore stunning destinations, plan perfect itineraries, and create unforgettable memories
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <MapPin className="text-travel-primary h-5 w-5 mr-2" />
            <span className="text-white font-medium text-lg">
              {destinations[currentSlide].name}
            </span>
          </div>
          
          <SearchBar />
          
          <div className="flex gap-4 mt-6 justify-center">
            <Button variant="outline" className="bg-white/20 border-white/50 backdrop-blur-sm text-white hover:bg-white/30">
              Popular Destinations
            </Button>
            <Button className="bg-travel-primary hover:bg-travel-primary/90">
              Start Planning
            </Button>
          </div>
        </motion.div>
        
        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {destinations.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              } transition-all`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
