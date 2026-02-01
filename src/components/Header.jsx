import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-black px-6 md:px-10 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <div className="size-10 flex items-center justify-center bg-black text-white border-2 border-black">
          <span className="material-symbols-outlined text-3xl">
            account_tree
          </span>
        </div>
        <h2 className="text-2xl font-black tracking-tighter uppercase">
          ProcuraAI
        </h2>
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        <Link
          className="text-lg font-black hover:underline decoration-4"
          to="/features"
        >
          Features
        </Link>
        <Link
          className="text-lg font-black hover:underline decoration-4"
          to="/about"
        >
          About
        </Link>
        <Link
          className="text-lg font-black hover:underline decoration-4"
          to="/pricing"
        >
          Pricing
        </Link>
        <Link
          className="text-lg font-black hover:underline decoration-4"
          to="/contact"
        >
          Contact
        </Link>
      </nav>
      <div className="flex gap-4">
        <button className="brutalist-button bg-pink-500 text-white text-sm">
          Book Demo
        </button>
        <button className="hidden sm:block brutalist-button bg-cyan-400 text-black text-sm">
          Log In
        </button>
      </div>
    </header>
  );
}

export default Header;
