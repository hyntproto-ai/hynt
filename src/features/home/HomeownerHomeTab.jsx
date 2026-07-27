import { useLayoutEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  BookmarkSimple,
  Calendar,
  CalendarDots,
  CaretLeft,
  CaretRight,
  CheckSquareOffset,
  DotsThreeVertical,
  Export,
  ImagesSquare,
  IdentificationBadge,
  MapPinSimpleArea,
  PaperPlaneTilt,
  PhoneCall,
  Prohibit,
  SealCheck,
  Sparkle,
  Star,
  Trophy,
  WhatsappLogo,
  X,
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
    role: 'Interior Designer',
    city: 'Mumbai',
    since: 'Since 2016',
    experience: '8 years',
    rating: '4.8',
    reviews: '210 reviews',
    reviewCount: '210',
    services: '3D Visualization, Commercial Interiors, Residential Interiors, Online Consultation',
    serviceTags: ['Full Home Design', 'Turnkey Execution', '2D Floor Plan', '3D Walkthrough', 'Moodboard', 'Modular Kitchen', 'Vastu-Compliant', 'Site supervision'],
    showroom: 'Shop No. 2, place, at that otherplace',
    hours: '9am - 9pm',
    avatar: '/hynt-home/explore/neha-singh.png',
    images: categoryProfessionalImages.slice(0, 5),
  },
  {
    id: 'aarya-studio',
    name: 'Aarya Design Studio',
    role: 'Interior Designer',
    city: 'Mumbai',
    since: 'Since 2018',
    experience: '6 years',
    rating: '4.7',
    reviews: '168 reviews',
    reviewCount: '168',
    services: 'Residential Interiors, Modular Planning, Renovation Consultation, Styling',
    serviceTags: ['Full Home Design', 'Turnkey Execution', '2D Floor Plan', '3D Walkthrough', 'Moodboard', 'Styling', 'Site supervision'],
    showroom: 'Studio 14, Linking Road, Bandra West',
    hours: '10am - 8pm',
    avatar: '/hynt-home/explore/neha-singh.png',
    images: categoryProfessionalImages.slice(5, 10),
  },
  {
    id: 'neha-singh',
    name: 'Neha Singh',
    role: 'Interior Designer',
    city: 'Mumbai',
    since: 'Since 2016',
    experience: '8 years',
    rating: '4.8',
    reviews: '210 reviews',
    reviewCount: '210',
    services: '3D Visualization, Commercial Interiors, Residential Interiors, Online Consultation',
    serviceTags: ['Full Home Design', 'Turnkey Execution', '2D Floor Plan', '3D Walkthrough', 'Moodboard', 'Modular Kitchen', 'Vastu-Compliant', 'Site supervision'],
    showroom: 'Shop No. 2, place, at that otherplace',
    hours: '9am - 9pm',
    avatar: '/hynt-home/explore/neha-singh.png',
    images: categoryProfessionalImages.slice(10, 15),
  },
]

const profileProducts = [
  {
    id: 'artisan-kitchen',
    title: 'Artisan L-Shape Kitchen Design',
    category: 'Kitchen Cabinets',
    image: '/hynt-home/product.png',
  },
  {
    id: 'bright-kitchen',
    title: 'Bright L-Shape Kitchen Design',
    category: 'Kitchen Cabinets',
    image: categoryProfessionalImages[1],
  },
  {
    id: 'cozy-kitchen',
    title: 'Cozy L-Shape Kitchen Style',
    category: 'Kitchen Cabinets',
    image: categoryProfessionalImages[7],
  },
]

const profileReviewRows = [
  ['Design Quality', '4.5', '78%'],
  ['Budget Adherence', '4.5', '68%'],
  ['Timeline', '4.5', '78%'],
  ['Communication', '4.5', '78%'],
]

const profileAbout = `With over seven years immersed in the world of design, this HYNT professional creates spaces that are visually refined, deeply functional, and shaped around each client's lifestyle. Their work spans contemporary apartments, luxury villas, and commercial interiors across India.`

function stopRowClick(event) {
  event.stopPropagation()
}

function ProfessionalPortfolioStrip({ images, name, onSelect }) {
  return (
    <div className="no-scrollbar flex w-full gap-2 overflow-x-auto">
      {images.map((image, index) => {
        const isMoreTile = index === 3
        return (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={onSelect}
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

function ProfessionalListRow({ professional, onOpen }) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onOpen?.(professional)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onOpen?.(professional)
        }
      }}
      className="cursor-pointer border-b border-black/15 bg-white p-4 text-left"
    >
      <ProfessionalPortfolioStrip images={professional.images} name={professional.name} onSelect={() => onOpen?.(professional)} />

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
          <p className="typo-caption typo-weight-semibold flex items-center gap-1 text-[#525252]">
            <Calendar size={16} />
            <span>{professional.since}</span>
          </p>
          <div className="flex shrink-0 items-center gap-4 text-black">
            <a href="https://wa.me/910000000000" onClick={stopRowClick} aria-label={`Message ${professional.name} on WhatsApp`} className="grid size-5 place-items-center">
              <WhatsappLogo size={20} />
            </a>
            <a href="tel:+910000000000" onClick={stopRowClick} aria-label={`Call ${professional.name}`} className="grid size-5 place-items-center">
              <PhoneCall size={20} />
            </a>
            <button type="button" onClick={stopRowClick} aria-label={`Send inquiry to ${professional.name}`} className="grid size-5 place-items-center">
              <PaperPlaneTilt size={20} />
            </button>
            <button type="button" onClick={stopRowClick} aria-label={`Save ${professional.name}`} className="grid size-5 place-items-center">
              <BookmarkSimple size={20} />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

function ProfileSectionHeader({ title, count, action }) {
  return (
    <div className="flex h-10 items-center justify-between px-4 py-2">
      <h2 className="typo-title-16-strong capitalize text-[#101828]">{title}</h2>
      {count || action ? (
        <button type="button" className="typo-meta typo-weight-semibold flex items-center gap-2 text-[#101828]">
          {count || action}
          <ArrowRight size={16} />
        </button>
      ) : null}
    </div>
  )
}

function ProfileTopChrome({ professional, onBack, onMenu }) {
  return (
    <div className="sticky top-0 z-50 bg-[linear-gradient(180deg,#fff_0%,rgba(255,255,255,0.86)_100%)] pt-[env(safe-area-inset-top)] backdrop-blur-[12px]">
      <header className="flex h-[57px] items-center justify-between px-4 py-2">
        <button type="button" onClick={onBack} aria-label="Back to professionals" className="flex min-w-0 items-center gap-2">
          <CaretLeft size={24} />
          <span className="flex items-center gap-3 opacity-0">
            <img src={professional.avatar} alt="" className="size-12 rounded-[11px] border border-white object-cover" />
            <span className="typo-section-title truncate">{professional.name}</span>
          </span>
        </button>
        <button type="button" onClick={onMenu} aria-label="More profile actions" className="grid size-10 place-items-center rounded-full text-black">
          <DotsThreeVertical size={24} />
        </button>
      </header>
    </div>
  )
}

function ProfileHero({ professional }) {
  const coverImage = professional.images[0]

  return (
    <section className="bg-white">
      <div className="relative z-0 -mt-[57px] h-64 overflow-hidden bg-[#5fc18a]">
        <img src={coverImage} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/18 via-white/8 to-[#5fc18a]/42" />
      </div>

      <div className="relative z-10 px-4 pb-4">
        <div className="-mt-[60px] flex items-end gap-2">
          <img src={professional.avatar} alt={professional.name} className="relative z-20 size-[88px] rounded-[20px] border-2 border-white object-cover shadow-[0_4px_4px_rgba(0,0,0,0.12)]" />
          <div className="flex items-center gap-3 px-1 py-2">
            <span className="flex items-center gap-1">
              <Star size={20} weight="fill" className="text-[#F5B82E]" />
              <span className="typo-meta typo-weight-semibold text-[#525252]">{professional.rating}</span>
            </span>
            <span className="typo-meta text-[#7a7a7a]">{professional.reviews}</span>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-2">
            <h1 className="typo-title-20 truncate text-[#101828]">{professional.name}</h1>
            <SealCheck size={20} weight="fill" className="shrink-0 text-[#26C485]" />
          </div>
          <div className="mt-1 flex items-center gap-1 py-0.5">
            <span className="typo-meta typo-weight-semibold text-[#364153]">{professional.role}</span>
            <span className="size-1 rounded-full bg-[#364153]" />
            <span className="typo-meta typo-weight-semibold text-[#364153]">{professional.since}</span>
          </div>
          <p className="typo-meta mt-1 flex items-center gap-1 text-[#929292]">
            <MapPinSimpleArea size={16} />
            {professional.city}
          </p>
          <div className="mt-3 flex items-center gap-2">
            <span className="flex items-center gap-1 rounded-[14px] bg-black py-1 pl-1.5 pr-2.5 text-white">
              <Sparkle size={16} weight="fill" />
              <span className="typo-caption typo-weight-bold text-white">Pro</span>
            </span>
            <span className="flex items-center gap-1 rounded-[14px] border border-black py-1 pl-1.5 pr-2.5">
              <SealCheck size={16} weight="fill" className="text-[#26C485]" />
              <span className="typo-caption typo-weight-bold text-[#5fc18a]">Verified</span>
            </span>
          </div>
        </div>

        <div className="mt-4 rounded-[20px] border border-black/12 bg-white p-2">
          <div className="flex items-center gap-2">
            <span className="grid size-12 shrink-0 place-items-center rounded-[12px] border border-[#26c485] text-black">
              <MapPinSimpleArea size={24} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex min-w-0 items-center gap-2">
                <span className="typo-meta shrink-0 text-[#5e5e5e]">Showroom at</span>
                <span className="typo-meta typo-weight-semibold truncate text-[#323232]">{professional.showroom}</span>
              </span>
              <span className="mt-1 flex items-center gap-2">
                <span className="typo-meta text-[#686868]">Mon - Sat</span>
                <span className="size-1 rounded-full bg-[#686868]" />
                <span className="typo-meta typo-weight-semibold text-[#464646]">{professional.hours}</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProfileAlbums({ professional }) {
  const albumImages = [...professional.images, ...categoryProfessionalImages].slice(0, 7)

  return (
    <section className="border-t border-[#e0e0e0] py-3">
      <ProfileSectionHeader title="Albums" count="32" />
      <div className="grid h-[184px] grid-cols-4 grid-rows-2 gap-1 px-4">
        <button type="button" className="col-span-2 overflow-hidden rounded-[12px] bg-[#f2f2f2]">
          <img src={albumImages[0]} alt="" className="size-full object-cover" />
        </button>
        <button type="button" className="overflow-hidden rounded-[12px] bg-[#f2f2f2]">
          <img src={albumImages[1]} alt="" className="size-full object-cover" />
        </button>
        <button type="button" className="overflow-hidden rounded-[12px] bg-[#f2f2f2]">
          <img src={albumImages[2]} alt="" className="size-full object-cover" />
        </button>
        <button type="button" className="overflow-hidden rounded-[12px] bg-[#f2f2f2]">
          <img src={albumImages[3]} alt="" className="size-full object-cover" />
        </button>
        <button type="button" className="overflow-hidden rounded-[12px] bg-[#f2f2f2]">
          <img src={albumImages[4]} alt="" className="size-full object-cover" />
        </button>
        <button type="button" className="col-span-2 overflow-hidden rounded-[12px] bg-[#f2f2f2]">
          <img src={albumImages[5]} alt="" className="size-full object-cover" />
        </button>
      </div>
    </section>
  )
}

function ProfileProducts() {
  return (
    <section className="border-t border-[#e0e0e0] py-3">
      <ProfileSectionHeader title="Products" count="32" />
      <div className="no-scrollbar flex gap-3 overflow-x-auto px-4 pb-1">
        {profileProducts.map((product) => (
          <article key={product.id} className="w-[171px] shrink-0 overflow-hidden rounded-[14px] border border-[#e0e0e0] bg-white">
            <div className="relative h-[139px] bg-[#f2f2f2]">
              <img src={product.image} alt="" className="absolute inset-0 size-full object-cover" />
              <span className="typo-meta absolute right-2 top-2 rounded-full bg-white px-2 py-1 text-black">1/5</span>
              <button type="button" aria-label={`Save ${product.title}`} className="absolute bottom-2 right-2 grid size-7 place-items-center rounded-lg bg-white text-black">
                <BookmarkSimple size={16} />
              </button>
            </div>
            <div className="p-2">
              <h3 className="typo-meta typo-weight-bold line-clamp-2 text-black">{product.title}</h3>
              <div className="mt-1 flex items-center justify-between gap-2">
                <p className="typo-meta truncate text-[#7a7a7a]">{product.category}</p>
                <span className="typo-meta rounded-full bg-[#f3f3f3] px-2 text-[#525252]">120</span>
              </div>
              <button type="button" className="typo-meta mt-2 flex w-full items-center justify-between text-[#7a7a7a]">
                Get a quote
                <CaretRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProfileAbout({ professional }) {
  return (
    <section className="border-t border-[#e0e0e0] py-3">
      <ProfileSectionHeader title="About" />
      <button type="button" className="px-4 text-left">
        <p className="typo-meta line-clamp-5 text-[#666]">{professional.about || profileAbout}</p>
      </button>
    </section>
  )
}

function ProfileServices({ professional }) {
  return (
    <section className="border-t border-[#e0e0e0] py-3">
      <ProfileSectionHeader title="Services" />
      <div className="flex flex-wrap gap-2 px-4">
        {(professional.serviceTags || []).map((service) => (
          <button key={service} type="button" className="typo-caption rounded-full border border-[#e0e0e0] bg-white px-3 py-2 text-black">
            {service}
          </button>
        ))}
      </div>
    </section>
  )
}

function ProfileReviews({ professional }) {
  return (
    <section className="border-t border-[#e0e0e0] py-3">
      <div className="flex items-center justify-between px-4 py-2">
        <h2 className="typo-title-16-strong capitalize text-[#101828]">Reviews</h2>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, index) => (
            <Star key={index} size={14} weight="fill" className="text-[#F5B82E]" />
          ))}
          <span className="typo-title-16-strong ml-1 text-black">{professional.rating}</span>
          <span className="typo-caption text-[#7a7a7a]">({professional.reviewCount})</span>
        </div>
      </div>
      <div className="px-4">
        <button type="button" className="typo-caption typo-weight-semibold mb-3 ml-auto flex items-center gap-1 text-black">
          See all Reviews
          <ArrowRight size={16} />
        </button>
        <div className="space-y-1">
          {profileReviewRows.map(([label, value, width]) => (
            <div key={label} className="flex items-center justify-between gap-4 py-1">
              <span className="typo-caption w-[132px] text-[#6f6f6f]">{label}</span>
              <span className="h-1 min-w-0 flex-1 overflow-hidden rounded-full bg-[#e0e0e0]">
                <span className="block h-full rounded-full bg-[#26c485]" style={{ width }} />
              </span>
              <span className="typo-caption typo-weight-bold w-6 text-right text-[#999]">{value}</span>
            </div>
          ))}
        </div>
        <button type="button" className="typo-meta mt-4 flex h-10 w-full items-center justify-center gap-1 rounded-[12px] border border-dashed border-[#e5e7eb] text-[#364153]">
          Give a review
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  )
}

function ProfileCredentials() {
  const awards = ['FOAID Mumbai 2023', 'HYNT Residential Awards']

  return (
    <section className="border-t border-[#e0e0e0] py-3">
      <ProfileSectionHeader title="Credentials & Awards" />
      <div className="flex gap-2 px-4">
        {['IIID Member', 'FOAID'].map((credential) => (
          <span key={credential} className="typo-meta rounded-full border border-[#26c485] bg-white px-4 py-2 text-black">{credential}</span>
        ))}
      </div>
      <div className="mt-3">
        {awards.map((award) => (
          <article key={award} className="border-b border-[#e0e0e0] px-4 py-3 last:border-b-0">
            <div className="flex items-center gap-2">
              <span className="grid size-10 shrink-0 place-items-center rounded-[12px] border border-[#26c485] text-black">
                <Trophy size={16} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex justify-between gap-3">
                  <span className="typo-meta typo-weight-semibold text-[#525252]">{award}</span>
                  <span className="typo-meta typo-weight-bold text-black">Winner</span>
                </span>
                <span className="typo-caption mt-0.5 block text-[#767676]">Best Residential Interior · Apr 2024</span>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProfileEvents() {
  const events = [
    ['Mumbai Design Expo 2026', 'MMRDA Grounds, BKC'],
    ['HYNT Pro Meetup - Mumbai', 'The Habitat, Khar'],
  ]

  return (
    <section className="border-t border-[#e0e0e0] py-3">
      <ProfileSectionHeader title="events attending" />
      {events.map(([event, venue]) => (
        <article key={event} className="px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="grid size-10 shrink-0 place-items-center rounded-[12px] border border-[#26c485] bg-[#5fc18a]/20 text-center">
              <span>
                <span className="typo-meta typo-weight-bold block text-[#525252]">20</span>
                <span className="typo-body-10 typo-weight-semibold block text-[#a3a3a3]">MAR</span>
              </span>
            </span>
            <span className="min-w-0 flex-1">
              <span className="typo-meta typo-weight-bold block truncate text-[#525252]">{event}</span>
              <span className="mt-0.5 flex justify-between gap-3">
                <span className="typo-caption truncate text-[#767676]">{venue}</span>
                <span className="typo-caption shrink-0 text-[#767676]">10am - 7pm</span>
              </span>
            </span>
          </div>
        </article>
      ))}
    </section>
  )
}

function ProfileBottomCta({ professional }) {
  return (
    <div className="fixed bottom-0 left-1/2 z-50 w-full max-w-[390px] -translate-x-1/2 border-t border-black/[0.04] bg-white px-4 pb-[max(32px,env(safe-area-inset-bottom))] pt-2 backdrop-blur">
      <div className="flex h-12 items-center gap-2">
        <button type="button" aria-label={`Save ${professional.name}`} className="grid h-12 w-12 shrink-0 place-items-center rounded-[16px] bg-[#26c485] text-white">
          <BookmarkSimple size={16} weight="fill" />
        </button>
        <Button type="button" fullWidth leadingIcon={PaperPlaneTilt} className="h-12 rounded-[16px]">
          Send Inquiry
        </Button>
        <a href="tel:+910000000000" aria-label={`Call ${professional.name}`} className="grid h-12 w-12 shrink-0 place-items-center rounded-[16px] border border-black bg-white text-black">
          <PhoneCall size={16} />
        </a>
        <a href="https://wa.me/910000000000" aria-label={`Message ${professional.name} on WhatsApp`} className="grid h-12 w-12 shrink-0 place-items-center rounded-[16px] border border-black bg-white text-black">
          <WhatsappLogo size={16} />
        </a>
      </div>
    </div>
  )
}

function ProfileActionsSheet({ professional, onClose }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] mx-auto w-full max-w-[390px] bg-black/20">
      <div className="flex justify-center pb-2">
        <span className="h-[5px] w-9 rounded-full bg-white/50" />
      </div>
      <div className="mx-2 rounded-[20px] bg-white p-4 shadow-[0_4px_2px_rgba(0,0,0,0.12)]">
        <div className="flex gap-4">
          <img src={professional.avatar} alt="" className="size-16 rounded-2xl object-cover" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1">
              <p className="typo-title-16-strong truncate text-black">{professional.name}</p>
              <Sparkle size={16} weight="fill" className="text-black" />
              <SealCheck size={16} weight="fill" className="text-[#26c485]" />
            </div>
            <p className="typo-caption text-[#525252]">{professional.role} · {professional.city}</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="typo-caption flex items-center gap-1 rounded-md border border-[#929292]/25 px-1.5 py-0.5 text-[#7c7c7c]">
                <CheckSquareOffset size={16} />
                {professional.reviewCount}
              </span>
              <span className="typo-caption flex items-center gap-1 rounded-md border border-[#929292]/25 px-1.5 py-0.5 text-[#7c7c7c]">
                <IdentificationBadge size={16} />
                {professional.experience}
              </span>
              <span className="typo-caption flex items-center gap-1 text-[#525252]">
                <Star size={14} weight="fill" className="text-[#F5B82E]" />
                {professional.rating}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 rounded-t-[20px] bg-[#fbfbfb] px-4 pb-10 pt-4 shadow-[0_-4px_2px_rgba(0,0,0,0.12)]">
        <button type="button" onClick={onClose} aria-label="Close profile actions" className="ml-auto grid size-6 place-items-center">
          <X size={24} />
        </button>
        <div className="mt-4 overflow-hidden rounded-2xl">
          <button type="button" className="flex h-10 w-full items-center gap-2 px-2 text-left">
            <Export size={20} />
            <span className="typo-meta text-black">Share</span>
          </button>
          <button type="button" className="flex h-10 w-full items-center gap-2 px-2 text-left">
            <BookmarkSimple size={20} />
            <span className="typo-meta text-black">Shortlist</span>
          </button>
          <div className="my-2 h-px bg-[#e0e0e0]" />
          <button type="button" className="flex h-10 w-full items-center gap-2 px-2 text-left text-[#ba1a01]">
            <Prohibit size={20} />
            <span className="typo-meta">Report</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function ProfessionalProfilePage({ professional, onBack }) {
  const [isActionsOpen, setIsActionsOpen] = useState(false)

  return (
    <section className="hynt-home-mobile-canvas relative mx-auto min-h-dvh w-full max-w-[390px] overflow-visible bg-white pb-[112px]">
      <ProfileTopChrome professional={professional} onBack={onBack} onMenu={() => setIsActionsOpen(true)} />
      <ProfileHero professional={professional} />
      <ProfileAlbums professional={professional} />
      <ProfileProducts />
      <ProfileAbout professional={professional} />
      <ProfileServices professional={professional} />
      <ProfileReviews professional={professional} />
      <ProfileCredentials />
      <ProfileEvents />
      <ProfileBottomCta professional={professional} />
      {isActionsOpen ? <ProfileActionsSheet professional={professional} onClose={() => setIsActionsOpen(false)} /> : null}
    </section>
  )
}

function SponsoredProfessionalRow() {
  return (
    <article className="border-b border-black/15 bg-white p-4">
      <div className="grid min-h-[132px] grid-cols-[1fr_1.05fr] overflow-hidden rounded-[18px] border border-[#e5e5e5] bg-[#f4f1ea]">
        <div className="flex flex-col justify-center p-4">
          <p className="typo-meta text-[#7a7a7a]">Sponsored brand</p>
          <h2 className="typo-title-16-strong mt-1 uppercase text-black">Kitchens that <span className="block text-[#12352A]">inspire</span></h2>
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

function CategoryProfessionalsPage({ category, onBack, onProfessionalSelect }) {
  const title = category?.label || 'Interior Designers'

  return (
    <section className="hynt-home-mobile-canvas relative mx-auto min-h-dvh w-full max-w-[390px] overflow-visible bg-white">
      <HomeNestedTopbar title={title} onBack={onBack} />
      <div>
        {categoryProfessionals.map((professional, index) => (
          <div key={professional.id}>
            <ProfessionalListRow professional={professional} onOpen={onProfessionalSelect} />
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
  const [selectedProfessional, setSelectedProfessional] = useState(categoryProfessionals[0])

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
        onProfessionalSelect={(professional) => {
          setSelectedProfessional(professional)
          setView('professional-profile')
        }}
      />
    )
  }

  if (view === 'professional-profile') {
    return (
      <ProfessionalProfilePage
        professional={selectedProfessional}
        onBack={() => setView('category-professionals')}
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
