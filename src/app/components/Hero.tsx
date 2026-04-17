import imgMyPhoto from "../../imports/Group1000001751/aa33e3fcd9478f780821a66adaf260864fd0b6e7.png";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-pink-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-[10%] w-[200px] h-[200px] rounded-full bg-[#fc3314] opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-[10%] w-[150px] h-[150px] rounded-full bg-pink-300 opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <p className="font-normal text-[16px] sm:text-[20px] text-[#1f1f1f]">
              Information Systems Student | Digital & Data Enthusiast
            </p>
            
            <div className="space-y-2">
              <h1 className="font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-tight">
                Hi I'm
              </h1>
              <h2 className="font-bold text-[36px] sm:text-[48px] lg:text-[56px] text-[#fc3314] leading-tight">
                Naesila Islamia
              </h2>
            </div>
            
            <p className="font-normal text-[14px] sm:text-[16px] text-gray-700 max-w-xl">
              Welcome to my portfolio. Here, you can explore my projects, experiences, and how I contribute to creating structured and meaningful digital solutions.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-5 pt-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#1f1f1f] text-white font-bold px-8 sm:px-14 py-3 hover:bg-[#fc3314] transition-all hover:scale-105 text-[14px] sm:text-[16px]"
              >
                Hire Me
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-white text-[#1f1f1f] font-bold px-7 sm:px-9 py-3 border border-[#1f1f1f] hover:bg-[#1f1f1f] hover:text-white transition-all hover:scale-105 text-[14px] sm:text-[16px]"
              >
                Portfolio
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 bg-[#1f1f1f] rounded-full flex items-center justify-center hover:bg-[#fc3314] transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 10.4255C22.4484 10.6598 21.8481 10.8284 21.2298 10.8941C21.8717 10.5185 22.3525 9.92521 22.5818 9.22545C21.9794 9.57833 21.3195 9.82578 20.6313 9.95681C20.3437 9.65402 19.9958 9.4128 19.6094 9.24819C19.2229 9.08357 18.8062 8.99909 18.3852 9.00001C16.6816 9.00001 15.3116 10.3598 15.3116 12.0284C15.3116 12.2627 15.3405 12.497 15.3873 12.7225C12.8366 12.5911 10.5616 11.3911 9.04915 9.55385C8.77357 10.0174 8.62916 10.5451 8.63093 11.0823C8.63093 12.1331 9.17354 13.0598 10.001 13.6047C9.51335 13.5858 9.03715 13.4538 8.6111 13.2195V13.2568C8.6111 14.7284 9.66747 15.9479 11.0754 16.2284C10.811 16.296 10.5391 16.3306 10.266 16.3314C10.0659 16.3314 9.87658 16.3118 9.68549 16.2852C10.0749 17.4852 11.2087 18.3568 12.5589 18.3852C11.5026 19.2 10.1794 19.6793 8.7427 19.6793C8.48492 19.6793 8.24697 19.6704 8 19.642C9.36282 20.503 10.9798 21 12.7212 21C18.3744 21 21.4677 16.3882 21.4677 12.3852C21.4677 12.2539 21.4677 12.1225 21.4587 11.9911C22.0572 11.5598 22.5818 11.0254 23 10.4255Z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#1f1f1f] rounded-full flex items-center justify-center hover:bg-[#fc3314] transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.6662 3.19936C14.7772 3.19936 15.1661 3.19936 16.4299 3.29657C19.6381 3.39379 21.0964 4.94929 21.1936 8.06028C21.2909 9.32412 21.2909 9.61578 21.2909 12.7268C21.2909 15.8378 21.2909 16.2266 21.1936 17.3933C21.0964 20.5043 19.5409 22.0598 16.4299 22.157C15.1661 22.2542 14.8744 22.2542 11.6662 22.2542C8.55523 22.2542 8.16636 22.2542 6.99974 22.157C3.79152 22.0598 2.33325 20.5043 2.23603 17.3933C2.13881 16.1294 2.13881 15.8378 2.13881 12.7268C2.13881 9.61578 2.13881 9.22691 2.23603 8.06028C2.33325 4.94929 3.88874 3.39379 6.99974 3.29657C8.16636 3.19936 8.55523 3.19936 11.6662 3.19936ZM11.6662 1.06055C8.45801 1.06055 8.06914 1.06055 6.90252 1.15777C2.6249 1.3522 0.291656 3.68545 0.0972186 7.96306C0 9.12969 0 9.51856 0 12.7268C0 15.935 0 16.3239 0.0972186 17.4905C0.291656 21.7681 2.6249 24.1013 6.90252 24.2958C8.06914 24.393 8.45801 24.393 11.6662 24.393C14.8744 24.393 15.2633 24.393 16.4299 24.2958C20.7076 24.1013 23.0408 21.7681 23.2352 17.4905C23.3325 16.3239 23.3325 15.935 23.3325 12.7268C23.3325 9.51856 23.3325 9.12969 23.2352 7.96306C23.0408 3.68545 20.7076 1.3522 16.4299 1.15777C15.2633 1.06055 14.8744 1.06055 11.6662 1.06055ZM11.6662 6.69922C8.3608 6.69922 5.63868 9.42134 5.63868 12.7268C5.63868 16.0322 8.3608 18.7543 11.6662 18.7543C14.9717 18.7543 17.6938 16.0322 17.6938 12.7268C17.6938 9.42134 14.9717 6.69922 11.6662 6.69922ZM11.6662 16.6155C9.52742 16.6155 7.77748 14.8656 7.77748 12.7268C7.77748 10.588 9.52742 8.83803 11.6662 8.83803C13.805 8.83803 15.555 10.588 15.555 12.7268C15.555 14.8656 13.805 16.6155 11.6662 16.6155ZM17.8882 5.14373C17.1105 5.14373 16.5272 5.72704 16.5272 6.50479C16.5272 7.28253 17.1105 7.86585 17.8882 7.86585C18.666 7.86585 19.2493 7.28253 19.2493 6.50479C19.2493 5.72704 18.666 5.14373 17.8882 5.14373Z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#1f1f1f] rounded-full flex items-center justify-center hover:bg-[#fc3314] transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-72 h-72 sm:w-96 sm:h-96 bg-[#fc3314] rounded-full opacity-20"></div>
              <img 
                src={imgMyPhoto} 
                alt="Naesila Islamia" 
                className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl"
              />
              <div className="absolute top-10 -left-10 w-20 h-20 bg-pink-300 rounded-full opacity-50"></div>
              <div className="absolute -bottom-5 right-10 w-16 h-16 bg-[#fc3314] rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
