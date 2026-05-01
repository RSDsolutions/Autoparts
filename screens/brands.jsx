/* Screen 4: Marcas page */

const BrandsScreen = () => {
  const brands = [
    {
      name: 'KIA',
      tag: 'KOREA · 1944',
      color: '#E31E24',
      desc: 'Repuestos para toda la línea Kia: Sportage, Rio, Picanto, Cerato, Soul y Sorento. Compatibilidad verificada por VIN, garantía OEM y entrega 24h en Quito.',
      count: 78,
      models: ['Sportage', 'Rio', 'Picanto', 'Cerato', 'Soul', 'Sorento'],
    },
    {
      name: 'HYUNDAI',
      tag: 'KOREA · 1967',
      color: '#0257B4',
      desc: 'Catálogo completo Hyundai con foco en SUVs y compactos: Tucson, Accent, Elantra, Creta, i10 y Santa Fe. Repuestos OEM y aftermarket de gama alta.',
      count: 92,
      models: ['Tucson', 'Accent', 'Elantra', 'Creta', 'i10', 'Santa Fe'],
    },
    {
      name: 'CHEVROLET',
      tag: 'USA · 1911',
      color: '#D4A437',
      desc: 'Línea más amplia del mercado ecuatoriano: Sail, Aveo, Spark, Cruze, D-Max y Tahoe. Trabajamos con repuestos GM-OEM, ACDelco y proveedores certificados.',
      count: 68,
      models: ['Sail', 'Aveo', 'Spark', 'Cruze', 'D-Max', 'Tahoe'],
    },
  ];

  const cats = [
    { name: 'Frenos', icon: 'brake' },
    { name: 'Motor', icon: 'spark' },
    { name: 'Suspensión', icon: 'shock' },
    { name: 'Transmisión', icon: 'belt' },
    { name: 'Eléctrico', icon: 'battery' },
    { name: 'Filtros', icon: 'filter' },
  ];

  return (
    <div className="qap" style={{position: 'relative'}}>
      <Navbar active="Marcas" />

      {/* HERO */}
      <section className="carbon" style={{padding: '120px 56px 96px', position: 'relative', overflow: 'hidden'}}>
        <HeroBg />
        <div style={{position: 'relative', zIndex: 2, maxWidth: 1100}}>
          <div className="eyebrow" style={{color: 'var(--red)', marginBottom: 18}}>// 03 MARCAS · 238 REFERENCIAS</div>
          <h1 style={{fontSize: 112, lineHeight: 0.92, letterSpacing: '-0.02em', textTransform: 'uppercase', fontWeight: 700}}>
            Repuestos por<br/><span style={{color: 'var(--red)'}}>marca</span>
          </h1>
          <p style={{fontSize: 18, color: 'var(--gray-300)', marginTop: 28, maxWidth: 640, lineHeight: 1.6}}>
            Especialistas certificados en las tres marcas más vendidas del Ecuador. Selecciona tu marca y filtra por modelo, año y categoría.
          </p>
        </div>

        {/* Side stat sticker */}
        <div style={{position: 'absolute', right: 56, top: 130, zIndex: 2, display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--line)', border: '1px solid var(--line-2)'}}>
          {[['78', 'KIA'], ['92', 'HYUNDAI'], ['68', 'CHEVROLET']].map(([n, b]) => (
            <div key={b} style={{padding: '20px 28px', background: 'var(--black-3)', display: 'flex', alignItems: 'center', gap: 18, minWidth: 240}}>
              <div style={{fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 32, color: 'white', lineHeight: 1}}>{n}</div>
              <div className="mono" style={{fontSize: 11, color: 'var(--gray-400)', letterSpacing: '0.15em'}}>REPUESTOS<br/>{b}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BRAND CARDS */}
      <section style={{padding: '80px 56px', display: 'flex', flexDirection: 'column', gap: 80}}>
        {brands.map((b, idx) => (
          <div key={b.name}>
            {/* Big card */}
            <div style={{
              border: '1px solid var(--line-2)', background: 'var(--black-3)', padding: 0,
              display: 'grid',
              gridTemplateColumns: idx % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr',
              minHeight: 380, position: 'relative', overflow: 'hidden',
            }}>
              <div style={{padding: '56px', display: 'flex', flexDirection: 'column', order: idx % 2 === 0 ? 1 : 2, position: 'relative'}}>
                <div className="tape-corner tape-tl" style={{borderColor: b.color}}></div>
                <div style={{display: 'flex', alignItems: 'center', gap: 18, marginBottom: 28}}>
                  <BrandBadge brand={b.name.charAt(0) + b.name.slice(1).toLowerCase()} size={72}/>
                  <div>
                    <span className="mono" style={{fontSize: 11, color: b.color, letterSpacing: '0.18em'}}>// {b.tag}</span>
                    <div style={{fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 13, color: 'var(--gray-400)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 4}}>
                      Distribuidor autorizado
                    </div>
                  </div>
                </div>
                <h2 style={{fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 88, letterSpacing: '0.02em', lineHeight: 0.95, textTransform: 'uppercase', marginBottom: 8}}>
                  {b.name}
                </h2>
                <div style={{height: 4, width: 80, background: b.color, marginBottom: 24}}></div>
                <p style={{color: 'var(--gray-300)', fontSize: 15, lineHeight: 1.7, marginBottom: 28, maxWidth: 540}}>{b.desc}</p>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32}}>
                  {b.models.map(m => (
                    <span key={m} className="plate plate-white" style={{padding: '6px 12px'}}>{m.toUpperCase()}</span>
                  ))}
                </div>
                <div style={{display: 'flex', gap: 12, marginTop: 'auto'}}>
                  <button className="btn btn-red" onClick={() => window.navigate('catalog')}>Ver repuestos {b.name} →</button>
                  <a href={waLink(`Hola, me interesa el catálogo PDF de repuestos para ${b.name}.`)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Catálogo PDF</a>
                </div>
              </div>

              {/* Right showcase */}
              <div style={{
                background: 'var(--black-2)', position: 'relative', overflow: 'hidden',
                order: idx % 2 === 0 ? 2 : 1,
                borderLeft: idx % 2 === 0 ? '1px solid var(--line)' : 'none',
                borderRight: idx % 2 === 0 ? 'none' : '1px solid var(--line)',
              }}>
                <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 6px)'}}></div>
                <div style={{position: 'absolute', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 280, color: b.color, opacity: 0.07, top: -40, left: -20, lineHeight: 1, letterSpacing: '-0.05em'}}>
                  {b.name.charAt(0)}
                </div>
                <div style={{position: 'absolute', inset: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 12}}>
                  <PartImage kind="brake" accent={b.color}/>
                  <PartImage kind="filter" accent={b.color}/>
                  <PartImage kind="spark" accent={b.color}/>
                  <PartImage kind="shock" accent={b.color}/>
                </div>
                <div style={{position: 'absolute', bottom: 24, right: 24, fontFamily: 'JetBrains Mono', fontSize: 11, color: 'var(--gray-500)', letterSpacing: '0.15em'}}>
                  {b.count.toString().padStart(3, '0')} REFS · 06 CATEGORÍAS
                </div>
              </div>
            </div>

            {/* Categories grid for brand */}
            <div style={{marginTop: 28}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18}}>
                <div className="eyebrow">Categorías {b.name}</div>
                <span className="mono" style={{fontSize: 11, color: 'var(--gray-500)', letterSpacing: '0.12em'}}>06 SECCIONES</span>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12}}>
                {cats.map(c => (
                  <div key={c.name} onClick={() => window.navigate('catalog')} style={{
                    background: 'var(--black-3)', border: '1px solid var(--line)',
                    padding: 22, color: 'white',
                    display: 'flex', flexDirection: 'column', gap: 8, cursor: 'pointer',
                    transition: 'all 0.2s', position: 'relative', minHeight: 130,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = b.color; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
                    <div style={{width: 36, height: 36, marginBottom: 6}}>
                      <PartImage kind={c.icon} accent={b.color}/>
                    </div>
                    <div style={{fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.02em'}}>
                      {c.name}
                    </div>
                    <div className="mono" style={{fontSize: 10, color: 'var(--gray-500)', letterSpacing: '0.1em', marginTop: 'auto'}}>
                      VER → {Math.floor(b.count / 6) + (idx * 2)} ITEMS
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured products for brand */}
            <div style={{marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16}}>
              {[
                { name: `Pastillas freno ${b.name === 'KIA' ? 'Sportage' : b.name === 'HYUNDAI' ? 'Tucson' : 'Sail'}`, kind: 'brake', price: (40 + idx * 8) },
                { name: `Filtro de aire ${b.models[0]}`, kind: 'filter', price: (22 + idx * 3) },
                { name: `Bujías iridio ${b.models[1]}`, kind: 'spark', price: (35 + idx * 4) },
                { name: `Amortiguador ${b.models[0]}`, kind: 'shock', price: (85 + idx * 6) },
              ].map((p, i) => (
                <div key={i} className="product">
                  <div className="product-img" onClick={() => window.navigate('product')} style={{cursor: 'pointer'}}>
                    <PartImage kind={p.kind} accent={b.color}/>
                    <div style={{position: 'absolute', top: 12, left: 12}}>
                      <span className="plate plate-stock">● IN STOCK</span>
                    </div>
                  </div>
                  <div className="product-body">
                    <div className="product-name">{p.name}</div>
                    <div className="product-compat">{b.name} · OEM</div>
                    <div className="product-price-row">
                      <div className="product-price"><small>$</small>{p.price.toFixed(2)}</div>
                    </div>
                    <a href={productWALink(p.name)} target="_blank" rel="noopener noreferrer"
                       className="btn btn-wa" style={{width: '100%', padding: '12px', fontSize: 12, textAlign: 'center'}}>
                      <WAIcon size={16}/> WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <Footer />
      <WAFloat />
    </div>
  );
};

window.BrandsScreen = BrandsScreen;
