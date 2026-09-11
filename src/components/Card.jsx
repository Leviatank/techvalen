import { Link } from 'react-router-dom';

export default function Card({ title, description, image, tag, author, date, readTime }) {
  return (
    <article className="group relative flex flex-col rounded-2xl overflow-hidden bg-ink-900/40 border border-ink-800/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-500/10">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
        {tag && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-accent-500/90 text-white backdrop-blur-sm">
            {tag}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display font-semibold text-lg leading-snug text-white mb-2 group-hover:text-accent-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-ink-400 leading-relaxed mb-4 flex-1">
          {description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-ink-800/60">
          {author && (
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-500 to-violet-600 flex items-center justify-center text-xs font-bold text-white">
                {author.split(' ').map((n) => n[0]).join('')}
              </div>
              <span className="text-xs text-ink-400">{author}</span>
            </div>
          )}
          <div className="flex items-center gap-3 text-xs text-ink-500">
            {date && <span>{date}</span>}
            {readTime && (
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {readTime}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
