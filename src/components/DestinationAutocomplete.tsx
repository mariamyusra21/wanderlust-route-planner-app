
import { useState, useEffect } from 'react';
import { Command, CommandInput, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { MapPin, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useDestinations } from '@/hooks/useDestinations';

interface DestinationAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const DestinationAutocomplete = ({ 
  value, 
  onChange, 
  placeholder = "Where to?" 
}: DestinationAutocompleteProps) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { destinations, searchDestinations } = useDestinations();

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      searchDestinations(searchQuery);
    }
  }, [searchQuery, searchDestinations]);

  const handleSelect = (currentValue: string) => {
    onChange(currentValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          role="combobox" 
          aria-expanded={open}
          className="w-full justify-between h-12 bg-background"
        >
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
            <span className={cn(value ? "" : "text-muted-foreground")}>
              {value || placeholder}
            </span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" align="start">
        <Command>
          <CommandInput 
            placeholder="Search destinations..." 
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandEmpty>No destinations found.</CommandEmpty>
          <CommandGroup className="max-h-64 overflow-auto">
            {destinations.map((destination) => (
              <CommandItem
                key={destination.id}
                value={`${destination.name}, ${destination.country}`}
                onSelect={handleSelect}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === `${destination.name}, ${destination.country}` ? "opacity-100" : "opacity-0"
                  )}
                />
                {destination.name}, {destination.country}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default DestinationAutocomplete;
