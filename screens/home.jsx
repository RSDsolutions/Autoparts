/* Screen 1: Home page */

const HomeScreen = () => {
  const products = [
    { name: 'Pastillas de freno delanteras', brand: 'Kia', model: 'Sportage 2018-2023', price: 48.90, kind: 'brake', stock: 'IN STOCK' },
    { name: 'Filtro de aire motor OEM', brand: 'Hyundai', model: 'Tucson 2016-2022', price: 24.50, kind: 'filter', stock: 'IN STOCK' },
    { name: 'Bujías iridio (juego x4)', brand: 'Chevrolet', model: 'Aveo 2012-2020', price: 39.00, kind: 'spark', stock: 'IN STOCK' },
    { name: 'Amortiguador trasero', brand: 'Kia', model: 'Rio 2017-2023', price: 89.00, kind: 'shock', stock: 'BAJO STOCK' },
    { name: 'Correa de distribución', brand: 'Hyundai', model: 'Accent 2015-2021', price: 56.00, kind: 'belt', stock: 'IN STOCK' },
    { name: 'Batería 12V 75Ah', brand: 'Chevrolet', model: 'Sail 2014-2022', price: 145.00, kind: 'battery', stock: 'IN STOCK' },
    { name: 'Bombilla halógena H4', brand: 'Kia', model: 'Picanto 2016-2023', price: 12.50, kind: 'bulb', stock: 'IN STOCK' },
    { name: 'Bomba de agua', brand: 'Hyundai', model: 'Elantra 2017-2022', price: 78.00, kind: 'pump', stock: 'BAJO STOCK' },
  ];

  return (
    <div className="qap" style={{position: 'relative'}}>
      <Navbar active="Inicio" />

      {/* HERO */}
      <section style={{position: 'relative', minHeight: 520, overflow: 'hidden', padding: 'clamp(60px,9vw,120px) clamp(16px,4vw,56px) clamp(40px,6vw,80px)'}} className="carbon">
        <HeroBg />

        <div style={{position: 'relative', zIndex: 2}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24}}>
            <span className="plate plate-red">● EN VIVO · QUITO</span>
            <span className="mono" style={{fontSize: 11, color: 'var(--gray-400)', letterSpacing: '0.15em', display: 'none'}} id="hero-ts">
              STOCK ACTUALIZADO 01.05.26
            </span>
          </div>
          <div className="eyebrow" style={{marginBottom: 20, color: 'var(--red)'}}>// CATÁLOGO #001 — REPUESTOS PREMIUM</div>
          <h1 style={{
            fontSize: 'clamp(42px, 7vw, 96px)', lineHeight: 0.95, letterSpacing: '-0.02em',
            textTransform: 'uppercase', fontWeight: 700, marginBottom: 28, maxWidth: 900,
          }}>
            Repuestos premium<br/>
            <span style={{color: 'var(--red)'}}>para tu auto</span> en Quito
          </h1>
          <p style={{fontSize: 'clamp(15px, 2vw, 19px)', color: 'var(--gray-300)', maxWidth: 600, marginBottom: 40, lineHeight: 1.5}}>
            Especialistas en <strong style={{color: 'white'}}>Kia, Hyundai y Chevrolet</strong>. Calidad garantizada,
            entrega express en todo el Distrito Metropolitano y stock real verificado.
          </p>
          <div style={{display: 'flex', gap: 14, flexWrap: 'wrap'}}>
            <button className="btn btn-red" onClick={() => window.navigate('catalog')}>Ver Catálogo Completo →</button>
            <button className="btn btn-blue-out" onClick={() => window.navigate('contact')}>Contáctanos</button>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust">
        {[
          { num: '+200', label: 'Repuestos disponibles', accent: true },
          { num: '+10',  label: 'Años de experiencia' },
          { num: '24h',  label: 'Entrega express en Quito', accent: true },
          { num: '100%', label: 'Garantía en productos' },
        ].map(s => (
          <div className="trust-item" key={s.label}>
            <div className="trust-num">
              {s.accent ? <span className="accent">{s.num.slice(0,1)}</span> : s.num.slice(0,1)}
              {s.num.slice(1)}
            </div>
            <div className="trust-label">{s.label}</div>
          </div>
        ))}
      </section>

      {/* BRANDS SECTION */}
      <section className="section carbon-tight">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16}}>
          <div>
            <div className="eyebrow" style={{color: 'var(--red)', marginBottom: 14}}>// 03 MARCAS · 200+ MODELOS</div>
            <h2 className="section-title">Trabajamos con tu marca</h2>
          </div>
        </div>

        <div className="rg-3" style={{gap: 24}}>
          {[
            { name: 'KIA', desc: 'Sportage · Rio · Picanto · Cerato · Soul', count: '78 referencias', color: '#E31E24' },
            { name: 'HYUNDAI', desc: 'Tucson · Accent · Elantra · Creta · i10', count: '92 referencias', color: '#0257B4' },
            { name: 'CHEVROLET', desc: 'Sail · Aveo · D-Max · Cruze · Spark', count: '68 referencias', color: '#D4A437' },
          ].map(b => (
            <div key={b.name} className="brand-card">
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32}}>
                <BrandBadge brand={b.name.charAt(0) + b.name.slice(1).toLowerCase()} size={64} />
                <span className="mono" style={{fontSize: 11, color: 'var(--gray-400)'}}>/ {b.count.toUpperCase()}</span>
              </div>
              <div className="brand-name">{b.name}</div>
              <div style={{height: 3, width: 56, background: b.color, margin: '20px 0'}}></div>
              <p style={{color: 'var(--gray-300)', fontSize: 14, marginBottom: 28}}>{b.desc}</p>
              <span className="arrow-link" onClick={() => window.navigate('brands')}>Ver repuestos</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section" style={{borderTop: '1px solid var(--line)'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16}}>
          <div>
            <div className="eyebrow" style={{color: 'var(--red)', marginBottom: 14}}>// PRODUCTOS DESTACADOS</div>
            <h2 className="section-title">Más vendidos</h2>
          </div>
          <button className="btn btn-ghost" onClick={() => window.navigate('catalog')}>Ver todo →</button>
        </div>

        <div className="rg-4" style={{gap: 20}}>
          {products.map((p, i) => (
            <div key={i} className="product">
              <div className="product-img" onClick={() => window.navigate('product')} style={{cursor: 'pointer'}}>
                <PartImage kind={p.kind} accent={p.brand === 'Kia' ? '#ff5a60' : p.brand === 'Hyundai' ? '#5fa5ff' : '#e0b850'}/>
                <div style={{position: 'absolute', top: 10, left: 10}}>
                  <span className={`plate ${p.stock === 'IN STOCK' ? 'plate-stock' : 'plate-low'}`} style={{fontSize: 9}}>
                    {p.stock === 'IN STOCK' ? '● STOCK' : '● BAJO'}
                  </span>
                </div>
                <div style={{position: 'absolute', top: 10, right: 10}}>
                  <CompatChip brand={p.brand} />
                </div>
              </div>
              <div className="product-body">
                <div className="product-name" onClick={() => window.navigate('product')} style={{cursor: 'pointer'}}>{p.name}</div>
                <div className="product-compat">{p.brand.toUpperCase()} {p.model}</div>
                <div className="product-price-row">
                  <div className="product-price"><small>$</small>{p.price.toFixed(2)}</div>
                  <span className="mono" style={{fontSize: 10, color: 'var(--gray-500)'}}>SKU-{4400 + i}</span>
                </div>
                <a href={productWALink(p.name, `QAP-${4400 + i}`)} target="_blank" rel="noopener noreferrer"
                   className="btn btn-wa" style={{width: '100%', padding: '11px', fontSize: 11, textAlign: 'center'}}>
                  <WAIcon size={14}/> Pedir por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO BUY */}
      <section className="section carbon-tight">
        <div style={{textAlign: 'center', marginBottom: 56}}>
          <div className="eyebrow" style={{color: 'var(--red)', marginBottom: 14}}>// PROCESO 3 PASOS</div>
          <h2 className="section-title">Cómo comprar</h2>
        </div>
        <div className="rg-3" style={{gap: 24}}>
          {[
            { n: '01', title: 'Encuentra tu repuesto', desc: 'Busca por marca, modelo o categoría. Verifica compatibilidad y stock en tiempo real.', tag: 'CATÁLOGO' },
            { n: '02', title: 'Haz clic en WhatsApp', desc: 'Mensaje pre-llenado con producto y precio. Confirmamos disponibilidad en minutos.', tag: 'CHAT' },
            { n: '03', title: 'Recibe en Quito', desc: 'Entrega express el mismo día. Envíos nacionales con Servientrega/Tramaco.', tag: 'ENTREGA' },
          ].map((s, i) => (
            <div key={s.n} style={{background: 'var(--black-3)', border: '1px solid var(--line)', padding: '40px 28px', position: 'relative'}}>
              <div className="tape-corner tape-tl"></div>
              <div style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24}}>
                <div style={{width: 56, height: 56, background: 'var(--red)', display: 'grid', placeItems: 'center', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 24, flexShrink: 0}}>{s.n}</div>
                <span className="mono" style={{fontSize: 10, color: 'var(--gray-400)', letterSpacing: '0.15em'}}>// {s.tag}</span>
              </div>
              <h3 style={{fontSize: 22, textTransform: 'uppercase', letterSpacing: '0.01em', marginBottom: 12}}>{s.title}</h3>
              <p style={{color: 'var(--gray-300)', fontSize: 14, lineHeight: 1.6}}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="rg-halves" style={{gap: 48, marginBottom: 56, alignItems: 'end'}}>
          <div>
            <div className="eyebrow" style={{color: 'var(--blue)', marginBottom: 14}}>// POR QUÉ ELEGIRNOS</div>
            <h2 className="section-title">Calidad sin atajos</h2>
          </div>
          <p style={{color: 'var(--gray-300)', fontSize: 16, lineHeight: 1.7}}>
            No vendemos genéricos sin marca. Trabajamos con distribuidores autorizados y proveedores OEM, con factura, garantía escrita y soporte técnico en español.
          </p>
        </div>
        <div className="rg-4" style={{gap: 1, background: 'var(--line)'}}>
          {[
            { icon: 'oem',    title: 'Repuestos OEM',     desc: 'Misma calidad que el dealer, mejor precio.',               tag: '01' },
            { icon: 'fast',   title: 'Entrega rápida',    desc: 'Mismo día Quito · 24-48h Sierra · 72h Costa y Oriente.',  tag: '02' },
            { icon: 'shield', title: 'Garantía incluida', desc: '6 a 12 meses según línea. Cambio o reembolso si falla.',  tag: '03' },
            { icon: 'wrench', title: 'Asesoría técnica',  desc: 'Mecánicos certificados resuelven dudas antes y después.',  tag: '04' },
          ].map(f => (
            <div key={f.title} style={{padding: '36px 24px', background: 'var(--black)'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                <div style={{width: 40, height: 40, border: '1.5px solid var(--red)', display: 'grid', placeItems: 'center', color: 'var(--red)'}}>
                  {f.icon === 'oem'    && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L4 7v10l8 5 8-5V7l-8-5z"/><path d="M12 22V12"/><path d="M4 7l8 5 8-5"/></svg>}
                  {f.icon === 'fast'   && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>}
                  {f.icon === 'shield' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>}
                  {f.icon === 'wrench' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a4 4 0 005.4 5.4L21 13l-8 8-1.3-.9a4 4 0 00-5.4-5.4L3 13l8-8 1.3.9a4 4 0 002.4-.6z"/></svg>}
                </div>
                <span className="mono" style={{fontSize: 13, color: 'var(--gray-500)', fontWeight: 700}}>{f.tag}</span>
              </div>
              <h3 style={{fontSize: 18, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: 10}}>{f.title}</h3>
              <p style={{color: 'var(--gray-400)', fontSize: 13, lineHeight: 1.6}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section carbon-tight">
        <div style={{marginBottom: 48}}>
          <div className="eyebrow" style={{color: 'var(--red)', marginBottom: 14}}>// TESTIMONIOS</div>
          <h2 className="section-title">Clientes reales · Quito</h2>
        </div>
        <div className="rg-3" style={{gap: 24}}>
          {[
            { name: 'Andrés Paredes',      car: 'Kia Sportage 2019',    quote: 'Pedí pastillas un martes a las 10am, llegaron al taller en Cumbayá a las 3pm. Originales, factura y garantía. Se nota que saben.', stars: 5 },
            { name: 'María José Cevallos', car: 'Hyundai Tucson 2020',  quote: 'Llevo dos años comprando filtros y bujías acá. Precios honestos, no inventan. El asesor incluso me ayudó por WhatsApp con el código de motor.', stars: 5 },
            { name: 'Diego Salazar',       car: 'Chevrolet Sail 2017',  quote: 'Buscaba un amortiguador específico que ya nadie tenía. Me lo consiguieron en 48 horas y al precio que dijeron. Recomendados.', stars: 5 },
          ].map(t => (
            <div key={t.name} className="card-flat" style={{padding: 28}}>
              <div style={{display: 'flex', gap: 4, marginBottom: 16}}>
                {[...Array(t.stars)].map((_, i) => <span key={i} style={{color: 'var(--red)', fontSize: 14}}>★</span>)}
                <span className="mono" style={{marginLeft: 'auto', fontSize: 11, color: 'var(--gray-500)'}}>5.0</span>
              </div>
              <p style={{fontSize: 15, color: 'white', lineHeight: 1.55, marginBottom: 24, fontFamily: 'Space Grotesk', fontWeight: 500}}>"{t.quote}"</p>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, paddingTop: 18, borderTop: '1px solid var(--line)'}}>
                <div style={{width: 38, height: 38, background: 'var(--black-4)', display: 'grid', placeItems: 'center', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 13, flexShrink: 0}}>
                  {t.name.split(' ').map(n => n[0]).join('').slice(0,2)}
                </div>
                <div>
                  <div style={{fontSize: 13, fontWeight: 600, color: 'white'}}>{t.name}</div>
                  <div className="mono" style={{fontSize: 10, color: 'var(--gray-400)'}}>{t.car.toUpperCase()}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RED CTA BANNER */}
      <section style={{background: 'var(--red)', padding: 'clamp(40px,6vw,72px) clamp(20px,5vw,56px)', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.06) 0 1px, transparent 1px 8px)', pointerEvents: 'none'}}></div>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 6}} className="diag-stripe"></div>
        <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 6}} className="diag-stripe"></div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, flexWrap: 'wrap', position: 'relative'}}>
          <div style={{flex: 1, minWidth: 240}}>
            <div className="eyebrow" style={{color: 'rgba(255,255,255,0.7)', marginBottom: 12}}>// SERVICIO ESPECIAL</div>
            <h2 style={{fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(28px,5vw,56px)', lineHeight: 1, textTransform: 'uppercase', color: 'white'}}>
              ¿No encuentras tu repuesto?
            </h2>
            <p style={{fontSize: 16, color: 'rgba(255,255,255,0.85)', marginTop: 12}}>
              Escríbenos ahora y lo conseguimos.
            </p>
          </div>
          <a href={waLink('Hola, necesito un repuesto que no encuentro en su catálogo. ¿Pueden conseguirlo?')}
             target="_blank" rel="noopener noreferrer"
             className="btn" style={{background: 'var(--black)', color: 'white', padding: '18px 32px', fontSize: 13, whiteSpace: 'nowrap'}}>
            <WAIcon size={18}/> Escribir por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WAFloat />
    </div>
  );
};

window.HomeScreen = HomeScreen;
