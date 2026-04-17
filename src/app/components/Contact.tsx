import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-[36px] sm:text-[48px] font-bold text-[#1f1f1f] mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-[14px] sm:text-[16px]">
            Have a project in mind? Let's work together to create something
            amazing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#1f1f1f] mb-6">
                Let's talk about everything!
              </h3>
              <p className="text-gray-600 text-[14px] sm:text-[16px] mb-8">
                Don't hesitate to reach out. I'm always open to discussing new
                projects, creative ideas, or opportunities to be part of your
                vision.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#fc3314] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1f1f1f] mb-1 text-[16px] sm:text-[18px]">
                    Email
                  </h4>
                  <p className="text-gray-600 text-[13px] sm:text-[14px]">
                    naesila99@email.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#fc3314] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1f1f1f] mb-1 text-[16px] sm:text-[18px]">
                    Phone
                  </h4>
                  <p className="text-gray-600 text-[13px] sm:text-[14px]">
                    +62 812-3456-7890
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#fc3314] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1f1f1f] mb-1 text-[16px] sm:text-[18px]">
                    Location
                  </h4>
                  <p className="text-gray-600 text-[13px] sm:text-[14px]">
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#1f1f1f] font-semibold mb-2 text-[14px] sm:text-[16px]"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fc3314] text-[14px] sm:text-[16px]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#1f1f1f] font-semibold mb-2 text-[14px] sm:text-[16px]"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fc3314] text-[14px] sm:text-[16px]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-[#1f1f1f] font-semibold mb-2 text-[14px] sm:text-[16px]"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fc3314] text-[14px] sm:text-[16px]"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#1f1f1f] font-semibold mb-2 text-[14px] sm:text-[16px]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fc3314] resize-none text-[14px] sm:text-[16px]"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1f1f1f] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#fc3314] transition-all hover:scale-105 flex items-center justify-center gap-2 text-[14px] sm:text-[16px]"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
