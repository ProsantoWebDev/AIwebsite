import { Image, Music, Video, FileText } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Image,
      title: "Real-time AI Image Generator",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Music,
      title: "Create Your Dream Soundtrack",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Video,
      title: "Create, edit, play. Any video in seconds.",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: FileText,
      title: "Be a Copywriter on any topic",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Make your wallet work for you!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Powerful AI tools designed to enhance your productivity and
            creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-xl transition transform hover:scale-105"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
