import { useWhatsApp } from '../WhatsAppContext';

const treatments = [
  {
    title: "Harmonização Facial",
    tag: "Premium",
    description: "Equilíbrio e proporção para o seu rosto, combinando técnicas avançadas de preenchimento e volumização com resultado natural e harmonioso.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80&auto=format",
    context: "harmonizacao",
  },
  {
    title: "Toxina Botulínica",
    tag: "Popular",
    description: "Suavização de linhas de expressão mantendo a naturalidade dos movimentos. Técnica refinada para um resultado que preserva sua expressividade.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=700&q=80&auto=format",
    context: "botox",
  },
  {
    title: "Preenchimento Labial",
    tag: "Destaque",
    description: "Volume e definição labial com ácido hialurônico de alta qualidade. Lábios mais bonitos, hidratados e com contorno suave e elegante.",
    image: "/preenchimento-labial.jpg",
    context: "preenchimento",
  },
  {
    title: "Tratamentos Corporais",
    tag: "Exclusivo",
    description: "Protocolos corporais personalizados com tecnologias de última geração para remodelamento, firmeza e rejuvenescimento da pele do corpo.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=700&q=80&auto=format",
    context: "corporais",
  },
];

export default function Tratamentos() {
  const { openWhatsApp } = useWhatsApp();

  return (
    <section className="py-24 md:py-36 bg-sand-100" id="tratamentos">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <div data-animate="" className="text-center mb-16 md:mb-20">
          <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-300 mb-4 block">Nossos Tratamentos</span>
          <h2 className="font-serif font-light text-sand-900 leading-[1.15]" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>
            Procedimentos que realçam<br />a sua <em className="italic text-primary-container">beleza natural</em>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {treatments.map((t, i) => (
            <div key={i} data-animate="" data-delay={String(i + 1)} className="card-treatment group">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={t.image} alt={t.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-[24px] text-sand-900">{t.title}</h3>
                  <span className="font-sans text-[11px] uppercase tracking-[0.1em] text-gold-300 bg-gold-50/60 px-3 py-1 rounded-full">{t.tag}</span>
                </div>
                <p className="font-sans text-[15px] leading-relaxed text-sand-600 mb-6">{t.description}</p>
                <button
                  onClick={() => openWhatsApp(t.context)}
                  className="font-sans text-[13px] font-medium text-olive hover:text-primary-container transition-colors duration-300 inline-flex items-center gap-2"
                >
                  Saiba mais
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
