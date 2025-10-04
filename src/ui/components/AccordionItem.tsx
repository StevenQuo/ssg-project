"use client"

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
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


export default AccordionItem