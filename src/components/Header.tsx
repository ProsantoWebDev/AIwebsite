import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
              <Zap className="text-white" size={20} />
            </div>
            <span className="font-bold text-lg">BeAI</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Features
            </a>
            <a
              href="#how"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              How it Works
            </a>
            <a
              href="#team"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Team
            </a>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <a href="#features" className="block text-gray-600">
              Features
            </a>
            <a href="#how" className="block text-gray-600">
              How it Works
            </a>
            <a href="#team" className="block text-gray-600">
              Team
            </a>
            <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
