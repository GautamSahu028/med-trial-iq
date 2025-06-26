import { Building2, FlaskConical, Stethoscope, Code } from 'lucide-react';

const WhoItsFor = () => {
  const audiences = [
    {
      icon: Building2,
      title: 'Hospitals',
      description:
        'Streamline patient recruitment and improve trial enrollment rates with AI-powered matching.',
      color: 'blue',
    },
    {
      icon: FlaskConical,
      title: 'Clinical Researchers',
      description:
        'Access qualified patients faster and reduce time-to-enrollment with intelligent screening.',
      color: 'emerald',
    },
    {
      icon: Stethoscope,
      title: 'Oncologists & Specialists',
      description:
        'Connect your patients with relevant trials based on precise medical criteria matching.',
      color: 'indigo',
    },
    {
      icon: Code,
      title: 'HealthTech Developers',
      description:
        'Integrate our API into your EMR systems and clinical workflow applications.',
      color: 'purple',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Who It's For
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform serves healthcare professionals and organizations
            across the clinical research ecosystem
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-cards">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            const colorClasses = {
              blue: 'bg-blue-500 group-hover:bg-blue-600',
              emerald: 'bg-emerald-500 group-hover:bg-emerald-600',
              indigo: 'bg-indigo-500 group-hover:bg-indigo-600',
              purple: 'bg-purple-500 group-hover:bg-purple-600',
            };

            return (
              <div
                key={index}
                className="card-item group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg text-white mb-4 transition-colors ${colorClasses[audience.color as keyof typeof colorClasses]}`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {audience.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-16 animate-on-scroll">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
              Trusted by Healthcare Leaders
            </h3>

            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600">Hospitals Connected</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  10,000+
                </div>
                <div className="text-gray-600">Patients Matched</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  95%
                </div>
                <div className="text-gray-600">Matching Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
