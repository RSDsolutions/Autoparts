/* Screen 6: Contacto */

const ContactScreen = () => {
  const [form, setForm] = React.useState({ name: '', phone: '', brand: 'Kia', model: '', part: '', message: '' });
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hola, vengo del formulario web.\n\nNombre: ${form.name}\nTeléfono: ${form.phone}\nAuto: ${form.brand} ${form.model}\nRepuesto: ${form.part}\nMensaje: ${form.message || 'Sin mensaje adicional'}`;
    window.open(waLink(text), '_blank');
    setSent(true);
  };

  return (
    <div className="qap" style={{position: 'relative'}}>
      <Navbar active="Contacto" />

      {/* Header */}
      <section className="carbon" style={{padding: '80px 56px 60px', borderBottom: '1px solid var(--line)', position: 'relative', overflow: 'hidden'}}>
        <div className="eyebrow" style={{color: 'var(--red)', marginBottom: 14}}>// HABLEMOS</div>
        <h1 style={{fontSize: 88, lineHeight: 0.95, letterSpacing: '-0.02em', textTransform: 'uppercase', fontWeight: 700}}>
          Contacto
        </h1>
        <p style={{fontSize: 17, color: 'var(--gray-300)', marginTop: 18, maxWidth: 640, lineHeight: 1.6}}>
          Respuesta promedio en WhatsApp: <span style={{color: 'white', fontFamily: 'Space Grotesk', fontWeight: 600}}>4 minutos</span>.
          O si prefieres, llena el formulario y te llamamos.
        </p>
      </section>

      {/* Two column */}
      <section className="rg-contact" style={{padding: 'clamp(32px,5vw,80px) clamp(16px,4vw,56px)', gap: 'clamp(24px,4vw,56px)'}}>
        {/* LEFT */}
        <div>
          {/* Big WA */}
          <a href={waLink('Hola, me gustaría consultar sobre sus repuestos.')} target="_blank" rel="noopener noreferrer" style={{
            display: 'block', background: 'var(--green)',
            padding: '36px 32px', textDecoration: 'none', color: 'white',
            position: 'relative', overflow: 'hidden', marginBottom: 16,
          }}>
            <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.06) 0 1px, transparent 1px 8px)'}}></div>
            <div style={{display: 'flex', alignItems: 'center', gap: 18, position: 'relative'}}>
              <div style={{width: 64, height: 64, background: 'rgba(0,0,0,0.2)', display: 'grid', placeItems: 'center', flexShrink: 0}}>
                <WAIcon size={32}/>
              </div>
              <div style={{flex: 1}}>
                <div className="mono" style={{fontSize: 11, letterSpacing: '0.18em', opacity: 0.85, marginBottom: 4}}>// CANAL PREFERIDO</div>
                <div style={{fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 28, letterSpacing: '0.01em', textTransform: 'uppercase', lineHeight: 1}}>WhatsApp directo</div>
                <div style={{fontSize: 14, opacity: 0.9, marginTop: 8}}>+593 99 123 4567</div>
              </div>
              <div style={{fontSize: 24}}>→</div>
            </div>
          </a>

          {/* Other channels */}
          <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: 1, background: 'var(--line)', border: '1px solid var(--line-2)', marginBottom: 32}}>
            {[
              { l: 'Teléfono fijo', v: '+593 2 250 8842', tag: '01', sub: 'LUN–VIE 8:00 – 18:00', href: 'tel:+59322508842' },
              { l: 'Correo electrónico', v: 'ventas@quitoautoparts.ec', tag: '02', sub: 'RESPUESTA EN 12 HORAS', href: 'mailto:ventas@quitoautoparts.ec' },
              { l: 'Dirección física', v: 'Av. 10 de Agosto N32-145', tag: '03', sub: 'QUITO · ECUADOR · 170150', href: '#' },
            ].map(c => (
              <a key={c.tag} href={c.href} style={{
                background: 'var(--black-3)', padding: 24, textDecoration: 'none',
                display: 'grid', gridTemplateColumns: '40px 1fr auto', gap: 18, alignItems: 'center',
              }}>
                <div className="mono" style={{fontSize: 11, color: 'var(--red)', letterSpacing: '0.15em'}}>// {c.tag}</div>
                <div>
                  <div className="eyebrow" style={{fontSize: 10, marginBottom: 6}}>{c.l}</div>
                  <div style={{fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 18, color: 'white', marginBottom: 4}}>{c.v}</div>
                  <div className="mono" style={{fontSize: 10, color: 'var(--gray-500)', letterSpacing: '0.15em'}}>{c.sub}</div>
                </div>
                <span style={{color: 'var(--gray-400)'}}>→</span>
              </a>
            ))}
          </div>

          {/* Hours */}
          <div style={{border: '1px solid var(--line-2)', background: 'var(--black-3)', padding: 28, marginBottom: 32}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18}}>
              <div className="eyebrow">Horario de atención</div>
              <span className="plate plate-stock">● ABIERTO AHORA</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--line)'}}>
              {[
                ['LUNES – VIERNES', '8:00 – 18:00'],
                ['SÁBADOS', '8:00 – 14:00'],
                ['DOMINGOS', 'CERRADO'],
                ['FERIADOS', 'WHATSAPP DE GUARDIA'],
              ].map(([d, h]) => (
                <div key={d} style={{background: 'var(--black-3)', padding: '12px 0', display: 'flex', justifyContent: 'space-between', fontFamily: 'JetBrains Mono', fontSize: 12}}>
                  <span style={{color: 'var(--gray-400)', letterSpacing: '0.12em'}}>{d}</span>
                  <span style={{color: h === 'CERRADO' ? 'var(--gray-500)' : 'white', letterSpacing: '0.08em'}}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div style={{aspectRatio: '1.5', background: 'var(--black-3)', border: '1px solid var(--line-2)', position: 'relative', overflow: 'hidden'}}>
            <div className="tape-corner tape-tl"></div>
            <div className="tape-corner tape-br"></div>
            <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
              <rect width="600" height="400" fill="#1a1c1c"/>
              {[...Array(10)].map((_,i) => <line key={'h'+i} x1="0" y1={i*40} x2="600" y2={i*40} stroke="#2a2c2c" strokeWidth="1"/>)}
              {[...Array(15)].map((_,i) => <line key={'v'+i} x1={i*40} y1="0" x2={i*40} y2="400" stroke="#2a2c2c" strokeWidth="1"/>)}
              <line x1="0" y1="200" x2="600" y2="180" stroke="#444" strokeWidth="3"/>
              <line x1="280" y1="0" x2="320" y2="400" stroke="#444" strokeWidth="3"/>
              <line x1="0" y1="100" x2="600" y2="120" stroke="#3a3c3c" strokeWidth="2"/>
              <line x1="0" y1="300" x2="600" y2="280" stroke="#3a3c3c" strokeWidth="2"/>
              <rect x="80" y="240" width="120" height="80" fill="#1f2a1f" stroke="#2c3a2c" strokeWidth="1"/>
              <rect x="420" y="60" width="100" height="80" fill="#1f2a1f" stroke="#2c3a2c" strokeWidth="1"/>
              <g transform="translate(300, 190)">
                <circle r="40" fill="#E31E24" opacity="0.15"/>
                <circle r="20" fill="#E31E24" opacity="0.3"/>
                <path d="M0 -16 L8 0 L0 16 L-8 0 Z" fill="#E31E24" stroke="white" strokeWidth="1.5"/>
                <circle r="3" fill="white"/>
              </g>
              <text x="320" y="195" fontFamily="JetBrains Mono" fontSize="10" fill="white" letterSpacing="0.1em">QAP · AV. 10 AGOSTO</text>
            </svg>
            <div style={{position: 'absolute', bottom: 16, left: 16}}>
              <span className="plate plate-white">AV. 10 DE AGOSTO N32-145</span>
            </div>
            <div style={{position: 'absolute', top: 16, right: 16}}>
              <a href="https://maps.google.com/?q=Av.+10+de+Agosto+N32-145,+Quito,+Ecuador" target="_blank" rel="noopener noreferrer"
                 className="btn btn-red" style={{padding: '8px 14px', fontSize: 11}}>
                Abrir en Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <div>
          <div style={{border: '1px solid var(--line-2)', background: 'var(--black-3)', padding: 40, position: 'relative'}}>
            <div className="tape-corner tape-tl"></div>
            <div className="tape-corner tape-tr"></div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28}}>
              <div>
                <div className="eyebrow" style={{color: 'var(--red)', marginBottom: 8}}>// FORMULARIO DE COTIZACIÓN</div>
                <h2 style={{fontSize: 32, fontFamily: 'Space Grotesk', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.01em'}}>
                  Cotiza tu repuesto
                </h2>
              </div>
              <span className="mono" style={{fontSize: 11, color: 'var(--gray-500)', letterSpacing: '0.12em'}}>FORM-QAP / 06</span>
            </div>

            {sent ? (
              <div style={{padding: '40px 24px', textAlign: 'center'}}>
                <div style={{fontSize: 56, marginBottom: 16}}>✅</div>
                <div style={{fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 24, textTransform: 'uppercase', marginBottom: 12}}>¡Mensaje enviado!</div>
                <p style={{color: 'var(--gray-300)', fontSize: 14, marginBottom: 24}}>Te abrimos WhatsApp con tu consulta. Respondemos en máximo 4 minutos.</p>
                <button className="btn btn-red" style={{padding: '14px 32px'}} onClick={() => setSent(false)}>Nueva consulta</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20}}>
                  <div>
                    <label className="label">Nombre completo *</label>
                    <input className="input" placeholder="ej. María Pérez" value={form.name} required
                           onChange={e => setForm({...form, name: e.target.value})}/>
                  </div>
                  <div>
                    <label className="label">Teléfono / WhatsApp *</label>
                    <input className="input" placeholder="+593 99 ..." value={form.phone} required
                           onChange={e => setForm({...form, phone: e.target.value})}/>
                  </div>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20}}>
                  <div>
                    <label className="label">Marca del auto *</label>
                    <div style={{display: 'flex', gap: 0, border: '1px solid var(--line-2)'}}>
                      {['Kia', 'Hyundai', 'Chevrolet'].map(b => (
                        <button key={b} type="button" onClick={() => setForm({...form, brand: b})} style={{
                          flex: 1, padding: '14px 0',
                          background: form.brand === b ? 'var(--red)' : 'transparent',
                          color: 'white', border: 'none', cursor: 'pointer',
                          fontFamily: 'Space Grotesk', fontSize: 12, fontWeight: 600,
                          letterSpacing: '0.12em', textTransform: 'uppercase',
                        }}>{b}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="label">Modelo y año *</label>
                    <input className="input" placeholder="ej. Sportage 2020" value={form.model} required
                           onChange={e => setForm({...form, model: e.target.value})}/>
                  </div>
                </div>

                <div style={{marginBottom: 20}}>
                  <label className="label">Repuesto que necesitas *</label>
                  <input className="input" placeholder="ej. Pastillas freno delanteras" value={form.part} required
                         onChange={e => setForm({...form, part: e.target.value})}/>
                </div>

                <div style={{marginBottom: 24}}>
                  <label className="label">Mensaje adicional</label>
                  <textarea className="input textarea" rows="4" placeholder="Cuéntanos detalles: código de motor, VIN, urgencia, etc."
                            value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                            style={{resize: 'vertical', minHeight: 100}}/>
                </div>

                <label style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24, fontSize: 13, color: 'var(--gray-400)', cursor: 'pointer'}}>
                  <span style={{width: 16, height: 16, border: '1.5px solid var(--red)', background: 'var(--red)', display: 'grid', placeItems: 'center', flexShrink: 0, borderColor: 'var(--red)'}}>
                    <span style={{color: 'white', fontSize: 11}}>✓</span>
                  </span>
                  Acepto la <span style={{color: 'white', textDecoration: 'underline', cursor: 'pointer', marginLeft: 4}}>política de privacidad</span> y autorizo el contacto comercial.
                </label>

                <div style={{display: 'grid', gridTemplateColumns: '1fr auto', gap: 12}}>
                  <button type="submit" className="btn btn-red" style={{padding: '20px', fontSize: 13}}>
                    Enviar cotización →
                  </button>
                  <a href={waLink('Hola, quiero cotizar un repuesto.')} target="_blank" rel="noopener noreferrer"
                     className="btn btn-wa" style={{padding: '20px 28px', fontSize: 13}}>
                    <WAIcon size={18}/> O por WhatsApp
                  </a>
                </div>

                <div style={{marginTop: 24, padding: 16, background: 'var(--black-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 14}}>
                  <div style={{width: 36, height: 36, border: '1.5px solid var(--blue)', display: 'grid', placeItems: 'center', color: 'var(--blue)', flexShrink: 0}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z"/>
                    </svg>
                  </div>
                  <div style={{fontSize: 13, color: 'var(--gray-300)', lineHeight: 1.5}}>
                    <strong style={{color: 'white'}}>Tus datos están seguros.</strong> No compartimos tu información con terceros y solo te contactamos por el repuesto solicitado.
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <WAFloat />
    </div>
  );
};

window.ContactScreen = ContactScreen;
