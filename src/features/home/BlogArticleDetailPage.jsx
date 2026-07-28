import { CheckCircle, Clock, PlayCircle, ShareNetwork } from '@phosphor-icons/react'
import ProjectWorkspaceHeader from '../shared/ProjectWorkspaceHeader'

function ArticleImage({ image }) {
  if (!image) return null

  return (
    <figure className="mt-6 overflow-hidden rounded-[18px] border border-[#e0e0e0] bg-white">
      <img src={image.src} alt={image.alt || ''} className="h-[220px] w-full object-cover" loading="lazy" />
      {image.caption ? (
        <figcaption className="typo-caption border-t border-[#e0e0e0] px-3 py-2 leading-[1.45] text-[#686868]">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

function ArticleVideo({ video }) {
  if (!video) return null

  return (
    <section className="mt-6">
      <div className="overflow-hidden rounded-[18px] border border-[#e0e0e0] bg-black">
        <div className="relative">
          <video
            className="h-[220px] w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={video.poster}
          >
            <source src={video.src} type={video.type || 'video/mp4'} />
          </video>
          <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-2 rounded-full bg-black/64 px-3 py-1 text-white backdrop-blur">
            <PlayCircle size={16} weight="fill" />
            <span className="typo-caption">{video.label || 'Video'}</span>
          </div>
        </div>
        <div className="bg-white p-3">
          <h2 className="typo-body-strong text-black">{video.title}</h2>
          {video.caption ? (
            <p className="typo-caption mt-1 leading-[1.45] text-[#686868]">{video.caption}</p>
          ) : null}
        </div>
      </div>
    </section>
  )
}

function ArticleGallery({ gallery }) {
  if (!gallery?.length) return null

  return (
    <section className="mt-6">
      <h2 className="typo-title-16-strong text-black">Visual references</h2>
      <div className="no-scrollbar mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1">
        {gallery.map((item) => (
          <figure key={`${item.src}-${item.caption}`} className="w-[268px] shrink-0 snap-start overflow-hidden rounded-[18px] border border-[#e0e0e0] bg-white">
            <img src={item.src} alt={item.alt || ''} className="h-[178px] w-full object-cover" loading="lazy" />
            <figcaption className="typo-caption px-3 py-2 leading-[1.45] text-[#686868]">{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

function BeforeAfterBlock({ beforeAfter }) {
  if (!beforeAfter) return null

  return (
    <section className="mt-6">
      <h2 className="typo-title-16-strong text-black">{beforeAfter.title}</h2>
      {beforeAfter.caption ? (
        <p className="typo-body mt-2 leading-[1.55] text-[#525252]">{beforeAfter.caption}</p>
      ) : null}
      <div className="mt-3 grid grid-cols-2 gap-2">
        {[
          ['Before', beforeAfter.before],
          ['After', beforeAfter.after],
        ].map(([label, item]) => (
          <figure key={label} className="overflow-hidden rounded-[16px] border border-[#e0e0e0] bg-white">
            <div className="relative h-[154px]">
              <img src={item.src} alt={item.alt || ''} className="size-full object-cover" loading="lazy" />
              <span className="typo-caption absolute left-2 top-2 rounded-full bg-black/70 px-2 py-1 text-white backdrop-blur">
                {label}
              </span>
            </div>
            <figcaption className="typo-caption px-2 py-2 leading-[1.35] text-[#686868]">{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

function MaterialBoard({ board }) {
  if (!board?.items?.length) return null

  return (
    <section className="mt-6 rounded-[18px] border border-[#e0e0e0] bg-[#fbfbfb] p-3">
      <h2 className="typo-title-16-strong text-black">{board.title}</h2>
      {board.caption ? (
        <p className="typo-caption mt-1 leading-[1.45] text-[#686868]">{board.caption}</p>
      ) : null}
      <div className="mt-3 grid grid-cols-2 gap-2">
        {board.items.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-[14px] border border-[#e0e0e0] bg-white">
            <img src={item.image} alt="" className="h-[96px] w-full object-cover" loading="lazy" />
            <div className="p-2">
              <h3 className="typo-caption typo-weight-bold text-black">{item.title}</h3>
              <p className="typo-caption mt-1 leading-[1.35] text-[#686868]">{item.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function TipCallout({ callout }) {
  if (!callout) return null

  return (
    <aside className="mt-6 rounded-[18px] border border-[#d7eee2] bg-[#f3fbf6] p-4">
      <p className="typo-caption typo-weight-bold uppercase text-[#267449]">{callout.eyebrow || 'Tip'}</p>
      <h2 className="typo-title-16-strong mt-1 text-[#173324]">{callout.title}</h2>
      <p className="typo-body mt-2 leading-[1.6] text-[#3f5b4b]">{callout.body}</p>
    </aside>
  )
}

function FaqBlock({ faqs }) {
  if (!faqs?.length) return null

  return (
    <section className="mt-6">
      <h2 className="typo-title-16-strong text-black">Common questions</h2>
      <div className="mt-3 divide-y divide-[#e0e0e0] overflow-hidden rounded-[16px] border border-[#e0e0e0] bg-white">
        {faqs.map((faq) => (
          <details key={faq.question} className="group px-3 py-3">
            <summary className="typo-body-strong cursor-pointer list-none text-black">
              {faq.question}
            </summary>
            <p className="typo-body mt-2 leading-[1.55] text-[#525252]">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function BlogArticleDetailPage({ article, onBack }) {
  if (!article) return null

  return (
    <main className="min-h-dvh w-full overflow-x-hidden bg-white font-['Urbanist'] text-black">
      <section className="mx-auto w-full max-w-[390px] pb-10 pt-16">
        <ProjectWorkspaceHeader
          title="Blogs & Articles"
          subtitle={article.category}
          onBack={onBack}
          actions={(
            <button type="button" aria-label="Share article" className="grid size-9 place-items-center rounded-[12px] border border-[#e0e0e0] bg-white text-black">
              <ShareNetwork size={18} />
            </button>
          )}
        />

        <article>
          <div className="relative h-[236px] overflow-hidden bg-[#f2f2f2]">
            <img src={article.image} alt="" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-white">
              <p className="typo-caption typo-weight-bold uppercase text-white/80">{article.category}</p>
              <h1 className="typo-title-20-strong mt-2 text-white">{article.title}</h1>
            </div>
          </div>

          <div className="border-b border-[#e0e0e0] px-4 py-4">
            <div className="flex items-center justify-between gap-3">
              <span className="typo-meta flex min-w-0 items-center gap-2 text-[#686868]">
                <Clock size={16} />
                <span>{article.meta}</span>
              </span>
              <span className="typo-meta shrink-0 text-[#686868]">{article.publishedDate}</span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <img src="/hynt-home/homepagerev/hynt-icon.svg" alt="" className="h-[12px] w-[20px] shrink-0 object-contain" />
              <p className="typo-meta typo-weight-semibold text-[#525252]">{article.author}</p>
            </div>
          </div>

          <div className="px-4 py-5">
            <p className="typo-title-16 leading-[1.6] text-[#2d2d2d]">{article.intro}</p>

            {article.summary?.length ? (
              <section className="mt-6 rounded-[16px] border border-[#e0e0e0] bg-[#fbfbfb] p-4">
                <h2 className="typo-body-strong text-black">In this guide</h2>
                <ul className="mt-3 space-y-2">
                  {article.summary.map((item) => (
                    <li key={item} className="typo-body flex gap-2 leading-[1.5] text-[#525252]">
                      <CheckCircle size={18} weight="fill" className="mt-0.5 shrink-0 text-[#26c485]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {article.stats?.length ? (
              <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-[16px] border border-[#e0e0e0] bg-white">
                {article.stats.map(([value, label]) => (
                  <div key={label} className="border-r border-[#e0e0e0] p-3 text-center last:border-r-0">
                    <p className="typo-title-20-strong text-black">{value}</p>
                    <p className="typo-caption mt-1 text-[#686868]">{label}</p>
                  </div>
                ))}
              </div>
            ) : null}

            <ArticleImage image={article.leadImage} />

            {article.quote ? (
              <blockquote className="mt-6 border-l-4 border-[#26c485] bg-[#f3fbf6] px-4 py-3">
                <p className="typo-title-16 leading-[1.55] text-[#173324]">{article.quote}</p>
              </blockquote>
            ) : null}

            <ArticleVideo video={article.video} />

            <div className="mt-6 space-y-6">
              {article.sections?.map((section) => (
                <section key={section.heading}>
                  <h2 className="typo-title-16-strong text-black">{section.heading}</h2>
                  <p className="typo-body mt-2 leading-[1.65] text-[#525252]">{section.body}</p>
                </section>
              ))}
            </div>

            <BeforeAfterBlock beforeAfter={article.beforeAfter} />

            <TipCallout callout={article.callout} />

            <MaterialBoard board={article.materialBoard} />

            {article.checklist?.length ? (
              <section className="mt-6">
                <h2 className="typo-title-16-strong text-black">Design checklist</h2>
                <ul className="mt-3 space-y-2">
                  {article.checklist.map((item) => (
                    <li key={item} className="typo-body flex gap-2 text-[#525252]">
                      <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-[6px] bg-[#26c485] text-white">
                        <CheckCircle size={14} weight="fill" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {article.steps?.length ? (
              <section className="mt-6">
                <h2 className="typo-title-16-strong text-black">Planning sequence</h2>
                <ol className="mt-3 space-y-3">
                  {article.steps.map((item, index) => (
                    <li key={item} className="flex gap-3">
                      <span className="typo-caption grid size-6 shrink-0 place-items-center rounded-full bg-black text-white">{index + 1}</span>
                      <p className="typo-body leading-[1.55] text-[#525252]">{item}</p>
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}

            {article.comparisonTable?.length ? (
              <section className="mt-6">
                <h2 className="typo-title-16-strong text-black">Quick comparison</h2>
                <div className="mt-3 overflow-hidden rounded-[14px] border border-[#e0e0e0]">
                  <table className="w-full border-collapse bg-white text-left">
                    <thead className="bg-[#f5f5f5]">
                      <tr>
                        {article.comparisonTable[0].map((heading) => (
                          <th key={heading} className="typo-caption px-3 py-2 text-black">{heading}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {article.comparisonTable.slice(1).map((row) => (
                        <tr key={row.join('-')} className="border-t border-[#e0e0e0]">
                          {row.map((cell) => (
                            <td key={cell} className="typo-caption px-3 py-2 leading-[1.4] text-[#525252]">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ) : null}

            <ArticleGallery gallery={article.gallery} />

            <FaqBlock faqs={article.faqs} />

            {article.takeaway ? (
              <section className="mt-6 rounded-[16px] border border-[#d7eee2] bg-[#f3fbf6] p-4">
                <h2 className="typo-body-strong text-[#173324]">Key takeaway</h2>
                <p className="typo-body mt-2 leading-[1.6] text-[#3f5b4b]">{article.takeaway}</p>
              </section>
            ) : null}

            {article.tags?.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="typo-caption rounded-full border border-[#e0e0e0] bg-white px-3 py-2 text-[#525252]">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </article>
      </section>
    </main>
  )
}

export default BlogArticleDetailPage
