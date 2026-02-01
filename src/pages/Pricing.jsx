function Pricing() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-10 bg-white border-b-8 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className="brutalist-card bg-cyan-400 text-black p-3 inline-block mb-8">
            <span className="font-black text-sm uppercase tracking-widest">
              TRANSPARENT PRICING
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl mb-8 leading-none">
            No Hidden Fees.
            <br />
            Just Raw Value.
          </h1>
          <p className="text-2xl font-bold max-w-3xl mx-auto">
            Choose the plan that fits your operation. Scale up or down anytime.
            No surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-6 md:px-10 bg-[#2d5bff]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Starter Plan */}
            <div className="brutalist-card bg-white p-10 flex flex-col">
              <div className="bg-cyan-400 text-black p-4 border-4 border-black mb-6 inline-block">
                <h3 className="text-3xl uppercase font-black">Starter</h3>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-black">$599</span>
                  <span className="text-2xl font-bold uppercase">/month</span>
                </div>
                <p className="font-bold text-lg uppercase">
                  Perfect for small teams
                </p>
              </div>
              <div className="border-t-4 border-black pt-8 mb-8 flex-1">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-green-500 size-6 border-2 border-black flex-shrink-0 mt-1"></div>
                    <span className="font-bold">Up to 5 users</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-500 size-6 border-2 border-black flex-shrink-0 mt-1"></div>
                    <span className="font-bold">1,000 SKUs tracked</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-500 size-6 border-2 border-black flex-shrink-0 mt-1"></div>
                    <span className="font-bold">Basic analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-500 size-6 border-2 border-black flex-shrink-0 mt-1"></div>
                    <span className="font-bold">Email support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-500 size-6 border-2 border-black flex-shrink-0 mt-1"></div>
                    <span className="font-bold">1 ERP integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-gray-300 size-6 border-2 border-black flex-shrink-0 mt-1"></div>
                    <span className="font-bold opacity-50">API access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-gray-300 size-6 border-2 border-black flex-shrink-0 mt-1"></div>
                    <span className="font-bold opacity-50">
                      Custom workflows
                    </span>
                  </li>
                </ul>
              </div>
              <button className="brutalist-button bg-cyan-400 text-black text-xl w-full py-4">
                Start Trial
              </button>
            </div>

            {/* Professional Plan - Featured */}
            <div className="brutalist-card bg-purple-600 text-white p-10 flex flex-col relative -mt-8 md:scale-105 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-2 border-4 border-black">
                <span className="font-black uppercase text-sm">
                  Most Popular
                </span>
              </div>
              <div className="bg-yellow-400 text-black p-4 border-4 border-black mb-6 inline-block">
                <h3 className="text-3xl uppercase font-black">Professional</h3>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-black">$1,499</span>
                  <span className="text-2xl font-bold uppercase">/month</span>
                </div>
                <p className="font-bold text-lg uppercase">
                  For growing manufacturers
                </p>
              </div>
              <div className="border-t-4 border-black pt-8 mb-8 flex-1">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-green-400 size-6 border-2 border-black flex-shrink-0 mt-1"></div>
                    <span className="font-bold">Up to 25 users</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-400 size-6 border-2 border-black flex-shrink-0 mt-1"></div>
                    <span className="font-bold">10,000 SKUs tracked</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-400 size-6 border-2 border-black flex-shrink-0 mt-1"></div>
                    <span className="font-bold">Advanced analytics + AI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-400 size-6 border-2 border-black flex-shrink-0 mt-1"></div>
                    <span className="font-bold">Priority support 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-400 size-6 border-2 border-black flex-shrink-0 mt-1"></div>
                    <span className="font-bold">5 ERP integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-400 size-6 border-2 border-black flex-shrink-0 mt-1"></div>
                    <span className="font-bold">Full API access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-400 size-6 border-2 border-black flex-shrink-0 mt-1"></div>
                    <span className="font-bold">Custom workflows</span>
                  </li>
                </ul>
              </div>
              <button className="brutalist-button bg-orange-500 text-white text-xl w-full py-4">
                Start Trial
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="brutalist-card bg-white p-10 flex flex-col">
              <div className="bg-orange-500 text-white p-4 border-4 border-black mb-6 inline-block">
                <h3 className="text-3xl uppercase font-black">Enterprise</h3>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-black">Custom</span>
                </div>
                <p className="font-bold text-lg uppercase">
                  For large operations
                </p>
              </div>
              <div className="border-t-4 border-black pt-8 mb-8 flex-1">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-green-500 size-6 border-2 border-black flex-shrink-0 mt-1"></div>
                    <span className="font-bold">Unlimited users</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-500 size-6 border-2 border-black flex-shrink-0 mt-1"></div>
                    <span className="font-bold">Unlimited SKUs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-500 size-6 border-2 border-black flex-shrink-0 mt-1"></div>
                    <span className="font-bold">
                      Enterprise AI + Custom models
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-500 size-6 border-2 border-black flex-shrink-0 mt-1"></div>
                    <span className="font-bold">Dedicated success manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-500 size-6 border-2 border-black flex-shrink-0 mt-1"></div>
                    <span className="font-bold">Unlimited integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-500 size-6 border-2 border-black flex-shrink-0 mt-1"></div>
                    <span className="font-bold">White-label options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-500 size-6 border-2 border-black flex-shrink-0 mt-1"></div>
                    <span className="font-bold">On-premise deployment</span>
                  </li>
                </ul>
              </div>
              <button className="brutalist-button bg-pink-500 text-white text-xl w-full py-4">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-24 px-6 md:px-10 bg-white border-y-8 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl mb-16 text-center">
            Power Add-Ons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Advanced AI",
                price: "$299",
                icon: "psychology",
                bg: "bg-purple-600",
              },
              {
                name: "Extra Users (10)",
                price: "$199",
                icon: "group_add",
                bg: "bg-cyan-400",
              },
              {
                name: "Compliance Plus",
                price: "$399",
                icon: "shield",
                bg: "bg-pink-500",
              },
              {
                name: "Training Package",
                price: "$999",
                icon: "school",
                bg: "bg-orange-500",
              },
            ].map((addon, idx) => (
              <div
                key={idx}
                className="brutalist-card bg-white p-6 text-center"
              >
                <div
                  className={`${addon.bg} text-white size-20 flex items-center justify-center border-4 border-black mx-auto mb-4`}
                >
                  <span className="material-symbols-outlined text-5xl">
                    {addon.icon}
                  </span>
                </div>
                <h4 className="text-2xl mb-2 font-black uppercase">
                  {addon.name}
                </h4>
                <p className="text-3xl font-black mb-4">{addon.price}/mo</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-10 bg-[#f0f0f0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl mb-16 text-center">
            Pricing FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I switch plans anytime?",
                a: "Absolutely. Upgrade, downgrade, or cancel anytime. No penalties, no questions.",
              },
              {
                q: "What payment methods do you accept?",
                a: "Credit card, ACH, wire transfer, or purchase order for Enterprise.",
              },
              {
                q: "Is there a setup fee?",
                a: "Zero setup fees. We'll get you onboarded and operational within 48 hours.",
              },
              {
                q: "Do you offer discounts for annual contracts?",
                a: "Yes. Pay annually and get 2 months free (15% discount).",
              },
              {
                q: "What happens after the trial?",
                a: "Your trial converts to the plan you selected. Cancel anytime before trial ends.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="brutalist-card bg-white p-8">
                <h4 className="text-2xl font-black mb-4 uppercase">{faq.q}</h4>
                <p className="text-lg font-bold">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6 md:px-10 bg-white border-t-8 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl mb-16 text-center">
            Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-4 border-black">
              <thead>
                <tr className="bg-black text-white">
                  <th className="p-4 text-left font-black uppercase border-4 border-black">
                    Feature
                  </th>
                  <th className="p-4 text-center font-black uppercase border-4 border-black">
                    Starter
                  </th>
                  <th className="p-4 text-center font-black uppercase border-4 border-black bg-purple-600">
                    Professional
                  </th>
                  <th className="p-4 text-center font-black uppercase border-4 border-black">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Users", "5", "25", "Unlimited"],
                  ["SKUs", "1K", "10K", "Unlimited"],
                  ["ERP Integrations", "1", "5", "Unlimited"],
                  ["API Access", "✗", "✓", "✓"],
                  ["AI Forecasting", "Basic", "Advanced", "Enterprise"],
                  ["Support", "Email", "24/7", "Dedicated"],
                  ["Custom Workflows", "✗", "✓", "✓"],
                  ["White Label", "✗", "✗", "✓"],
                ].map((row, idx) => (
                  <tr key={idx} className="border-4 border-black">
                    <td className="p-4 font-bold border-4 border-black bg-gray-100">
                      {row[0]}
                    </td>
                    <td className="p-4 text-center font-bold border-4 border-black">
                      {row[1]}
                    </td>
                    <td className="p-4 text-center font-bold border-4 border-black bg-purple-50">
                      {row[2]}
                    </td>
                    <td className="p-4 text-center font-bold border-4 border-black">
                      {row[3]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-10 bg-[#2d5bff]">
        <div className="max-w-4xl mx-auto brutalist-card bg-linear-to-r from-cyan-400 to-pink-500 text-white p-12 md:p-16 text-center">
          <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
            Start Your 30-Day Free Trial
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-10 uppercase">
            No credit card required. Full access. Zero risk.
          </p>
          <button className="brutalist-button bg-yellow-400 text-black text-2xl px-12 py-6">
            Get Started Now
          </button>
        </div>
      </section>
    </>
  );
}

export default Pricing;
