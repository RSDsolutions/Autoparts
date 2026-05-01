/* Screen 2: Catálogo page */

const CatalogScreen = () => {
  const allProducts = [
    { name: 'Pastillas de freno delanteras', brand: 'Kia', model: 'Sportage 2018-2023', price: 48.90, kind: 'brake', stock: 'IN STOCK', cat: 'Frenos' },
    { name: 'Disco de freno ventilado', brand: 'Hyundai', model: 'Tucson 2017-2022', price: 72.00, kind: 'brake', stock: 'IN STOCK', cat: 'Frenos' },
    { name: 'Filtro de aire motor OEM', brand: 'Hyundai', model: 'Tucson 2016-2022', price: 24.50, kind: 'filter', stock: 'IN STOCK', cat: 'Filtros' },
    { name: 'Filtro de aceite premium', brand: 'Chevrolet', model: 'Sail 2014-2022', price: 11.20, kind: 'filter', stock: 'IN STOCK', cat: 'Filtros' },
    { name: 'Bujías iridio (juego x4)', brand: 'Chevrolet', model: 'Aveo 2012-2020', price: 39.00, kind: 'spark', stock: 'IN STOCK', cat: 'Motor' },
    { name: 'Bujías platino NGK', brand: 'Kia', model: 'Cerato 2016-2022', price: 32.00, kind: 'spark', stock: 'IN STOCK', cat: 'Motor' },
    { name: 'Amortiguador trasero gas', brand: 'Kia', model: 'Rio 2017-2023', price: 89.00, kind: 'shock', stock: 'BAJO STOCK', cat: 'Suspensión' },
    { name: 'Amortiguador delantero', brand: 'Hyundai', model: 'Accent 2015-2021', price: 95.50, kind: 'shock', stock: 'IN STOCK', cat: 'Suspensión' },
    { name: 'Correa de distribución', brand: 'Hyundai', model: 'Accent 2015-2021', price: 56.00, kind: 'belt', stock: 'IN STOCK', cat: 'Motor' },
    { name: 'Correa accesorios poly-V', brand: 'Chevrolet', model: 'Cruze 2013-2018', price: 28.00, kind: 'belt', stock: 'IN STOCK', cat: 'Motor' },
    { name: 'Batería 12V 75Ah', brand: 'Chevrolet', model: 'Sail 2014-2022', price: 145.00, kind: 'battery', stock: 'IN STOCK', cat: 'Eléctrico' },
    { name: 'Batería 12V 60Ah AGM', brand: 'Kia', model: 'Picanto 2018-2024', price: 118.00, kind: 'battery', stock: 'IN STOCK', cat: 'Eléctrico' },
  ];

  const [selBrand, setSelBrand] = React.useState(['Kia', 'Hyundai', 'Chevrolet']);
  const [selCat, setSelCat] = React.useState([]);
  const [price, setPrice] = React.useState(200);
  const [onlyStock, setOnlyStock] = React.useState(false);
  const [sort, setSort] = React.useState('Disponibilidad');
  const [search, setSearch] = React.useState('');

  const toggle = (val, setter, current) => {
    setter(current.includes(val) ? current.filter(v => v !== val) : [...current, val]);
  };

  const filtered = allProducts.filter(p => {
    const matchesBrand = selBrand.includes(p.brand);
    const matchesCat = selCat.length === 0 || selCat.includes(p.cat);
    const matchesPrice = p.price <= price;
    const matchesStock = !onlyStock || p.stock === 'IN STOCK';
    const matchesSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase()) || p.model.toLowerCase().includes(search.toLowerCase());
    return matchesBrand && matchesCat && matchesPrice && matchesStock && matchesSearch;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'Precio') return a.price - b.price;
    if (sort === 'Nombre') return a.name.localeCompare(b.name);
    return (b.stock === 'IN STOCK' ? 1 : 0) - (a.stock === 'IN STOCK' ? 1 : 0);
  });

  return (
    <div className="qap" style={{position: 'relative'}}>
      <Navbar active="Catálogo" />

      {/* Catalog hero header */}
      <section className="carbon" style={{padding: 'clamp(32px,5vw,64px) clamp(16px,4vw,56px) 0', borderBottom: '1px solid var(--line)'}}>
        <div className="eyebrow" style={{color: 'var(--red)', marginBottom: 14}}>// CATÁLOGO COMPLETO</div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32}}>
          <h1 className="section-title" style={{fontSize: 64}}>Repuestos</h1>
          <div className="mono" style={{fontSize: 12, color: 'var(--gray-400)', letterSpacing: '0.15em'}}>
            {sorted.length} / {allProducts.length} REFERENCIAS
          </div>
        </div>

        {/* Search bar */}
        <div style={{display: 'flex', gap: 0, marginBottom: 32, border: '1px solid var(--line-2)', background: 'var(--black-2)'}}>
          <div style={{padding: '0 20px', display: 'grid', placeItems: 'center', borderRight: '1px solid var(--line)'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'var(--gray-400)'}}>
              <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>
            </svg>
          </div>
          <input className="input" style={{border: 'none', flex: 1, fontSize: 16, padding: '20px 0'}}
                 placeholder="Busca por nombre, modelo o marca... (ej. pastillas Kia Sportage)"
                 value={search} onChange={e => setSearch(e.target.value)} />
          <button className="btn btn-red" style={{borderRadius: 0, padding: '0 32px'}} onClick={() => {}}>Buscar</button>
        </div>

        {/* Quick chips */}
        <div style={{display: 'flex', gap: 10, paddingBottom: 32, flexWrap: 'wrap'}}>
          {['Más vendidos', 'Pastillas Kia', 'Filtros Hyundai', 'Bujías Chevrolet', 'Amortiguadores', 'Baterías AGM', 'Aceites motor'].map((c, i) => (
            <span key={c} className="plate" style={{
              cursor: 'pointer',
              borderColor: i === 0 ? 'var(--red)' : 'var(--line-2)',
              color: i === 0 ? 'var(--red)' : 'var(--gray-300)',
              padding: '8px 14px', fontSize: 11
            }} onClick={() => setSearch(i === 0 ? '' : c.split(' ')[0])}>
              {c.toUpperCase()}
            </span>
          ))}
        </div>
      </section>

      {/* Main grid */}
      <section className="rg-sidebar" style={{padding: 'clamp(24px,3vw,40px) clamp(16px,4vw,56px) 80px', gap: 32}}>
        {/* SIDEBAR */}
        <aside style={{position: 'sticky', top: 90, alignSelf: 'flex-start'}}>
          <div style={{padding: 24, border: '1px solid var(--line)', background: 'var(--black-3)'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22}}>
              <span className="eyebrow">Filtros</span>
              <span className="mono" style={{fontSize: 10, color: 'var(--red)', cursor: 'pointer'}}
                    onClick={() => { setSelBrand(['Kia','Hyundai','Chevrolet']); setSelCat([]); setPrice(200); setOnlyStock(false); setSearch(''); }}>
                RESET
              </span>
            </div>

            {/* Brand */}
            <div style={{marginBottom: 28}}>
              <div className="label">Marca</div>
              {['Kia', 'Hyundai', 'Chevrolet'].map(b => (
                <label key={b} style={{display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', cursor: 'pointer', fontSize: 14}}>
                  <span style={{
                    width: 16, height: 16, border: '1.5px solid var(--gray-400)',
                    background: selBrand.includes(b) ? 'var(--red)' : 'transparent',
                    borderColor: selBrand.includes(b) ? 'var(--red)' : 'var(--gray-400)',
                    display: 'grid', placeItems: 'center', flexShrink: 0,
                  }}>
                    {selBrand.includes(b) && <span style={{color: 'white', fontSize: 11, lineHeight: 1}}>✓</span>}
                  </span>
                  <span style={{flex: 1, color: selBrand.includes(b) ? 'white' : 'var(--gray-300)'}}
                        onClick={() => toggle(b, setSelBrand, selBrand)}>{b}</span>
                  <span className="mono" style={{fontSize: 11, color: 'var(--gray-500)'}}>
                    {allProducts.filter(p => p.brand === b).length}
                  </span>
                </label>
              ))}
            </div>

            <div style={{height: 1, background: 'var(--line)', margin: '20px 0'}}></div>

            {/* Category */}
            <div style={{marginBottom: 28}}>
              <div className="label">Categoría</div>
              {['Frenos', 'Motor', 'Suspensión', 'Eléctrico', 'Filtros', 'Transmisión'].map(c => (
                <label key={c} style={{display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', cursor: 'pointer', fontSize: 14}}>
                  <span style={{
                    width: 16, height: 16, border: '1.5px solid',
                    background: selCat.includes(c) ? 'var(--red)' : 'transparent',
                    borderColor: selCat.includes(c) ? 'var(--red)' : 'var(--gray-400)',
                    display: 'grid', placeItems: 'center', flexShrink: 0,
                  }}>
                    {selCat.includes(c) && <span style={{color: 'white', fontSize: 11, lineHeight: 1}}>✓</span>}
                  </span>
                  <span style={{flex: 1, color: selCat.includes(c) ? 'white' : 'var(--gray-300)'}}
                        onClick={() => toggle(c, setSelCat, selCat)}>{c}</span>
                </label>
              ))}
            </div>

            <div style={{height: 1, background: 'var(--line)', margin: '20px 0'}}></div>

            {/* Price */}
            <div style={{marginBottom: 28}}>
              <div className="label">Rango de precio</div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 12}}>
                <span className="mono" style={{fontSize: 12, color: 'var(--gray-300)'}}>$0</span>
                <span className="mono" style={{fontSize: 12, color: 'var(--red)', fontWeight: 600}}>${price}</span>
              </div>
              <input type="range" min="0" max="200" value={price} onChange={e => setPrice(parseInt(e.target.value))}
                     style={{width: '100%', accentColor: '#E31E24'}} />
              <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11, color: 'var(--gray-500)'}}>
                <span className="mono">MIN</span><span className="mono">MAX 200</span>
              </div>
            </div>

            <div style={{height: 1, background: 'var(--line)', margin: '20px 0'}}></div>

            {/* Stock toggle */}
            <label style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer'}}
                   onClick={() => setOnlyStock(!onlyStock)}>
              <span style={{fontSize: 14, color: 'white', fontFamily: 'Space Grotesk', fontWeight: 500}}>Solo en stock</span>
              <span style={{width: 40, height: 20, background: onlyStock ? 'var(--red)' : 'var(--black-4)', position: 'relative', transition: 'all 0.2s'}}>
                <span style={{position: 'absolute', top: 2, left: onlyStock ? 22 : 2, width: 16, height: 16, background: 'white', transition: 'all 0.2s'}}></span>
              </span>
            </label>
          </div>

          <div style={{marginTop: 16, padding: 20, border: '1px solid var(--line)', background: 'var(--black-3)', display: 'flex', flexDirection: 'column', gap: 10}}>
            <div className="eyebrow" style={{fontSize: 10}}>Ayuda</div>
            <p style={{fontSize: 13, color: 'var(--gray-300)', lineHeight: 1.5}}>
              ¿No encuentras tu repuesto? Envíanos el código de motor o VIN.
            </p>
            <a href={waLink('Hola, no encuentro mi repuesto en el catálogo. ¿Pueden ayudarme?')}
               target="_blank" rel="noopener noreferrer"
               className="btn btn-wa" style={{padding: '10px', fontSize: 11, textAlign: 'center'}}>
              <WAIcon size={14}/> Asesoría WhatsApp
            </a>
          </div>
        </aside>

        {/* PRODUCTS AREA */}
        <main>
          {/* sort row */}
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px', border: '1px solid var(--line)', background: 'var(--black-3)', marginBottom: 20}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <span className="mono" style={{fontSize: 12, color: 'var(--gray-300)', letterSpacing: '0.12em'}}>
                {sorted.length} RESULTADOS
              </span>
              <div style={{display: 'flex', gap: 6, flexWrap: 'wrap'}}>
                {selBrand.map(b => (
                  <span key={b} className="plate plate-red" style={{padding: '4px 8px', fontSize: 10, cursor: 'pointer'}}
                        onClick={() => toggle(b, setSelBrand, selBrand)}>
                    {b.toUpperCase()} ✕
                  </span>
                ))}
              </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <span className="label" style={{margin: 0}}>Ordenar:</span>
              <div style={{display: 'flex', border: '1px solid var(--line-2)'}}>
                {['Disponibilidad', 'Precio', 'Nombre'].map(s => (
                  <button key={s} onClick={() => setSort(s)} style={{
                    padding: '8px 14px', background: sort === s ? 'var(--red)' : 'transparent',
                    color: sort === s ? 'white' : 'var(--gray-300)',
                    border: 'none', cursor: 'pointer',
                    fontFamily: 'Space Grotesk', fontSize: 12, fontWeight: 500,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}>{s}</button>
                ))}
              </div>
            </div>
          </div>

          {/* product grid */}
          {sorted.length === 0 ? (
            <div style={{padding: '60px', textAlign: 'center', border: '1px solid var(--line)', background: 'var(--black-3)'}}>
              <div style={{fontSize: 48, marginBottom: 16}}>🔍</div>
              <div style={{fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 22, textTransform: 'uppercase', marginBottom: 10}}>Sin resultados</div>
              <p style={{color: 'var(--gray-400)', fontSize: 14}}>Prueba con otros filtros o <a href={waLink('Hola, busco un repuesto específico.')} target="_blank" rel="noopener noreferrer" style={{color: 'var(--green)', textDecoration: 'none'}}>consúltanos por WhatsApp</a>.</p>
            </div>
          ) : (
            <div className="rg-3" style={{gap: 20}}>
              {sorted.map((p, i) => (
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
                    <div style={{position: 'absolute', bottom: 12, left: 12}}>
                      <span className="plate plate-white" style={{fontSize: 10}}>{p.cat.toUpperCase()}</span>
                    </div>
                  </div>
                  <div className="product-body">
                    <div className="product-name" onClick={() => window.navigate('product')} style={{cursor: 'pointer'}}>{p.name}</div>
                    <div className="product-compat">{p.brand.toUpperCase()} {p.model}</div>
                    <div className="product-price-row">
                      <div className="product-price"><small>$</small>{p.price.toFixed(2)}</div>
                      <span className="mono" style={{fontSize: 10, color: 'var(--gray-500)'}}>SKU-{(4400 + i)}</span>
                    </div>
                    <a href={productWALink(p.name, `QAP-${4400 + i}`)} target="_blank" rel="noopener noreferrer"
                       className="btn btn-wa" style={{width: '100%', padding: '12px', fontSize: 12, textAlign: 'center'}}>
                      <WAIcon size={16}/> Pedir por WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </section>

      <Footer />
      <WAFloat />
    </div>
  );
};

window.CatalogScreen = CatalogScreen;
