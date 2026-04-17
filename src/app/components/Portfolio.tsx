import imgImage from "../../imports/Group1000001751/3e2c4329e3e32c13eb96d186525b2a528d81d0a7.png";
import imgImage1 from "../../imports/Group1000001751/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgImage2 from "../../imports/Group1000001751/46cd3ac1c3cef7ec6d274844917895ccc0836009.png";
import imgImage3 from "../../imports/Group1000001751/74d8b1011239126b455a76fb70967d13f3db6266.png";
import imgImage4 from "../../imports/Group1000001751/e1cb6ca2b03424844a6335c7caa7306fb9edcca0.png";
import imgImage5 from "../../imports/Group1000001751/1cc48cb0e52e6e62abbe803e08ad6f9ad8ce54a1.png";
import { ExternalLink } from 'lucide-react';

export function Portfolio() {
  const projects = [
    {
      image: imgImage,
      title: "E-commerce Platform",
      category: "Web Development",
      description: "A full-featured e-commerce solution with modern UI/UX"
    },
    {
      image: imgImage1,
      title: "Mobile App Design",
      category: "UI/UX Design",
      description: "Clean and intuitive mobile application interface"
    },
    {
      image: imgImage2,
      title: "Hospital App",
      category: "Mobile Development",
      description: "Healthcare management system for better patient care"
    },
    {
      image: imgImage3,
      title: "Data Dashboard",
      category: "Data Analytics",
      description: "Interactive analytics dashboard for business insights"
    },
    {
      image: imgImage4,
      title: "Brand Guidelines",
      category: "Design System",
      description: "Comprehensive brand identity and guidelines"
    },
    {
      image: imgImage5,
      title: "Portfolio Website",
      category: "Web Design",
      description: "Modern portfolio showcase with smooth interactions"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-[36px] sm:text-[48px] font-bold text-[#1f1f1f] mb-4">My Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-[14px] sm:text-[16px]">
            Explore my recent work and projects that showcase my skills and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-[#fc3314] text-xs font-semibold rounded-full mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-[18px] sm:text-[20px] font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-200 text-[13px] sm:text-[14px]">{project.description}</p>
                    </div>
                    <button className="ml-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#fc3314] transition-colors group/btn">
                      <ExternalLink className="w-5 h-5 text-[#1f1f1f] group-hover/btn:text-white" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-pink-50 text-[#fc3314] text-xs font-semibold rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-[16px] sm:text-[18px] font-bold text-[#1f1f1f] mb-2">{project.title}</h3>
                <p className="text-gray-600 text-[13px] sm:text-[14px]">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
