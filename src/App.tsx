import { mainLinks, site, socialLinks } from './links'
import './App.css'

function App() {
  return (
    <main className="page">
      <header className="header">
        <h1 className="name">{site.name}</h1>
        <p className="tagline">{site.tagline}</p>
      </header>

      <nav className="nav">
        <ul className="nav-list">
          {mainLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <hr className="divider" />

      <footer className="footer">
        <ul className="social-list">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-label={link.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </main>
  )
}

export default App
