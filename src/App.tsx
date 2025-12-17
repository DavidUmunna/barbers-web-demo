const services = [
  {
    name: 'Signature Cut',
    price: '£22',
    duration: '30 min',
    description: 'Tailored scissor cut, neckline tidy, and styled finish that fits your routine.',
  },
  {
    name: 'Skin Fade',
    price: '£28',
    duration: '45 min',
    description: 'Ultra-clean fades with sharp detail work and a blended finish from skin to crown.',
  },
  {
    name: 'Beard Trim & Shape',
    price: '£15',
    duration: '20 min',
    description: 'Hot towel, precise line-up, and nourishing oils for a strong, neat beard.',
  },
  {
    name: 'Hot Towel Shave',
    price: '£18',
    duration: '25 min',
    description: 'Traditional straight razor shave with steam, soothing balm, and cold towel finish.',
  },
  {
    name: 'Kids Cut (U16)',
    price: '£15',
    duration: '25 min',
    description: 'Friendly, patient cuts for young gents. Calming atmosphere and careful styling.',
  },
  {
    name: 'Full Service',
    price: '£38',
    duration: '60 min',
    description: 'Signature cut, beard sculpt, steam, and hot towel. Leave sharp and relaxed.',
  },
]

const sellingPoints = [
  { title: 'Experienced barbers', detail: '10+ years of fades, shaves, and clients who return weekly.' },
  { title: 'Clean, premium space', detail: 'Fresh blades, sanitised tools, and a studio-level finish.' },
  { title: 'Walk-ins & bookings', detail: 'Reserve your slot or drop by — we keep a few chairs free daily.' },
  { title: 'Consistent quality', detail: 'We remember your last cut, tweak the details, and nail the finish.' },
]

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80',
    alt: 'Skin fade with clean neckline',
  },
  {
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    alt: 'Beard trim and hot towel service',
  },
  {
    src: 'https://images.unsplash.com/photo-1501581317357-099d5dc1edd0?auto=format&fit=crop&w=900&q=80',
    alt: 'Classic scissor cut in progress',
  },
  {
    src: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=900&q=80',
    alt: 'Finished style with texture',
  },
  {
    src: 'https://images.unsplash.com/photo-1502877828070-33b167ad6860?auto=format&fit=crop&w=900&q=80',
    alt: 'Clipper work with precision',
  },
  {
    src: 'https://images.unsplash.com/photo-1527176930608-09cb256ab504?auto=format&fit=crop&w=900&q=80',
    alt: 'Shop interior with modern chairs',
  },
]

const hours = [
  { label: 'Mon – Fri', value: '09:00 – 19:00' },
  { label: 'Saturday', value: '08:30 – 17:30' },
  { label: 'Sunday', value: 'By appointment' },
]

const phoneDisplay = '0191 555 0123'
const phoneHref = 'tel:+441915550123'
const whatsappHref =
  "https://wa.me/447700900123?text=I'd%20like%20to%20book%20a%20cut%20at%20Harbour%20Barber"

type SectionHeadingProps = {
  kicker: string
  title: string
  copy?: string
}

const SectionHeading = ({ kicker, title, copy }: SectionHeadingProps) => (
  <div className="section-heading">
    <p className="kicker">{kicker}</p>
    <h2>{title}</h2>
    {copy && <p className="muted">{copy}</p>}
  </div>
)

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="stat">
    <span className="stat-value">{value}</span>
    <span className="muted">{label}</span>
  </div>
)

function App() {
  return (
    <div className="page">
      <header className="navbar">
        <div className="container nav-inner">
          <div className="brand">
            <span className="brand-mark">HB</span>
            <div>
              <p className="brand-title">Harbour Barber</p>
              <p className="muted small">Newcastle City Centre</p>
            </div>
          </div>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Find us</a>
          </nav>
          <div className="nav-actions">
            <a className="btn ghost" href={phoneHref}>
              Call
            </a>
            <a className="btn primary" href="#contact">
              Book
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="container hero-grid">
            <div className="hero-text">
              <p className="eyebrow">Since 2012 · Walk-ins welcome</p>
              <h1>Premium cuts. Clean fades. Newcastle.</h1>
              <p className="lede">
                Confidence-building cuts from barbers who remember your last trim. Sharp lines, calm vibe, zero rush.
              </p>
              <div className="cta-group">
                <a className="btn primary" href="#contact">
                  Book appointment
                </a>
                <a className="btn ghost" href={phoneHref}>
                  Call now
                </a>
              </div>
              <div className="hero-tags">
                <span className="pill">4.9★ local reviews</span>
                <span className="pill">Same-day slots</span>
                <span className="pill">Card & cash welcome</span>
              </div>
              <div className="stats-row">
                <Stat value="10+" label="Years of steady clients" />
                <Stat value="450+" label="Regulars every month" />
                <Stat value="24h" label="Guaranteed response" />
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-card">
                <p className="muted">Today&apos;s availability</p>
                <h3>Fresh fades, zero fuss.</h3>
                <ul className="availability">
                  <li>
                    <span>Next open slot</span>
                    <strong>13:30</strong>
                  </li>
                  <li>
                    <span>Last walk-in</span>
                    <strong>18:30</strong>
                  </li>
                  <li>
                    <span>Bookings answered in</span>
                    <strong>Under 1 hour</strong>
                  </li>
                </ul>
                <div className="panel-actions">
                  <a className="btn primary wide" href="#contact">
                    Book now
                  </a>
                  <a className="text-link" href={whatsappHref} target="_blank" rel="noreferrer">
                    Message on WhatsApp
                  </a>
                </div>
              </div>
              <div className="panel-note">
                <p className="muted">“We keep chairs open for walk-ins, but bookings run on time. Your cut, your way.”</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container about-grid">
            <SectionHeading
              kicker="About the barber"
              title="A local shop built on trust and consistent finishes."
              copy="We’ve shaped thousands of cuts for Newcastle’s professionals, students, and lifelong locals. You’ll always get the barber who knows your style, remembers the details, and runs on time."
            />
            <div className="about-card">
              <p>
                From sharp skin fades to classic scissor work, every appointment is timed so you can drop in before work, on lunch,
                or after hours without feeling rushed. Clean tools, steady hands, and a relaxed space to reset.
              </p>
              <div className="about-bullets">
                <div>
                  <h4>Local loyalty</h4>
                  <p className="muted">Most clients rebook before they leave. We keep notes so every visit stays consistent.</p>
                </div>
                <div>
                  <h4>Quality over quantity</h4>
                  <p className="muted">No conveyor belt cuts. Expect precision, consultation, and a smooth finish.</p>
                </div>
              </div>
              <div className="guarantee">
                <span className="pill pill-ghost">No-risk guarantee</span>
                <p className="muted">If you’re not happy with the finish, we’ll adjust it on the spot — no fuss.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="container">
            <SectionHeading
              kicker="Services & pricing"
              title="Pick your service. Keep your style sharp."
              copy="Clear pricing in GBP. Book ahead or walk in — we’ll always confirm your slot."
            />
            <div className="cards-grid">
              {services.map((service) => (
                <article key={service.name} className="card service-card">
                  <div className="service-header">
                    <div>
                      <h3>{service.name}</h3>
                      <p className="muted">{service.duration}</p>
                    </div>
                    <span className="price">{service.price}</span>
                  </div>
                  <p className="muted">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section highlights">
          <div className="container">
            <SectionHeading kicker="Why choose us" title="You want results. We deliver them every time." />
            <div className="cards-grid highlights-grid">
              {sellingPoints.map((point) => (
                <article key={point.title} className="card highlight-card">
                  <div className="icon-dot" aria-hidden />
                  <h4>{point.title}</h4>
                  <p className="muted">{point.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery">
          <div className="container">
            <SectionHeading
              kicker="Gallery"
              title="Clean fades, classic cuts, steady beards."
              copy="A glimpse at recent work. Your cut gets the same attention."
            />
            <div className="gallery-grid">
              {gallery.map((item) => (
                <figure key={item.src} className="gallery-item">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <figcaption>{item.alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <div className="card contact-card">
              <SectionHeading kicker="Visit us" title="Book online, call, or walk in." />
              <div className="contact-actions">
                <a className="btn primary" href="#contact-form" onClick={(e) => e.preventDefault()}>
                  Book appointment
                </a>
                <a className="btn ghost" href={phoneHref}>
                  Call {phoneDisplay}
                </a>
              </div>
              <div className="contact-details">
                <div>
                  <p className="label">Phone</p>
                  <a href={phoneHref} className="muted">
                    {phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="label">WhatsApp</p>
                  <a href={whatsappHref} className="muted" target="_blank" rel="noreferrer">
                    Message now
                  </a>
                </div>
                <div>
                  <p className="label">Address</p>
                  <p className="muted">48 Grainger St, Newcastle upon Tyne</p>
                </div>
              </div>
              <div className="hours">
                <p className="label">Opening hours</p>
                <ul>
                  {hours.map((row) => (
                    <li key={row.label}>
                      <span>{row.label}</span>
                      <span className="muted">{row.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="whatsapp-banner">
                <div>
                  <p className="muted">Want to plan a group or wedding booking?</p>
                  <p>We’ll confirm details on WhatsApp within an hour.</p>
                </div>
                <a className="btn small secondary" href={whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp us
                </a>
              </div>
            </div>

            <div className="card map-card">
              <div className="map-embed">
                <iframe
                  title="Harbour Barber location"
                  src="https://maps.google.com/maps?q=Grainger%20St%20Newcastle%20Barber&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
              <p className="muted small">City centre parking within 2 minutes. St James Metro is a short walk away.</p>
            </div>
          </div>
        </section>
      </main>

      <section className="cta-footer" id="cta">
        <div className="container cta-footer-inner">
          <div>
            <p className="eyebrow">Ready for a fresh cut?</p>
            <h2>Book today. Walk out confident.</h2>
            <p className="muted">Secure your slot or ring the shop — we reply fast and run on time.</p>
          </div>
          <div className="cta-group">
            <a className="btn primary" href="#contact">
              Book appointment
            </a>
            <a className="btn ghost" href={phoneHref}>
              Call the shop
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand">
            <span className="brand-mark">HB</span>
            <div>
              <p className="brand-title">Harbour Barber</p>
              <p className="muted small">Precision cuts for Newcastle.</p>
            </div>
          </div>
          <p className="muted small">Walk-ins welcome. Booking confirmed within the hour.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
