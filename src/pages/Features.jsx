function Features() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-10 bg-linear-to-br from-purple-600 to-pink-500 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="brutalist-card bg-yellow-400 text-black p-3 inline-block mb-8">
            <span className="font-black text-sm uppercase tracking-widest">
              SYSTEM CAPABILITIES
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl mb-8 leading-none">
            Features That
            <br />
            Pack a Punch
          </h1>
          <p className="text-2xl font-bold max-w-3xl mx-auto uppercase">
            No marketing fluff. Just raw power features that solve real
            problems.
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-24 px-6 md:px-10 bg-white border-y-8 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl mb-16">Core Arsenal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Feature 1 */}
            <div className="brutalist-card p-10 bg-cyan-50 hover:-translate-y-2 transition-transform">
              <div className="bg-cyan-500 text-white w-fit p-4 border-4 border-black mb-6">
                <span className="material-symbols-outlined text-5xl">
                  monitoring
                </span>
              </div>
              <h3 className="text-4xl mb-4 uppercase">
                Real-Time Price Intelligence
              </h3>
              <p className="font-bold text-lg mb-6 leading-tight">
                Track global commodity prices, supplier availability, and market
                fluctuations in milliseconds. Make decisions with live data, not
                yesterday's reports.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-black size-6 flex-shrink-0 mt-1"></div>
                  <span className="font-bold text-sm uppercase">
                    50+ Data Sources Aggregated
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-black size-6 flex-shrink-0 mt-1"></div>
                  <span className="font-bold text-sm uppercase">
                    Sub-Second Refresh Rate
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-black size-6 flex-shrink-0 mt-1"></div>
                  <span className="font-bold text-sm uppercase">
                    Custom Alert Triggers
                  </span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="brutalist-card p-10 bg-pink-50 hover:-translate-y-2 transition-transform">
              <div className="bg-pink-500 text-white w-fit p-4 border-4 border-black mb-6">
                <span className="material-symbols-outlined text-5xl">
                  auto_awesome
                </span>
              </div>
              <h3 className="text-4xl mb-4 uppercase">
                AI-Powered Forecasting
              </h3>
              <p className="font-bold text-lg mb-6 leading-tight">
                Predictive analytics that learn from your purchasing patterns.
                Stop reacting. Start anticipating.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-black size-6 flex-shrink-0 mt-1"></div>
                  <span className="font-bold text-sm uppercase">
                    Demand Prediction (95% Accuracy)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-black size-6 flex-shrink-0 mt-1"></div>
                  <span className="font-bold text-sm uppercase">
                    Lead Time Optimization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-black size-6 flex-shrink-0 mt-1"></div>
                  <span className="font-bold text-sm uppercase">
                    Risk Scoring Algorithm
                  </span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="brutalist-card p-10 bg-purple-100 hover:-translate-y-2 transition-transform">
              <div className="bg-purple-600 text-white w-fit p-4 border-4 border-black mb-6">
                <span className="material-symbols-outlined text-5xl">
                  dynamic_form
                </span>
              </div>
              <h3 className="text-4xl mb-4 uppercase">Automated RFQ Engine</h3>
              <p className="font-bold text-lg mb-6 leading-tight">
                Generate, route, and track RFQs automatically. Match optimal
                suppliers based on capability, capacity, and cost.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-black size-6 flex-shrink-0 mt-1"></div>
                  <span className="font-bold text-sm uppercase">
                    Smart Supplier Matching
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-black size-6 flex-shrink-0 mt-1"></div>
                  <span className="font-bold text-sm uppercase">
                    Template Library (100+ Industries)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-black size-6 flex-shrink-0 mt-1"></div>
                  <span className="font-bold text-sm uppercase">
                    Response Rate Tracking
                  </span>
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="brutalist-card p-10 bg-orange-100 hover:-translate-y-2 transition-transform">
              <div className="bg-orange-500 text-white w-fit p-4 border-4 border-black mb-6">
                <span className="material-symbols-outlined text-5xl">
                  verified
                </span>
              </div>
              <h3 className="text-4xl mb-4 uppercase">Compliance Shield</h3>
              <p className="font-bold text-lg mb-6 leading-tight">
                Automated audit trails, regulatory compliance checks, and
                certification management. Stay clean, stay certified.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-black size-6 flex-shrink-0 mt-1"></div>
                  <span className="font-bold text-sm uppercase">
                    ISO/IATF Compliance Built-In
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-black size-6 flex-shrink-0 mt-1"></div>
                  <span className="font-bold text-sm uppercase">
                    Supplier Certification Tracking
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-black size-6 flex-shrink-0 mt-1"></div>
                  <span className="font-bold text-sm uppercase">
                    Audit Report Generator
                  </span>
                </li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="brutalist-card p-10 bg-green-100 hover:-translate-y-2 transition-transform">
              <div className="bg-green-500 text-white w-fit p-4 border-4 border-black mb-6">
                <span className="material-symbols-outlined text-5xl">
                  integration_instructions
                </span>
              </div>
              <h3 className="text-4xl mb-4 uppercase">Universal Integration</h3>
              <p className="font-bold text-lg mb-6 leading-tight">
                Plug into SAP, Oracle, NetSuite, or custom ERP systems.
                Bi-directional sync that just works.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-black size-6 flex-shrink-0 mt-1"></div>
                  <span className="font-bold text-sm uppercase">
                    300+ Pre-Built Connectors
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-black size-6 flex-shrink-0 mt-1"></div>
                  <span className="font-bold text-sm uppercase">
                    REST API + Webhooks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-black size-6 flex-shrink-0 mt-1"></div>
                  <span className="font-bold text-sm uppercase">
                    Real-Time Data Sync
                  </span>
                </li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="brutalist-card p-10 bg-yellow-100 hover:-translate-y-2 transition-transform">
              <div className="bg-yellow-500 text-black w-fit p-4 border-4 border-black mb-6">
                <span className="material-symbols-outlined text-5xl">
                  insights
                </span>
              </div>
              <h3 className="text-4xl mb-4 uppercase">Analytics Dashboard</h3>
              <p className="font-bold text-lg mb-6 leading-tight">
                Brutal clarity on spend, savings, and supplier performance.
                Custom reports that actually matter.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-black size-6 flex-shrink-0 mt-1"></div>
                  <span className="font-bold text-sm uppercase">
                    Real-Time KPI Tracking
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-black size-6 flex-shrink-0 mt-1"></div>
                  <span className="font-bold text-sm uppercase">
                    Custom Report Builder
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-black size-6 flex-shrink-0 mt-1"></div>
                  <span className="font-bold text-sm uppercase">
                    Automated Insights Engine
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 px-6 md:px-10 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl mb-16 text-center">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-4 border-white p-8">
              <h4 className="text-3xl mb-4 font-black uppercase text-cyan-400">
                Performance
              </h4>
              <ul className="space-y-4">
                <li className="flex justify-between border-b-2 border-white pb-2">
                  <span className="font-bold uppercase text-sm">
                    Query Speed
                  </span>
                  <span className="font-black text-xl">&lt;50ms</span>
                </li>
                <li className="flex justify-between border-b-2 border-white pb-2">
                  <span className="font-bold uppercase text-sm">Uptime</span>
                  <span className="font-black text-xl">99.95%</span>
                </li>
                <li className="flex justify-between border-b-2 border-white pb-2">
                  <span className="font-bold uppercase text-sm">
                    Data Processing
                  </span>
                  <span className="font-black text-xl">10M/day</span>
                </li>
              </ul>
            </div>

            <div className="border-4 border-white p-8">
              <h4 className="text-3xl mb-4 font-black uppercase text-pink-500">
                Security
              </h4>
              <ul className="space-y-4">
                <li className="flex justify-between border-b-2 border-white pb-2">
                  <span className="font-bold uppercase text-sm">
                    Encryption
                  </span>
                  <span className="font-black text-xl">AES-256</span>
                </li>
                <li className="flex justify-between border-b-2 border-white pb-2">
                  <span className="font-bold uppercase text-sm">
                    Compliance
                  </span>
                  <span className="font-black text-xl">SOC 2</span>
                </li>
                <li className="flex justify-between border-b-2 border-white pb-2">
                  <span className="font-bold uppercase text-sm">Backups</span>
                  <span className="font-black text-xl">4x Daily</span>
                </li>
              </ul>
            </div>

            <div className="border-4 border-white p-8">
              <h4 className="text-3xl mb-4 font-black uppercase text-orange-500">
                Scale
              </h4>
              <ul className="space-y-4">
                <li className="flex justify-between border-b-2 border-white pb-2">
                  <span className="font-bold uppercase text-sm">Users</span>
                  <span className="font-black text-xl">Unlimited</span>
                </li>
                <li className="flex justify-between border-b-2 border-white pb-2">
                  <span className="font-bold uppercase text-sm">Suppliers</span>
                  <span className="font-black text-xl">50K+</span>
                </li>
                <li className="flex justify-between border-b-2 border-white pb-2">
                  <span className="font-bold uppercase text-sm">SKUs</span>
                  <span className="font-black text-xl">5M+</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-24 px-6 md:px-10 bg-[#f0f0f0]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl mb-16">Integration Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "SAP",
              "Oracle",
              "NetSuite",
              "Infor",
              "Epicor",
              "Sage",
              "Odoo",
              "Microsoft",
            ].map((partner, idx) => (
              <div
                key={idx}
                className="brutalist-card bg-white p-8 flex items-center justify-center hover:bg-cyan-400 transition-colors"
              >
                <span className="font-black text-3xl uppercase">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-10 bg-white border-t-8 border-black">
        <div className="max-w-4xl mx-auto brutalist-card bg-gradient-to-r from-purple-600 to-orange-500 text-white p-12 md:p-16 text-center">
          <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
            See It In Action
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-10 uppercase">
            Book a live demo with our engineering team
          </p>
          <button className="brutalist-button bg-cyan-400 text-black text-2xl px-12 py-6">
            Schedule Demo
          </button>
        </div>
      </section>
    </>
  );
}

export default Features;
