import { Code, Database, BarChart3, Palette } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      icon: Code,
      title: "Data Analyst",
      description: "I analyze data using tools such as Microsoft Excel, SQL, and Power BI to transform raw data, identify patterns, and generate insights that support effective decision-making. in building responsive and interactive web applications using modern frameworks and technologies."
    },
    {
      icon: Database,
      title: " Data Visualization",
      description: "I develop dashboards and data visualizations that are clear, informative, and easy to understand to effectively communicate insights and support decision-making. in designing, implementing, and managing relational and non-relational databases for optimal performance."
    },
    {
      icon: BarChart3,
      title: "UX Research",
      description: "SkI conduct user research to understand user needs, behaviors, and preferences as a foundation for designing solutions that improve the quality and user experience of digital products.illed in analyzing complex datasets and deriving actionable insights to support data-driven decision making."
    },
    {
      icon: Palette,
      title: "Data Cleaning",
      description: "I process and clean raw data to enhance data quality, ensuring accuracy, consistency, and structure for effective analysis. intuitive and visually appealing user interfaces with a focus on user experience and accessibility."
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-[36px] sm:text-[48px] font-bold text-[#1f1f1f] mb-4">My Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-[14px] sm:text-[16px]">
            A comprehensive set of skills to deliver end-to-end digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#fc3314] transition-colors">
                  <Icon className="w-8 h-8 text-[#fc3314] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#1f1f1f] mb-3">{skill.title}</h3>
                <p className="text-gray-600 text-[13px] sm:text-[14px] leading-relaxed">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
