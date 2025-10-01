import Link from 'next/link';
import { Star } from 'lucide-react';
import testimonialsData from '@/data/testimonials.json'; 

const ReviewListItem = ({ quote, name, title, rating }: { quote: string; name: string; title: string; rating: number }) => (
  <div 
    className="
      py-8 md:py-16
      transition-colors duration-500
    "
  >
    <div className="flex flex-col md:flex-row md:items-start justify-between">
      
      {/* Kolom Kiri: Rating & Quote (Fokus Utama) */}
      <div className="md:w-3/4 mb-6 md:mb-0">
        
        {/* Quote Body: Lebih besar dan kontras */}
        <p className="
          text-md
          text-black dark:text-white 
          font-light italic 
          leading-snug
        ">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      {/* Kolom Kanan: Customer Info (Detail) */}
      <div className="md:w-1/4 md:text-right">
        {/* Rating Stars: Dipindahkan ke bagian Detail */}
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

export default function ReviewsDetail() {
  
  const totalReviews = testimonialsData.length;

  return (
    <main className=" py-13
        bg-white dark:bg-black 
        transition-colors duration-700 ease-in-out
    ">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        {/* === HEADLINE HALAMAN DETAIL === */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="
              text-lg 
              font-light tracking-widest 
              text-gray-600 dark:text-gray-400 
              uppercase mb-3
          ">
            COMMUNITY VOICE
          </p>
          <h1 className="
              text-6xl sm:text-7xl 
              font-extrabold 
              text-black dark:text-white 
              leading-none
          ">
            Verified Insights.
          </h1>
        </div>
        
        {/* === LIST REVIEWS CONTAINER === */}
        <div className="
            divide-y divide-gray-100 dark:divide-neutral-800 
            border-y border-gray-100 dark:border-neutral-800 
        ">
          
          {testimonialsData.map((review, index) => (
            <ReviewListItem 
              key={review.name || index} 
              {...review} 
            />
          ))}
        </div>
        
        {/* CTA Kembali ke Home (opsional) */}
        <div className="text-center mt-20">
          <Link href="/" className="
              text-lg font-medium 
              border-b border-black dark:border-white 
              text-black dark:text-white
              hover:text-gray-600 dark:hover:text-gray-400
              transition-colors duration-300
          ">
            &larr; Back to Store Home
          </Link>
        </div>

      </div>
    </main>
  );
}