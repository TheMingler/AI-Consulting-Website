export default function Home() {
  return (
    <div>
      <header style={{ padding: '20px', background: '#f8f8f8', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div><strong>Company Logo</strong></div>
        <nav>
          <a href="/">Home</a> | <a href="/services">Services</a> | <a href="/case-studies">Case Studies</a> | <a href="/ai-insights">AI Insights</a> | <a href="/solutions">Solutions</a> | <a href="/contact">Contact</a>
        </nav>
      </header>
      <section style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Accelerate Your Enterprise with AI-Driven Solutions</h1>
        <p>Your partner in AI consulting and digital transformation.</p>
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Get a Free AI Strategy Session</button>
      </section>
      <footer style={{ padding: '20px', background: '#f1f1f1', textAlign: 'center' }}>
        <p>© 2025 AI Consulting. All rights reserved.</p>
      </footer>
    </div>
  )
}
