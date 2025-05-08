
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import DestinationAutocomplete from './DestinationAutocomplete';
import DatePicker from './DatePicker';

interface SearchBarProps {
  onSearch?: (destination: string, dates: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);

    try {
      console.log('Searching for:', { destination, dates });
      
      // Call the onSearch prop if provided
      if (onSearch) {
        onSearch(destination, dates);
      }
      
      toast.success('Search started', {
        description: `Searching for ${destination} on ${dates || 'any dates'}`,
      });
    } catch (error) {
      console.error('Search error:', error);
      toast.error('Search failed', {
        description: 'Unable to process your search. Please try again.',
      });
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="w-full max-w-4xl bg-white p-3 rounded-xl shadow-lg flex flex-col md:flex-row gap-3"
    >
      <div className="relative flex-1">
        <DestinationAutocomplete 
          value={destination}
          onChange={setDestination}
          placeholder="Where to?"
        />
      </div>
      
      <div className="relative flex-1">
        <DatePicker
          value={dates}
          onChange={setDates}
          placeholder="When? (e.g., Jun 2-10)"
        />
      </div>
      
      <Button 
        type="submit" 
        className="h-12 px-6"
        disabled={isSearching}
      >
        <Search className="mr-2 h-4 w-4" />
        {isSearching ? 'Searching...' : 'Search'}
      </Button>
    </form>
  );
};

export default SearchBar;
