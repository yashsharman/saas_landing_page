function App() {
  return (
    <div className="relative flex flex-col w-full">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b-4 border-black px-6 md:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 flex items-center justify-center bg-black text-white border-2 border-black">
            <span className="material-symbols-outlined text-3xl">
              account_tree
            </span>
          </div>
          <h2 className="text-2xl font-black tracking-tighter uppercase">
            ProcuraAI
          </h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            className="text-lg font-black hover:underline decoration-4"
            href="#"
          >
            Solutions
          </a>
          <a
            className="text-lg font-black hover:underline decoration-4"
            href="#"
          >
            Logic
          </a>
          <a
            className="text-lg font-black hover:underline decoration-4"
            href="#"
          >
            Pricing
          </a>
        </nav>
        <div className="flex gap-4">
          <button className="brutalist-button bg-neo-yellow text-black text-sm">
            Book Demo
          </button>
          <button className="hidden sm:block brutalist-button bg-white text-black text-sm">
            Log In
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-6 md:px-10 flex justify-center overflow-hidden">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-8 relative z-10">
              <div className="bg-white text-black inline-block px-4 py-2 w-fit brutalist-card translate-x-0 translate-y-0 shadow-none border-2 border-black">
                <span className="font-black text-sm uppercase tracking-widest">
                  v3.0 Neo-Brutalist Logic
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                Smarter
                <br />
                Procurement.
                <br />
                Zero
                <br />
                Guesswork.
              </h1>
              <p className="text-lg md:text-xl font-bold text-white max-w-lg leading-tight bg-black/10 p-4 border-l-8 border-black">
                Revolutionize your manufacturing supply chain with raw
                AI-powered insights. High energy, high clarity, high yield.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="brutalist-button bg-white text-black text-xl px-10 py-5">
                  Start Now
                </button>
                <button className="brutalist-button bg-black text-white text-xl px-10 py-5">
                  Product Tour
                </button>
              </div>
            </div>
            <div className="relative group mt-8 lg:mt-0">
              <div className="brutalist-card bg-neo-green p-4 rotate-2 group-hover:rotate-0 transition-transform relative z-0">
                <div className="bg-black p-1 border-2 border-black h-96">
                  <img
                    alt="Industrial Logic"
                    className="w-full h-full grayscale contrast-125 brightness-75 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjualXDkxTVJwBj9JBgiKEKqZCJxybzVoZg6bX9jMr1ox-wm4NCktG7oW6nsAIrI_t5GCMDd6gfhgi1j7gqez9BP9pc1y4NDd54oXo6P1CdZvS7SIWrWOhPB-e60ne8Mru4uayb0SQB7crzylZqTOOCFvqufXZFmewf_TMuDPQ7kJMP09TVkp80Q1uCSb7U0HiXEAT7sXZMUv-juItW3Ze6nHPlPBs2kyfuZQn6VADSRSXN0xrKgZ934wP9T9w7FsEZT5dSFOaJa0"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center text-black">
                  <span className="font-black text-xl uppercase">
                    Live Stream: Factory_01
                  </span>
                  <span className="size-4 bg-red-600 rounded-full animate-pulse border-2 border-black"></span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 brutalist-card bg-white p-6 -rotate-3 max-w-60 z-20">
                <span className="material-symbols-outlined text-4xl mb-2 text-black">
                  trending_up
                </span>
                <h4 className="text-xl leading-none mb-1 text-black font-black">
                  +40% Lead Time
                </h4>
                <p className="text-xs font-bold uppercase opacity-60 text-black">
                  Optimization achieved
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee Section */}
        <section className="bg-white border-y-4 border-black py-8 overflow-hidden">
          <div className="flex whitespace-nowrap gap-12 animate-marquee items-center">
            <span className="font-black text-3xl uppercase flex items-center gap-4">
              <span className="material-symbols-outlined text-4xl">
                precision_manufacturing
              </span>{" "}
              GEARCORP
            </span>
            <span className="font-black text-3xl uppercase flex items-center gap-4">
              <span className="material-symbols-outlined text-4xl">
                factory
              </span>{" "}
              INDUS-X
            </span>
            <span className="font-black text-3xl uppercase flex items-center gap-4">
              <span className="material-symbols-outlined text-4xl">
                conveyor_belt
              </span>{" "}
              FLOWLINE
            </span>
            <span className="font-black text-3xl uppercase flex items-center gap-4">
              <span className="material-symbols-outlined text-4xl">
                warehouse
              </span>{" "}
              LOGISTRUCT
            </span>
            <span className="font-black text-3xl uppercase flex items-center gap-4">
              <span className="material-symbols-outlined text-4xl">
                robot_2
              </span>{" "}
              AUTO-FAB
            </span>
            <span className="font-black text-3xl uppercase flex items-center gap-4">
              <span className="material-symbols-outlined text-4xl">
                precision_manufacturing
              </span>{" "}
              GEARCORP
            </span>
            <span className="font-black text-3xl uppercase flex items-center gap-4">
              <span className="material-symbols-outlined text-4xl">
                factory
              </span>{" "}
              INDUS-X
            </span>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 px-6 md:px-10 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl mb-4">How it works</h2>
              <p className="text-2xl font-bold uppercase tracking-widest">
                The logic of efficiency
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-2 bg-black -translate-y-1/2"></div>

              <div className="brutalist-card p-8 w-full md:w-1/4 relative z-10 text-center bg-neo-yellow">
                <div className="bg-black text-white size-12 flex items-center justify-center mx-auto mb-4 border-2 border-black">
                  <span className="font-black text-2xl">01</span>
                </div>
                <h3 className="text-2xl mb-4">Connect</h3>
                <p className="font-bold text-sm leading-tight">
                  Integrate ERP and supplier databases in minutes.
                </p>
              </div>

              <div className="md:hidden">
                <span className="material-symbols-outlined text-6xl rotate-90">
                  arrow_forward
                </span>
              </div>

              <div className="hidden md:flex absolute left-[25%] top-1/2 -translate-y-1/2 z-20">
                <div className="bg-black text-white p-2 border-2 border-white">
                  <span className="material-symbols-outlined text-3xl">
                    arrow_forward
                  </span>
                </div>
              </div>

              <div className="brutalist-card p-8 w-full md:w-1/4 relative z-10 text-center bg-white">
                <div className="bg-black text-white size-12 flex items-center justify-center mx-auto mb-4 border-2 border-black">
                  <span className="font-black text-2xl">02</span>
                </div>
                <h3 className="text-2xl mb-4">Analyze</h3>
                <p className="font-bold text-sm leading-tight">
                  AI identifies bottlenecks and risk patterns.
                </p>
              </div>

              <div className="md:hidden">
                <span className="material-symbols-outlined text-6xl rotate-90">
                  arrow_forward
                </span>
              </div>

              <div className="hidden md:flex absolute left-[65%] top-1/2 -translate-y-1/2 z-20">
                <div className="bg-black text-white p-2 border-2 border-white">
                  <span className="material-symbols-outlined text-3xl">
                    arrow_forward
                  </span>
                </div>
              </div>

              <div className="brutalist-card p-8 w-full md:w-1/4 relative z-10 text-center bg-neo-green">
                <div className="bg-black text-white size-12 flex items-center justify-center mx-auto mb-4 border-2 border-black">
                  <span className="font-black text-2xl">03</span>
                </div>
                <h3 className="text-2xl mb-4">Automate</h3>
                <p className="font-bold text-sm leading-tight">
                  Execute orders and RFQs with precision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 md:px-10 bg-[#f0f0f0] border-t-4 border-black">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
              <h2 className="text-5xl md:text-6xl max-w-2xl">
                Heavyweight Features
              </h2>
              <button className="brutalist-button bg-black text-white">
                Full Spec Sheet
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Feature 1 */}
              <div className="brutalist-card p-8 flex flex-col h-full">
                <div className="bg-cobalt text-white w-fit p-3 border-4 border-black mb-6">
                  <span className="material-symbols-outlined text-4xl">
                    monitoring
                  </span>
                </div>
                <h3 className="text-3xl mb-4">Real-time Data Insights</h3>
                <p className="font-bold mb-8 flex-1">
                  Global material prices and supplier metrics tracking at raw
                  machine speed.
                </p>
                <div className="border-4 border-black bg-white h-40 flex items-end p-2 gap-1 overflow-hidden">
                  <div className="bg-black w-1/4 h-1/2"></div>
                  <div className="bg-cobalt w-1/4 h-3/4"></div>
                  <div className="bg-black w-1/4 h-1/3"></div>
                  <div className="bg-neo-green w-1/4 h-full"></div>
                  <div className="bg-black w-1/4 h-2/3"></div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="brutalist-card p-8 flex flex-col h-full bg-white">
                <div className="bg-red-500 text-white w-fit p-3 border-4 border-black mb-6">
                  <span className="material-symbols-outlined text-4xl">
                    report_problem
                  </span>
                </div>
                <h3 className="text-3xl mb-4">Error Prevention</h3>
                <p className="font-bold mb-8 flex-1">
                  Proprietary AI audits purchase orders. No flaws. No excuses.
                </p>
                <div className="border-4 border-black p-4 bg-neo-yellow/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="size-6 border-4 border-black bg-neo-green"></div>
                    <div className="h-4 bg-black w-full"></div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="size-6 border-4 border-black bg-neo-green"></div>
                    <div className="h-4 bg-black w-2/3"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-6 border-4 border-black bg-red-500"></div>
                    <div className="h-4 bg-black w-3/4"></div>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="brutalist-card p-8 flex flex-col h-full bg-neo-yellow">
                <div className="bg-black text-white w-fit p-3 border-4 border-black mb-6">
                  <span className="material-symbols-outlined text-4xl">
                    dynamic_form
                  </span>
                </div>
                <h3 className="text-3xl mb-4 uppercase">RFQ ENGINE 2.0</h3>
                <p className="font-bold mb-8 flex-1">
                  Routing RFQs to best-fit suppliers based on lead-time logic.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-16 border-4 border-black bg-white flex items-center justify-center font-black">
                    RFQ_A
                  </div>
                  <div className="h-16 border-4 border-black bg-cobalt text-white flex items-center justify-center font-black">
                    SUPPLIER_X
                  </div>
                  <div className="h-16 border-4 border-black bg-black text-white flex items-center justify-center font-black">
                    AUTO
                  </div>
                  <div className="h-16 border-4 border-black bg-white flex items-center justify-center font-black">
                    MATCHED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 md:px-10">
          <div className="max-w-4xl mx-auto brutalist-card bg-black text-white p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 opacity-20 rotate-12">
              <span className="material-symbols-outlined text-[200px]">
                rocket_launch
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl mb-8 relative z-10 leading-none">
              Ready for the transformation?
            </h2>
            <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl mx-auto relative z-10 uppercase tracking-tight">
              Join 200+ manufacturers who cut overhead by 30%. No fluff. Just
              results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <button className="brutalist-button bg-neo-yellow text-black text-2xl px-12 py-6">
                Book Session
              </button>
              <button className="brutalist-button bg-white text-black text-2xl px-12 py-6">
                Free Trial
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-8 border-black py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-12 flex items-center justify-center bg-black text-white">
                <span className="material-symbols-outlined text-4xl">
                  account_tree
                </span>
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tighter">
                ProcuraAI
              </h2>
            </div>
            <p className="text-2xl font-bold max-w-md mb-8">
              The leading brutalist platform for high-complexity manufacturing
              procurement.
            </p>
            <div className="flex gap-4">
              <div className="size-12 border-4 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer">
                <span className="material-symbols-outlined">public</span>
              </div>
              <div className="size-12 border-4 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer">
                <span className="material-symbols-outlined">group</span>
              </div>
              <div className="size-12 border-4 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer">
                <span className="material-symbols-outlined">share</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl mb-6 font-black uppercase underline decoration-4 underline-offset-4">
              Logic
            </h4>
            <ul className="space-y-4 text-lg font-bold uppercase">
              <li>
                <a className="hover:bg-neo-yellow" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="hover:bg-neo-yellow" href="#">
                  Security
                </a>
              </li>
              <li>
                <a className="hover:bg-neo-yellow" href="#">
                  Nodes
                </a>
              </li>
              <li>
                <a className="hover:bg-neo-yellow" href="#">
                  API
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl mb-6 font-black uppercase underline decoration-4 underline-offset-4">
              Collective
            </h4>
            <ul className="space-y-4 text-lg font-bold uppercase">
              <li>
                <a className="hover:bg-neo-yellow" href="#">
                  Company
                </a>
              </li>
              <li>
                <a className="hover:bg-neo-yellow" href="#">
                  Manifesto
                </a>
              </li>
              <li>
                <a className="hover:bg-neo-yellow" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className="hover:bg-neo-yellow" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xl font-black uppercase">
            © 2024 ProcuraAI CORE. RAW DATA ONLY.
          </p>
          <div className="bg-black text-white px-4 py-2 text-sm font-bold uppercase">
            System: Operational
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
