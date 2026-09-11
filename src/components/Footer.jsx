import { Link } from 'react-router-dom';
import { Zap, Twitter, Youtube, Github, Rss, ArrowRight } from 'lucide-react';

const sections = [
  { label: 'Home', path: '/' },
  { label: 'Audio', path: '/audio' },
  { label: 'Videogiochi', path: '/videogames' },
  { label: 'Smartphone', path: '/smartphones' },
  { label: 'Computer', path: '/computers' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-800/60 bg-ink-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-400 to-violet-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Vale<span className="text-gradient">Tech</span>
              </span>
            </Link>
            <p className="text-sm text-ink-400 leading-relaxed max-w-xs">
              Rivista professionale di tecnologia e videogiochi. Recensioni, analisi e guide scritte da specialisti del settore.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Twitter, Youtube, Github, Rss].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-ink-400 hover:text-accent-400 hover:bg-ink-800/60 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-4">Sezioni</h4>
            <ul className="space-y-3">
              {sections.map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="text-sm text-ink-300 hover:text-accent-400 transition-colors duration-300">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-4">Redazione</h4>
            <ul className="space-y-3">
              {['Chi siamo', 'Metodologia di test', 'Contatti', 'Lavora con noi', 'Pubblicit\u00e0'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-ink-300 hover:text-accent-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-4">Newsletter</h4>
            <p className="text-sm text-ink-400 mb-4">
              Le notizie tech pi\u00f9 importanti, ogni settimana. Niente spam.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="email@esempio.it"
                className="flex-1 px-4 py-2.5 rounded-lg bg-ink-800/60 border border-ink-700/50 text-sm text-white placeholder-ink-500 focus:outline-none focus:border-accent-500/50 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-lg bg-accent-500 hover:bg-accent-400 text-white transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ink-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-500">\u00a9 2026 ValeTech. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-ink-500 hover:text-ink-300 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-ink-500 hover:text-ink-300 transition-colors">Termini</a>
            <a href="#" className="text-xs text-ink-500 hover:text-ink-300 transition-colors">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
