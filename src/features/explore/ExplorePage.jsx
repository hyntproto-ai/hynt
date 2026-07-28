import { useEffect, useState } from 'react'
import {
  ArrowRight,
  BookmarkSimple,
  CaretLeft,
  DotsThreeVertical,
  House,
  ImagesSquare,
  MagnifyingGlass,
  MapPin,
  PaperPlaneTilt,
  SealCheck,
  SlidersHorizontal,
  Star,
} from '@phosphor-icons/react'
import Button from '../../components/ui/Button'
import InputBar from '../../components/ui/InputBar'
import { categoryProfessionals } from '../home/categoryProfessionals'
import { ProfessionalProfilePage } from '../home/HomeownerHomeTab'

const roomCategories = [
  {
    id: 'kitchen',
    title: 'Kitchen',
    count: '12,540+ ideas',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'bath',
    title: 'Bath',
    count: '8,230+ ideas',
    image: 'https://images.unsplash.com/photo-1629079447777-1e605162dc8d?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    count: '15,890+ ideas',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'living',
    title: 'Living',
    count: '20,350+ ideas',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'dining',
    title: 'Dining',
    count: '6,420+ ideas',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'outdoor',
    title: 'Outdoor & Garden',
    count: '10,210+ ideas',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=700&q=80',
  },
]

const productCategories = [
  ['Furniture & Decor', '420+ products', 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=700&q=80'],
  ['Modular Kitchens', '310+ products', 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=700&q=80'],
  ['Smart Home', '180+ products', 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=700&q=80'],
  ['Lighting', '260+ products', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=700&q=80'],
  ['Solar & Sustainability', '90+ products', 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=700&q=80'],
  ['Bath & Sanitaryware', '140+ products', 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=700&q=80'],
  ['HVAC & Appliances', '75+ products', 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=700&q=80'],
  ['Paints & Finishes', '110+ products', 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=700&q=80'],
].map(([title, count, image]) => ({ id: title, title, count, image }))

const ideaCards = [
  ['idea-1', 'h-[170px]', 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=80'],
  ['idea-2', 'h-[130px]', 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=80'],
  ['idea-3', 'h-[140px]', 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=700&q=80'],
  ['idea-4', 'h-[195px]', 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=700&q=80'],
  ['idea-5', 'h-[110px]', 'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=700&q=80'],
  ['idea-6', 'h-[160px]', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80'],
  ['idea-7', 'h-[150px]', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=700&q=80'],
  ['idea-8', 'h-[120px]', 'https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&w=700&q=80'],
].map(([id, height, image]) => ({ id, height, image }))

const projectViewerImages = [
  '/hynt-home/explore/project-view-1.png',
  '/hynt-home/explore/project-view-2.png',
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=900&q=80',
]

const projectViewerCreator = {
  id: 'neha-singh',
  name: 'Neha Singh',
  role: 'Interior Designer',
  city: 'Mumbai',
  rating: '4.5',
  ratingsCount: '42',
  avatar: '/hynt-home/explore/neha-singh.png',
}

const projectViewerProject = {
  id: 'mehta-3bhk-bandra-west',
  title: 'Mehta 3BHK, Bandra West',
  subtitle: 'By Neha Singh',
  category: 'Residential Interior',
  location: 'Bandra West, Mumbai',
  area: '1,420 sq.ft',
  completedOn: 'Completed 2025',
  budget: 'Premium',
  description: 'A compact 3BHK apartment shaped around a calm modern Indian living room, concealed storage, layered evening lighting, and softer textures for a family that hosts often.',
  scope: ['Living room styling', 'TV wall storage', 'Lighting plan', 'Soft furnishing', 'Art curation'],
  palette: ['Warm grey', 'Black metal', 'Ivory fabric', 'Natural wood'],
  images: projectViewerImages,
}

const trendingBrands = [
  ['Meraki Interiors', 'Furniture', '#E67E22'],
  ['Native', 'Smart Home', '#12352A'],
  ['Kova Kitchens', 'Modular', '#6B5842'],
  ['Solaris', 'Solar', '#3E7B60'],
].map(([name, category, color]) => ({ name, category, color }))

const roomFilters = ['All', 'Modern', 'Minimal', 'Traditional', 'Compact', 'Budget-friendly']

function useExploreChromeVisibility() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateChrome = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 24) {
        setHidden(false)
      } else if (currentScrollY > lastScrollY + 8) {
        setHidden(true)
      } else if (currentScrollY < lastScrollY - 8) {
        setHidden(false)
      }

      lastScrollY = Math.max(currentScrollY, 0)
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateChrome)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return hidden
}

function ExploreChrome({ hidden = false, animated = false, children }) {
  return (
    <div className={`fixed left-1/2 top-0 z-[90] w-full max-w-[390px] -translate-x-1/2 border-b border-[#e0e0e0] bg-[rgba(255,255,255,0.92)] backdrop-blur-[16px] ${animated ? 'transition-transform duration-200 ease-out will-change-transform' : ''} ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      {children}
    </div>
  )
}

function ExploreTopbar({ title, subtitle, onBack, actions = null }) {
  return (
    <header className="px-4 py-3">
      <div className="flex items-center justify-between gap-3 py-1">
        <button type="button" onClick={onBack} className="flex min-w-0 items-center gap-4 text-left">
          <span className="grid size-6 shrink-0 place-items-center rounded">
            <CaretLeft size={24} />
          </span>
          <span className="min-w-0">
            <span className="typo-section-title block truncate text-black">{title}</span>
            {subtitle ? <span className="typo-caption block truncate text-[#999999]">{subtitle}</span> : null}
          </span>
        </button>
        {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
      </div>
    </header>
  )
}

function SectionHeader({ title, subtitle, action = 'View all' }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4 px-4">
      <div className="min-w-0">
        <h2 className="typo-section-title text-black">{title}</h2>
        {subtitle ? <p className="typo-meta mt-1 text-[#607269]">{subtitle}</p> : null}
      </div>
      {action ? (
        <button type="button" className="typo-utility flex shrink-0 items-center gap-1 text-black">
          {action} <ArrowRight size={16} />
        </button>
      ) : null}
    </div>
  )
}

function ExploreSearch() {
  return (
    <div className="px-4 pb-4">
      <InputBar
        type="search"
        aria-label="Search Explore"
        placeholder="Search professionals, products, brands, ideas"
        leadingIcon={MagnifyingGlass}
        trailingIcon={SlidersHorizontal}
      />
    </div>
  )
}

function ModeTabs({ mode, setMode }) {
  const tabs = [
    { id: 'ideas', label: 'Ideas', icon: ImagesSquare },
    { id: 'products', label: 'Products', icon: House },
  ]

  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 pb-3">
      {tabs.map(({ id, label, icon: Icon }) => {
        const selected = mode === id
        return (
          <button
            key={id}
            type="button"
            onClick={() => setMode(id)}
            className={`typo-label flex h-9 shrink-0 items-center gap-2 rounded-full border px-3 ${
              selected ? 'border-[#26c485] bg-[#eefaf3]' : 'border-[#e0e0e0] bg-white'
            }`}
          >
            <span className="grid size-5 shrink-0 place-items-center text-[#267449]">
              <Icon size={14} weight="fill" />
            </span>
            <span className="leading-none text-black">{label}</span>
          </button>
        )
      })}
    </div>
  )
}

function SponsoredBanner() {
  return (
    <section className="my-5 px-4">
      <article className="grid min-h-[154px] grid-cols-[1fr_1.1fr] overflow-hidden rounded-[18px] border border-[#e5e5e5] bg-[#f4f1ea]">
        <div className="flex flex-col justify-center p-4">
          <p className="typo-title-16-strong uppercase leading-tight text-black">Kitchens that <span className="block text-[#12352A]">inspire</span></p>
          <p className="typo-meta mt-2 text-[#607269]">Premium fittings. Timeless spaces.</p>
          <Button type="button" size="small" className="mt-3 rounded-lg px-3">
            Explore now
          </Button>
        </div>
        <div className="relative bg-[linear-gradient(150deg,#2A2320,#6B5842)] p-3 text-white">
          <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80" alt="" className="absolute inset-0 size-full object-cover opacity-70" />
          <span className="typo-label relative z-10 block text-right uppercase tracking-[0.08em]">Kova</span>
          <span className="typo-caption absolute bottom-3 right-3 z-10 rounded-full bg-black/35 px-2 py-1 text-white backdrop-blur">Sponsored</span>
        </div>
      </article>
    </section>
  )
}

function CategoryCard({ item, onClick }) {
  return (
    <button type="button" onClick={onClick} className="overflow-hidden rounded-[18px] border border-[#e5e5e5] bg-white text-left">
      <div className="relative h-[126px] overflow-hidden bg-[#102418]">
        <img src={item.image} alt="" className="size-full object-cover" loading="lazy" />
      </div>
      <div className="px-4 py-4">
        <h3 className="typo-body-strong text-black">{item.title}</h3>
      </div>
    </button>
  )
}

function IdeasLanding({ setView, setSelectedRoom }) {
  const firstCategoryRow = roomCategories.slice(0, 2)
  const remainingCategories = roomCategories.slice(2)

  return (
    <>
      <section>
        <div className="grid grid-cols-2 gap-3 px-4">
          {firstCategoryRow.map((room) => (
            <CategoryCard
              key={room.id}
              item={room}
              onClick={() => {
                setSelectedRoom(room)
                setView('room')
              }}
            />
          ))}
        </div>
      </section>

      <SponsoredBanner />

      <section className="mb-6">
        <div className="grid grid-cols-2 gap-3 px-4">
          {remainingCategories.map((room) => (
            <CategoryCard
              key={room.id}
              item={room}
              onClick={() => {
                setSelectedRoom(room)
                setView('room')
              }}
            />
          ))}
        </div>
      </section>
      <section className="mb-6">
        <SectionHeader title="Featured Project" />
        <button type="button" onClick={() => setView('detail')} className="mx-4 block overflow-hidden rounded-[18px] border border-[#e5e5e5] bg-white text-left">
          <div className="h-[150px] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80" alt="" className="size-full object-cover" />
          </div>
          <div className="p-4">
            <h3 className="typo-title-16-strong text-black">Serene minimal home in Bandra, Mumbai</h3>
            <p className="typo-body mt-2 line-clamp-2 text-[#607269]">A calm, clutter-free home designed with natural textures and warm neutrals.</p>
            <p className="typo-meta mt-3 flex items-center gap-1 text-[#607269]"><MapPin size={14} /> Bandra, Mumbai <span className="px-1 text-[#d0d0d0]">|</span> 2,400 sq.ft</p>
          </div>
        </button>
      </section>
    </>
  )
}

function ProductsLanding() {
  return (
    <>
      <section className="mb-6">
        <SectionHeader title="Shop by Category" subtitle="From HYNT Elite brands and verified vendors" action={null} />
        <div className="grid grid-cols-2 gap-3 px-4">
          {productCategories.map((category) => <CategoryCard key={category.id} item={category} />)}
        </div>
      </section>
      <section className="mb-6">
        <SectionHeader title="Trending Brands" />
        <div className="no-scrollbar flex gap-3 overflow-x-auto px-4 pb-1">
          {trendingBrands.map((brand) => (
            <article key={brand.name} className="w-[132px] shrink-0 rounded-[18px] border border-[#e5e5e5] bg-white p-4 text-center">
              <span className="mx-auto grid size-11 place-items-center rounded-full text-white" style={{ background: brand.color }}>{brand.name.slice(0, 1)}</span>
              <h3 className="typo-body-strong mt-3 truncate text-black">{brand.name}</h3>
              <p className="typo-meta mt-1 text-[#607269]">{brand.category}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function RoomFeed({ room, setView }) {
  const [filter, setFilter] = useState('All')

  return (
    <>
      <ExploreChrome>
        <ExploreTopbar
          title={room?.title || 'Living Room'}
          onBack={() => setView('landing')}
        />
        <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 pb-4">
          {roomFilters.map((item) => (
            <button key={item} type="button" onClick={() => setFilter(item)} className={`typo-meta shrink-0 rounded-full px-4 py-2 ${filter === item ? 'bg-black text-white' : 'border border-[#e5e5e5] bg-white text-black'}`}>
              {item}
            </button>
          ))}
        </div>
      </ExploreChrome>
      <div className="h-[126px]" />
      <div className="hynt-explore-masonry px-2 pb-8">
        {ideaCards.map((card) => (
          <button key={card.id} type="button" onClick={() => setView('viewer')} className={`hynt-explore-masonry-item relative mb-2 w-full overflow-hidden rounded-2xl bg-[#102418] text-left ${card.height}`}>
            <img src={card.image} alt="" className="size-full object-cover" loading="lazy" />
            <span className="absolute right-2 top-2 grid size-8 place-items-center rounded-full bg-white text-black">
              <BookmarkSimple size={16} />
            </span>
          </button>
        ))}
      </div>
    </>
  )
}

function getCreatorProfile(creator) {
  return categoryProfessionals.find((professional) => (
    professional.id === creator?.id || professional.name === creator?.name
  )) || categoryProfessionals[0]
}

function ProjectFullscreenViewer({ room, onBack, onOpenProfile, onOpenProject }) {
  const creator = projectViewerCreator

  return (
    <section className="fixed left-1/2 top-0 z-[120] h-dvh w-full max-w-[390px] -translate-x-1/2 overflow-hidden bg-black text-white">
      <main className="relative h-full overflow-hidden bg-black">
        <div className="no-scrollbar flex h-full snap-x snap-mandatory overflow-x-auto">
          {projectViewerImages.map((image, index) => (
            <div key={`${image}-${index}`} className="relative h-full w-full shrink-0 snap-center">
              <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
            </div>
        ))}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.18)_13%,rgba(0,0,0,0)_42%,rgba(0,0,0,0.68)_100%)]" />

        <header className="absolute inset-x-0 top-0 z-20 bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)] px-4 py-3">
          <div className="flex items-center justify-between gap-3 py-1">
            <button type="button" onClick={onBack} aria-label="Back to room feed" className="flex min-w-0 items-center gap-4 text-left text-white">
              <span className="grid size-6 shrink-0 place-items-center rounded">
                <CaretLeft size={24} />
              </span>
            </button>
            <button type="button" aria-label="More project actions" className="grid size-9 shrink-0 place-items-center rounded-full text-white">
              <DotsThreeVertical size={22} weight="bold" />
            </button>
          </div>
        </header>

        <div className="absolute inset-x-0 bottom-0 z-20 bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)] px-4 pb-[max(32px,env(safe-area-inset-bottom))] pt-2">
          <div className="grid h-12 grid-cols-[48px_1fr_48px] items-center gap-2">
            <button type="button" onClick={() => onOpenProject?.(projectViewerProject)} aria-label={`Open ${projectViewerProject.title} project`} className="relative size-12 shrink-0 overflow-visible">
              {projectViewerImages.slice(0, 3).map((image, index) => {
                const layerStyles = [
                  'left-[5px] top-[6px] rotate-[-8deg] opacity-80',
                  'left-[3px] top-[3px] rotate-[8deg] opacity-90',
                  'left-0 top-0 rotate-0',
                ]

                return (
                  <img
                    key={`${image}-thumb`}
                    src={image}
                    alt=""
                    className={`absolute size-11 rounded-[12px] border border-white/80 object-cover shadow-[0_8px_24px_rgba(0,0,0,0.28)] ${layerStyles[index]}`}
                  />
                )
              })}
            </button>
            <div className="mx-auto flex w-[203px] items-center gap-2">
              <button type="button" aria-label="Save project" className="grid size-12 shrink-0 place-items-center rounded-[16px] bg-white/18 text-white backdrop-blur-[18px]">
                <BookmarkSimple size={22} />
              </button>
              <button type="button" className="typo-body-strong flex h-12 w-[147px] shrink-0 items-center justify-center gap-2 rounded-[16px] bg-black px-4 text-white shadow-[0_12px_28px_rgba(0,0,0,0.32)]">
                <PaperPlaneTilt size={22} weight="fill" />
                <span className="truncate">Send Inquiry</span>
              </button>
            </div>
            <button type="button" onClick={() => onOpenProfile?.(creator)} aria-label={`Open ${creator.name} profile`} className="size-12 shrink-0 overflow-hidden rounded-full border border-white/80 bg-white p-0.5 shadow-[0_8px_24px_rgba(0,0,0,0.28)]">
              <img src={creator.avatar} alt={creator.name} className="size-full rounded-full object-cover" />
            </button>
          </div>
          <span className="sr-only">
            {projectViewerProject.title}, {projectViewerProject.subtitle}, {creator.role} in {creator.city}, {creator.rating} stars from {creator.ratingsCount} ratings
          </span>
        </div>
      </main>

      <span className="sr-only">{room?.title || 'Explore'} project preview</span>
    </section>
  )
}

function ProjectStat({ label, value }) {
  return (
    <div className="rounded-[16px] border border-[#e0e0e0] bg-white p-3">
      <p className="typo-caption uppercase text-[#7a7a7a]">{label}</p>
      <p className="typo-body-strong mt-1 text-black">{value}</p>
    </div>
  )
}

function ProfessionalProjectPage({ project, creator, onBack, onOpenProfile }) {
  const profile = getCreatorProfile(creator)

  return (
    <section className="hynt-home-mobile-canvas relative mx-auto min-h-dvh w-full max-w-[390px] overflow-visible bg-white pb-[112px] text-black">
      <ExploreChrome>
        <ExploreTopbar
          title="Project"
          subtitle={project.title}
          onBack={onBack}
          actions={(
            <button type="button" aria-label="Save project" className="grid size-9 place-items-center rounded-[12px] border border-[#e0e0e0] bg-white text-black">
              <BookmarkSimple size={17} />
            </button>
          )}
        />
      </ExploreChrome>
      <div className="h-[65px]" />

      <div className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto">
        {project.images.map((image, index) => (
          <figure key={`${image}-${index}`} className="relative h-[312px] w-full shrink-0 snap-center overflow-hidden bg-[#f2f2f2]">
            <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
            <span className="typo-meta absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-black backdrop-blur">
              {index + 1}/{project.images.length}
            </span>
          </figure>
        ))}
      </div>

      <section className="px-4 py-5">
        <p className="typo-caption typo-weight-bold uppercase text-[#267449]">{project.category}</p>
        <h1 className="typo-title-20-strong mt-1 text-black">{project.title}</h1>
        <p className="typo-meta mt-2 flex items-center gap-1 text-[#686868]">
          <MapPin size={14} />
          {project.location}
        </p>

        <button
          type="button"
          onClick={() => onOpenProfile?.(creator)}
          className="mt-4 flex w-full items-center gap-3 rounded-[18px] border border-[#e0e0e0] bg-[#fbfbfb] p-3 text-left"
        >
          <img src={profile.avatar} alt={profile.name} className="size-12 shrink-0 rounded-[14px] object-cover" />
          <span className="min-w-0 flex-1">
            <span className="typo-caption text-[#7a7a7a]">Uploaded by</span>
            <span className="mt-0.5 flex min-w-0 items-center gap-1">
              <span className="typo-body-strong truncate text-black">{profile.name}</span>
              <SealCheck size={16} weight="fill" className="shrink-0 text-[#26C485]" />
            </span>
            <span className="typo-caption mt-0.5 flex items-center gap-1 text-[#686868]">
              <Star size={13} weight="fill" className="text-[#F5B82E]" />
              {profile.rating} {'|'} {profile.role}
            </span>
          </span>
          <ArrowRight size={18} />
        </button>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <ProjectStat label="Area" value={project.area} />
          <ProjectStat label="Budget" value={project.budget} />
          <ProjectStat label="Timeline" value={project.completedOn} />
          <ProjectStat label="Images" value={`${project.images.length} photos`} />
        </div>
      </section>

      <div className="h-px bg-[#e0e0e0]" />

      <section className="px-4 py-5">
        <h2 className="typo-title-16-strong text-black">About this project</h2>
        <p className="typo-body mt-2 leading-[1.65] text-[#525252]">{project.description}</p>
      </section>

      <section className="px-4 pb-5">
        <h2 className="typo-title-16-strong text-black">Scope covered</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.scope.map((item) => (
            <span key={item} className="typo-caption rounded-full border border-[#e0e0e0] bg-white px-3 py-2 text-[#525252]">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="px-4 pb-6">
        <h2 className="typo-title-16-strong text-black">Project gallery</h2>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {project.images.map((image, index) => (
            <button key={`${image}-gallery-${index}`} type="button" className={`relative overflow-hidden rounded-[16px] bg-[#f2f2f2] ${index === 0 ? 'col-span-2 h-[210px]' : 'h-[150px]'}`}>
              <img src={image} alt="" className="absolute inset-0 size-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </section>

      <section className="px-4 pb-6">
        <h2 className="typo-title-16-strong text-black">Palette</h2>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {project.palette.map((item) => (
            <div key={item} className="rounded-[16px] border border-[#e0e0e0] bg-[#fbfbfb] p-3">
              <p className="typo-body-strong text-black">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="fixed bottom-0 left-1/2 z-40 w-full max-w-[390px] -translate-x-1/2 border-t border-[#e0e0e0] bg-white px-4 pb-[max(16px,env(safe-area-inset-bottom))] pt-3">
        <button type="button" className="typo-body-strong flex h-12 w-full items-center justify-center gap-2 rounded-[16px] bg-black px-4 text-white">
          <PaperPlaneTilt size={22} weight="fill" />
          Send Inquiry
        </button>
      </div>
    </section>
  )
}

function IdeaDetail({ setView }) {
  return (
    <>
      <ExploreChrome>
        <ExploreTopbar
          title="Living Room"
          subtitle="Warm minimal living room"
          onBack={() => setView('room')}
          actions={(
            <button type="button" aria-label="Save idea" className="grid size-9 place-items-center rounded-full border border-[#e0e0e0] bg-white text-black">
              <BookmarkSimple size={17} />
            </button>
          )}
        />
      </ExploreChrome>
      <div className="h-[65px]" />
      <section className="relative h-[330px] overflow-hidden bg-[#102418]">
        <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80" alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
        <span className="typo-meta absolute bottom-4 left-4 rounded-full bg-white px-3 py-1 text-black">Living Room</span>
      </section>
      <section className="px-4 py-5">
        <h1 className="typo-title-20-strong text-black">Warm minimal living room, Bandra</h1>
        <div className="mt-4 flex items-center gap-3 rounded-[18px] border border-[#e5e5e5] bg-white p-3">
          <span className="grid size-11 place-items-center rounded-full bg-[#e9fbf3] text-[#267449]">RD</span>
          <span className="min-w-0 flex-1">
            <span className="typo-body-strong block text-black">Riya Desai Studio</span>
            <span className="typo-meta block text-[#607269]">Interior Design {'\u00b7'} 4.9 stars</span>
          </span>
          <Button type="button" size="small" variant="outline" className="rounded-full border-black bg-white px-3">View</Button>
        </div>
        <p className="typo-body mt-4 text-[#607269]">A calm, clutter-free living room built around natural textures and warm neutrals. Oak veneer panelling, a low-slung sectional and layered lighting keep the space feeling open.</p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            ['Bandra', 'Location'],
            ['340 sq.ft', 'Room size'],
            ['\u20b98.5L', 'Approx. cost'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-[16px] bg-[#f5f6f4] p-3">
              <p className="typo-body-strong text-black">{value}</p>
              <p className="typo-caption mt-1 text-[#607269]">{label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="pb-8">
        <SectionHeader title="Shop this look" />
        <div className="no-scrollbar flex gap-3 overflow-x-auto px-4">
          {productCategories.slice(0, 4).map((product) => (
            <article key={product.id} className="w-[150px] shrink-0 rounded-[18px] border border-[#e5e5e5] bg-white p-2">
              <div className="h-28 overflow-hidden rounded-[14px]">
                <img src={product.image} alt="" className="size-full object-cover" />
              </div>
              <p className="typo-body-strong mt-3 line-clamp-2 text-black">{product.title}</p>
              <p className="typo-meta mt-1 text-[#607269]">Verified brand</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function ExploreLanding({ onDepthChange }) {
  const [mode, setMode] = useState('ideas')
  const [view, setView] = useState('landing')
  const [selectedRoom, setSelectedRoom] = useState(roomCategories[3])
  const [selectedCreator, setSelectedCreator] = useState(null)
  const chromeHidden = useExploreChromeVisibility()

  useEffect(() => {
    onDepthChange?.(view !== 'landing')
  }, [onDepthChange, view])

  if (view === 'room') return <RoomFeed room={selectedRoom} setView={setView} />
  if (view === 'viewer') {
    return (
      <ProjectFullscreenViewer
        room={selectedRoom}
        onBack={() => setView('room')}
        onOpenProfile={(creator) => {
          setSelectedCreator(creator)
          setView('professional-profile')
        }}
        onOpenProject={() => setView('professional-project')}
      />
    )
  }
  if (view === 'professional-profile') {
    return (
      <ProfessionalProfilePage
        professional={getCreatorProfile(selectedCreator)}
        onBack={() => setView('viewer')}
      />
    )
  }
  if (view === 'professional-project') {
    return (
      <ProfessionalProjectPage
        project={projectViewerProject}
        creator={projectViewerCreator}
        onBack={() => setView('viewer')}
        onOpenProfile={(creator) => {
          setSelectedCreator(creator)
          setView('professional-profile')
        }}
      />
    )
  }
  if (view === 'detail') return <IdeaDetail setView={setView} />

  return (
    <>
      <ExploreChrome hidden={chromeHidden} animated>
        <div className="px-4 pb-3 pt-4">
          <h1 className="typo-page-title text-black">Explore</h1>
        </div>
        <ExploreSearch />
        <ModeTabs mode={mode} setMode={setMode} />
      </ExploreChrome>
      <div className="h-[184px]" />
      {mode === 'ideas' ? <IdeasLanding setView={setView} setSelectedRoom={setSelectedRoom} /> : null}
      {mode === 'products' ? <ProductsLanding /> : null}
    </>
  )
}

function ExplorePage({ onDepthChange }) {
  return (
    <section className="hynt-explore-canvas mx-auto w-full max-w-[390px] overflow-visible bg-white pb-[108px]">
      <ExploreLanding onDepthChange={onDepthChange} />
    </section>
  )
}

export default ExplorePage
