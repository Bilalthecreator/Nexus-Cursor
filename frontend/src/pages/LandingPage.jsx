import Button from '../components/Button'
import FeatureCard from '../components/FeatureCard'
import LogoMark from '../components/LogoMark'

const navItems = ['Product', 'Solutions', 'Pricing', 'Resources']

const featureCards = [
  {
    eyebrow: '01 · planning',
    title: 'Turn strategy into visible momentum.',
    description:
      'Break work into goals, epics, and tasks that feel clear from the start. Keep priorities visible without the operational drag.',
  },
  {
    eyebrow: '02 · docs',
    title: 'Write the plan where the work happens.',
    description:
      'Add notes, requirements, and decisions directly beside tasks so every update stays connected to the actual execution surface.',
  },
  {
    eyebrow: '03 · delivery',
    title: 'Measure progress without chasing status.',
    description:
      'See blockers, sprint health, and team workload in one place so leadership can act instead of ask for a report.',
  },
]

const platformPills = ['Product team', 'Marketing', 'Engineering', 'Operations', 'Client work', 'Support']

const workflowMetrics = [
  { label: 'faster planning', value: '31%' },
  { label: 'less status chasing', value: '2.4x' },
  { label: 'team clarity', value: '89%' },
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'For small teams exploring a shared system of work.',
    features: ['Unlimited tasks', '2 projects', 'Team comments', 'Board views'],
    cta: 'Try free',
    featured: false,
  },
  {
    name: 'Growth',
    price: '$19',
    description: 'For teams shipping across product, ops, and delivery.',
    features: ['Unlimited projects', 'Advanced filters', 'Dashboards', 'Automation rules'],
    cta: 'Start trial',
    featured: true,
  },
  {
    name: 'Scale',
    price: '$49',
    description: 'For organizations wanting governance, security, and depth.',
    features: ['Custom roles', 'SAML/SSO', 'Priority support', 'Advanced reporting'],
    cta: 'Talk to sales',
    featured: false,
  },
]

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="topbar">
        <div className="nav-shell container">
          <div className="brand" aria-label="Nexus home">
            <LogoMark />
            <span>NEXUS</span>
          </div>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a href="#" key={item}>
                {item}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button type="button" className="button button--text">
              Log in
            </button>
            <Button variant="primary" size="md">
              Get started
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">The operating system for modern work</div>
            <h1>Plan product work without losing the spark of the idea.</h1>
            <p className="lede">
              Nexus combines the structure of Jira with the flexibility of Notion so teams can
              map priorities, write context, and ship work in one place.
            </p>

            <div className="hero-actions">
              <Button variant="primary" size="lg">
                Start free
              </Button>
              <Button variant="secondary" size="lg">
                Book demo
              </Button>
            </div>

            <div className="hero-metrics">
              {workflowMetrics.map((item) => (
                <div key={item.label} className="metric-pill">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Nexus product overview">
            <div className="board-shell">
              <div className="board-header">
                <div className="board-header__left">
                  <span className="status-dot" />
                  <span>Product launch</span>
                </div>
                <span className="board-header__badge">Sprint 14</span>
              </div>

              <div className="board-columns">
                <div className="board-column">
                  <p>Backlog</p>
                  <div className="task-card task-card--muted">
                    <span>Customer research</span>
                    <small>3 tasks</small>
                  </div>
                  <div className="task-card task-card--coral">
                    <span>Roadmap sync</span>
                    <small>Due today</small>
                  </div>
                </div>

                <div className="board-column board-column--active">
                  <p>In progress</p>
                  <div className="task-card task-card--dark">
                    <span>Homepage refresh</span>
                    <small>Design review</small>
                  </div>
                  <div className="task-card task-card--dark">
                    <span>API integration</span>
                    <small>QA ready</small>
                  </div>
                </div>

                <div className="board-column">
                  <p>Done</p>
                  <div className="task-card task-card--green">
                    <span>Research brief</span>
                    <small>Published</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="logo-bar container" aria-label="Trusted by product teams">
          <span>Built for teams at</span>
          <div className="logo-bar__items">
            {platformPills.map((item) => (
              <span key={item} className="logo-pill">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="features" className="feature-section container">
          <div className="section-heading">
            <div className="eyebrow eyebrow--muted">Why Nexus</div>
            <h2>One workspace for planning, writing, and shipping.</h2>
          </div>

          <div className="feature-grid">
            {featureCards.map((feature) => (
              <FeatureCard
                key={feature.title}
                eyebrow={feature.eyebrow}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        <section className="workflow container">
          <div className="workflow-copy">
            <div className="eyebrow eyebrow--muted">Built for momentum</div>
            <h2>From raw idea to shipped outcome, without context loss.</h2>
            <ul className="check-list">
              <li>Break down milestones into tasks, subtasks, and shared decisions.</li>
              <li>Attach notes, briefs, and docs directly to the work that matters.</li>
              <li>Give leaders a clear signal on priorities, blockers, and delivery.</li>
            </ul>
          </div>

          <div className="workflow-panel">
            <div className="workflow-panel__header">
              <span className="circle-dot circle-dot--teal" />
              <span className="circle-dot circle-dot--amber" />
              <span className="circle-dot circle-dot--coral" />
            </div>
            <div className="workflow-panel__body">
              <div className="workflow-row">
                <span className="workflow-label">Brief</span>
                <div className="workflow-bar workflow-bar--short" />
              </div>
              <div className="workflow-row">
                <span className="workflow-label">Plan</span>
                <div className="workflow-bar workflow-bar--medium" />
              </div>
              <div className="workflow-row">
                <span className="workflow-label">Ship</span>
                <div className="workflow-bar workflow-bar--long" />
              </div>
              <div className="workflow-callout">
                <strong>Launch checklist</strong>
                <span>7 items ready · 2 blocked</span>
              </div>
            </div>
          </div>
        </section>

        <section className="platform container">
          <div className="section-heading section-heading--center">
            <div className="eyebrow eyebrow--muted">Flexible by default</div>
            <h2>Designed for the way teams actually work.</h2>
          </div>

          <div className="platform-grid">
            {[
              'Product planning',
              'Sprint execution',
              'Knowledge base',
              'Roadmap reviews',
              'Client delivery',
              'Cross-functional ops',
            ].map((label) => (
              <div key={label} className="platform-card">
                {label}
              </div>
            ))}
          </div>
        </section>

        <section className="pricing container">
          <div className="section-heading section-heading--center">
            <div className="eyebrow eyebrow--muted">Pricing</div>
            <h2>Simple plans for growing teams.</h2>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <article key={plan.name} className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}>
                <div className="pricing-card__top">
                  <span>{plan.name}</span>
                  {plan.featured ? <span className="pricing-badge">Most popular</span> : null}
                </div>
                <div className="price-row">
                  <strong>{plan.price}</strong>
                  <span>/month</span>
                </div>
                <p>{plan.description}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Button variant={plan.featured ? 'primary' : 'secondary'}>{plan.cta}</Button>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-band container">
          <div>
            <div className="eyebrow eyebrow--light">Ready to build calmer momentum?</div>
            <h2>Turn complexity into clarity.</h2>
          </div>
          <Button variant="secondary" className="cta-band__button">
            Start free
          </Button>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-shell">
          <div className="brand footer-brand">
            <LogoMark />
            <span>NEXUS</span>
          </div>
          <div className="footer-links">
            <a href="#">Product</a>
            <a href="#">Solutions</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
          <p>© 2026 Nexus. Built for aligned teams.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
