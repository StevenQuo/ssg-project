"use client"

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import faqData from '@/data/faq.json';

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="
        border-b border-gray-100 dark:border-neutral-800 
        transition-colors duration-300
    ">

      <button
        className="
          flex justify-between items-center 
          w-full py-5 
          text-left 
          text-md md:text-xl 
          font-normal 
          text-black dark:text-white 
          hover:text-gray-700 dark:hover:text-gray-300
          transition-colors duration-300
        "
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {question}
        <ChevronDown 
          className={`
            w-6 h-6 
            transform transition-transform duration-300 
            ${isOpen ? 'rotate-180 text-gray-700 dark:text-gray-300' : 'rotate-0 text-gray-500 dark:text-gray-500'}
          `}
        />
      </button>

      <div 
        className={`
          overflow-hidden transition-all duration-500 ease-in-out 
          ${isOpen ? 'max-h-96 opacity-100 pt-2 pb-6' : 'max-h-0 opacity-0 p-0'}
        `}
      >
        <p className="
          text-base md:text-lg 
          text-gray-600 dark:text-gray-400 
          leading-relaxed 
          pr-10 
        ">
          {answer}
        </p>
      </div>
    </div>
  );
};


const FAQSection = () => {
  return (
    <section className="
        py-24 md:py-36 
        bg-white dark:bg-black 
        transition-colors duration-700 ease-in-out
    ">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl"> {/* Batasan lebar konten untuk keterbacaan */}
        
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