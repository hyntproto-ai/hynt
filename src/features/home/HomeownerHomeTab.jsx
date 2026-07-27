import { useLayoutEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  BookmarkSimple,
  Calendar,
  CalendarDots,
  CaretLeft,
  ImagesSquare,
  MapPinSimpleArea,
  PaperPlaneTilt,
  PhoneCall,
  SealCheck,
  Sparkle,
  Star,
  WhatsappLogo,
} from '@phosphor-icons/react'
import Button from '../../components/ui/Button'
import HomeBannerCarousel from './HomeBannerCarousel'
import HomeBlogsSection from './HomeBlogsSection'
import HomeExploreCategoriesGrid from './HomeExploreCategoriesGrid'
import HomeSearchBar from './HomeSearchBar'
import HomeTopPromo from './HomeTopPromo'

function HomeDivider({ thick = false }) {
  return <div className={`${thick ? 'h-[6px]' : 'h-px'} w-full bg-[#e0e0e0]`} />
}

function HomeBrandWatermark() {
  return (
    <section className="grid h-24 place-items-center overflow-hidden border-t border-[#e0e0e0] bg-white">
      <img src="/hynt-home/logo-green.png" alt="" className="h-[130px] w-[216px] object-contain opacity-[0.06] grayscale" />
    </section>
  )
}

function HomeNestedTopbar({ title, onBack }) {
  return (
    <div className="sticky top-0 z-50 border-b border-black/[0.08] bg-[linear-gradient(180deg,#fff_0%,rgba(255,255,255,0.92)_100%)] pb-2 pt-[env(safe-area-inset-top)] backdrop-blur-[12px]">
      <header className="px-4 py-3">
        <div className="flex h-8 items-center justify-between gap-3">
          <button type="button" onClick={onBack} className="flex min-w-0 items-center gap-4 text-left">
            <span className="grid size-6 shrink-0 place-items-center rounded">
              <CaretLeft size={24} />
            </span>
            <span className="min-w-0">
              <span className="typo-section-title block truncate text-black">{title}</span>
            </span>
          </button>
          <span className="size-10 shrink-0 opacity-0" aria-hidden="true" />
        </div>
      </header>
    </div>
  )
}

const categoryProfessionalImages = Array.from({ length: 15 }, (_, index) => (
  `/hynt-home/category-professionals/portfolio-${index + 1}.jpeg`
))

const categoryProfessionals = [
  {
    id: 'rohan-mehta',
    name: 'Rohan Mehta',
    city: 'Mumbai',
    since: 'Since 2016',
    rating: '4.8',
    reviews: '210 reviews',
    services: '3D Visualization, Commercial Interiors, Residential Interiors, Online Consultation',
    images: categoryProfessionalImages.slice(0, 5),
  },
  {
    id: 'aarya-studio',
    name: 'Aarya Design Studio',
    city: 'Mumbai',
    since: 'Since 2018',
    rating: '4.7',
    reviews: '168 reviews',
    services: 'Residential Interiors, Modular Planning, Renovation Consultation, Styling',
    images: categoryProfessionalImages.slice(5, 10),
  },
  {
    id: 'neha-singh',
    name: 'Neha Singh',
    city: 'Mumbai',
    since: 'Since 2016',
    rating: '4.8',
    reviews: '210 reviews',
    services: '3D Visualization, Commercial Interiors, Residential Interiors, Online Consultation',
    images: categoryProfessionalImages.slice(10, 15),
  },
]

function ProfessionalPortfolioStrip({ images, name }) {
  return (
    <div className="no-scrollbar flex w-full gap-2 overflow-x-auto">
      {images.map((image, index) => {
        const isMoreTile = index === 3
        return (
          <button
            key={`${image}-${index}`}
            type="button"
            aria-label={`${name} portfolio image ${index + 1}`}
            className="relative size-[104px] shrink-0 overflow-hidden rounded-2xl bg-[#f2f2f2]"
          >
            <img src={image} alt="" className="absolute inset-0 size-full object-cover" loading="lazy" />
            {isMoreTile ? (
              <span className="absolute inset-0 flex items-center justify-center gap-1 bg-black/55 text-white">
                <ImagesSquare size={16} />
                <span className="typo-meta text-white">View more</span>
              </span>
            ) : null}
          </button>
        )
      })}
    </div>
  )
}

function ProfessionalListRow({ professional }) {
  return (
    <article className="border-b border-black/15 bg-white p-4">
      <ProfessionalPortfolioStrip images={professional.images} name={professional.name} />

      <div className="mt-4 space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <h2 className="typo-title-16-strong truncate text-black">{professional.name}</h2>
            <span className="flex shrink-0 items-center gap-1">
              <Sparkle size={16} weight="fill" className="text-black" />
              <SealCheck size={16} weight="fill" className="text-[#26C485]" />
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <Star size={14} weight="fill" className="text-[#F5B82E]" />
            <span className="typo-meta text-[#525252]">{professional.rating}</span>
            <span className="typo-meta text-[#7a7a7a]">{professional.reviews}</span>
          </div>
        </div>

        <p className="typo-caption truncate text-[#525252]">{professional.services}</p>
        <p className="typo-caption flex items-center gap-1 text-[#525252]">
          <MapPinSimpleArea size={16} />
          <span>{professional.city}</span>
        </p>

        <div className="flex items-center justify-between gap-3">
          <p className="typo-caption flex items-center gap-1 font-semibold text-[#364153]">
            <Calendar size={16} />
            <span>{professional.since}</span>
          </p>
          <div className="flex shrink-0 items-center gap-4 text-black">
            <a href="https://wa.me/910000000000" aria-label={`Message ${professional.name} on WhatsApp`} className="grid size-5 place-items-center">
              <WhatsappLogo size={20} />
            </a>
            <a href="tel:+910000000000" aria-label={`Call ${professional.name}`} className="grid size-5 place-items-center">
              <PhoneCall size={20} />
            </a>
            <button type="button" aria-label={`Send inquiry to ${professional.name}`} className="grid size-5 place-items-center">
              <PaperPlaneTilt size={20} />
            </button>
            <button type="button" aria-label={`Save ${professional.name}`} className="grid size-5 place-items-center">
              <BookmarkSimple size={20} />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

function SponsoredProfessionalRow() {
  return (
    <article className="border-b border-black/15 bg-white p-4">
      <div className="grid min-h-[132px] grid-cols-[1fr_1.05fr] overflow-hidden rounded-[18px] border border-[#e5e5e5] bg-[#f4f1ea]">
        <div className="flex flex-col justify-center p-4">
          <p className="typo-meta text-[#7a7a7a]">Sponsored brand</p>
          <h2 className="typo-title-16-strong mt-1 uppercase leading-tight text-black">Kitchens that <span className="block text-[#12352A]">inspire</span></h2>
          <Button type="button" size="small" className="mt-3 w-fit rounded-lg px-3">
            Explore now
          </Button>
        </div>
        <div className="relative min-h-[132px] bg-[#102418]">
          <img src="/hynt-home/brand.png" alt="" className="absolute inset-0 size-full object-cover" />
          <span className="typo-label absolute right-3 top-3 text-white">KOVA</span>
          <span className="typo-caption absolute bottom-3 right-3 rounded-full bg-black/45 px-2 py-1 text-white backdrop-blur">Sponsored</span>
        </div>
      </div>
    </article>
  )
}

function CategoryProfessionalsPage({ category, onBack }) {
  const title = category?.label || 'Interior Designers'

  return (
    <section className="hynt-home-mobile-canvas relative mx-auto min-h-dvh w-full max-w-[390px] overflow-visible bg-white">
      <HomeNestedTopbar title={title} onBack={onBack} />
      <div>
        {categoryProfessionals.map((professional, index) => (
          <div key={professional.id}>
            <ProfessionalListRow professional={professional} />
            {index === 0 ? <SponsoredProfessionalRow /> : null}
          </div>
        ))}
      </div>
    </section>
  )
}

function AllCategoriesPage({ onBack, onCategorySelect }) {
  return (
    <section className="hynt-home-mobile-canvas relative mx-auto min-h-dvh w-full max-w-[390px] overflow-visible bg-white">
      <HomeNestedTopbar title="All categories" onBack={onBack} />
      <HomeBannerCarousel audience="homeowner" showPagination />
      <HomeExploreCategoriesGrid layout="all" onCategorySelect={onCategorySelect} />
    </section>
  )
}

function HomeownerHomeTab({
  isHomeDockDense,
  setIsFlowSwitcherOpen,
  homepageEvents,
  onOpenBlogs,
  onDepthChange,
}) {
  const eventsRailRef = useRef(null)
  const topDockRef = useRef(null)
  const [topDockSpacerHeight, setTopDockSpacerHeight] = useState(0)
  const [view, setView] = useState('home')
  const [selectedCategory, setSelectedCategory] = useState(null)

  useLayoutEffect(() => {
    if (!eventsRailRef.current) return
    eventsRailRef.current.scrollLeft = 0
  }, [])

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || !topDockRef.current) return undefined
    const topDock = topDockRef.current

    const updateSpacerHeight = () => {
      setTopDockSpacerHeight(Math.ceil(topDock.getBoundingClientRect().height))
    }

    updateSpacerHeight()
    const observer = window.ResizeObserver ? new window.ResizeObserver(updateSpacerHeight) : null
    observer?.observe(topDock)
    window.addEventListener('resize', updateSpacerHeight)

    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', updateSpacerHeight)
    }
  }, [isHomeDockDense])

  useLayoutEffect(() => {
    onDepthChange?.(view !== 'home')
  }, [onDepthChange, view])

  if (view === 'all-categories') {
    return (
      <AllCategoriesPage
        onBack={() => setView('home')}
        onCategorySelect={(category) => {
          setSelectedCategory(category)
          setView('category-professionals')
        }}
      />
    )
  }

  if (view === 'category-professionals') {
    return (
      <CategoryProfessionalsPage
        category={selectedCategory}
        onBack={() => setView('all-categories')}
      />
    )
  }

  return (
    <section className="hynt-home-mobile-canvas relative mx-auto w-full max-w-[390px] overflow-visible bg-white">
      <div ref={topDockRef} className={`hynt-home-topdock hynt-home-topdock--fixed hynt-home-topdock--safe hynt-home-green-dock ${isHomeDockDense ? 'hynt-home-topdock--dense hynt-home-green-dock--collapsed' : ''}`}>
        <header className="overflow-hidden">
          <div className="hynt-topbar-primary flex items-center justify-between py-2 pl-6 pr-4">
            <img src="/hynt-home/homepagerev/hero-logo.svg" alt="HYNT" className="h-8 w-[108px] object-contain object-left" />
            <div className="flex shrink-0 items-center gap-0.5 lg:hidden">
              <button type="button" aria-label="Notifications" onClick={() => setIsFlowSwitcherOpen(true)} className="relative grid size-[37px] place-items-center rounded-[10px]">
                <img src="/hynt-home/homepagerev/hero-notification.svg" alt="" className="h-[18px] w-[16px] object-contain" />
                <span className="absolute right-0 top-0.5 size-2 rounded-full bg-white" />
              </button>
            </div>
          </div>
          <div className="hynt-topbar-search px-4 pb-3 pt-3">
            <HomeSearchBar fieldClassName="!bg-white text-[#102418] !ring-white/70 focus-within:!ring-white" />
          </div>
          <HomeTopPromo audience="homeowner" />
        </header>
      </div>
      <div className="transition-[height] duration-300 ease-out" style={{ height: topDockSpacerHeight }} aria-hidden="true" />

      <div className="pb-4">
        <HomeExploreCategoriesGrid
          onViewAll={() => setView('all-categories')}
          onCategorySelect={(category) => {
            setSelectedCategory(category)
            setView('category-professionals')
          }}
        />

        <HomeDivider thick />

        <section className="py-4">
          <div className="flex h-6 items-center justify-between px-4">
            <h2 className="typo-section-title">Events</h2>
            <button type="button" className="typo-utility flex h-5 items-center gap-1">View all <ArrowRight size={20} /></button>
          </div>
          <div ref={eventsRailRef} className="no-scrollbar mt-4 flex gap-3 overflow-x-auto overflow-y-visible px-3 pb-1">
            {homepageEvents.map((event) => (
              <article key={event.title} className="min-h-[252px] w-[175px] shrink-0 rounded-3xl border border-[#e0e0e0] bg-[#fbfbfb] p-2">
                <div className="relative h-36 overflow-hidden rounded-2xl border border-[#e0e0e0] bg-white">
                  <img src={event.image} alt={event.title} className="size-full object-cover" />
                  <span className="typo-meta absolute right-2 top-2 rounded-lg border border-[#333] bg-black/70 px-2 py-1 text-white backdrop-blur">{event.interested}</span>
                </div>
                <div className="px-1 pt-3">
                  <p className="typo-section-title truncate">{event.title}</p>
                  <p className="typo-meta mt-1 flex items-center gap-1 text-[#808080]"><CalendarDots size={16} />{event.date}</p>
                  <p className="typo-meta mt-1 flex items-center gap-1 text-[#808080]"><MapPinSimpleArea size={16} />{event.city}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <HomeDivider thick />

        <HomeBannerCarousel audience="homeowner" />

        <HomeDivider thick />

        <HomeBlogsSection onViewAll={onOpenBlogs} />

        <HomeBrandWatermark />
      </div>
    </section>
  )
}

export default HomeownerHomeTab
