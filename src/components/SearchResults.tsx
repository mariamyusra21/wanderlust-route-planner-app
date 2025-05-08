
import { useEffect, useState } from 'react';
import { useDestinations } from '@/hooks/useDestinations';
import DestinationCard from './DestinationCard';
import { Loader2 } from 'lucide-react';

interface SearchResultsProps {
  searchQuery: string;
  searchDates?: string;
}

const SearchResults = ({ searchQuery, searchDates }: SearchResultsProps) => {
  const { destinations, isLoading, error, searchDestinations } = useDestinations();
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      searchDestinations(searchQuery);
      setHasSearched(true);
    }
  }, [searchQuery]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="h-8 w-8 text-travel-primary animate-spin" />
        <span className="ml-2 text-lg">Searching for the best destinations...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-destructive">{error}</p>
      </div>
    );
  }

  if (hasSearched && destinations.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-2">No destinations found</h3>
        <p className="text-muted-foreground">
          Try adjusting your search criteria to find more options.
        </p>
      </div>
    );
  }

  return (
    <div className="py-8">
      {searchQuery && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold">
            Search results for "{searchQuery}"
            {searchDates && <span className="text-lg font-normal text-muted-foreground ml-2">on {searchDates}</span>}
          </h2>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map(destination => (
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
    </div>
  );
}

export default SearchResults;
