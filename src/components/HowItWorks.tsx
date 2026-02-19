import { Zap, Lightbulb, Shield } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Zap,
      title: "Easy and intuitive navigation",
      description: "Simple, elegant interface designed for everyone",
    },
    {
      icon: Lightbulb,
      title: "Advanced tool in constant improvement",
      description: "Cutting-edge AI technology that evolves daily",
    },
    {
      icon: Shield,
      title: "Private cloud for your images",
      description: "Enterprise-grade security and privacy",
    },
  ];

  return (
    <section id="how" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose BeAI?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Three core pillars that make us the leader in AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mx-auto">
                    <Icon className="text-blue-600" size={40} />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 -right-4 w-8 text-blue-400">
                      →
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-12 text-center">
          <p className="text-2xl font-bold text-gray-800 mb-4">
            "Innovative solutions for business"
          </p>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            BeAI has emerged as the preferred AI development tool system for
            leading enterprises across diverse industries. Renowned companies
            worldwide entrust BeAI with their AI initiatives, leveraging our
            advanced platform to drive innovation, enhance productivity, and
            unlock new opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
