import imgImage6 from "../../imports/Group1000001751/0f6ccda758c22d920c1be7e42a759636bf81d5fe.png";
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState } from 'react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Tech Company",
      image: imgImage6,
      text: "Naesila's work on our web application was exceptional. Her attention to detail and technical expertise helped us launch on time with a product that exceeded our expectations."
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      image: imgImage6,
      text: "Working with Naesila was a pleasure. She brought creative solutions to complex problems and her data analytics skills helped us make better business decisions."
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      image: imgImage6,
      text: "The UI/UX designs Naesila created were not only beautiful but also highly functional. Our user engagement increased by 40% after the redesign."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-pink-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#fc3314] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-300 opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[36px] sm:text-[48px] font-bold text-[#1f1f1f] mb-4">Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-[14px] sm:text-[16px]">
            What clients and colleagues say about working with me
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 relative">
            <Quote className="w-16 h-16 text-[#fc3314] opacity-20 absolute top-6 left-6" />
            
            <div className="flex flex-col items-center text-center">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full object-cover mb-6 border-4 border-pink-100"
              />
              
              <p className="text-gray-700 text-[15px] sm:text-[18px] leading-relaxed mb-8 max-w-3xl italic">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div>
                <h4 className="text-[18px] sm:text-[20px] font-bold text-[#1f1f1f]">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-[#fc3314] font-semibold text-[14px] sm:text-[16px]">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center hover:bg-[#fc3314] hover:text-white transition-all group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center hover:bg-[#fc3314] hover:text-white transition-all group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-[#fc3314]' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
