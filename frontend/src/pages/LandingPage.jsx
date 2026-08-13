import Button from '../components/Button'
import FeatureCard from '../components/FeatureCard'
import LogoMark from '../components/LogoMark'

const navItems = ['Product', 'Solutions', 'Pricing', 'Resources']

const featureCards = [
  {
    eyebrow: 'Planning',
    title: 'Roadmaps that stay aligned',
    description:
      'Turn priorities into shared plans with clear ownership, milestones, and instant cross-team visibility.',
  },
  {
    eyebrow: 'Knowledge',
    title: 'Docs and context in one place',
    description:
      'Capture decisions, specs, and project memory next to the work so every team moves with clarity.',
  },
  {
    eyebrow: 'Execution',
    title: 'Task flow without the chaos',
    description:
      'Break big work into focused sprints, track blockers, and keep delivery moving without scattered updates.',
  },
]

const workflowMetrics = [
  { label: 'Launch velocity', value: '3.2x' },
  { label: 'Weekly sync time', value: '-42%' },
  { label: 'Decision visibility', value: '100%' },
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '$19',
    description: 'For lean teams building their workflow foundation.',
    features: ['Unlimited projects', 'Task boards', 'Shared docs', '2 integrations'],
    featured: false,
  },
  {
    name: 'Growth',
    price: '$49',
    description: 'For product and ops teams shipping every week.',
    features: ['Advanced workflows', 'Automation rules', 'Custom dashboards', 'Priority support'],
    featured: true,
  },
  {
    name: 'Scale',
    price: '$99',
    description: 'For cross-functional companies with complex planning needs.',
    features: ['Portfolio management', 'SSO + governance', 'Dedicated onboarding', 'Custom reporting'],
    featured: false,
  },
]

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="topbar">
        <div className="container nav-shell">
          <LogoMark />
          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item} href="#" className="nav-link">
                {item}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button className="nav-button nav-button--ghost">Log in</button>
            <Button>Book a demo</Button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">The operating system for teams in motion</span>
              <h1>Run strategy, work, and documentation in one place.</h1>
              <p className="hero-text">
                NEXUS brings together planning, execution, and knowledge so your team can move from ideas to outcomes without context switching.
              </p>
              <div className="hero-actions">
                <Button>Start free trial</Button>
                <button className="nav-button nav-button--secondary">View demo</button>
              </div>
              <div className="social-proof">
                <div>
                  <strong>12k+</strong>
                  <span>teams launched</span>
                </div>
                <div>
                  <strong>4.9/5</strong>
                  <span>customer rating</span>
                </div>
              </div>
            </div>

            <div className="hero-visual" aria-label="Nexus product preview">
              <div className="app-window">
                <div className="window-header">
                  <span className="dot dot--red" />
                  <span className="dot dot--amber" />
                  <span className="dot dot--green" />
                </div>

                <div className="window-body">
                  <aside className="sidebar">
                    <div className="sidebar-label">Workspace</div>
                    <ul>
                      <li className="is-active">Q4 Launch</li>
                      <li>Product Ops</li>
                      <li>Docs</li>
                    </ul>
                  </aside>

                  <div className="workspace-panel">
                    <div className="workspace-toolbar">
                      <span>Roadmap board</span>
                      <span className="badge">Live</span>
                    </div>

                    <div className="board-grid">
                      <div className="lane">
                        <label>Backlog</label>
                        <div className="task-card task-card--warm">Research</div>
                        <div className="task-card">Sprint plan</div>
                      </div>
                      <div className="lane">
                        <label>In progress</label>
                        <div className="task-card task-card--accent">AI brief</div>
                        <div className="task-card">Design review</div>
                      </div>
                      <div className="lane">
                        <label>Done</label>
                        <div className="task-card task-card--green">Launch notes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-section container">
          <div className="section-heading">
            <span className="eyebrow">What makes it different</span>
            <h2>One platform for the way work actually happens.</h2>
          </div>

          <div className="feature-grid">
            {featureCards.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        <section className="workflow-section">
          <div className="container workflow-shell">
            <div className="section-heading section-heading--left">
              <span className="eyebrow">Workflow</span>
              <h2>From initiative to launch without losing context.</h2>
            </div>

            <div className="workflow-layout">
              <div className="workflow-panel">
                <div className="stat-card">
                  <span className="mini-label">Momentum</span>
                  <strong>+67%</strong>
                  <small>faster delivery across planning and execution</small>
                </div>
                <div className="list-stack">
                  <div className="stack-item"><span className="stack-dot" /> Strategize</div>
                  <div className="stack-item"><span className="stack-dot" /> Assign</div>
                  <div className="stack-item"><span className="stack-dot" /> Review</div>
                  <div className="stack-item"><span className="stack-dot" /> Launch</div>
                </div>
              </div>

              <div className="metrics-panel">
                {workflowMetrics.map((metric) => (
                  <div key={metric.label} className="metric-box">
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-section container">
          <div className="section-heading">
            <span className="eyebrow">Simple pricing</span>
            <h2>Choose a plan that scales with your team.</h2>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <article key={plan.name} className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}>
                <div className="pricing-header">
                  <h3>{plan.name}</h3>
                  {plan.featured ? <span className="pill">Most popular</span> : null}
                </div>
                <div className="price-row">
                  <span className="price">{plan.price}</span>
                  <span className="period">/seat</span>
                </div>
                <p>{plan.description}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Button variant={plan.featured ? 'primary' : 'secondary'} className="pricing-button">
                  {plan.featured ? 'Get started' : 'Try free'}
                </Button>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section container">
          <div className="cta-panel">
            <div>
              <span className="eyebrow">Ready to build with clarity?</span>
              <h2>Bring your roadmap, docs, and execution into one source of truth.</h2>
            </div>
            <Button>Get started today</Button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-shell">
          <LogoMark />
          <span>© 2026 NEXUS</span>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
