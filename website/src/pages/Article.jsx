import { Link, useParams } from 'react-router-dom';
import usePageMeta from '../components/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import { CTASection, SectionHead } from '../components/Blocks.jsx';
import { articles, findArticle, readingTime, formatDate } from '../data/articles.js';
import { SITE_URL, absoluteUrl } from '../seo.js';
import NotFound from './NotFound.jsx';

function Block({ block: [type, content] }) {
  if (type === 'h2') return <h2>{content}</h2>;
  if (type === 'ul') {
    return (
      <ul>
        {content.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p>{content}</p>;
}

export default function Article() {
  const { slug } = useParams();
  const article = findArticle(slug);
  usePageMeta(article ? article.title : 'Page not found', article?.excerpt, {
    noindex: !article,
    type: article && 'article',
    image: article?.image,
    jsonLd: article && {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.excerpt,
      image: absoluteUrl(article.image),
      datePublished: article.date,
      author: { '@type': 'Organization', name: article.author },
      publisher: {
        '@type': 'Organization',
        name: '16Dimensions',
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/brand/logo.png` },
      },
      mainEntityOfPage: `${SITE_URL}/insights/${article.slug}`,
    },
  });

  if (!article) return <NotFound />;

  const related = articles.filter((a) => a.slug !== slug);

  return (
    <>
      <article>
        <header className="article-head">
          <div className="container article-head__inner">
            <Link to="/insights" className="article-head__back">← All insights</Link>
            <span className="badge">{article.category}</span>
            <h1>{article.title}</h1>
            <p className="article-head__meta">
              By {article.author}
              <span aria-hidden="true">·</span>
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span aria-hidden="true">·</span>
              {readingTime(article)} min read
            </p>
          </div>
        </header>

        <div className="container">
          <img className="article__cover" src={article.image} alt={article.title} />
          <div className="prose article__body">
            {article.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </div>
      </article>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Keep reading" title="More from 16Dimensions" />
          <div className="grid grid--2">
            {related.map((a, i) => (
              <Reveal key={a.slug} delay={i * 80}>
                <Link to={`/insights/${a.slug}`} className="post">
                  <img className="post__img" src={a.image} alt="" loading="lazy" />
                  <span className="badge">{a.category}</span>
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want these skills in your teams?"
        text="Every 16Dimensions programme is built around your people and your goals. Tell us what you need."
      />
    </>
  );
}
