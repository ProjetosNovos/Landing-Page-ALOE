const steps = [
  { number: "01", title: "Entre em Contato", description: "Envie uma mensagem pelo WhatsApp ou agende diretamente pelo site. Resposta rápida e atenciosa." },
  { number: "02", title: "Avaliação Personalizada", description: "Na consulta, nossos médicos avaliam suas necessidades e criam um plano de tratamento exclusivo para você." },
  { number: "03", title: "Transformação Natural", description: "Realize seu procedimento com segurança e acompanhamento completo. Resultados que encantam." },
];

export default function ComoFunciona() {
  return (
    <section className="py-24 md:py-36" id="como-funciona">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <div data-animate="" className="text-center mb-16 md:mb-20">
          <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-300 mb-4 block">Simples & Rápido</span>
          <h2 className="font-serif font-light text-sand-900 leading-[1.15]" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>
            Como funciona o seu<br /><em className="italic text-primary-container">agendamento</em>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-[1px] gold-line" />

          {steps.map((step, i) => (
            <div key={i} data-animate="" data-delay={String(i + 1)} className="text-center space-y-5 relative">
              <div className="w-24 h-24 rounded-full bg-sand-50 border-2 border-gold/30 flex items-center justify-center mx-auto relative z-10">
                <span className="font-serif text-[32px] font-light text-gold-300">{step.number}</span>
              </div>
              <h3 className="font-serif text-[20px] text-sand-900">{step.title}</h3>
              <p className="font-sans text-[15px] leading-relaxed text-sand-600 max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
