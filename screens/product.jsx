/* Screen 3: Product detail page */

const ProductScreen = () => {
  const product = {
    name: 'Pastillas de freno delanteras cerámicas',
    brand: 'Kia',
    sku: 'QAP-58101-D9000',
    price: 48.90,
    listPrice: 64.00,
    stock: 'IN STOCK',
    units: 14,
    desc: 'Juego de 4 pastillas de freno delanteras cerámicas de alto rendimiento, fabricadas con compuesto de baja generación de polvo y operación silenciosa. Diseñadas para mantener un coeficiente de fricción estable entre 0°C y 650°C. Compatible con sistemas ABS y ESC originales del fabricante. Incluye láminas anti-ruido y grasa de montaje.',
    compat: [
      'Kia Sportage 2.0L 2018-2023',
      'Kia Sportage 1.6L T-GDi 2019-2023',
      'Kia Sorento 2.4L 2016-2020',
      'Hyundai Tucson 2.0L 2017-2022',
    ],
    specs: [
      ['Material', 'Cerámica + grafito'],
      ['Coef. fricción', '0.42 (clase GG)'],
      ['Rango térmico', '0°C – 650°C'],
      ['Espesor', '17.5 mm'],
      ['Largo total', '155 mm'],
      ['Peso del juego', '2.4 kg'],
      ['Origen', 'Corea del Sur (OEM)'],
      ['Garantía', '12 meses / 20.000 km'],
    ],
    images: ['brake', 'brake', 'shock', 'filter', 'belt'],
  };

  const [selImg, setSelImg] = React.useState(0);

  const related = [
    { name: 'Disco freno ventilado', brand: 'Kia', model: 'Sportage 2018-2023', price: 72.00, kind: 'brake' },
    { name: 'Líquido freno DOT-4', brand: 'Kia', model: 'Universal', price: 14.50, kind: 'filter' },
    { name: 'Sensor ABS delantero', brand: 'Kia', model: 'Sportage 2018-2023', price: 38.00, kind: 'spark' },
    { name: 'Kit caliper freno', brand: 'Kia', model: 'Sportage 2018-2023', price: 110.00, kind: 'pump' },
  ];

  const waMsg = `Hola, me interesa el repuesto: ${product.name} (SKU: ${product.sku}) para mi Kia Sportage 2020. ¿Está disponible?`;

  return (
    <div className="qap" style={{position: 'relative'}}>
      <Navbar active="Catálogo" />

      {/* Breadcrumb */}
      <div style={{padding: '20px 56px', borderBottom: '1px solid var(--line)', background: 'var(--black-2)'}}>
        <div className="mono" style={{fontSize: 11, color: 'var(--gray-400)', letterSpacing: '0.12em'}}>
          <span style={{cursor: 'pointer'}} onClick={() => window.navigate('home')}>INICIO</span>
          &nbsp;/&nbsp;
          <span style={{cursor: 'pointer'}} onClick={() => window.navigate('catalog')}>CATÁLOGO</span>
          &nbsp;/&nbsp;
          <span style={{color: 'var(--gray-300)', cursor: 'pointer'}} onClick={() => window.navigate('brands')}>KIA</span>
          &nbsp;/&nbsp;
          <span style={{color: 'var(--gray-300)'}}>FRENOS</span>
          &nbsp;/&nbsp;
          <span style={{color: 'white'}}>{product.name.toUpperCase()}</span>
        </div>
      </div>

      {/* Main detail grid */}
      <section className="rg-product" style={{padding: 'clamp(24px,4vw,56px)', gap: 'clamp(24px,4vw,56px)'}}>
        {/* IMAGES */}
        <div>
          <div style={{aspectRatio: '1', background: 'var(--black-3)', border: '1px solid var(--line)', position: 'relative', overflow: 'hidden'}}>
            <PartImage kind={product.images[selImg]} accent="#ff5a60"/>
            <div className="tape-corner tape-tl"></div>
            <div className="tape-corner tape-tr"></div>
            <div className="tape-corner tape-bl"></div>
            <div className="tape-corner tape-br"></div>

            <div style={{position: 'absolute', top: 24, left: 24, display: 'flex', gap: 8, flexDirection: 'column'}}>
              <span className="plate plate-stock">● IN STOCK · {product.units} UND.</span>
              <span className="plate plate-red">● {product.brand.toUpperCase()} · OEM</span>
            </div>
            <div style={{position: 'absolute', bottom: 24, right: 24, color: 'var(--gray-500)'}} className="mono">
              <div style={{fontSize: 10, letterSpacing: '0.15em'}}>VISTA {selImg + 1} / {product.images.length}</div>
            </div>
            <div style={{position: 'absolute', bottom: 24, left: 24}}>
              <span className="plate plate-white">FRENOS · DELANTERO</span>
            </div>
          </div>
          {/* Thumbs */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, marginTop: 16}}>
            {product.images.map((img, i) => (
              <div key={i} onClick={() => setSelImg(i)} style={{
                aspectRatio: '1',
                background: 'var(--black-3)',
                border: i === selImg ? '2px solid var(--red)' : '1px solid var(--line-2)',
                cursor: 'pointer', overflow: 'hidden',
                opacity: i === selImg ? 1 : 0.7,
              }}>
                <PartImage kind={img} accent="#ff5a60"/>
              </div>
            ))}
          </div>
        </div>

        {/* INFO */}
        <div>
          <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18}}>
            <BrandBadge brand="Kia" size={48}/>
            <div>
              <div className="eyebrow" style={{color: 'var(--red)'}}>// {product.brand.toUpperCase()} · ORIGINAL OEM</div>
              <div className="mono" style={{fontSize: 12, color: 'var(--gray-400)', marginTop: 4}}>SKU: {product.sku}</div>
            </div>
          </div>

          <h1 style={{fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 42, lineHeight: 1.05, letterSpacing: '-0.005em', textTransform: 'uppercase', marginBottom: 18}}>
            {product.name}
          </h1>

          <div style={{display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 24}}>
            <span className="mono" style={{fontSize: 14, color: 'var(--gray-500)', textDecoration: 'line-through'}}>${product.listPrice.toFixed(2)}</span>
            <span className="plate plate-red" style={{padding: '4px 8px'}}>-24% AHORRO</span>
            <div style={{display: 'flex', alignItems: 'baseline', gap: 4, marginLeft: 8}}>
              <span style={{fontSize: 16, color: 'var(--gray-400)'}}>$</span>
              <span style={{fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(40px,6vw,64px)', color: 'white', letterSpacing: '-0.02em', lineHeight: 1}}>
                {product.price.toFixed(2)}
              </span>
              <span className="mono" style={{fontSize: 12, color: 'var(--gray-400)', marginLeft: 6}}>USD · IVA INC.</span>
            </div>
          </div>

          {/* Stock + delivery */}
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid var(--line-2)', marginBottom: 28}}>
            <div style={{padding: 18, borderRight: '1px solid var(--line-2)'}}>
              <div className="eyebrow" style={{fontSize: 10, marginBottom: 8}}>Disponibilidad</div>
              <div style={{color: '#4ade80', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 16}}>● En stock</div>
              <div className="mono" style={{fontSize: 11, color: 'var(--gray-400)', marginTop: 4}}>{product.units} UNIDADES · BODEGA QUITO</div>
            </div>
            <div style={{padding: 18}}>
              <div className="eyebrow" style={{fontSize: 10, marginBottom: 8}}>Entrega estimada</div>
              <div style={{color: 'white', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 16}}>HOY · 14:00–18:00</div>
              <div className="mono" style={{fontSize: 11, color: 'var(--gray-400)', marginTop: 4}}>QUITO DM · GRATIS &gt;$100</div>
            </div>
          </div>

          {/* WA CTA */}
          <a href={waLink(waMsg)} target="_blank" rel="noopener noreferrer"
             className="btn btn-wa" style={{width: '100%', padding: '20px', fontSize: 14, marginBottom: 12, textAlign: 'center'}}>
            <WAIcon size={22}/> Consultar disponibilidad por WhatsApp
          </a>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 32}}>
            <button className="btn btn-blue-out" style={{padding: '14px'}}>★ Guardar</button>
            <button className="btn btn-ghost" style={{padding: '14px'}}>⇄ Comparar</button>
          </div>

          {/* Pre-filled WA message preview */}
          <div style={{padding: 14, background: 'var(--black-3)', border: '1px solid var(--line)', display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 32}}>
            <div style={{width: 32, height: 32, background: 'var(--red)', display: 'grid', placeItems: 'center', flexShrink: 0, fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 14}}>i</div>
            <div>
              <div className="mono" style={{fontSize: 11, color: 'var(--gray-300)', letterSpacing: '0.1em', marginBottom: 4}}>MENSAJE PRE-LLENADO</div>
              <p style={{fontSize: 13, color: 'var(--gray-300)', lineHeight: 1.5, fontStyle: 'italic'}}>
                "{waMsg}"
              </p>
            </div>
          </div>

          {/* Description */}
          <div style={{marginBottom: 32}}>
            <div className="eyebrow" style={{marginBottom: 12}}>Descripción</div>
            <p style={{fontSize: 14, color: 'var(--gray-300)', lineHeight: 1.7}}>{product.desc}</p>
          </div>

          {/* Compatibility */}
          <div style={{marginBottom: 32}}>
            <div className="eyebrow" style={{marginBottom: 12}}>Compatibilidad verificada</div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--line)'}}>
              {product.compat.map(c => (
                <div key={c} style={{padding: '12px 16px', background: 'var(--black-3)', display: 'flex', alignItems: 'center', gap: 12}}>
                  <span style={{color: '#4ade80'}}>✓</span>
                  <span style={{fontSize: 14}} className="mono">{c.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specs */}
          <div>
            <div className="eyebrow" style={{marginBottom: 12}}>Especificaciones técnicas</div>
            <div style={{border: '1px solid var(--line-2)'}}>
              {product.specs.map(([k, v], i) => (
                <div key={k} style={{display: 'grid', gridTemplateColumns: '1fr 1.4fr', borderBottom: i < product.specs.length - 1 ? '1px solid var(--line)' : 'none'}}>
                  <div style={{padding: '12px 16px', background: 'var(--black-2)', fontSize: 13, color: 'var(--gray-400)'}}>{k}</div>
                  <div style={{padding: '12px 16px', fontSize: 13, color: 'white'}} className="mono">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section carbon-tight" style={{padding: '80px 56px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32}}>
          <div>
            <div className="eyebrow" style={{color: 'var(--red)', marginBottom: 12}}>// COMPLEMENTARIOS</div>
            <h2 className="section-title" style={{fontSize: 36}}>También necesitas</h2>
          </div>
          <button className="btn btn-ghost" onClick={() => window.navigate('catalog')}>Ver todos →</button>
        </div>
        <div className="rg-4" style={{gap: 20}}>
          {related.map((p, i) => (
            <div key={i} className="product">
              <div className="product-img" onClick={() => window.navigate('product')} style={{cursor: 'pointer'}}>
                <PartImage kind={p.kind} accent="#ff5a60"/>
                <div style={{position: 'absolute', top: 12, left: 12}}>
                  <span className="plate plate-stock">● IN STOCK</span>
                </div>
              </div>
              <div className="product-body">
                <div className="product-name">{p.name}</div>
                <div className="product-compat">{p.brand.toUpperCase()} {p.model}</div>
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
      </section>

      <Footer />
      <WAFloat />
    </div>
  );
};

window.ProductScreen = ProductScreen;
