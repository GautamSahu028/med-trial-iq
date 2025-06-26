import {
  Monitor,
  Smartphone,
  Tablet,
  BarChart,
  Users,
  Database,
} from 'lucide-react';

const Preview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            See It in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our intuitive dashboard and see how AI transforms
            clinical trial matching
          </p>
        </div>

        {/* Main dashboard preview */}
        <div className="mt-16 animate-on-scroll">
          <div className="relative">
            <div className="bg-gray-900 rounded-t-2xl p-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="bg-white border-x border-b border-gray-200 rounded-b-2xl p-8 shadow-2xl">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left sidebar */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Patient Cohorts
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div>
                        <div className="font-medium text-blue-900">
                          Oncology
                        </div>
                        <div className="text-sm text-blue-700">
                          1,247 patients
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">
                        92%
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                      <div>
                        <div className="font-medium text-emerald-900">
                          Cardiology
                        </div>
                        <div className="text-sm text-emerald-700">
                          856 patients
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-emerald-600">
                        87%
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                      <div>
                        <div className="font-medium text-indigo-900">
                          Neurology
                        </div>
                        <div className="text-sm text-indigo-700">
                          423 patients
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-indigo-600">
                        78%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Trial Matches - Today
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Real-time updates</span>
                    </div>
                  </div>

                  {/* Match cards */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-blue-900">
                          NCT05123456 - Breast Cancer Immunotherapy
                        </div>
                        <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          New Match
                        </div>
                      </div>
                      <div className="text-sm text-blue-700 mb-3">
                        HER2+ breast cancer, stage II-III, prior chemotherapy
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-blue-600">
                          Patient ID: P-2024-0892
                        </div>
                        <div className="text-lg font-bold text-blue-600">
                          98% Match
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-4 rounded-lg border border-emerald-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-emerald-900">
                          NCT05234567 - Heart Failure Study
                        </div>
                        <div className="bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">
                          Confirmed
                        </div>
                      </div>
                      <div className="text-sm text-emerald-700 mb-3">
                        NYHA Class II-IV, ejection fraction &lt;40%, optimal
                        medical therapy
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-emerald-600">
                          Patient ID: P-2024-0743
                        </div>
                        <div className="text-lg font-bold text-emerald-600">
                          91% Match
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 rounded-lg border border-indigo-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-indigo-900">
                          NCT05345678 - Alzheimer's Prevention
                        </div>
                        <div className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                          Under Review
                        </div>
                      </div>
                      <div className="text-sm text-indigo-700 mb-3">
                        Mild cognitive impairment, APOE4 positive, age 65-85
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-indigo-600">
                          Patient ID: P-2024-0521
                        </div>
                        <div className="text-lg font-bold text-indigo-600">
                          84% Match
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-16 animate-on-scroll">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart size={28} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Real-time Analytics
              </h3>
              <p className="text-gray-600 text-sm">
                Track matching performance and trial enrollment metrics in
                real-time
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={28} className="text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Patient Management
              </h3>
              <p className="text-gray-600 text-sm">
                Comprehensive patient profiles with FHIR-compliant data
                integration
              </p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database size={28} className="text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                EMR Integration
              </h3>
              <p className="text-gray-600 text-sm">
                Seamless connection with major EMR systems and healthcare
                databases
              </p>
            </div>
          </div>
        </div>

        {/* Device responsiveness */}
        <div className="mt-16 animate-on-scroll">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-8">
              Accessible Anywhere
            </h3>

            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <Monitor className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">Desktop</div>
              </div>
              <div className="text-center">
                <Tablet className="h-12 w-12 text-emerald-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">Tablet</div>
              </div>
              <div className="text-center">
                <Smartphone className="h-12 w-12 text-indigo-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">Mobile</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
