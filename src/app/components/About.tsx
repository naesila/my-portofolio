export function About() {
  return (
    <section id="about" className="py-20 bg-[#1f1f1f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* About Me Header */}
        <div className="text-center mb-16">
          <h2 className="text-[36px] sm:text-[48px] font-bold mb-6">About Me</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-[14px] sm:text-[16px] leading-relaxed">
            I am an Information Systems student passionate about leveraging technology and data to create meaningful digital solutions. 
            With a strong foundation in both technical and analytical skills, I strive to bridge the gap between business needs and 
            technological innovation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all">
            <div className="text-[48px] sm:text-[64px] font-bold text-[#fc3314] mb-2">5+</div>
            <p className="text-gray-300 font-semibold text-[14px] sm:text-[16px]">Projects Completed</p>
          </div>
          
          <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all">
            <div className="text-[48px] sm:text-[64px] font-bold text-[#fc3314] mb-2">10+</div>
            <p className="text-gray-300 font-semibold text-[14px] sm:text-[16px]">Learning Experience</p>
          </div>
          
          <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all">
            <div className="text-[48px] sm:text-[64px] font-bold text-[#fc3314] mb-2">10+</div>
            <p className="text-gray-300 font-semibold text-[14px] sm:text-[16px]">Organization Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
