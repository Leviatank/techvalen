import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Headphones, Gamepad2, Smartphone, Laptop } from 'lucide-react';
import { categories } from '../data/articles';

const iconMap = {
  Headphones,
  Gamepad2,
  Smartphone,
  Laptop,
};

const stats = [
  { value: '2.400+', label: 'Recensioni pubblicate' },
  { value: '12', label: 'Anni di attivit\u00e0' },
  { value: '8.000+', label: 'Prodotti testati' },
  { value: '1.2M', label: 'Lettori mensili' },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/90 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-transparent to-ink-950/60" />

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/15 rounded-full blur-[100px] animate-pulse-glow"
          style={{ animationDelay: '1.5s' }}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-6 animate-fade-in-down">
              <Sparkles className="w-4 h-4 text-accent-400" />
              <span className="text-xs font-medium text-ink-200">Giornalismo tech dal 2014</span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-white mb-6 animate-fade-in-up">
              Tecnologia e videogiochi,
              <br />
              <span className="text-gradient">raccontati con rigore.</span>
            </h1>

            <p className="text-lg text-ink-300 leading-relaxed max-w-2xl mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Recensioni, analisi e guide scritte da specialisti. Smartphone, computer, audio e gaming: testiamo ogni prodotto noi stessi, senza copioni di PR.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-display font-bold text-2xl text-white">{stat.value}</span>
                  <span className="text-xs text-ink-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-sm font-medium text-accent-400 tracking-wide">Aree di copertura</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2">
                Esplora per categoria
              </h2>
            </div>
            <p className="text-ink-400 max-w-md text-sm leading-relaxed">
              Quattro aree di copertura, ciascuna gestita da specialisti dedicati con una metodologia di test coerente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat, i) => {
              const Icon = iconMap[cat.icon] || Headphones;
              return (
                <Link
                  key={cat.id}
                  to={cat.id === 'audio' ? '/audio' : cat.id === 'videogames' ? '/videogames' : cat.id === 'smartphones' ? '/smartphones' : '/computers'}
                  className="group relative flex flex-col rounded-2xl overflow-hidden bg-ink-900/40 border border-ink-800/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-500/10"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-11 h-11 rounded-xl glass flex items-center justify-center">
                        <Icon className="w-5 h-5 text-accent-400" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-semibold text-lg text-white mb-1 group-hover:text-accent-400 transition-colors duration-300">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-accent-400 mb-2">{cat.tagline}</p>
                    <p className="text-sm text-ink-400 leading-relaxed flex-1 line-clamp-2">
                      {cat.description}
                    </p>
                    <div className="flex items-center gap-1.5 mt-4 text-sm text-accent-400 font-medium">
                      Vai alla sezione
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-accent-500/20 bg-gradient-to-br from-ink-900 via-ink-900 to-violet-950/40 p-8 sm:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/15 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-500/10 rounded-full blur-[80px]" />
            <div className="relative text-center">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Resta sempre aggiornato
              </h2>
              <p className="text-ink-400 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
                Ricevi la nostra newsletter settimanale con le notizie tech e gaming pi\u00f9 importanti. Niente spam, disiscrizione in qualsiasi momento.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="email@esempio.it"
                  className="flex-1 px-5 py-3.5 rounded-xl bg-ink-950/60 border border-ink-700/50 text-sm text-white placeholder-ink-500 focus:outline-none focus:border-accent-500/50 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-accent-500 hover:bg-accent-400 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/30 whitespace-nowrap"
                >
                  Iscriviti
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
