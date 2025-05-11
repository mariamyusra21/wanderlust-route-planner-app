
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useDestinations } from "@/hooks/useDestinations";
import DestinationCard from "@/components/DestinationCard";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import PopularDestinations from "@/components/PopularDestinations";

const Destinations = () => {
  const { destinations, isLoading, error, searchDestinations } = useDestinations();
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchDestinations(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4 text-travel-secondary">Discover Amazing Destinations</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collection of breathtaking destinations around the world
            </p>
            
            <div className="relative max-w-md mx-auto mt-8">
              <Input 
                onChange={handleSearch} 
                className="pl-10 py-6" 
                placeholder="Search destinations..." 
              />
              <Search className="absolute left-3 top-3 text-muted-foreground" />
            </div>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-travel-primary"></div>
            </div>
          ) : error ? (
            <div className="py-12 text-center text-red-500">{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  id={destination.id}
                  name={destination.name}
                  location={destination.country}
                  image={destination.imageUrl}
                  rating={destination.rating}
                  price={destination.price}
                />
              ))}
            </div>
          )}
          
          {/* Add Popular Destinations Section */}
          <div className="mt-16">
            <PopularDestinations />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Destinations;
