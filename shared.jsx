/* Shared components for Quito Auto Parts */

const WA_NUMBER = '593991234567';
const WA_BASE = `https://wa.me/${WA_NUMBER}`;

const waLink = (text) => `${WA_BASE}?text=${encodeURIComponent(text)}`;

const Logo = () => (
  <a className="logo-wrap" onClick={() => window.navigate('home')}>
    <span className="logo-mark"></span>
    <span className="logo-text">
      QUITO AUTO PARTS
      <small>REPUESTOS · QUITO EC</small>
    </span>
  </a>
);

const Navbar = ({ active = 'Inicio' }) => {
  const [open, setOpen] = React.useState(false);
  const links = [
    { label: 'Inicio', page: 'home' },
    { label: 'Marcas', page: 'brands' },
    { label: 'Catálogo', page: 'catalog' },
    { label: 'Nosotros', page: 'about' },
    { label: 'Contacto', page: 'contact' },
  ];
  const go = (page) => { setOpen(false); window.navigate(page); };
  return (
    <>
      <nav className="nav" style={{position: 'sticky', top: 0, zIndex: 50}}>
        <Logo />
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.label}>
              <a className={l.label === active ? 'active' : ''} onClick={() => go(l.page)}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a className="btn btn-red nav-cta" onClick={() => go('catalog')}>
          Ver Catálogo <span style={{fontSize: 14}}>→</span>
        </a>
        <button className={`nav-burger${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menú">
          <span></span><span></span><span></span>
        </button>
      </nav>
      {open && (
        <div className="nav-mobile" style={{zIndex: 49}}>
          {links.map(l => (
            <a key={l.label} className={l.label === active ? 'active' : ''} onClick={() => go(l.page)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn-red nav-mobile-cta" onClick={() => go('catalog')} style={{marginTop: 32, justifyContent: 'center'}}>
            Ver Catálogo →
          </a>
        </div>
      )}
    </>
  );
};

const WAIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const WAFloat = () => (
  <a
    className="wa-float"
    href={waLink('Hola, me interesa información sobre sus repuestos.')}
    target="_blank"
    rel="noopener noreferrer"
    title="Escríbenos por WhatsApp"
  >
    <WAIcon size={28} />
  </a>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-grid">
      <div>
        <Logo />
        <p style={{color: 'var(--gray-400)', fontSize: 13, marginTop: 18, maxWidth: 320, lineHeight: 1.6}}>
          Especialistas en repuestos para Kia, Hyundai y Chevrolet. Entrega express en todo Quito y envíos a nivel nacional.
        </p>
        <div style={{display: 'flex', gap: 10, marginTop: 22}}>
          {['IG', 'FB', 'TT', 'YT'].map(s => (
            <div key={s} style={{
              width: 36, height: 36, border: '1px solid var(--line-2)',
              display: 'grid', placeItems: 'center',
              fontFamily: 'Space Grotesk', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
              color: 'var(--gray-300)', cursor: 'pointer'
            }}>{s}</div>
          ))}
        </div>
      </div>
      <div>
        <h5>Catálogo</h5>
        <ul>
          <li><a onClick={() => window.navigate('brands')}>Kia</a></li>
          <li><a onClick={() => window.navigate('brands')}>Hyundai</a></li>
          <li><a onClick={() => window.navigate('brands')}>Chevrolet</a></li>
          <li><a onClick={() => window.navigate('catalog')}>Frenos</a></li>
          <li><a onClick={() => window.navigate('catalog')}>Motor</a></li>
          <li><a onClick={() => window.navigate('catalog')}>Suspensión</a></li>
        </ul>
      </div>
      <div>
        <h5>Empresa</h5>
        <ul>
          <li><a onClick={() => window.navigate('about')}>Nosotros</a></li>
          <li><a onClick={() => window.navigate('contact')}>Contacto</a></li>
          <li><a onClick={() => window.navigate('contact')}>Garantía</a></li>
          <li><a onClick={() => window.navigate('contact')}>Política de envíos</a></li>
        </ul>
      </div>
      <div>
        <h5>Contacto</h5>
        <ul>
          <li><a href="tel:+593991234567">+593 99 123 4567</a></li>
          <li><a href="mailto:ventas@quitoautoparts.ec">ventas@quitoautoparts.ec</a></li>
          <li style={{color: 'var(--gray-400)', fontSize: 13}}>Av. 10 de Agosto N32-145<br/>Quito, Ecuador</li>
          <li style={{color: 'var(--gray-400)', fontSize: 13, marginTop: 6}}>Lun–Vie 8:00–18:00<br/>Sáb 8:00–14:00</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 QUITO AUTO PARTS · RUC 1792XXXXXXX001</span>
      <span>HECHO EN QUITO · ECUADOR 🇪🇨</span>
    </div>
  </footer>
);

/* Brand badge - geometric (original, not real logos) */
const BrandBadge = ({ brand, size = 64 }) => {
  const map = {
    Kia: { color: '#E31E24', char: 'K' },
    Hyundai: { color: '#0257B4', char: 'H' },
    Chevrolet: { color: '#D4A437', char: 'C' },
  };
  const { color, char } = map[brand] || map.Kia;
  return (
    <div style={{
      width: size, height: size,
      border: `2px solid ${color}`,
      display: 'grid', placeItems: 'center',
      fontFamily: 'Space Grotesk', fontWeight: 700,
      fontSize: size * 0.45,
      color: color,
      position: 'relative',
      flexShrink: 0,
    }}>
      <span style={{position: 'absolute', top: 4, left: 4, fontSize: 8, fontFamily: 'JetBrains Mono', color, letterSpacing: '0.1em', opacity: 0.7}}>OEM</span>
      {char}
    </div>
  );
};

/* Compatibility chip per brand */
const CompatChip = ({ brand, model }) => {
  const cls = brand === 'Kia' ? 'plate-red' : brand === 'Hyundai' ? 'plate-blue' : 'plate-gold';
  return <span className={`plate ${cls}`}>● {brand}{model ? ' · ' + model : ''}</span>;
};

/* Generic part image placeholder */
const PartImage = ({ kind = 'brake', accent = '#888' }) => {
  const shapes = {
    brake: (
      <g>
        <circle cx="100" cy="100" r="58" fill="none" stroke={accent} strokeWidth="2" opacity="0.7"/>
        <circle cx="100" cy="100" r="42" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.5"/>
        <circle cx="100" cy="100" r="18" fill={accent} opacity="0.25"/>
        {[...Array(12)].map((_,i) => (
          <line key={i} x1="100" y1="50" x2="100" y2="58" stroke={accent} strokeWidth="2"
            transform={`rotate(${i*30} 100 100)`} opacity="0.5"/>
        ))}
        <rect x="68" y="92" width="64" height="16" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.6"/>
      </g>
    ),
    filter: (
      <g>
        <rect x="62" y="40" width="76" height="120" fill="none" stroke={accent} strokeWidth="2" opacity="0.7"/>
        {[...Array(10)].map((_,i) => (
          <line key={i} x1="62" y1={50 + i*12} x2="138" y2={50 + i*12} stroke={accent} strokeWidth="1" opacity="0.4"/>
        ))}
        <rect x="76" y="28" width="48" height="14" fill="none" stroke={accent} strokeWidth="2" opacity="0.7"/>
        <rect x="76" y="158" width="48" height="14" fill="none" stroke={accent} strokeWidth="2" opacity="0.7"/>
      </g>
    ),
    spark: (
      <g>
        <rect x="92" y="30" width="16" height="60" fill={accent} opacity="0.3" stroke={accent} strokeWidth="1.5"/>
        <polygon points="92,90 108,90 104,110 96,110" fill={accent} opacity="0.5"/>
        <rect x="94" y="110" width="12" height="40" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7"/>
        <rect x="96" y="150" width="8" height="20" fill={accent} opacity="0.4"/>
      </g>
    ),
    shock: (
      <g>
        <rect x="88" y="30" width="24" height="20" fill={accent} opacity="0.4" stroke={accent} strokeWidth="1.5"/>
        <rect x="84" y="50" width="32" height="60" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7"/>
        <rect x="92" y="110" width="16" height="50" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7"/>
        {[...Array(6)].map((_,i) => (
          <line key={i} x1="84" y1={56 + i*9} x2="116" y2={56 + i*9} stroke={accent} strokeWidth="1" opacity="0.4"/>
        ))}
        <circle cx="100" cy="170" r="8" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7"/>
      </g>
    ),
    belt: (
      <g>
        <ellipse cx="100" cy="100" rx="70" ry="34" fill="none" stroke={accent} strokeWidth="3" opacity="0.7"/>
        <ellipse cx="100" cy="100" rx="60" ry="26" fill="none" stroke={accent} strokeWidth="1" opacity="0.4"/>
        {[...Array(20)].map((_,i) => (
          <line key={i} x1={30 + i*7} y1="98" x2={30 + i*7} y2="102" stroke={accent} strokeWidth="1.5" opacity="0.5"/>
        ))}
      </g>
    ),
    battery: (
      <g>
        <rect x="40" y="60" width="120" height="90" fill="none" stroke={accent} strokeWidth="2" opacity="0.7"/>
        <rect x="56" y="48" width="20" height="14" fill={accent} opacity="0.5"/>
        <rect x="124" y="48" width="20" height="14" fill={accent} opacity="0.5"/>
        <text x="65" y="115" fill={accent} fontFamily="Space Grotesk" fontWeight="700" fontSize="14" opacity="0.7">12V</text>
        <line x1="55" y1="80" x2="65" y2="80" stroke={accent} strokeWidth="2"/>
        <line x1="60" y1="75" x2="60" y2="85" stroke={accent} strokeWidth="2"/>
        <line x1="135" y1="80" x2="145" y2="80" stroke={accent} strokeWidth="2"/>
      </g>
    ),
    bulb: (
      <g>
        <ellipse cx="100" cy="80" rx="36" ry="38" fill="none" stroke={accent} strokeWidth="2" opacity="0.7"/>
        <rect x="84" y="118" width="32" height="8" fill={accent} opacity="0.3" stroke={accent} strokeWidth="1"/>
        <rect x="86" y="126" width="28" height="20" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7"/>
        <line x1="86" y1="132" x2="114" y2="132" stroke={accent} opacity="0.5"/>
        <line x1="86" y1="138" x2="114" y2="138" stroke={accent} opacity="0.5"/>
        <path d="M88 75 Q100 60 112 75" stroke={accent} fill="none" strokeWidth="1.5" opacity="0.6"/>
      </g>
    ),
    pump: (
      <g>
        <circle cx="100" cy="100" r="50" fill="none" stroke={accent} strokeWidth="2" opacity="0.7"/>
        <circle cx="100" cy="100" r="30" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.5"/>
        <circle cx="100" cy="100" r="8" fill={accent} opacity="0.6"/>
        {[...Array(6)].map((_,i) => (
          <path key={i} d="M100 100 L120 92 A30 30 0 0 1 120 108 Z"
            fill={accent} opacity="0.25"
            transform={`rotate(${i*60} 100 100)`}/>
        ))}
        <rect x="40" y="96" width="20" height="8" fill={accent} opacity="0.5"/>
        <rect x="140" y="96" width="20" height="8" fill={accent} opacity="0.5"/>
      </g>
    ),
  };
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id={`bgg-${kind}`}>
          <stop offset="0%" stopColor="#1a1c1c"/>
          <stop offset="100%" stopColor="#0a0b0b"/>
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill={`url(#bgg-${kind})`}/>
      {shapes[kind] || shapes.brake}
    </svg>
  );
};

/* Engine/car hero background SVG */
const HeroBg = () => (
  <div style={{position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none'}}>
    <div className="carbon" style={{position: 'absolute', inset: 0}}></div>
    <svg viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid slice"
         style={{position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.18}}>
      <defs>
        <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#666"/>
          <stop offset="50%" stopColor="#222"/>
          <stop offset="100%" stopColor="#444"/>
        </linearGradient>
      </defs>
      {/* Engine block */}
      <g transform="translate(900, 200)">
        <rect x="0" y="0" width="500" height="380" fill="none" stroke="#555" strokeWidth="2"/>
        <rect x="20" y="20" width="460" height="60" fill="none" stroke="#444" strokeWidth="1.5"/>
        {[...Array(6)].map((_,i) => (
          <g key={i} transform={`translate(${30 + i*78}, 100)`}>
            <circle r="28" fill="none" stroke="#666" strokeWidth="2"/>
            <circle r="20" fill="none" stroke="#555" strokeWidth="1"/>
            <circle r="6" fill="#666"/>
            {[...Array(8)].map((_,j) => (
              <line key={j} x1="0" y1="-28" x2="0" y2="-32" stroke="#666" strokeWidth="1.5"
                transform={`rotate(${j*45})`}/>
            ))}
          </g>
        ))}
        <rect x="20" y="200" width="460" height="80" fill="none" stroke="#444" strokeWidth="1"/>
        {[...Array(20)].map((_,i) => (
          <line key={i} x1={30 + i*22} y1="210" x2={30 + i*22} y2="270" stroke="#444" strokeWidth="1"/>
        ))}
        <rect x="20" y="300" width="460" height="60" fill="none" stroke="#444" strokeWidth="1"/>
      </g>
      {/* Radiator left */}
      <g transform="translate(50, 150)">
        <circle cx="100" cy="100" r="80" fill="none" stroke="#555" strokeWidth="2"/>
        <circle cx="100" cy="100" r="60" fill="none" stroke="#444" strokeWidth="1"/>
        <circle cx="100" cy="100" r="20" fill="none" stroke="#666" strokeWidth="2"/>
        {[...Array(12)].map((_,i) => (
          <line key={i} x1="100" y1="20" x2="100" y2="40" stroke="#555" strokeWidth="2"
            transform={`rotate(${i*30} 100 100)`}/>
        ))}
        <line x1="180" y1="100" x2="320" y2="100" stroke="#444" strokeWidth="3"/>
        <line x1="100" y1="180" x2="100" y2="320" stroke="#444" strokeWidth="3"/>
      </g>
    </svg>
    {/* Red diagonal accent */}
    <div style={{position: 'absolute', top: 0, right: 0, width: 4, height: '60%', background: 'linear-gradient(180deg, var(--red), transparent)'}}></div>
    <div style={{position: 'absolute', top: '30%', right: 100, width: 200, height: 1, background: 'linear-gradient(90deg, transparent, var(--red))'}}></div>
  </div>
);

/* Helper: build a WhatsApp link for a product */
const productWALink = (name, sku) => {
  const text = sku
    ? `Hola, me interesa el repuesto: ${name} (SKU: ${sku}). ¿Está disponible?`
    : `Hola, me interesa el repuesto: ${name}. ¿Está disponible y cuánto cuesta?`;
  return waLink(text);
};

Object.assign(window, {
  WA_NUMBER, WA_BASE, waLink, productWALink,
  Logo, Navbar, WAIcon, WAFloat, Footer, BrandBadge, CompatChip, PartImage, HeroBg
});
