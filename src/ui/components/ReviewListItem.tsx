import { Star } from 'lucide-react';

interface ReviewListItemProps {
    quote: string; 
    name: string; 
    title: string; 
    rating: number; 
}

const ReviewListItem = ({ quote, name, title, rating }: ReviewListItemProps) => (
  <div 
    className="
      py-8 md:py-16
      transition-colors duration-500
    "
  >
    <div className="flex flex-col md:flex-row md:items-start justify-between">
      <div className="md:w-3/4 mb-6 md:mb-0">
        <p className="
          text-md
          text-black dark:text-white 
          font-light italic 
          leading-snug
        ">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      <div className="md:w-1/4 md:text-right">
        <div className="flex justify-start md:justify-end mb-3 text-yellow-500">
          {Array(rating).fill(0).map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-yellow-500" />
          ))}
        </div>
        
        <p className="text-lg font-medium text-black dark:text-white mb-1">
          {name}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default ReviewListItem;