import Link from 'next/link';

export default function ContactPage() {
  return (
    <section className="
        py-24 md:py-36 
        bg-white dark:bg-black 
        transition-colors duration-700 ease-in-out
    ">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        <div className="
            grid grid-cols-1 lg:grid-cols-12 
            gap-12 lg:gap-20
        ">
          
          {/* === KOLOM KIRI: INFORMASI KONTAK & HEADLINE === */}
          <div className="lg:col-span-5">
            <h2 className="
                text-4xl sm:text-5xl 
                font-bold 
                text-black dark:text-white 
                mb-6 
                transition-colors duration-700
            ">
              Reach Our <span className="text-gray-500 dark:text-gray-400">Experts</span>.
            </h2>
            
            <p className="
                text-lg md:text-xl 
                text-gray-600 dark:text-gray-400 
                font-light mb-10 
                transition-colors duration-700
            ">
              Whether you need technical support, sales advice, or partnership details, our team is ready to assist.
            </p>
            
            {/* Detail Kontak */}
            <div className="space-y-6 pt-4">
              <div className="border-l-4 border-black dark:border-white pl-4">
                <h4 className="text-lg font-medium text-black dark:text-white">Email Support</h4>
                <Link href="mailto:ecome@kukejepit.my.id" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300">
                  ecome@kukejepit.my.id
                </Link>
              </div>
              
              <div className="border-l-4 border-black dark:border-white pl-4">
                <h4 className="text-lg font-medium text-black dark:text-white">Phone Inquiries</h4>
                <Link href="tel:+628123456789" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300">
                  +62 812-3456-789
                </Link>
              </div>

              <div className="border-l-4 border-black dark:border-white pl-4">
                <h4 className="text-lg font-medium text-black dark:text-white">Physical Location</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Nusa Kambangan Street, Denpasar, Bali.
                </p>
              </div>
            </div>
          </div>
          
          {/* === KOLOM KANAN: FORMULIR KONTAK === */}
          <div className="lg:col-span-7 p-8 md:p-12 
              bg-gray-50 dark:bg-neutral-900 
              rounded-xl shadow-xl 
              border border-gray-100 dark:border-neutral-800
              transition-colors duration-700
          ">
            <form className="space-y-6">
              
              {/* Nama */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black dark:text-white mb-2">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-neutral-700 rounded-lg 
                             bg-white dark:bg-black text-black dark:text-white 
                             focus:ring-2 focus:ring-black dark:focus:ring-white 
                             transition duration-300"
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-neutral-700 rounded-lg 
                             bg-white dark:bg-black text-black dark:text-white 
                             focus:ring-2 focus:ring-black dark:focus:ring-white 
                             transition duration-300"
                  placeholder="name@example.com"
                />
              </div>

              {/* Pesan */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black dark:text-white mb-2">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-neutral-700 rounded-lg 
                             bg-white dark:bg-black text-black dark:text-white 
                             focus:ring-2 focus:ring-black dark:focus:ring-white 
                             transition duration-300"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Tombol Submit */}
              <button 
                type="submit" 
                className="
                  w-full px-6 py-3 
                  text-lg font-medium 
                  bg-black text-white 
                  rounded-lg 
                  border border-black 
                  hover:bg-gray-800
                  dark:bg-white dark:text-black 
                  dark:border-white dark:hover:bg-gray-200
                  transition-all duration-300
                "
              >
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}