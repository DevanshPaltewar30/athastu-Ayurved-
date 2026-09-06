import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    text: 'I struggled with diabetes for years, but the Ayurvedic management plan here completely changed my life. My sugar levels are stable, and I feel energetic again.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rahul Verma',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    text: 'The Panchakarma treatment was a deeply rejuvenating experience. It cleared my mind, relieved my stress, and detoxified my body completely. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anita Desai',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    text: 'My joint pain was unbearable before I visited तथास्तु. The personalized therapies and herbal medicines provided tremendous relief. I can walk comfortably now.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Karan Singh',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    text: 'Excellent approach to weight management. It wasn\'t just about dieting; it was about metabolic correction. I lost 10 kgs naturally and feel much healthier.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Parag',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    text: 'I have been suffering from an allergic cough, sneezing and acidity for many years. This time in Vasant Ritu, I consulted Dr Rupali Uttarwar madam, she advised me of Vaman panchkarma. Under the guidance of madam and in a very helpful and hygienic environment, I have completed my Vaman Panchkarma.  Now I have complete relief from allergies ,sneezing and acidity also. Thank you Dr Rupali and Tathastu Ayurved team for this beautiful detox treatment',
    rating: 5,
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-background-alt relative overflow-hidden">
      {/* Decorative leaf shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[100px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-tr-[100px] -z-0"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-dark font-semibold tracking-wider uppercase text-sm"
          >
            Patient Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary-dark mt-4 mb-6"
          >
            Words of Healing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-light text-lg leading-relaxed"
          >
            Discover how our authentic Ayurvedic treatments have transformed the lives of our patients.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          
          {/* Carousel */}
          <div className="relative h-[400px] md:h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-8"
              >
                <div className="absolute top-6 left-6 text-primary/10">
                  <FaQuoteLeft size={80} />
                </div>
                
                <div className="md:w-1/3 flex flex-col items-center text-center z-10">
                  <h4 className="text-xl font-bold text-primary-dark">{testimonials[currentIndex].name}</h4>
                  <div className="flex gap-1 text-accent mt-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>

                <div className="md:w-2/3 z-10 text-center md:text-left">
                  <p className="text-lg md:text-xl text-text leading-relaxed font-medium italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white text-primary border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-md"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white text-primary border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-md"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? 'bg-primary w-6' : 'bg-primary/20'}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
