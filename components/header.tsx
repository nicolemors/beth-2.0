import Link from 'next/link'

const Header = () => {
  return (
    <>
      <header className="site-header u-flex u-flex-align-items-center u-flex-col">
        <Link href="/" className="hover:underline">
          <img className="logo" alt="Beth Bogdon Logo" src="/assets/images/logo.png"></img>
          <h1 className="font-serif text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
            Beth Bogdon
            <span className="u-text-shrink-2 u-space-left-02">LPC</span>
          </h1>
        </Link>
        <nav id="site-navigation" className="main-navigation">
			    <button className="menu-toggle button button--light" aria-controls="primary-menu" aria-expanded="false">
            <img src="public/assets/images/menu.svg" alt="Menu" />
          </button>
          <ul className="u-list-inline">
            <li><a className="nav-menu-item" href="/approach.html">Approach</a></li>
            <li><a className="nav-menu-item" href="/issues.html">Issues</a></li>
            <li><a className="nav-menu-item" href="/background.html">Background</a></li>
            <li><a className="nav-menu-item" href="/supervision.html">Supervision</a></li>
            <li><a className="nav-menu-item" href="/rates.html">Rates & Insurance</a></li>
            <li><a className="nav-menu-item" href="/contact.html">Contact</a></li>
          </ul>
		    </nav>
      </header>
    </>
  );
}

export default Header
