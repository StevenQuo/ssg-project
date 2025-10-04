import { Star } from 'lucide-react';
import testimonialsData from '@/data/testimonials.json';

const TestimonialCard = () => {
  const testimonialCount = 3;
  const featuredTestimonials = testimonialsData.slice(0, testimonialCount);
  return (
    <>
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
    </>
  )
}

export default TestimonialCard