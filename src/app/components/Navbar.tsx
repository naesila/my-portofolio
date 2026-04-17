export function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex gap-1 items-start text-[24px] sm:text-[30px] shrink-0">
            <span className="font-['Iosevka_Charon:Medium',sans-serif] text-[#1f1f1f] tracking-[-4px] sm:tracking-[-6.6px]">
              Information
            </span>
            <span className="font-semibold text-[#fc3314]">System</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex font-bold gap-6 lg:gap-8 text-[#1f1f1f] text-[16px] lg:text-[18px]">
            <button onClick={() => scrollToSection('about')} className="hover:text-[#fc3314] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-[#fc3314] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-[#fc3314] transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#fc3314] transition-colors">
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden sm:block bg-[#1f1f1f] text-white font-bold px-6 py-3 hover:bg-[#fc3314] transition-colors text-[14px] lg:text-[16px]"
          >
            Let's Talk
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => scrollToSection('contact')}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Decorative Circle */}
      <div className="absolute right-[20%] top-[-50px] w-[146px] h-[146px] pointer-events-none hidden lg:block">
        <svg className="w-full h-full" fill="none" viewBox="0 0 146 146">
          <circle cx="73" cy="73" fill="#FC3314" r="73" opacity="0.3" />
        </svg>
      </div>
    </nav>
  );
}
