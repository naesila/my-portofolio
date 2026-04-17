import imgImage7 from "../../imports/Group1000001751/128cae03a7d1c4c42f4317a9ed010d48f0e408e3.png";
import imgImage8 from "../../imports/Group1000001751/debat.png";
import imgImage9 from "../../imports/Group1000001751/9ee4c27fb50a84fedf883320932cabfb5870228b.png";
import { Award } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      image: imgImage7,
      title: "Google Student Ambassador",
      organization: "23 Februari – 16 Maret 2026",
      description:
        "Selected as a Google Student Ambassador, actively promoting technology awareness, leading initiatives, and engaging students in digital innovation and learning.rded for creating an innovative e-commerce platform with advanced features and exceptional user experience.",
    },
    {
      image: imgImage8,
      title: "Juara 1 Debat",
      organization: "14 Desember",
      description:
        "Awarded 1st place in the Campus Public Debate Competition, showcasing excellence in critical thinking, public speaking, and persuasive communication.a analysis and visualization skills in solving real-world business problems.",
    },
    {
      image: imgImage9,
      title: "UI/UX Design Excellence",
      organization: "Design Awards 2023",
      description:
        "Honored for creating intuitive and aesthetically pleasing user interfaces that prioritize user experience.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-[36px] sm:text-[48px] font-bold text-[#1f1f1f] mb-4">
            My Achievements
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-[14px] sm:text-[16px]">
            Recognition and awards that highlight my dedication and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#fc3314] rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[16px] sm:text-[18px] font-bold text-[#1f1f1f] mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-[#fc3314] font-semibold text-[13px] sm:text-[14px]">
                      {achievement.organization}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-[13px] sm:text-[14px] leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
