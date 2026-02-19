import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50 -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8 inline-block">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            ✨ Powered by Advanced AI Technology
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent leading-tight">
          Innovative Solutions for Business
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your business with cutting-edge AI tools. Create, automate,
          and innovate like never before.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105">
            Get Started Free
          </button>
          <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition flex items-center justify-center gap-2">
            Watch Demo <ArrowRight size={20} />
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 max-w-xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">70%</div>
            <div className="text-sm text-gray-600">Layout & Typography</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">84%</div>
            <div className="text-sm text-gray-600">Motion & Graphics</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">99%</div>
            <div className="text-sm text-gray-600">User Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
