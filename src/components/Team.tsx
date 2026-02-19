import { Linkedin, Twitter } from "lucide-react";

export default function Team() {
  const team = [
    {
      name: "Tom Zhang",
      role: "Business Development Manager",
      description:
        "Tom is tasked with identifying new market opportunities and forging strategic partnerships. He works closely with potential clients to understand their needs.",
      initials: "TZ",
    },
    {
      name: "Lena Carter",
      role: "UX/UI Designer",
      description:
        "Lena is responsible for creating an intuitive and engaging user experience. Her designs are centered around user feedback and data-driven insights.",
      initials: "LC",
    },
    {
      name: "Michael Rivers",
      role: "Chief Technology Officer",
      description:
        "Michael ensures that BeAI is scalable, secure, and capable of handling the demands of large enterprises. His role involves staying ahead of emerging technologies.",
      initials: "MR",
    },
    {
      name: "Lucas Bennett",
      role: "Lead AI Engineer",
      description:
        "Lucas is responsible for the technical development and continuous improvement of the platform's AI algorithms. His work is critical to maintaining BeAI's reputation.",
      initials: "LB",
    },
    {
      name: "Jasper Whitfield",
      role: "Head of Sales",
      description:
        "Jasper is the driving force behind expanding the platform's reach across global markets. His approach is centered around demonstrating how BeAI can boost efficiency.",
      initials: "JW",
    },
  ];

  const colors = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-orange-500 to-red-500",
    "from-green-500 to-teal-500",
    "from-indigo-500 to-blue-500",
  ];

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Exceptional talent driving innovation and excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <div
                className={`h-32 bg-gradient-to-r ${colors[index % colors.length]}`}
              />
              <div className="p-8 -mt-16 relative">
                <div
                  className={`w-24 h-24 rounded-xl bg-gradient-to-br ${colors[index % colors.length]} flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg`}
                >
                  {member.initials}
                </div>
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-6">{member.description}</p>
                <div className="flex gap-4">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                    <Linkedin size={20} className="text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                    <Twitter size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
