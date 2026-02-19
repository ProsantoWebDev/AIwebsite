export default function Stats() {
  const stats = [
    { value: "15,000+", label: "Active Users" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "50+", label: "AI Features" },
    { value: "24/7", label: "Customer Support" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-400">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
