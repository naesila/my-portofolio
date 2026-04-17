export function Journey() {
  const experiences = [
    {
      year: "2023 - Present",
      role: "Information Systems Student",
      organization: "University",
      description: "Pursuing a degree in Information Systems with focus on data analytics and web development",
      percentage: 95
    },
    {
      year: "2022 - 2023",
      role: "Web Developer Intern",
      organization: "Tech Startup",
      description: "Developed responsive web applications using React and modern web technologies",
      percentage: 85
    },
    {
      year: "2021 - 2022",
      role: "UI/UX Designer",
      organization: "Creative Agency",
      description: "Designed user interfaces and experiences for various client projects",
      percentage: 90
    },
    {
      year: "2020 - 2021",
      role: "Data Analyst Volunteer",
      organization: "Non-Profit Organization",
      description: "Analyzed and visualized data to support decision-making processes",
      percentage: 80
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-[36px] sm:text-[48px] font-bold text-[#1f1f1f] mb-4">Organizational Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-[14px] sm:text-[16px]">
            My professional and academic journey in building digital solutions
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-[18px] sm:text-[22px] font-bold text-[#1f1f1f] mb-1">{exp.role}</h3>
                  <p className="text-[#fc3314] font-semibold text-[14px] sm:text-[16px]">{exp.organization}</p>
                </div>
                <span className="text-gray-500 font-semibold text-[13px] sm:text-[14px] whitespace-nowrap">{exp.year}</span>
              </div>
              
              <p className="text-gray-600 mb-4 text-[13px] sm:text-[14px]">{exp.description}</p>
              
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-[#fc3314] rounded-full transition-all duration-1000"
                  style={{ width: `${exp.percentage}%` }}
                ></div>
              </div>
              <div className="flex justify-end mt-2">
                <span className="text-[#fc3314] font-bold text-[12px] sm:text-[14px]">{exp.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
