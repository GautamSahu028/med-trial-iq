import { Clock, Target, BarChart3, Shield, Zap } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Faster Recruitment',
      description:
        'Reduce patient recruitment time from months to weeks with intelligent pre-screening',
      metric: '75% faster',
      color: 'blue',
    },
    {
      icon: Target,
      title: 'Improved Matching',
      description:
        'Higher quality patient-trial matches with AI-powered eligibility assessment',
      metric: '95% accuracy',
      color: 'emerald',
    },
    {
      icon: BarChart3,
      title: 'Better Outcomes',
      description:
        'Enhanced trial success rates through precise patient selection criteria',
      metric: '40% improvement',
      color: 'indigo',
    },
    {
      icon: Shield,
      title: 'EMR Integration',
      description:
        'Seamless integration with existing hospital EHR systems and workflows',
      metric: 'Zero disruption',
      color: 'purple',
    },
  ];

  const additionalBenefits = [
    'Automated FHIR data mapping and validation',
    'Real-time trial status updates and notifications',
    'Comprehensive audit trails for regulatory compliance',
    'Multi-language support for global clinical trials',
    'Advanced analytics and reporting dashboards',
    'API-first architecture for easy integration',
  ];

  return (
    <section
      id="benefits"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Transform Clinical Research
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerate patient recruitment, improve trial outcomes, and
            streamline clinical research operations
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-cards">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600',
              emerald: 'from-emerald-500 to-emerald-600',
              indigo: 'from-indigo-500 to-indigo-600',
              purple: 'from-purple-500 to-purple-600',
            };

            return (
              <div key={index} className="card-item group">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${colorClasses[benefit.color as keyof typeof colorClasses]} text-white mb-4`}
                  >
                    <Icon size={24} />
                  </div>

                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {benefit.metric}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ROI Calculator */}
        <div className="mt-16 animate-roi-section">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8 roi-title">
              Return on Investment
            </h3>

            <div className="grid md:grid-cols-3 gap-8 text-center animate-roi-stats">
              <div className="space-y-2 roi-stat-item">
                <div className="text-3xl font-bold text-blue-600">$2.5M</div>
                <div className="text-gray-600">
                  Average cost savings per trial
                </div>
                <div className="text-sm text-gray-500">
                  Through faster recruitment
                </div>
              </div>
              <div className="space-y-2 roi-stat-item">
                <div className="text-3xl font-bold text-emerald-600">60%</div>
                <div className="text-gray-600">Reduction in screening time</div>
                <div className="text-sm text-gray-500">
                  Automated eligibility checks
                </div>
              </div>
              <div className="space-y-2 roi-stat-item">
                <div className="text-3xl font-bold text-indigo-600">3x</div>
                <div className="text-gray-600">
                  Increase in enrollment rates
                </div>
                <div className="text-sm text-gray-500">
                  Better patient targeting
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional benefits */}
        <div className="mt-16 animate-additional-benefits">
          <div className="bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold text-center mb-8 benefits-title">
              Additional Platform Benefits
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-benefit-items">
              {additionalBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 benefit-item"
                >
                  <div className="flex-shrink-0">
                    <Zap size={16} className="text-white" />
                  </div>
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
