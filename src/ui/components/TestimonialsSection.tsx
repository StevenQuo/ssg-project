import { Star } from 'lucide-react';
import Link from 'next/link';
import testimonialsData from '@/data/testimonials.json';

const TestimonialsSection = () => {
  const featuredTestimonials = testimonialsData.slice(0, 3);
  return (
    <section className="
        py-20 md:py-28 lg:py-36 
        bg-white dark:bg-black
        transition-colors duration-700 ease-in-out
    ">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* === HEADLINE SECTION === */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="
              text-lg 
              font-light tracking-widest 
              text-black dark:text-white 
              uppercase mb-2
          ">
            AUTHENTIC FEEDBACK
          </p>
          <h2 className="
              text-4xl sm:text-5xl 
              font-bold 
              text-black dark:text-white
          ">
            What Our Customers Say.
          </h2>
        </div>

        {/* === TESTIMONIALS GRID === */}
        <div className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            gap-8 lg:gap-12
        ">
          {featuredTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="
                p-8 
                border border-gray-200 dark:border-neutral-800 
                bg-gray-50 dark:bg-neutral-900 
                rounded-xl shadow-lg 
                flex flex-col 
                transition-all duration-500 hover:shadow-2xl
              "
            >
              
              {/* Rating Stars */}
              <div className="flex mb-4 text-yellow-500">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500" />
                ))}
              </div>

              {/* Quote Body */}
              <p className="
                text-xl 
                text-black dark:text-white 
                font-light italic 
                mb-6 flex-grow
              ">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              {/* Customer Info */}
              <div>
                <p className="text-lg font-medium text-black dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA ke Halaman Ulasan Penuh */}
        <div className="text-center mt-16">
          <Link href="/reviews" className="
              text-lg font-medium 
              border-b border-black dark:border-white 
              text-black dark:text-white
              hover:text-gray-600 dark:hover:text-gray-400
              transition-colors duration-300
          ">
            Read All Reviews &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;