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
      <section style={{position: 'relative', height: 760, overflow: 'hidden'}} className="carbon">
        <HeroBg />

        <div style={{
          position: 'absolute', top: 96, left: 56, zIndex: 2,
          display: 'flex', alignItems: 'center', gap: 12
        }}>
          <span className="plate plate-red">● EN VIVO · QUITO</span>
          <span className="mono" style={{fontSize: 11, color: 'var(--gray-400)', letterSpacing: '0.15em'}}>
            STOCK ACTUALIZADO 01.05.26 — 09:42
          </span>
        </div>

        <div style={{position: 'relative', zIndex: 2, padding: '170px 56px 0', maxWidth: 1100}}>
          <div className="eyebrow" style={{marginBottom: 20, color: 'var(--red)'}}>// CATÁLOGO #001 — REPUESTOS PREMIUM</div>
          <h1 style={{
            fontSize: 96, lineHeight: 0.95, letterSpacing: '-0.02em',
            textTransform: 'uppercase', fontWeight: 700, marginBottom: 28
          }}>
            Repuestos premium<br/>
            <span style={{color: 'var(--red)'}}>para tu auto</span> en Quito
          </h1>
          <p style={{
            fontSize: 19, color: 'var(--gray-300)', maxWidth: 640, marginBottom: 40,
            lineHeight: 1.5
          }}>
            Especialistas en <strong style={{color: 'white'}}>Kia, Hyundai y Chevrolet</strong>. Calidad garantizada,
            entrega express en todo el Distrito Metropolitano y stock real verificado.
          </p>
          <div style={{display: 'flex', gap: 14}}>
            <button className="btn btn-red" onClick={() => window.navigate('catalog')}>
              Ver Catálogo Completo →
            </button>
            <button className="btn btn-blue-out" onClick={() => window.navigate('contact')}>
              Contáctanos
            </button>
          </div>
        </div>

        {/* Hero spec sticker */}
        <div style={{
          position: 'absolute', bottom: 60, right: 56, zIndex: 2,
          padding: '20px 24px',
          border: '1px solid var(--line-2)',
          background: 'rgba(10,11,11,0.85)',
          backdropFilter: 'blur(8px)',
          minWidth: 280,
        }}>
          <div className="tape-corner tape-tl"></div>
          <div className="tape-corner tape-br"></div>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8}}>
            <span className="eyebrow" style={{fontSize: 10}}>Pedido del día</span>
            <span className="mono" style={{fontSize: 11, color: 'var(--gray-400)'}}>#QAP-4421</span>
          </div>
          <div style={{fontSize: 14, color: 'white', fontFamily: 'Space Grotesk', fontWeight: 600, marginBottom: 4}}>
            Pastillas Kia Sportage
          </div>
          <div className="mono" style={{fontSize: 11, color: 'var(--gray-400)'}}>
            ENVIADO 08:14 — TUMBACO
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust">
        {[
          { num: '+200', label: 'Repuestos disponibles', accent: true },
          { num: '+10', label: 'Años de experiencia' },
          { num: '24h', label: 'Entrega express en Quito', accent: true },
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
      <section className="section carbon-tight" style={{padding: '110px 56px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56}}>
          <div>
            <div className="eyebrow" style={{color: 'var(--red)', marginBottom: 14}}>// 03 MARCAS · 200+ MODELOS</div>
            <h2 className="section-title">Trabajamos con tu marca</h2>
          </div>
          <div className="mono" style={{fontSize: 12, color: 'var(--gray-400)', letterSpacing: '0.15em'}}>
            REV. 2026.05 / KOREAN-AMERICAN PARTS
          </div>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24}}>
          {[
            { name: 'KIA', desc: 'Sportage · Rio · Picanto · Cerato · Soul', count: '78 referencias', color: '#E31E24' },
            { name: 'HYUNDAI', desc: 'Tucson · Accent · Elantra · Creta · i10', count: '92 referencias', color: '#0257B4' },
            { name: 'CHEVROLET', desc: 'Sail · Aveo · D-Max · Cruze · Spark', count: '68 referencias', color: '#D4A437' },
          ].map(b => (
            <div key={b.name} className="brand-card">
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32, position: 'relative'}}>
                <BrandBadge brand={b.name.charAt(0) + b.name.slice(1).toLowerCase()} size={64} />
                <span className="mono" style={{fontSize: 11, color: 'var(--gray-400)', letterSpacing: '0.12em'}}>
                  / {b.count.toUpperCase()}
                </span>
              </div>
              <div className="brand-name" style={{position: 'relative'}}>{b.name}</div>
              <div style={{height: 3, width: 56, background: b.color, margin: '20px 0', position: 'relative'}}></div>
              <p style={{color: 'var(--gray-300)', fontSize: 14, marginBottom: 28, position: 'relative'}}>{b.desc}</p>
              <span className="arrow-link" onClick={() => window.navigate('brands')}>Ver repuestos</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section" style={{padding: '110px 56px', borderTop: '1px solid var(--line)'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56}}>
          <div>
            <div className="eyebrow" style={{color: 'var(--red)', marginBottom: 14}}>// PRODUCTOS DESTACADOS</div>
            <h2 className="section-title">Más vendidos</h2>
          </div>
          <button className="btn btn-ghost" onClick={() => window.navigate('catalog')}>Ver todo el catálogo →</button>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20}}>
          {products.map((p, i) => (
            <div key={i} className="product">
              <div className="product-img" onClick={() => window.navigate('product')} style={{cursor: 'pointer'}}>
                <PartImage kind={p.kind} accent={p.brand === 'Kia' ? '#ff5a60' : p.brand === 'Hyundai' ? '#5fa5ff' : '#e0b850'}/>
                <div style={{position: 'absolute', top: 12, left: 12}}>
                  <span className={`plate ${p.stock === 'IN STOCK' ? 'plate-stock' : 'plate-low'}`}>
                    {p.stock === 'IN STOCK' ? '● IN STOCK' : '● BAJO STOCK'}
                  </span>
                </div>
                <div style={{position: 'absolute', top: 12, right: 12}}>
                  <CompatChip brand={p.brand} />
                </div>
              </div>
              <div className="product-body">
                <div className="product-name" onClick={() => window.navigate('product')} style={{cursor: 'pointer'}}>{p.name}</div>
                <div className="product-compat">{p.brand.toUpperCase()} {p.model}</div>
                <div className="product-price-row">
                  <div className="product-price"><small>$</small>{p.price.toFixed(2)}</div>
                  <span className="mono" style={{fontSize: 10, color: 'var(--gray-500)', letterSpacing: '0.1em'}}>
                    SKU-{(4400 + i).toString()}
                  </span>
                </div>
                <a href={productWALink(p.name, `QAP-${4400 + i}`)} target="_blank" rel="noopener noreferrer"
                   className="btn btn-wa" style={{width: '100%', padding: '12px', fontSize: 12, textAlign: 'center'}}>
                  <WAIcon size={16}/> Pedir por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO BUY */}
      <section className="section carbon-tight" style={{padding: '110px 56px'}}>
        <div style={{textAlign: 'center', marginBottom: 72}}>
          <div className="eyebrow" style={{color: 'var(--red)', marginBottom: 14}}>// PROCESO 3 PASOS</div>
          <h2 className="section-title">Cómo comprar</h2>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'stretch', position: 'relative'}}>
          {[
            { n: '01', title: 'Encuentra tu repuesto', desc: 'Busca por marca, modelo o categoría en nuestro catálogo. Verifica compatibilidad y stock en tiempo real.', tag: 'CATÁLOGO' },
            { n: '02', title: 'Haz clic en WhatsApp', desc: 'Te enviamos un mensaje pre-llenado con producto y precio. Confirmamos disponibilidad y método de pago en minutos.', tag: 'CHAT' },
            { n: '03', title: 'Recibe en Quito', desc: 'Entrega express el mismo día dentro del DM. Envíos a nivel nacional con guía Servientrega/Tramaco.', tag: 'ENTREGA' },
          ].map((s, i) => (
            <div key={s.n} style={{
              background: 'var(--black-3)',
              border: '1px solid var(--line)',
              padding: '40px 32px',
              position: 'relative',
            }}>
              <div className="tape-corner tape-tl"></div>
              <div style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24}}>
                <div style={{
                  width: 64, height: 64, background: 'var(--red)',
                  display: 'grid', placeItems: 'center',
                  fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 28,
                }}>{s.n}</div>
                <span className="mono" style={{fontSize: 11, color: 'var(--gray-400)', letterSpacing: '0.18em'}}>
                  // {s.tag}
                </span>
              </div>
              <h3 style={{fontSize: 26, textTransform: 'uppercase', letterSpacing: '0.01em', marginBottom: 14}}>
                {s.title}
              </h3>
              <p style={{color: 'var(--gray-300)', fontSize: 14, lineHeight: 1.6}}>{s.desc}</p>
              {i < 2 && (
                <div style={{position: 'absolute', right: -22, top: '50%', fontSize: 24, color: 'var(--red)', zIndex: 2}}>
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section" style={{padding: '110px 56px'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginBottom: 64, alignItems: 'end'}}>
          <div>
            <div className="eyebrow" style={{color: 'var(--blue)', marginBottom: 14}}>// POR QUÉ ELEGIRNOS</div>
            <h2 className="section-title">Calidad sin atajos</h2>
          </div>
          <p style={{color: 'var(--gray-300)', fontSize: 16, lineHeight: 1.7}}>
            No vendemos genéricos chinos sin marca. Trabajamos directamente con distribuidores autorizados y proveedores OEM,
            con factura, garantía escrita y soporte técnico en español.
          </p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--line)'}}>
          {[
            { icon: 'oem', title: 'Repuestos OEM', desc: 'Original Equipment Manufacturer. Misma calidad que el dealer, mejor precio.', tag: '01' },
            { icon: 'fast', title: 'Entrega rápida', desc: 'Mismo día en Quito · 24-48h en Sierra · 72h Costa y Oriente.', tag: '02' },
            { icon: 'shield', title: 'Garantía incluida', desc: '6 a 12 meses según la línea. Cambio o reembolso si falla.', tag: '03' },
            { icon: 'wrench', title: 'Asesoría técnica', desc: 'Mecánicos certificados resuelven dudas antes y después de la compra.', tag: '04' },
          ].map(f => (
            <div key={f.title} style={{padding: '40px 28px', background: 'var(--black)'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24}}>
                <div style={{width: 44, height: 44, border: '1.5px solid var(--red)', display: 'grid', placeItems: 'center', color: 'var(--red)'}}>
                  {f.icon === 'oem' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L4 7v10l8 5 8-5V7l-8-5z"/><path d="M12 22V12"/><path d="M4 7l8 5 8-5"/></svg>}
                  {f.icon === 'fast' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>}
                  {f.icon === 'shield' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>}
                  {f.icon === 'wrench' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a4 4 0 005.4 5.4L21 13l-8 8-1.3-.9a4 4 0 00-5.4-5.4L3 13l8-8 1.3.9a4 4 0 002.4-.6z"/></svg>}
                </div>
                <span className="mono" style={{fontSize: 14, color: 'var(--gray-500)', fontWeight: 700, letterSpacing: '0.1em'}}>{f.tag}</span>
              </div>
              <h3 style={{fontSize: 20, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: 12}}>{f.title}</h3>
              <p style={{color: 'var(--gray-400)', fontSize: 13, lineHeight: 1.6}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section carbon-tight" style={{padding: '110px 56px'}}>
        <div style={{marginBottom: 56}}>
          <div className="eyebrow" style={{color: 'var(--red)', marginBottom: 14}}>// TESTIMONIOS</div>
          <h2 className="section-title">Clientes reales · Quito</h2>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24}}>
          {[
            { name: 'Andrés Paredes', car: 'Kia Sportage 2019', quote: 'Pedí pastillas un martes a las 10am, llegaron al taller en Cumbayá a las 3pm. Originales, factura y garantía. Se nota que saben.', stars: 5 },
            { name: 'María José Cevallos', car: 'Hyundai Tucson 2020', quote: 'Llevo dos años comprando filtros y bujías acá. Precios honestos, no inventan. El asesor incluso me ayudó por WhatsApp con el código de motor.', stars: 5 },
            { name: 'Diego Salazar', car: 'Chevrolet Sail 2017', quote: 'Buscaba un amortiguador específico que ya nadie tenía. Me lo consiguieron en 48 horas y al precio que dijeron. Recomendados.', stars: 5 },
          ].map(t => (
            <div key={t.name} className="card-flat" style={{padding: 32, position: 'relative'}}>
              <div style={{display: 'flex', gap: 4, marginBottom: 20}}>
                {[...Array(t.stars)].map((_, i) => (
                  <span key={i} style={{color: 'var(--red)', fontSize: 16}}>★</span>
                ))}
                <span className="mono" style={{marginLeft: 'auto', fontSize: 11, color: 'var(--gray-500)'}}>5.0/5.0</span>
              </div>
              <p style={{fontSize: 16, color: 'white', lineHeight: 1.55, marginBottom: 28, fontFamily: 'Space Grotesk', fontWeight: 500}}>
                "{t.quote}"
              </p>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, paddingTop: 20, borderTop: '1px solid var(--line)'}}>
                <div style={{
                  width: 40, height: 40, background: 'var(--black-4)',
                  display: 'grid', placeItems: 'center',
                  fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 14,
                }}>{t.name.split(' ').map(n => n[0]).join('').slice(0,2)}</div>
                <div>
                  <div style={{fontSize: 14, fontWeight: 600, color: 'white'}}>{t.name}</div>
                  <div className="mono" style={{fontSize: 11, color: 'var(--gray-400)', letterSpacing: '0.08em'}}>
                    {t.car.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RED CTA BANNER */}
      <section style={{background: 'var(--red)', padding: '72px 56px', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.06) 0 1px, transparent 1px 8px)', pointerEvents: 'none'}}></div>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 8}} className="diag-stripe"></div>
        <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 8}} className="diag-stripe"></div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 40, position: 'relative'}}>
          <div style={{flex: 1}}>
            <div className="eyebrow" style={{color: 'rgba(255,255,255,0.7)', marginBottom: 14}}>// SERVICIO ESPECIAL</div>
            <h2 style={{fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 56, lineHeight: 1, textTransform: 'uppercase', letterSpacing: '0.01em', color: 'white'}}>
              ¿No encuentras tu repuesto?
            </h2>
            <p style={{fontSize: 18, color: 'rgba(255,255,255,0.85)', marginTop: 14, maxWidth: 640}}>
              Escríbenos ahora y lo conseguimos. Tenemos red de proveedores en Corea, Chile y Colombia.
            </p>
          </div>
          <a href={waLink('Hola, necesito un repuesto específico que no encuentro en su catálogo. ¿Pueden conseguirlo?')}
             target="_blank" rel="noopener noreferrer"
             className="btn" style={{background: 'var(--black)', color: 'white', padding: '20px 36px', fontSize: 14}}>
            <WAIcon size={20}/> Escribir por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WAFloat />
    </div>
  );
};

window.HomeScreen = HomeScreen;
