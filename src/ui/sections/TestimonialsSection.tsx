import Link from 'next/link';
import TestimonialCard from '../components/TestimonialCard';

const TestimonialsSection = () => {
  return (
    <section className="
        py-20 md:py-28 lg:py-36 
        bg-white dark:bg-black
        transition-colors duration-700 ease-in-out
    ">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
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
          <TestimonialCard />
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