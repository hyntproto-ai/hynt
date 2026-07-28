import {
  ArrowUpRight,
  CalendarDots,
  CaretRight,
  ClockAfternoon,
  MapPinSimpleArea,
} from '@phosphor-icons/react'
import ProjectWorkspaceHeader from '../shared/ProjectWorkspaceHeader'

function EventMeta({ icon: Icon, children, compact = false }) {
  return (
    <span className={`typo-meta flex items-center gap-1 text-[#808080] ${compact ? 'text-[12px]' : ''}`}>
      <Icon size={compact ? 16 : 20} />
      <span className="truncate">{children}</span>
    </span>
  )
}

function EventCountBadge({ children }) {
  return (
    <span className="typo-caption absolute right-2 top-2 rounded-[8px] border border-[#333] bg-black/70 px-2 py-1 text-white backdrop-blur">
      {children}
    </span>
  )
}

function EventGridCard({ event, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen?.(event)}
      className="w-full min-w-0 rounded-[24px] border border-[#e0e0e0] bg-[#fbfbfb] p-2 pb-4 text-left"
    >
      <div className="relative h-36 overflow-hidden rounded-[16px] border border-[#ebebeb] bg-white">
        <img src={event.image} alt="" className="size-full object-cover" loading="lazy" />
        <EventCountBadge>{event.interested}</EventCountBadge>
      </div>
      <div className="px-1 pt-3">
        <h3 className="typo-body-strong truncate text-black">{event.title}</h3>
        <div className="mt-2 grid gap-2">
          <EventMeta icon={CalendarDots} compact>{event.date}</EventMeta>
          <EventMeta icon={MapPinSimpleArea} compact>{event.city}</EventMeta>
        </div>
      </div>
    </button>
  )
}

function EventsPageDots() {
  return (
    <div className="flex items-center gap-1 pr-3" aria-hidden="true">
      <span className="size-1 rounded-full bg-[#999]" />
      <span className="size-1 rounded-full bg-[#999]" />
      <span className="h-1 w-6 rounded-full bg-black" />
    </div>
  )
}

export function AllEventsPage({ events = [], onBack, onEventSelect }) {
  const featuredEvents = events.concat(events).slice(0, 3)
  const moreEvents = events.slice(1).concat(events)

  return (
    <main className="min-h-dvh w-full overflow-x-hidden bg-white font-['Urbanist'] text-black">
      <section className="mx-auto w-full max-w-[390px] pb-10 pt-16">
        <ProjectWorkspaceHeader title="Events" onBack={onBack} />

        <div className="space-y-6 p-4">
          {featuredEvents.length ? (
            <section>
              <div className="mb-2 flex items-center justify-between">
                <h2 className="typo-section-title text-black">Featured events</h2>
                <EventsPageDots />
              </div>
              <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1">
                {featuredEvents.map((featuredEvent, index) => (
                  <button
                    key={`${featuredEvent.id || featuredEvent.title}-featured-${index}`}
                    type="button"
                    onClick={() => onEventSelect?.(featuredEvent)}
                    className="block w-full shrink-0 snap-start rounded-[24px] border border-[#e0e0e0] bg-[#fbfbfb] p-2 text-left"
                  >
                    <div className="h-[242px] overflow-hidden rounded-[16px] border border-[#e0e0e0] bg-white">
                      <img src={featuredEvent.image} alt="" className="size-full object-cover" />
                    </div>
                    <div className="px-2 py-3">
                      <h3 className="typo-section-title text-black">{featuredEvent.title}</h3>
                      <div className="mt-2 flex gap-4">
                        <EventMeta icon={CalendarDots}>{featuredEvent.date}</EventMeta>
                        <EventMeta icon={MapPinSimpleArea}>{featuredEvent.city}</EventMeta>
                      </div>
                      <p className="typo-body mt-3 line-clamp-3 text-[#808080]">{featuredEvent.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          ) : null}

          <section>
            <h2 className="typo-section-title mb-3 text-black">More events</h2>
            <div className="grid grid-cols-2 gap-x-2 gap-y-5">
              {moreEvents.map((event, index) => (
                <EventGridCard
                  key={`${event.id || event.title}-${index}`}
                  event={event}
                  onOpen={onEventSelect}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export function EventDetailPage({ event, events = [], onBack, onShowAll }) {
  if (!event) return null
  const similarEvents = events.filter((item) => item.id !== event.id).concat(events).slice(0, 4)

  return (
    <main className="min-h-dvh w-full overflow-x-hidden bg-white font-['Urbanist'] text-black">
      <section className="mx-auto w-full max-w-[390px] pb-10 pt-16">
        <ProjectWorkspaceHeader title="Event" subtitle="Back to all events" onBack={onBack} />

        <article>
          <div className="h-[353px] overflow-hidden bg-[#f2f2f2]">
            <img src={event.detailImage || event.image} alt="" className="size-full object-cover" />
          </div>

          <div className="space-y-5 px-4 py-5">
            <h1 className="typo-section-title leading-[1.5] text-black">
              {event.detailTitle || event.title}
            </h1>

            <div className="grid gap-2">
              <span className="typo-meta flex h-8 w-fit items-center gap-2 rounded-[8px] border border-[#e0e0e0] bg-[#fbfbfb] py-1 pl-2 pr-3 text-[#808080]">
                <CalendarDots size={20} />
                {event.detailDate || event.date}
              </span>
              <span className="typo-meta flex h-8 w-fit items-center gap-2 rounded-[8px] border border-[#e0e0e0] bg-[#fbfbfb] py-1 pl-2 pr-3 text-[#808080]">
                <ClockAfternoon size={20} />
                {event.time}
              </span>
              <div className="flex items-center justify-between gap-4">
                <span className="typo-meta flex h-8 w-fit items-center gap-2 rounded-[8px] border border-[#e0e0e0] bg-[#fbfbfb] py-1 pl-2 pr-3 text-[#808080]">
                  <MapPinSimpleArea size={20} />
                  {event.detailCity || event.city}
                </span>
                <button type="button" className="typo-meta flex items-center gap-2 text-[#808080]">
                  <ArrowUpRight size={20} />
                  View on map
                </button>
              </div>
            </div>

            <section>
              <h2 className="typo-section-title text-black">About the event</h2>
              <p className="typo-body mt-2 leading-[1.5] text-black">{event.about || event.description}</p>
            </section>
          </div>
        </article>

        <div className="h-px bg-[#e0e0e0]" />

        <section className="px-4 py-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="typo-section-title text-black">Similar events around you</h2>
            <button type="button" onClick={onShowAll} className="typo-meta flex items-center gap-1 text-[#808080]">
              Show all
              <CaretRight size={16} />
            </button>
          </div>
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
            {similarEvents.map((similarEvent, index) => (
              <div key={`${similarEvent.id || similarEvent.title}-similar-${index}`} className="w-[171px] shrink-0">
                <EventGridCard event={similarEvent} onOpen={() => {}} />
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}
