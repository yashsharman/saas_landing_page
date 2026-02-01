function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-10 bg-linear-to-br from-cyan-400 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="brutalist-card bg-yellow-400 text-black p-3 inline-block mb-8">
            <span className="font-black text-sm uppercase tracking-widest">
              DIRECT LINE
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl mb-8 leading-none">
            Let's Talk
            <br />
            Manufacturing
          </h1>
          <p className="text-2xl font-bold max-w-3xl mx-auto uppercase">
            Got questions? Need a demo? Want to optimize your supply chain?
            We're here.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-5xl mb-10">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-xl font-black uppercase mb-3">
                  Your Name *
                </label>
                <input
                  type="text"
                  className="w-full border-4 border-black p-4 text-lg font-bold focus:outline-none focus:ring-4 focus:ring-cyan-400"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-xl font-black uppercase mb-3">
                  Company Email *
                </label>
                <input
                  type="email"
                  className="w-full border-4 border-black p-4 text-lg font-bold focus:outline-none focus:ring-4 focus:ring-cyan-400"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-xl font-black uppercase mb-3">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full border-4 border-black p-4 text-lg font-bold focus:outline-none focus:ring-4 focus:ring-cyan-400"
                  placeholder="Acme Manufacturing"
                />
              </div>

              <div>
                <label className="block text-xl font-black uppercase mb-3">
                  What brings you here? *
                </label>
                <select className="w-full border-4 border-black p-4 text-lg font-bold focus:outline-none focus:ring-4 focus:ring-cyan-400">
                  <option>Select an option</option>
                  <option>Book a Demo</option>
                  <option>Pricing Question</option>
                  <option>Technical Support</option>
                  <option>Partnership Inquiry</option>
                  <option>General Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xl font-black uppercase mb-3">
                  Your Message *
                </label>
                <textarea
                  rows="6"
                  className="w-full border-4 border-black p-4 text-lg font-bold focus:outline-none focus:ring-4 focus:ring-cyan-400"
                  placeholder="Tell us about your procurement challenges..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="brutalist-button bg-orange-500 text-white text-2xl px-12 py-5 w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-5xl mb-10">Or Reach Out Directly</h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="brutalist-card bg-cyan-50 p-8">
                <div className="bg-cyan-500 text-white size-16 flex items-center justify-center border-4 border-black mb-4">
                  <span className="material-symbols-outlined text-4xl">
                    mail
                  </span>
                </div>
                <h4 className="text-2xl mb-3 font-black uppercase">Email</h4>
                <a
                  href="mailto:hello@procuraai.com"
                  className="text-xl font-bold hover:underline"
                >
                  hello@procuraai.com
                </a>
                <p className="text-sm font-bold uppercase mt-2 opacity-70">
                  Response within 4 hours
                </p>
              </div>

              {/* Phone */}
              <div className="brutalist-card bg-pink-50 p-8">
                <div className="bg-pink-500 text-white size-16 flex items-center justify-center border-4 border-black mb-4">
                  <span className="material-symbols-outlined text-4xl">
                    phone
                  </span>
                </div>
                <h4 className="text-2xl mb-3 font-black uppercase">Phone</h4>
                <a
                  href="tel:+15551234567"
                  className="text-xl font-bold hover:underline"
                >
                  +1 (555) 123-4567
                </a>
                <p className="text-sm font-bold uppercase mt-2 opacity-70">
                  Mon-Fri, 8AM-8PM EST
                </p>
              </div>

              {/* Office */}
              <div className="brutalist-card bg-purple-100 p-8">
                <div className="bg-purple-600 text-white size-16 flex items-center justify-center border-4 border-black mb-4">
                  <span className="material-symbols-outlined text-4xl">
                    location_on
                  </span>
                </div>
                <h4 className="text-2xl mb-3 font-black uppercase">
                  Headquarters
                </h4>
                <p className="text-xl font-bold">
                  1234 Industrial Blvd
                  <br />
                  Detroit, MI 48201
                  <br />
                  United States
                </p>
              </div>

              {/* Social */}
              <div className="brutalist-card bg-orange-100 p-8">
                <div className="bg-orange-500 text-white size-16 flex items-center justify-center border-4 border-black mb-4">
                  <span className="material-symbols-outlined text-4xl">
                    share
                  </span>
                </div>
                <h4 className="text-2xl mb-3 font-black uppercase">
                  Social Media
                </h4>
                <div className="flex gap-4">
                  <div className="size-12 border-4 border-black bg-pink-500 text-white flex items-center justify-center hover:bg-cyan-400 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined">public</span>
                  </div>
                  <div className="size-12 border-4 border-black bg-cyan-400 text-white flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined">group</span>
                  </div>
                  <div className="size-12 border-4 border-black bg-purple-600 text-white flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined">
                      camera_alt
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-24 px-6 md:px-10 bg-[#f0f0f0] border-y-8 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl mb-16 text-center">
            Support Channels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Live Chat */}
            <div className="brutalist-card bg-green-400 text-black p-10 text-center">
              <div className="bg-white size-20 flex items-center justify-center border-4 border-black mx-auto mb-6">
                <span className="material-symbols-outlined text-5xl">chat</span>
              </div>
              <h3 className="text-3xl mb-4 uppercase">Live Chat</h3>
              <p className="font-bold text-lg mb-6">
                Instant answers from our support team
              </p>
              <div className="text-sm font-black uppercase bg-black text-white px-4 py-2 inline-block">
                Online Now
              </div>
            </div>

            {/* Knowledge Base */}
            <div className="brutalist-card bg-yellow-400 text-black p-10 text-center">
              <div className="bg-black text-white size-20 flex items-center justify-center border-4 border-black mx-auto mb-6">
                <span className="material-symbols-outlined text-5xl">book</span>
              </div>
              <h3 className="text-3xl mb-4 uppercase">Docs & Guides</h3>
              <p className="font-bold text-lg mb-6">
                Comprehensive documentation and tutorials
              </p>
              <button className="brutalist-button bg-black text-white text-sm px-6 py-3">
                Browse Docs
              </button>
            </div>

            {/* Community */}
            <div className="brutalist-card bg-cyan-400 text-black p-10 text-center">
              <div className="bg-purple-600 text-white size-20 flex items-center justify-center border-4 border-black mx-auto mb-6">
                <span className="material-symbols-outlined text-5xl">
                  forum
                </span>
              </div>
              <h3 className="text-3xl mb-4 uppercase">Community</h3>
              <p className="font-bold text-lg mb-6">
                Connect with 5K+ procurement professionals
              </p>
              <button className="brutalist-button bg-purple-600 text-white text-sm px-6 py-3">
                Join Forum
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl mb-16 text-center">
            Global Presence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                city: "Detroit",
                country: "USA",
                flag: "🇺🇸",
                bg: "bg-pink-500",
              },
              {
                city: "Munich",
                country: "Germany",
                flag: "🇩🇪",
                bg: "bg-cyan-400",
              },
              {
                city: "Tokyo",
                country: "Japan",
                flag: "🇯🇵",
                bg: "bg-purple-600",
              },
              {
                city: "São Paulo",
                country: "Brazil",
                flag: "🇧🇷",
                bg: "bg-orange-500",
              },
            ].map((office, idx) => (
              <div
                key={idx}
                className="brutalist-card bg-white p-6 text-center"
              >
                <div
                  className={`${office.bg} text-white size-20 flex items-center justify-center text-5xl border-4 border-black mx-auto mb-4`}
                >
                  {office.flag}
                </div>
                <h4 className="text-2xl mb-2 font-black uppercase">
                  {office.city}
                </h4>
                <p className="font-bold text-lg">{office.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map/CTA Section */}
      <section className="py-24 px-6 md:px-10 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
            Ready to Transform Your Procurement?
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-10 uppercase">
            Schedule a personalized demo with our engineering team
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="brutalist-button bg-cyan-400 text-black text-2xl px-12 py-6">
              Book Demo
            </button>
            <button className="brutalist-button bg-pink-500 text-white text-2xl px-12 py-6">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
