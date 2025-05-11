
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Map, Clock, Users } from "lucide-react";

const SAMPLE_ITINERARIES = [
  {
    id: 1,
    title: "European Heritage Tour",
    description: "Explore the rich cultural heritage of Europe's most historic cities",
    duration: "14 days",
    destinations: ["Paris", "Rome", "Barcelona", "Vienna"],
    travelers: "2-4",
    season: "Spring/Fall",
    image: "https://images.unsplash.com/photo-1493707553966-283afac8c358?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    title: "Southeast Asian Adventure",
    description: "Immerse yourself in the vibrant cultures and landscapes of Southeast Asia",
    duration: "10 days",
    destinations: ["Bangkok", "Siem Reap", "Hanoi", "Bali"],
    travelers: "1-2",
    season: "Winter",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    title: "American National Parks",
    description: "Experience the breathtaking natural wonders of America's national parks",
    duration: "12 days",
    destinations: ["Yellowstone", "Grand Canyon", "Yosemite", "Zion"],
    travelers: "4-6",
    season: "Summer",
    image: "https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1159&q=80"
  }
];

const ItineraryCard = ({ itinerary }: { itinerary: typeof SAMPLE_ITINERARIES[0] }) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={itinerary.image} 
          alt={itinerary.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{itinerary.title}</CardTitle>
        <CardDescription>{itinerary.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-travel-primary" />
            <span className="text-sm">{itinerary.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Map className="h-4 w-4 text-travel-primary" />
            <span className="text-sm">{itinerary.destinations.join(", ")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-travel-primary" />
            <span className="text-sm">{itinerary.travelers} travelers</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-travel-primary" />
            <span className="text-sm">Best season: {itinerary.season}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Itineraries = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-travel-secondary">Travel Itineraries</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find inspiration with our carefully planned travel itineraries for all kinds of adventures
          </p>
        </div>

        <Tabs defaultValue="featured" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
          </TabsList>
          <TabsContent value="featured" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SAMPLE_ITINERARIES.map(itinerary => (
                <ItineraryCard key={itinerary.id} itinerary={itinerary} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="popular" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SAMPLE_ITINERARIES.slice().reverse().map(itinerary => (
                <ItineraryCard key={itinerary.id} itinerary={itinerary} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="seasonal" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SAMPLE_ITINERARIES.slice(1).map(itinerary => (
                <ItineraryCard key={itinerary.id} itinerary={itinerary} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </>
  );
};

export default Itineraries;
