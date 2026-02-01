import { Link } from "react-router-dom";

function Footer() {
  return (
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
            <div className="size-12 border-4 border-black bg-pink-500 text-white flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
              <span className="material-symbols-outlined">public</span>
            </div>
            <div className="size-12 border-4 border-black bg-cyan-400 text-white flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
              <span className="material-symbols-outlined">group</span>
            </div>
            <div className="size-12 border-4 border-black bg-orange-500 text-white flex items-center justify-center hover:bg-pink-500 transition-colors cursor-pointer">
              <span className="material-symbols-outlined">share</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xl mb-6 font-black uppercase underline decoration-4 underline-offset-4">
            Product
          </h4>
          <ul className="space-y-4 text-lg font-bold uppercase">
            <li>
              <Link
                className="hover:bg-pink-500 hover:text-white px-2"
                to="/features"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-cyan-400 hover:text-white px-2"
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li>
              <a className="hover:bg-orange-500 hover:text-white px-2" href="#">
                Security
              </a>
            </li>
            <li>
              <a className="hover:bg-purple-600 hover:text-white px-2" href="#">
                API
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl mb-6 font-black uppercase underline decoration-4 underline-offset-4">
            Company
          </h4>
          <ul className="space-y-4 text-lg font-bold uppercase">
            <li>
              <Link
                className="hover:bg-green-400 hover:text-white px-2"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <a className="hover:bg-purple-600 hover:text-white px-2" href="#">
                Careers
              </a>
            </li>
            <li>
              <Link
                className="hover:bg-cyan-400 hover:text-white px-2"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <a className="hover:bg-orange-500 hover:text-white px-2" href="#">
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
  );
}

export default Footer;
