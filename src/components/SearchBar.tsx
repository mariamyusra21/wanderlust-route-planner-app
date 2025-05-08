
import { useState } from 'react';
import { Search, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SearchBar = () => {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', { destination, dates });
    // This would be connected to a search API in a real app
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="w-full max-w-4xl bg-white p-3 rounded-xl shadow-lg flex flex-col md:flex-row gap-3"
    >
      <div className="relative flex-1">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          type="text"
          placeholder="Where to?"
          className="pl-10 h-12"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      
      <div className="relative flex-1">
        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          type="text"
          placeholder="When? (e.g., Jun 2-10)"
          className="pl-10 h-12"
          value={dates}
          onChange={(e) => setDates(e.target.value)}
        />
      </div>
      
      <Button type="submit" className="h-12 px-6">
        <Search className="mr-2 h-4 w-4" />
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
