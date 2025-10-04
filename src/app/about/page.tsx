import Link from 'next/link';

const AboutPage = () => {
  return (
    <section className="
        py-24 md:py-32 
        bg-gray-50 dark:bg-neutral-900 
        transition-colors duration-700 ease-in-out
    ">
      <div className="
          container mx-auto px-6 md:px-12 
          max-w-7xl
          grid grid-cols-1 lg:grid-cols-12 
          gap-10 lg:gap-16 
      ">
        
        <div className="lg:col-span-4 z-10 text-center lg:text-left">
          <h2 className="
              text-4xl sm:text-5xl 
              font-bold 
              text-black dark:text-white 
              leading-snug
              transition-colors duration-700
          ">
            The Authentic <span className="text-gray-500 dark:text-gray-400">Apple</span> Experience.
          </h2>
        </div>
        
        <div className="lg:col-span-8 z-10">
          <p className="
              text-xl md:text-2xl 
              text-black dark:text-white 
              font-light mb-8 
              transition-colors duration-700
          ">
            We are dedicated to bridging the gap between revolutionary technology and the people who use it. Our vision is to be your most trusted partner in acquiring and understanding the complete Apple ecosystem.
          </p>
          
          <p className="
              text-base md:text-lg 
              text-gray-600 dark:text-gray-400 
              font-normal mb-10 
              transition-colors duration-700
          ">
            More than just a retailer, we are certified experts. From the moment you unbox your device to advanced technical support, we ensure every interaction reflects the premium quality Apple stands for. Choose authenticity, choose expertise.
          </p>
          
          <Link href="/posts" className="
              text-lg font-medium 
              border-b border-black dark:border-white 
              text-black dark:text-white
              hover:text-gray-600 dark:hover:text-gray-400
              transition-colors duration-300
          ">
            Read Our Latest &rarr;
          </Link>

        </div>
        
      </div>
    </section>
  );
};

export default AboutPage;