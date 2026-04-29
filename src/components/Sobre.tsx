export default function Sobre() {
  return (
    <section className="py-24 md:py-36" id="sobre">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div data-animate="" className="md:col-span-5 relative">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="font-serif italic text-[20px] text-sand-800 tracking-wide">Nosso Espaço</span>
              <div className="w-8 h-[2px] bg-gold" />
            </div>
            <div className="organic-mask-1 overflow-hidden aspect-[4/5] bg-sand-200">
              <img
                src={`${import.meta.env.BASE_URL}espacoALOE.jpg`}
                alt="Espaço da clínica ALOE"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 organic-mask-2 bg-olive-50 -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full border border-gold/20 -z-10" />
          </div>

          {/* Text */}
          <div className="md:col-span-7 space-y-8">
            <div data-animate="">
              <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-300 mb-4 block">Nossa História</span>
              <h2 className="font-serif font-light text-sand-900 leading-[1.15]" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>
                Uma clínica nascida do<br />cuidado e da <em className="italic text-primary-container">excelência</em>.
              </h2>
            </div>

            <div data-animate="" data-delay="1" className="space-y-5">
              <p className="font-sans text-[16px] leading-[1.7] text-sand-700">
                A ALOE nasceu da visão de que beleza e saúde caminham juntas. Fundada por médicos especializados em estética avançada, nossa clínica em Brasília é referência em tratamentos que respeitam a individualidade de cada paciente.
              </p>
              <p className="font-sans text-[16px] leading-[1.7] text-sand-700">
                Com uma equipe multidisciplinar e tecnologia de última geração, oferecemos uma experiência completa — do diagnóstico personalizado ao acompanhamento pós-procedimento — em um ambiente que é um verdadeiro refúgio urbano.
              </p>
            </div>

            <div data-animate="" data-delay="2" className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center md:text-left">
                <p className="font-serif text-[36px] font-light text-olive">3+</p>
                <p className="font-sans text-[12px] uppercase tracking-[0.1em] text-sand-600 mt-1">Anos de<br />experiência</p>
              </div>
              <div className="text-center md:text-left">
                <p className="font-serif text-[36px] font-light text-olive">3k+</p>
                <p className="font-sans text-[12px] uppercase tracking-[0.1em] text-sand-600 mt-1">Pacientes<br />atendidos</p>
              </div>
              <div className="text-center md:text-left">
                <p className="font-serif text-[36px] font-light text-olive">100%</p>
                <p className="font-sans text-[12px] uppercase tracking-[0.1em] text-sand-600 mt-1">Profissionais<br />qualificados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
