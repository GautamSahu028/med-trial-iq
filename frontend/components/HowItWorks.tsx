import { Search, MapPin, Users, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Analyze Trial Criteria',
      description:
        'LLMs extract medical terms and conditions from clinical trial eligibility criteria with high precision.',
      color: 'blue',
    },
    {
      icon: MapPin,
      title: 'Map to FHIR & Clinical Data',
      description:
        'Terms are mapped to structured FHIR data and unstructured clinical reports using advanced NLP.',
      color: 'emerald',
    },
    {
      icon: Users,
      title: 'Match Patients to Trials',
      description:
        'Our algorithm matches patient data to trial requirements, providing confidence scores for each match.',
      color: 'indigo',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform streamlines clinical trial matching through
            three intelligent steps
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12 animate-cards">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colorClasses = {
              blue: 'bg-blue-100 text-blue-600 border-blue-200',
              emerald: 'bg-emerald-100 text-emerald-600 border-emerald-200',
              indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200',
            };

            return (
              <div key={index} className="card-item relative">
                <div className="text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full border-2 ${colorClasses[step.color as keyof typeof colorClasses]} mb-6`}
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-6 text-gray-300">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Process visualization */}
        <div className="mt-16 animate-on-scroll">
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
              End-to-End Process Flow
            </h3>

            <div className="grid md:grid-cols-5 gap-4 items-center">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-sm font-medium text-gray-900">
                  Clinical Trial
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Eligibility Criteria
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="text-gray-400" size={20} />
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-sm font-medium text-gray-900">
                  LLM Analysis
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Term Extraction
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="text-gray-400" size={20} />
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-sm font-medium text-gray-900">
                  Patient Match
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Confidence Score
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
