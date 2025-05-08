
import { useState, useEffect, useCallback } from "react";
import { getPopularDestinations, searchDestinations as searchDestinationsApi, DestinationData } from "@/services/destinations-service";

export function useDestinations() {
  const [destinations, setDestinations] = useState<DestinationData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Load popular destinations by default
  useEffect(() => {
    const loadPopularDestinations = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getPopularDestinations();
        setDestinations(data);
      } catch (err) {
        setError("Failed to load destinations. Please try again later.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadPopularDestinations();
  }, []);

  // Function to search destinations - wrapped in useCallback to prevent unnecessary re-renders
  const searchDestinations = useCallback(async (query: string) => {
    if (!query.trim()) {
      // If query is empty, load popular destinations
      const data = await getPopularDestinations();
      setDestinations(data);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const results = await searchDestinationsApi(query);
      setDestinations(results);
    } catch (err) {
      setError("Failed to search destinations. Please try again later.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    destinations,
    isLoading,
    error,
    searchDestinations
  };
}
