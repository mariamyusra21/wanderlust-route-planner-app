
import { apiGet } from "@/lib/api-client";

// Types for the destinations data
export type DestinationData = {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  rating: number;
  price?: string;
};

// For demo purposes, we'll use a mock API endpoint - in a real app, you'd use an actual API URL
const BASE_URL = "https://api.example.com/travel";

/**
 * Fetches popular destinations from the API
 */
export async function getPopularDestinations(): Promise<DestinationData[]> {
  try {
    // In a real implementation, this would make the actual API call
    // For demonstration, we'll simulate an API response
    
    // Uncomment this to use an actual API when ready
    // return await apiGet<DestinationData[]>(`${BASE_URL}/destinations/popular`);
    
    // Simulated API response
    return [
      {
        id: "1",
        name: "Bali",
        country: "Indonesia",
        description: "Tropical paradise with beautiful beaches and rich culture",
        imageUrl: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        price: "$450"
      },
      {
        id: "2",
        name: "Santorini",
        country: "Greece",
        description: "Stunning island with white-washed buildings and blue domes",
        imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        price: "$650"
      },
      {
        id: "3",
        name: "Paris",
        country: "France",
        description: "The city of love, famous for its culture and landmarks",
        imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        price: "$550"
      }
    ];
  } catch (error) {
    console.error("Failed to fetch popular destinations:", error);
    return [];
  }
}

/**
 * Searches for destinations based on a query
 */
export async function searchDestinations(query: string): Promise<DestinationData[]> {
  try {
    // In a real implementation, this would pass the query to an actual API
    // For demonstration, we'll filter our simulated data
    
    // Uncomment this to use an actual API when ready
    // return await apiGet<DestinationData[]>(`${BASE_URL}/destinations/search`, {
    //   params: { query }
    // });
    
    const allDestinations = await getPopularDestinations();
    
    // Simple filtering based on name or country containing the query
    return allDestinations.filter(
      destination => 
        destination.name.toLowerCase().includes(query.toLowerCase()) ||
        destination.country.toLowerCase().includes(query.toLowerCase())
    );
  } catch (error) {
    console.error("Failed to search destinations:", error);
    return [];
  }
}
