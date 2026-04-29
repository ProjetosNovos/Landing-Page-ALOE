export default function Doutora() {
  return (
    <section className="py-24 md:py-36 bg-[#f9f3ed] relative overflow-hidden" id="dra-karoline">
      {/* Decorative shapes */}
      <div className="absolute top-[-60px] right-[-40px] w-[280px] h-[280px] rounded-full bg-[#f0ddd0]/40" />
      <div className="absolute bottom-[-80px] left-[-60px] w-[350px] h-[350px] rounded-full bg-[#eeddd1]/30" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
          {/* Photo */}
          <div data-animate="" className="md:col-span-5 relative">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="font-serif italic text-[20px] text-sand-800 tracking-wide">Quem cuida de você</span>
              <div className="w-8 h-[2px] bg-gold" />
            </div>
            <div className="organic-mask-2 overflow-hidden aspect-[3/4] bg-sand-200">
              <img
                src={`${import.meta.env.BASE_URL}fotodraALOE.jpg`}
                alt="Dra. Karoline Araújo"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 w-28 h-28 organic-mask-1 bg-olive-50 -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-gold/20 -z-10" />
          </div>

          {/* Text */}
          <div className="md:col-span-7 space-y-6">
            <div data-animate="">
              <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-300 mb-4 block">Conheça a Especialista</span>
              <h2 className="font-serif font-light text-sand-900 leading-[1.15]" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>
                Dra. Karoline <em className="italic text-primary-container">Araújo</em>
              </h2>
            </div>

            <div data-animate="" data-delay="1" className="space-y-5">
              <p className="font-sans text-[16px] leading-[1.7] text-sand-700">
                À frente da ALOE está a Dra. Karoline Araújo, médica que constrói sua trajetória com base em critério, responsabilidade e profundo respeito à individualidade de cada paciente.
              </p>
              <p className="font-sans text-[16px] leading-[1.7] text-sand-700">
                Sua atuação é guiada por princípios claros: ética como fundamento, segurança médica em cada decisão, valorização da beleza natural e o paciente sempre em primeiro lugar. Mais do que executar procedimentos, Dra. Karoline conduz escolhas, indicando apenas o que faz sentido, no tempo certo e com acompanhamento cuidadoso.
              </p>
              <p className="font-sans text-[16px] leading-[1.7] text-sand-700">
                Na ALOE, sua presença garante não apenas técnica, mas confiança, coerência e um olhar clínico que entende que estética é, antes de tudo, saúde, equilíbrio e bem-estar.
              </p>
            </div>

            <div data-animate="" data-delay="2" className="pt-4 border-t border-sand-400/30">
              <p className="font-sans text-[13px] text-sand-600 tracking-wide">
                <span className="font-semibold text-sand-800">RT Dra. Karoline Araújo</span> &middot; CRM-DF 29340
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
