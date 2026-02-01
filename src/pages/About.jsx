function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-10 bg-white border-b-8 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="brutalist-card bg-orange-500 p-3 inline-block mb-8">
            <span className="font-black text-sm uppercase tracking-widest">
              // SYSTEM INFORMATION
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl mb-12 leading-none">
            Built by Engineers.
            <br />
            For Engineers.
          </h1>
          <p className="text-2xl md:text-3xl font-bold max-w-3xl">
            ProcuraAI emerged from the factory floor, not a boardroom. We know
            manufacturing complexity because we lived it.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 md:px-10 bg-[#2d5bff]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="brutalist-card bg-cyan-400 p-6 inline-block mb-8 rotate-1">
              <h3 className="text-3xl uppercase">Origin Story</h3>
            </div>
            <div className="space-y-6 text-white">
              <p className="text-xl font-bold border-l-8 border-pink-500 pl-6 bg-black/10 py-4">
                Founded in 2020 by former automotive supply chain engineers who
                were tired of spreadsheet chaos and delayed shipments.
              </p>
              <p className="text-xl font-bold border-l-8 border-yellow-400 pl-6 bg-black/10 py-4">
                We built the tool we wish we had: aggressive automation, brutal
                transparency, zero bureaucracy.
              </p>
              <p className="text-xl font-bold border-l-8 border-purple-600 pl-6 bg-black/10 py-4">
                Today, we power procurement for 200+ manufacturers across 15
                countries with $2B+ in tracked spend.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="brutalist-card bg-pink-500 p-8">
              <div className="border-8 border-black bg-white p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-outlined text-6xl">
                    precision_manufacturing
                  </span>
                  <div className="h-24 w-2 bg-black"></div>
                  <span className="material-symbols-outlined text-6xl">
                    auto_awesome
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-xl uppercase">
                      Experience
                    </span>
                    <span className="font-black text-2xl">50+ Years</span>
                  </div>
                  <div className="h-2 bg-black"></div>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-xl uppercase">Team</span>
                    <span className="font-black text-2xl">85 Experts</span>
                  </div>
                  <div className="h-2 bg-black"></div>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-xl uppercase">
                      Patents
                    </span>
                    <span className="font-black text-2xl">12 Filed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 md:px-10 bg-white border-y-8 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl mb-20 text-center">
            Core Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="brutalist-card bg-purple-600 text-white p-10">
              <div className="bg-yellow-400 text-black size-16 flex items-center justify-center border-4 border-black mb-6">
                <span className="material-symbols-outlined text-5xl">bolt</span>
              </div>
              <h3 className="text-3xl mb-4 uppercase">Raw Speed</h3>
              <p className="font-bold text-lg">
                No bloat. No delays. Process orders in milliseconds, not days.
              </p>
            </div>

            <div className="brutalist-card bg-cyan-400 text-black p-10">
              <div className="bg-pink-500 text-white size-16 flex items-center justify-center border-4 border-black mb-6">
                <span className="material-symbols-outlined text-5xl">
                  gavel
                </span>
              </div>
              <h3 className="text-3xl mb-4 uppercase">Brutal Honesty</h3>
              <p className="font-bold text-lg">
                Data tells the truth. We surface issues before they become
                disasters.
              </p>
            </div>

            <div className="brutalist-card bg-orange-500 text-white p-10">
              <div className="bg-green-400 text-black size-16 flex items-center justify-center border-4 border-black mb-6">
                <span className="material-symbols-outlined text-5xl">
                  engineering
                </span>
              </div>
              <h3 className="text-3xl mb-4 uppercase">Engineer First</h3>
              <p className="font-bold text-lg">
                Built by people who understand torque specs and tolerance
                ranges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 md:px-10 bg-[#f0f0f0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl mb-16 text-center">
            Leadership Squad
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "CEO / Co-Founder",
                icon: "person",
                bg: "bg-pink-500",
              },
              {
                name: "Maria Santos",
                role: "CTO / Co-Founder",
                icon: "terminal",
                bg: "bg-cyan-400",
              },
              {
                name: "James Park",
                role: "VP Engineering",
                icon: "build",
                bg: "bg-purple-600",
              },
              {
                name: "Sarah Miller",
                role: "VP Product",
                icon: "widgets",
                bg: "bg-orange-500",
              },
            ].map((person, idx) => (
              <div key={idx} className="brutalist-card bg-white p-6">
                <div
                  className={`${person.bg} size-full aspect-square flex items-center justify-center border-4 border-black mb-4`}
                >
                  <span className="material-symbols-outlined text-7xl text-white">
                    {person.icon}
                  </span>
                </div>
                <h4 className="text-2xl mb-2 font-black uppercase">
                  {person.name}
                </h4>
                <p className="font-bold text-lg uppercase tracking-tight">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 md:px-10 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center border-4 border-white p-8">
              <div className="text-6xl font-black mb-2 text-cyan-400">200+</div>
              <div className="text-xl font-bold uppercase">Clients</div>
            </div>
            <div className="text-center border-4 border-white p-8">
              <div className="text-6xl font-black mb-2 text-pink-500">$2B+</div>
              <div className="text-xl font-bold uppercase">Tracked Spend</div>
            </div>
            <div className="text-center border-4 border-white p-8">
              <div className="text-6xl font-black mb-2 text-orange-500">15</div>
              <div className="text-xl font-bold uppercase">Countries</div>
            </div>
            <div className="text-center border-4 border-white p-8">
              <div className="text-6xl font-black mb-2 text-yellow-400">
                99.9%
              </div>
              <div className="text-xl font-bold uppercase">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto brutalist-card bg-linear-to-br from-cyan-400 via-purple-600 to-pink-500 text-white p-12 md:p-16 text-center">
          <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
            Join the Manufacturing Revolution
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-10 uppercase">
            Transform your procurement process today
          </p>
          <button className="brutalist-button bg-yellow-400 text-black text-2xl px-12 py-6">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
}

export default About;
