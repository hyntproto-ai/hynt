import { useState } from 'react'
import { Clock } from '@phosphor-icons/react'
import ProjectWorkspaceHeader from '../shared/ProjectWorkspaceHeader'
import BlogArticleDetailPage from './BlogArticleDetailPage'
import { homeBlogArticles } from './homeBlogArticles'

function HomeBlogsPage({ onBack }) {
  const [selectedArticle, setSelectedArticle] = useState(null)
  const featuredArticles = homeBlogArticles.slice(0, 2)
  const articleList = homeBlogArticles.concat(homeBlogArticles)

  if (selectedArticle) {
    return (
      <BlogArticleDetailPage
        article={selectedArticle}
        onBack={() => setSelectedArticle(null)}
      />
    )
  }

  return (
    <main className="min-h-dvh w-full overflow-x-hidden bg-[#fbfbfb] font-['Urbanist'] text-black">
      <section className="mx-auto w-full max-w-[390px] pb-10 pt-16">
        <ProjectWorkspaceHeader
          title="Blogs & Articles"
          subtitle="Ideas, planning guides, and product advice"
          onBack={onBack}
        />

        <div className="py-5">
          <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-4">
            {featuredArticles.map((featuredArticle) => (
              <button
                key={`${featuredArticle.id}-featured`}
                type="button"
                onClick={() => setSelectedArticle(featuredArticle)}
                className="block w-full shrink-0 snap-start overflow-hidden rounded-[18px] border border-[#e0e0e0] bg-white text-left"
              >
                <div className="relative h-[190px] overflow-hidden bg-[#f2f2f2]">
                  <img src={featuredArticle.image} alt="" className="absolute inset-0 size-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/8 to-transparent" />
                  <span className="typo-caption absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-black">
                    Featured
                  </span>
                </div>
                <div className="p-4">
                  <p className="typo-caption typo-weight-bold uppercase text-[#267449]">{featuredArticle.category}</p>
                  <h2 className="typo-title-20-strong mt-1 text-black">{featuredArticle.title}</h2>
                  <div className="mt-3 flex items-center gap-3 text-[#686868]">
                    <span className="typo-meta flex items-center gap-1">
                      <Clock size={16} />
                      {featuredArticle.meta}
                    </span>
                    <span className="typo-meta flex items-center gap-2">
                      <img src="/hynt-home/homepagerev/hynt-icon.svg" alt="" className="h-[11px] w-[18px] shrink-0 object-contain" />
                      {featuredArticle.author}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 pb-4">
          {['All', 'Team HYNT', 'Planning', 'Materials', 'Lighting', 'Storage'].map((topic, index) => (
            <button
              key={topic}
              type="button"
              className={`typo-meta shrink-0 rounded-full border px-4 py-2 ${index === 0 ? 'border-black bg-black text-white' : 'border-[#e0e0e0] bg-white text-black'}`}
            >
              {topic === 'Team HYNT' ? <img src="/hynt-home/homepagerev/hynt-icon.svg" alt="" className="mr-2 inline-block h-[11px] w-[18px] object-contain align-[-1px]" /> : null}
              {topic}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 px-4 pb-5">
          {articleList.map((article, index) => (
            <button
              key={`${article.id || article.title}-${index}`}
              type="button"
              onClick={() => setSelectedArticle(article)}
              className="overflow-hidden rounded-[16px] border border-[#e0e0e0] bg-white text-left"
            >
              <img src={article.image} alt="" className="h-[118px] w-full object-cover" />
              <div className="p-3">
                <p className="typo-caption text-[#267449]">{article.category}</p>
                <h2 className="typo-body-strong mt-1 line-clamp-3 text-black">{article.title}</h2>
                <p className="typo-caption mt-2 flex items-center gap-1 truncate text-[#6f6f6f]">
                  <Clock size={14} />
                  {article.meta}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomeBlogsPage
