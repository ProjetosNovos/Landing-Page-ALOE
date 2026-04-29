function StarIcon() {
  return (
    <svg className="w-5 h-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

const testimonials = [
  {
    initial: "M",
    name: "Marina S.",
    treatment: "Harmonização Facial",
    text: "Resultados incrivelmente naturais. A equipe médica me passou muita segurança desde a primeira consulta.",
  },
  {
    initial: "C",
    name: "Camila V.",
    treatment: "Botox",
    text: "O ambiente é um refúgio. Me senti cuidada de forma única. O botox ficou perfeito, sem perder a expressão.",
  },
  {
    initial: "J",
    name: "Juliana M.",
    treatment: "Preenchimento Labial",
    text: "A melhor clínica de Brasília. Profissionalismo e bom gosto em cada detalhe do atendimento e do tratamento.",
  },
];

export default function ProvaSocial() {
  return (
    <section className="py-24 md:py-32 bg-[#f9f3ed] border-y border-sand-400/30 relative overflow-hidden" id="prova-social">
      {/* Organic background shapes */}
      <div className="absolute top-[-80px] left-[-60px] w-[320px] h-[320px] rounded-full bg-[#f0ddd0]/60" />
      <div className="absolute bottom-[-100px] right-[-80px] w-[400px] h-[400px] rounded-full bg-[#eeddd1]/50" />
      <div className="absolute top-[30%] right-[10%] w-[200px] h-[200px] rounded-full bg-[#e8d5c4]/30" />
      <div className="absolute bottom-[20%] left-[5%] w-[150px] h-[150px] rounded-full bg-[#f5e6da]/40" />

      {/* Botanical decorative element - top left */}
      <svg className="absolute top-8 left-8 w-24 h-24 text-[#c9a98a]/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M20 80 C20 80 25 50 50 30 C40 55 35 70 20 80Z" />
        <path d="M20 80 C20 80 45 65 70 55 C50 65 35 75 20 80Z" />
        <path d="M22 78 C22 78 30 55 48 35" />
      </svg>

      {/* Botanical decorative element - bottom right */}
      <svg className="absolute bottom-10 right-10 w-20 h-20 text-[#c9a98a]/15 rotate-180" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M20 80 C20 80 25 50 50 30 C40 55 35 70 20 80Z" />
        <path d="M20 80 C20 80 45 65 70 55 C50 65 35 75 20 80Z" />
        <path d="M22 78 C22 78 30 55 48 35" />
      </svg>

      <div className="max-w-[1280px] mx-auto px-5 md:px-16 relative z-10">
        {/* Header */}
        <div data-animate="" className="text-center mb-6">
          <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-300 mb-4 block">O que dizem nossos pacientes</span>
          <h2 className="font-serif font-light text-sand-900 leading-[1.15]" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>
            Avaliações que falam<br />por <em className="italic text-primary-container">si mesmas</em>.
          </h2>
        </div>

        {/* Rating */}
        <div data-animate="" className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>
          <p className="font-sans text-[14px] text-sand-700 tracking-wide">
            <span className="font-semibold text-sand-900">4.9</span> baseada em <span className="font-semibold text-sand-900">500+</span> avaliações
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} data-animate="" data-delay={String(i + 1)} className="bg-sand-50 border border-sand-400/20 rounded-xl p-8 md:p-10 ambient-shadow hover:ambient-shadow-hover transition-all duration-500">
              <div className="w-10 h-[2px] bg-gold mb-6" />
              <p className="font-serif text-[19px] leading-relaxed text-sand-800 italic mb-8">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-olive-100 flex items-center justify-center">
                  <span className="font-serif text-olive text-sm font-medium">{t.initial}</span>
                </div>
                <div>
                  <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-sand-900">{t.name}</p>
                  <p className="font-sans text-[12px] text-sand-600">{t.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
