import Link from 'next/link';
import faqData from '@/data/faq.json';
import AccordionItem from '../components/AccordionItem';

const FAQSection = () => {
  return (
    <section className="
        py-24 md:py-36 
        bg-white dark:bg-black 
        transition-colors duration-700 ease-in-out
    ">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        {/* === HEADLINE SECTION === */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="
              text-lg 
              font-light tracking-widest 
              text-gray-600 dark:text-gray-400 
              uppercase mb-3
          ">
            GET ANSWERS
          </p>
          <h2 className="
              text-4xl sm:text-5xl 
              font-bold 
              text-black dark:text-white 
              leading-none
          ">
            Frequently Asked Questions.
          </h2>
        </div>
        
        {/* === ACCORDION LIST === */}
        <div className="
            border-t border-gray-100 dark:border-neutral-800 
        ">
          {faqData.map((item) => (
            <AccordionItem 
              key={item.id} 
              question={item.question} 
              answer={item.answer} 
            />
          ))}
        </div>
        
        {/* === CTA BOTTOM === */}
        <div className="text-center mt-16 pt-8 border-gray-100 dark:border-neutral-800">
          <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
            Didn't find what you were looking for?
          </p>
          <Link href="/contact" className="
              px-8 py-3 
              text-lg font-medium 
              rounded-full 
              bg-black text-white 
              border border-black
              hover:opacity-80
              dark:bg-white dark:text-black 
              dark:border-white
              transition-all duration-300
          ">
            Contact Expert Support
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;