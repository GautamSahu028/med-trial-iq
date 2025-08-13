import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Brain, Database, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-title',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );

      gsap.fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power2.out' }
      );

      gsap.fromTo(
        '.hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power2.out' }
      );

      gsap.fromTo(
        '.hero-visual',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, delay: 0.4, ease: 'power2.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToDemo = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-emerald-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            AI-Driven <span className="text-blue-600">Clinical Trial</span>{' '}
            Matching
          </h1>

          <p className="hero-subtitle text-xl text-gray-600 mt-6 max-w-2xl mx-auto lg:mx-0">
            Bridge clinical trial eligibility with real-world hospital data
            using LLMs, FHIR, and NLP. Revolutionize patient recruitment with
            intelligent matching.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <button
              onClick={scrollToDemo}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Get a Demo <ArrowRight size={20} />
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              <NavLink to="/dashboard">Explore Dashboard</NavLink>
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-blue-500" />
              <span>LLM-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="h-5 w-5 text-emerald-500" />
              <span>FHIR Compatible</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-indigo-500" />
              <span>Patient-Centered</span>
            </div>
          </div>
        </div>

        <div className="hero-visual relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Trial Matching Dashboard
                </h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-900">
                      Oncology Trial #NCT-2024-001
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      98% Match
                    </span>
                  </div>
                  <p className="text-xs text-blue-700 mt-1">
                    Breast cancer, stage II-III, HER2+
                  </p>
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-emerald-900">
                      Cardiology Trial #NCT-2024-002
                    </span>
                    <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                      87% Match
                    </span>
                  </div>
                  <p className="text-xs text-emerald-700 mt-1">
                    Heart failure, NYHA Class II-IV
                  </p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-indigo-900">
                      Neurology Trial #NCT-2024-003
                    </span>
                    <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                      75% Match
                    </span>
                  </div>
                  <p className="text-xs text-indigo-700 mt-1">
                    Alzheimer's disease, mild cognitive impairment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg">
            <Brain size={24} />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-emerald-500 text-white p-3 rounded-full shadow-lg">
            <Database size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
