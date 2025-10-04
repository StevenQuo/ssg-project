import Link from 'next/link';
import ReviewListItem from '@/ui/components/ReviewListItem';
import testimonialsData from '@/data/testimonials.json'; 

export default function ReviewsDetailPage() {
  return (
    <main className=" py-13
        bg-white dark:bg-black 
        transition-colors duration-700 ease-in-out
    ">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        {/* === HEADLINE HALAMAN DETAIL === */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="
              text-md lg:text-lg 
              font-light tracking-widest 
              text-gray-600 dark:text-gray-400 
              uppercase mb-3
          ">
            COMMUNITY VOICE
          </p>
          <h1 className="
              text-4xl lg:text-6xl sm:text-7xl 
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