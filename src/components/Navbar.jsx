import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Audio', path: '/audio' },
  { label: 'Videogiochi', path: '/videogames' },
  { label: 'Smartphone', path: '/smartphones' },
  { label: 'Computer', path: '/computers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/80 backdrop-blur-xl border-b border-ink-800/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="absolute inset-0 bg-accent-500 blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-accent-400 to-violet-600 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            Vale<span className="text-gradient">Tech</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-accent-500/15 border border-accent-500/30'
                    : 'text-ink-300 hover:text-white hover:bg-ink-800/50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-ink-200 hover:bg-ink-800/50 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 pt-4 pb-6 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-accent-500/15 border border-accent-500/30'
                    : 'text-ink-300 hover:text-white hover:bg-ink-800/50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
