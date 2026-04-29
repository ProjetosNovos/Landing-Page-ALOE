import React, { useState } from 'react';

const faqs = [
  { question: "Os procedimentos são seguros?", answer: "Sim. Todos os procedimentos são realizados exclusivamente por médicos especializados, com materiais de alta qualidade e certificados pela ANVISA. Seguimos rigorosos protocolos de segurança.", icon: "shield" },
  { question: "O resultado fica natural?", answer: "Naturalidade é nosso principal compromisso. Utilizamos técnicas avançadas que respeitam as proporções faciais e a individualidade de cada paciente. Nosso objetivo é realçar, nunca transformar.", icon: "leaf" },
  { question: "Qual é o tempo de recuperação?", answer: "A maioria dos procedimentos minimamente invasivos permite retorno às atividades no mesmo dia ou no dia seguinte. Na consulta, explicamos detalhadamente o que esperar em cada caso.", icon: "clock" },
  { question: "Como é a primeira consulta?", answer: "A primeira consulta é uma avaliação completa onde conhecemos suas expectativas, analisamos suas características faciais e corporais, e desenhamos juntos o plano ideal de tratamento.", icon: "heart" },
  { question: "Quais formas de pagamento são aceitas?", answer: "Aceitamos cartões de crédito e débito, PIX e transferência bancária. Oferecemos também opções de parcelamento para tornar seu tratamento mais acessível.", icon: "card" },
];

const icons: Record<string, React.ReactNode> = {
  shield: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  leaf: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 019.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.5 10-10 10z" /><path d="M2 21c0-3 1.9-5.5 4.5-6.5" /></svg>,
  clock: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
  heart: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>,
  card: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>,
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-36 bg-white border-y border-sand-400/30 relative overflow-hidden" id="faq">
      {/* Decorative shapes */}
      <div className="absolute top-[-60px] left-[-80px] w-[300px] h-[300px] rounded-full bg-olive-50/40" />
      <div className="absolute bottom-[-40px] right-[-60px] w-[250px] h-[250px] rounded-full bg-olive-50/30" />

      {/* Botanical SVG */}
      <svg className="absolute top-12 right-12 w-20 h-20 text-olive/10" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M20 80 C20 80 25 50 50 30 C40 55 35 70 20 80Z" />
        <path d="M20 80 C20 80 45 65 70 55 C50 65 35 75 20 80Z" />
        <path d="M22 78 C22 78 30 55 48 35" />
      </svg>

      <div className="max-w-[900px] mx-auto px-5 md:px-16 relative z-10">
        {/* Header */}
        <div data-animate="" className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-gold" />
            <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-300">Tire suas dúvidas</span>
            <div className="w-8 h-[2px] bg-gold" />
          </div>
          <h2 className="font-serif font-light text-sand-900 leading-[1.15]" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>
            Perguntas <em className="italic text-primary-container">frequentes</em>.
          </h2>
          <p className="font-sans text-[15px] text-sand-600 mt-5 max-w-md mx-auto">
            Tudo o que você precisa saber antes da sua primeira visita.
          </p>
        </div>

        {/* FAQ cards */}
        <div data-animate="" data-delay="1" className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-sand-50 rounded-[0_20px_0_20px] border transition-all duration-400 ${
                  isOpen
                    ? 'border-olive/20 ambient-shadow-hover'
                    : 'border-sand-400/20 ambient-shadow hover:ambient-shadow-hover'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center gap-5 p-6 md:p-7 text-left group"
                >
                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    isOpen ? 'bg-olive-100 text-olive' : 'bg-sand-100 text-sand-600 group-hover:bg-olive-50 group-hover:text-olive'
                  }`}>
                    {icons[faq.icon]}
                  </div>

                  <span className="font-serif text-[18px] md:text-[20px] text-sand-900 flex-1 pr-4">{faq.question}</span>

                  {/* Toggle icon */}
                  <div className={`w-9 h-9 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-400 ${
                    isOpen
                      ? 'bg-olive text-white border-olive rotate-45'
                      : 'border-sand-400/40 text-sand-600 group-hover:border-olive/40 group-hover:text-olive'
                  }`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-500 ease-out"
                  style={{ maxHeight: isOpen ? '300px' : '0' }}
                >
                  <div className="px-6 md:px-7 pb-7 pl-[84px] md:pl-[92px]">
                    <div className="w-10 h-[2px] bg-gold/40 mb-4" />
                    <p className="font-sans text-[15px] leading-[1.8] text-sand-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
