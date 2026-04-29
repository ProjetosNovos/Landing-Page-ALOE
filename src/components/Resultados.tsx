const gallery = [
  { src: "/imgrealALORE1.jpg", label: "Harmonização", offset: false },
  { src: "/imgrealALORE2.jpg", label: "Botox", offset: true },
  { src: "/imgrealALORE3.jpg", label: "Preenchimento", offset: false },
  { src: "/imgrealALORE4.jpg", label: "Corporal", offset: true },
];

export default function Resultados() {
  return (
    <section className="py-24 md:py-36 bg-sand-100" id="resultados">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <div data-animate="" className="text-center mb-16 md:mb-20">
          <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-300 mb-4 block">Resultados Reais</span>
          <h2 className="font-serif font-light text-sand-900 leading-[1.15]" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>
            A beleza dos resultados<br /><em className="italic text-primary-container">naturais</em>.
          </h2>
          <p className="font-sans text-[15px] text-sand-600 mt-6 max-w-lg mx-auto">
            Cada transformação é sutil e personalizada. Nosso compromisso é realçar o que já é bonito em você.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {gallery.map((item, i) => {
            const masks = ['organic-mask-1', 'organic-mask-2', 'organic-mask-3', 'organic-mask-1'];
            return (
              <div key={i} data-animate="" data-delay={String(i + 1)} className={`relative group ${item.offset ? 'mt-8' : ''}`}>
                <div className={`aspect-[3/4] overflow-hidden ${masks[i]} bg-sand-200 relative`}>
                  <img src={item.src} alt="Resultado natural" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-sand-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                    <span className="font-sans text-[12px] uppercase tracking-[0.1em] text-white">{item.label}</span>
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
