
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface DestinationProps {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  price?: string;
  className?: string;
}

const DestinationCard = ({
  id,
  name,
  location,
  image,
  rating,
  price,
  className,
}: DestinationProps) => {
  const [isSaved, setIsSaved] = useState(false);
  
  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  return (
    <Link 
      to={`/destination/${id}`} 
      className={cn(
        "block overflow-hidden rounded-xl hover-card bg-card", 
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full"
          onClick={toggleSave}
        >
          <Bookmark 
            className={cn(
              "h-5 w-5", 
              isSaved ? "fill-travel-primary text-travel-primary" : "text-travel-dark"
            )}
          />
        </Button>
        {price && (
          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
            From {price}
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg text-travel-secondary">{name}</h3>
            <div className="flex items-center text-muted-foreground mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
          <div className="flex items-center bg-travel-primary/10 text-travel-primary px-2 py-1 rounded-md">
            <Star className="h-4 w-4 fill-travel-primary mr-1" />
            <span className="font-medium text-sm">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
