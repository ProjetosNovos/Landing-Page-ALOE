const items = [
  {
    title: "Tecnologia de Ponta",
    description: "Equipamentos de última geração e protocolos baseados em evidências científicas. Investimos constantemente em inovação para oferecer o melhor.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3e5219" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 015 5c0 6-5 8-5 13H7C7 15 2 13 2 7a5 5 0 015-5" /><path d="M9 22h6" /><path d="M12 2v4" /><path d="M18 6l-2 2" /><path d="M6 6l2 2" /></svg>
    ),
  },
  {
    title: "Atendimento Personalizado",
    description: "Cada paciente é único. Nossos protocolos são desenhados individualmente, respeitando suas características e desejos para um resultado autêntico.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3e5219" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
    ),
  },
  {
    title: "Segurança Médica",
    description: "Equipe 100% composta por médicos especializados. Todos os procedimentos seguem os mais rigorosos padrões de segurança e ética médica.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3e5219" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
  },
];

export default function Diferenciais() {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden" id="diferenciais">
      <div className="absolute top-20 right-0 w-72 h-72 bg-olive-50 organic-mask-3 opacity-40 -z-10" />
      <div className="absolute bottom-20 left-0 w-48 h-48 rounded-full border border-gold/10 -z-10" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <div data-animate="" className="text-center mb-16 md:mb-20">
          <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-300 mb-4 block">Por que a ALOE</span>
          <h2 className="font-serif font-light text-sand-900 leading-[1.15]" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>
            O que nos torna <em className="italic text-primary-container">diferentes</em>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {items.map((item, i) => (
            <div key={i} data-animate="" data-delay={String(i + 1)} className="text-center md:text-left space-y-5 group">
              <div className="w-16 h-16 rounded-2xl bg-olive-50 flex items-center justify-center mx-auto md:mx-0 group-hover:bg-olive-100 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-serif text-[22px] text-sand-900">{item.title}</h3>
              <p className="font-sans text-[15px] leading-relaxed text-sand-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
