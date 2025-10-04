import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="
        relative 
        flex items-center 
        min-h-[90vh] 
        bg-white dark:bg-black 
        transition-colors duration-700 ease-in-out
    ">
      <div className="
          container mx-auto px-6 md:px-12 
          grid grid-cols-1 lg:grid-cols-2 
          gap-10 lg:gap-24 
          items-center
      ">
        
        <div className="z-10 text-center lg:text-left">
          
          <p className="
              text-lg 
              text-black dark:text-white 
              font-light tracking-widest 
              mb-4 
              transition-colors duration-700
          ">
            NEW LEVEL OF ELEGANCE
          </p>
          
          <h1 className="
              text-5xl sm:text-6xl lg:text-7xl 
              font-bold 
              text-black dark:text-white 
              leading-none mb-8 
              transition-colors duration-700
          ">
            Designed <span className="text-gray-500 dark:text-gray-400">for</span> Simplicity.
          </h1>
          
          <p className="
              text-lg 
              text-black dark:text-white 
              font-light 
              mb-12 
              max-w-xl lg:max-w-none 
              transition-colors duration-700
          ">
            The power is in the details. Experience intuitive interfaces powered by cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row mb-13 lg:mb-0 justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6">
            
            <Link href="/products" className="
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
              Buy Now
            </Link>
            
            <Link href="/about" className="
                px-8 py-3 
                text-lg font-medium 
                rounded-full 
                bg-transparent 
                border border-black dark:border-white
                text-black dark:text-white
                hover:bg-black hover:text-white
                dark:hover:bg-white dark:hover:text-black
                transition-all duration-300
            ">
              Explore More
            </Link>
          </div>
        </div>
        
        <div className="z-10 order-first lg:order-last flex justify-center lg:justify-end">
          <div className="
              relative 
              w-full max-w-md 
              h-80 sm:h-[450px] lg:h-[600px]
          ">
            <Image
              src="/images/macbook-light.png"
              alt="Macbook"
              fill
              priority
              className="object-contain dark:hidden"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <Image
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=820&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Macbook"
              fill
              priority
              className="object-contain hidden dark:block"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;