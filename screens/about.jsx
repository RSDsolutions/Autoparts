/* Screen 5: Nosotros */

const AboutScreen = () => {
  return (
    <div className="qap" style={{position: 'relative'}}>
      <Navbar active="Nosotros" />

      {/* HERO */}
      <section className="carbon" style={{padding: '120px 56px', position: 'relative', overflow: 'hidden', minHeight: 520}}>
        <HeroBg />
        <svg viewBox="0 0 1600 600" preserveAspectRatio="xMidYMid slice"
             style={{position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12, pointerEvents: 'none'}}>
          {[...Array(8)].map((_, i) => (
            <g key={i} transform={`translate(${i * 200}, 100)`}>
              <rect x="20" y="0" width="160" height="380" fill="none" stroke="#666" strokeWidth="2"/>
              {[...Array(12)].map((_, j) => (
                <line key={j} x1="20" y1={30 + j * 28} x2="180" y2={30 + j * 28} stroke="#444" strokeWidth="1"/>
              ))}
              <rect x="80" y="320" width="40" height="20" fill="#444"/>
            </g>
          ))}
        </svg>

        <div style={{position: 'relative', zIndex: 2, maxWidth: 1100}}>
          <div className="eyebrow" style={{color: 'var(--red)', marginBottom: 18}}>// EST. 2014 · QUITO ECUADOR</div>
          <h1 style={{fontSize: 112, lineHeight: 0.92, letterSpacing: '-0.02em', textTransform: 'uppercase', fontWeight: 700}}>
            Diez años<br/>sobre <span style={{color: 'var(--red)'}}>ruedas</span>
          </h1>
          <p style={{fontSize: 18, color: 'var(--gray-300)', marginTop: 28, maxWidth: 680, lineHeight: 1.6}}>
            Familia, mecánicos y obsesión por la calidad. Así nació Quito Auto Parts.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="section" style={{padding: '110px 56px'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center'}}>
          <div>
            <div className="eyebrow" style={{color: 'var(--red)', marginBottom: 14}}>// NUESTRA HISTORIA</div>
            <h2 className="section-title" style={{fontSize: 56, marginBottom: 32}}>Del taller<br/>al catálogo</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: 18, color: 'var(--gray-300)', fontSize: 15, lineHeight: 1.75}}>
              <p>
                Empezamos en 2014 en un taller de 40m² en La Floresta, importando pastillas y filtros para los carros de la familia.
                Los amigos pedían, los amigos de los amigos también, y un día el taller dejó de tener espacio para los carros.
              </p>
              <p>
                Hoy operamos desde una bodega de 600m² en la Av. 10 de Agosto con stock real de más de 200 referencias para
                las tres marcas más vendidas del Ecuador: <strong style={{color: 'white'}}>Kia, Hyundai y Chevrolet</strong>.
              </p>
              <p>
                Cada repuesto pasa por las manos de Edison —nuestro maestro mecánico de 30 años de oficio— antes de llegar al cliente.
                Sin atajos. Sin chinos sin marca. Con factura, garantía escrita y números reales en el ticket.
              </p>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, marginTop: 40, border: '1px solid var(--line-2)'}}>
              {[['2014', 'FUNDACIÓN'], ['2019', 'BODEGA NUEVA'], ['2024', '+5K CLIENTES']].map(([y, l], i) => (
                <div key={y} style={{padding: 20, borderRight: i < 2 ? '1px solid var(--line)' : 'none'}}>
                  <div style={{fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 32, color: 'var(--red)'}}>{y}</div>
                  <div className="mono" style={{fontSize: 10, color: 'var(--gray-400)', letterSpacing: '0.15em', marginTop: 4}}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Workshop illustration */}
          <div style={{aspectRatio: '0.85', background: 'var(--black-3)', border: '1px solid var(--line-2)', position: 'relative', overflow: 'hidden'}}>
            <div className="tape-corner tape-tl"></div>
            <div className="tape-corner tape-tr"></div>
            <div className="tape-corner tape-bl"></div>
            <div className="tape-corner tape-br"></div>
            <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 8px)'}}></div>
            <svg viewBox="0 0 400 480" preserveAspectRatio="xMidYMid slice" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.55}}>
              <rect x="0" y="360" width="400" height="120" fill="#1a1c1c"/>
              {[...Array(8)].map((_,i) => <line key={i} x1="0" y1={370 + i*15} x2="400" y2={370 + i*15} stroke="#333" strokeWidth="1"/>)}
              <rect x="80" y="260" width="240" height="14" fill="#444"/>
              <rect x="180" y="274" width="40" height="100" fill="#333"/>
              <path d="M120 230 L130 200 L180 195 L220 195 L270 200 L280 230 L290 240 L290 258 L110 258 L110 240 Z" fill="#222" stroke="#E31E24" strokeWidth="2"/>
              <rect x="135" y="207" width="50" height="22" fill="#0257B4" opacity="0.4"/>
              <rect x="215" y="207" width="50" height="22" fill="#0257B4" opacity="0.4"/>
              <rect x="20" y="100" width="60" height="200" fill="none" stroke="#444" strokeWidth="1"/>
              {[...Array(8)].map((_,i) => <line key={i} x1="20" y1={120 + i*22} x2="80" y2={120 + i*22} stroke="#444" strokeWidth="1"/>)}
              <rect x="320" y="100" width="60" height="200" fill="none" stroke="#444" strokeWidth="1"/>
              {[...Array(5)].map((_,i) => <rect key={i} x="328" y={110 + i*38} width="44" height="28" fill="none" stroke="#555" strokeWidth="1"/>)}
              <circle cx="200" cy="60" r="20" fill="#444"/>
              <line x1="200" y1="0" x2="200" y2="40" stroke="#333" strokeWidth="2"/>
            </svg>
            <div style={{position: 'absolute', bottom: 24, left: 24}}>
              <span className="plate plate-white">[ BODEGA QUITO · AV. 10 AGOSTO ]</span>
            </div>
            <div style={{position: 'absolute', top: 24, right: 24}} className="mono">
              <span style={{fontSize: 10, color: 'var(--gray-500)', letterSpacing: '0.18em'}}>FOTO 01/12</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US 4 cards */}
      <section className="section carbon-tight" style={{padding: '110px 56px'}}>
        <div style={{textAlign: 'center', marginBottom: 64}}>
          <div className="eyebrow" style={{color: 'var(--red)', marginBottom: 14}}>// LO QUE NOS HACE DIFERENTES</div>
          <h2 className="section-title" style={{fontSize: 56}}>Cuatro reglas, cero excepciones</h2>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16}}>
          {[
            { n: '01', t: 'Solo OEM y marcas certificadas', d: 'Nada de chinos sin marca. Trabajamos con Mando, Hyundai-Mobis, ACDelco, Bosch, NGK y proveedores OEM de Corea.' },
            { n: '02', t: 'Stock real verificado', d: 'Lo que ves en la web es lo que está en la bodega. Si dice IN STOCK, sale hoy. Sin promesas vacías.' },
            { n: '03', t: 'Garantía escrita en factura', d: 'De 6 a 12 meses según la línea. Si falla, lo cambiamos. Sin letra chica ni excusas.' },
            { n: '04', t: 'Asesoría técnica gratis', d: 'Edison y el equipo resuelven dudas por WhatsApp antes y después de la compra. Mecánicos hablando con mecánicos.' },
          ].map(f => (
            <div key={f.n} style={{padding: '36px 28px', background: 'var(--black-3)', border: '1px solid var(--line)', position: 'relative', minHeight: 280}}>
              <div className="tape-corner tape-tl"></div>
              <div style={{fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 14, color: 'var(--red)', letterSpacing: '0.18em', marginBottom: 24}}>// {f.n}</div>
              <h3 style={{fontSize: 20, textTransform: 'uppercase', letterSpacing: '0.01em', marginBottom: 14, lineHeight: 1.15}}>{f.t}</h3>
              <p style={{color: 'var(--gray-400)', fontSize: 13, lineHeight: 1.65}}>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{background: 'var(--black-2)', padding: '72px 56px', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0}}>
          {[
            { num: '10+', l: 'Años en el mercado', accent: true },
            { num: '238', l: 'Repuestos en stock' },
            { num: '5K+', l: 'Clientes satisfechos', accent: true },
            { num: '03', l: 'Marcas especializadas' },
          ].map((s, i) => (
            <div key={s.l} style={{padding: '0 32px', borderRight: i < 3 ? '1px solid var(--line)' : 'none'}}>
              <div className="mono" style={{fontSize: 11, color: s.accent ? 'var(--red)' : 'var(--gray-500)', letterSpacing: '0.18em', marginBottom: 12}}>
                // {(i+1).toString().padStart(2,'0')}
              </div>
              <div style={{fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 96, color: 'white', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 16}}>
                {s.num}
              </div>
              <div style={{fontSize: 13, color: 'var(--gray-300)', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Space Grotesk', fontWeight: 500}}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="section" style={{padding: '110px 56px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56}}>
          <div>
            <div className="eyebrow" style={{color: 'var(--red)', marginBottom: 14}}>// EQUIPO</div>
            <h2 className="section-title" style={{fontSize: 56}}>Las personas detrás</h2>
          </div>
          <p style={{maxWidth: 380, color: 'var(--gray-400)', fontSize: 14, lineHeight: 1.6}}>
            Tres personas, una bodega y un grupo de WhatsApp que nunca se apaga. Esa es Quito Auto Parts.
          </p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20}}>
          {[
            { name: 'Edison Quintero', role: 'Maestro mecánico · Co-fundador', tag: '30 años de oficio', color: '#E31E24', initials: 'EQ' },
            { name: 'Carolina Vargas', role: 'Logística & atención al cliente', tag: 'Habla coreano básico', color: '#0257B4', initials: 'CV' },
            { name: 'Sebastián Quintero', role: 'Catálogo digital & ventas', tag: 'El de WhatsApp', color: '#D4A437', initials: 'SQ' },
          ].map(t => (
            <div key={t.name} style={{background: 'var(--black-3)', border: '1px solid var(--line)', overflow: 'hidden'}}>
              <div style={{aspectRatio: '0.95', background: 'var(--black-2)', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--line)'}}>
                <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 6px)'}}></div>
                <div style={{position: 'absolute', inset: 0, display: 'grid', placeItems: 'center'}}>
                  <div style={{width: 140, height: 140, border: `3px solid ${t.color}`, display: 'grid', placeItems: 'center', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 56, color: t.color, letterSpacing: '-0.02em'}}>
                    {t.initials}
                  </div>
                </div>
                <div style={{position: 'absolute', top: 16, left: 16}}>
                  <span className="plate plate-white" style={{fontSize: 10}}>[ FOTO PERSONAL ]</span>
                </div>
                <div style={{position: 'absolute', bottom: 16, right: 16}} className="mono">
                  <span style={{fontSize: 10, color: 'var(--gray-500)', letterSpacing: '0.18em'}}>QAP-TM-{t.initials}</span>
                </div>
              </div>
              <div style={{padding: 28}}>
                <h3 style={{fontSize: 22, textTransform: 'uppercase', letterSpacing: '0.01em', marginBottom: 6}}>{t.name}</h3>
                <div style={{color: 'var(--gray-300)', fontSize: 13, marginBottom: 16}}>{t.role}</div>
                <div style={{height: 2, width: 32, background: t.color, marginBottom: 16}}></div>
                <span className="mono" style={{fontSize: 11, color: 'var(--gray-400)', letterSpacing: '0.12em'}}>// {t.tag.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <WAFloat />
    </div>
  );
};

window.AboutScreen = AboutScreen;
