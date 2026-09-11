import { ArrowLeft, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { computersArticles } from '../data/articles';

export default function Computers() {
  return (
    <div>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/90 to-ink-950" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-violet-500/15 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-ink-400 hover:text-accent-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alla home
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center">
              <Laptop className="w-7 h-7 text-accent-400" />
            </div>
            <div>
              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                Computer
              </h1>
              <p className="text-accent-400 text-sm mt-1">Guide CPU, laptop e componenti</p>
            </div>
          </div>

          <p className="text-ink-300 leading-relaxed max-w-2xl">
            Processori, schede video, laptop, componenti PC e guide all\u2019assemblaggio. Tutto il mondo dell\u2019hardware consumer spiegato bene.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-7 rounded-full bg-gradient-to-b from-violet-500 to-accent-400" />
            <h2 className="font-display font-bold text-2xl text-white">Articoli</h2>
            <span className="text-sm text-ink-500">({computersArticles.length})</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {computersArticles.map((article) => (
              <Card
                key={article.id}
                title={article.title}
                description={article.description}
                image={article.image}
                tag={article.tag}
                author={article.author}
                date={article.date}
                readTime={article.readTime}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
