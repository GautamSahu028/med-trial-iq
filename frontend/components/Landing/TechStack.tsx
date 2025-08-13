import { Brain, Database, Cpu, Globe, Shield, Zap } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      items: [
        'GPT-4 & LLM Integration',
        'Natural Language Processing',
        'Langchain Framework',
        'spaCy NLP Library',
      ],
      color: 'blue',
    },
    {
      category: 'Healthcare Standards',
      icon: Database,
      items: [
        'FHIR R4 Compliance',
        'SNOMED CT Mapping',
        'LOINC Integration',
        'HL7 Messaging',
      ],
      color: 'emerald',
    },
    {
      category: 'Frontend & UX',
      icon: Globe,
      items: [
        'React & TypeScript',
        'Streamlit Dashboards',
        'GSAP Animations',
        'Responsive Design',
      ],
      color: 'indigo',
    },
  ];

  const features = [
    {
      icon: Cpu,
      title: 'High Performance',
      description: 'Optimized algorithms for real-time patient matching',
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Enterprise-grade security for patient data protection',
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant trial matching with live EMR data integration',
    },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technology Under the Hood
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on cutting-edge AI and healthcare interoperability standards
            for maximum reliability and accuracy
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8 animate-cards">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            const colorClasses = {
              blue: 'bg-blue-50 border-blue-200 text-blue-600',
              emerald: 'bg-emerald-50 border-emerald-200 text-emerald-600',
              indigo: 'bg-indigo-50 border-indigo-200 text-indigo-600',
            };

            return (
              <div
                key={index}
                className="card-item bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg border-2 mb-4 ${colorClasses[tech.color as keyof typeof colorClasses]}`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {tech.category}
                </h3>

                <ul className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-gray-600 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Key Features */}
        <div className="mt-16 animate-on-scroll">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Key Technical Features
          </h3>

          <div className="grid md:grid-cols-3 gap-8 animate-cards">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div key={index} className="card-item text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 text-white rounded-full mb-4">
                    <Icon size={28} />
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>

                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Architecture diagram */}
        <div className="mt-16 animate-on-scroll">
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-8">
              System Architecture
            </h3>

            <div className="grid md:grid-cols-4 gap-4 items-center">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <Database className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-sm font-medium">EMR Systems</div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <Brain className="h-8 w-8 text-emerald-500 mx-auto mb-2" />
                <div className="text-sm font-medium">LLM Engine</div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <Cpu className="h-8 w-8 text-indigo-500 mx-auto mb-2" />
                <div className="text-sm font-medium">Matching Algorithm</div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <Globe className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="text-sm font-medium">Clinical Interface</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
