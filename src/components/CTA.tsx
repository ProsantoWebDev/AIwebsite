import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-400 p-12 md:p-20 text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using BeAI to revolutionize
              their operations and unlock unprecedented growth.
            </p>

            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl hover:shadow-white/30 transition transform hover:scale-105">
              Start Your Free Trial Now <ArrowRight size={20} />
            </button>

            <p className="text-blue-100 text-sm mt-6">
              No credit card required • 14-day free trial • Full access to all
              features
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
