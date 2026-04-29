function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

import { useWhatsApp } from '../WhatsAppContext';

export default function CTAFinal() {
  const { openWhatsApp } = useWhatsApp();
  return (
    <section className="py-28 md:py-40 relative overflow-hidden" id="agendar">
      {/* Background image with overlay */}
      <img
        src={`${import.meta.env.BASE_URL}imgVagasALOE.jpg`}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[51%_35%]"
      />
      <div className="absolute inset-0 bg-[#1a1a1a]/88" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-40px] left-[-40px] w-[300px] h-[300px] rounded-full border border-white/[0.04]" />
        <div className="absolute bottom-[-60px] right-[-60px] w-[400px] h-[400px] rounded-full border border-white/[0.03]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.02]" />

        {/* Botanical SVG */}
        <svg className="absolute top-16 right-16 w-28 h-28 text-white/[0.04]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M20 80 C20 80 25 50 50 30 C40 55 35 70 20 80Z" />
          <path d="M20 80 C20 80 45 65 70 55 C50 65 35 75 20 80Z" />
          <path d="M22 78 C22 78 30 55 48 35" />
        </svg>
        <svg className="absolute bottom-16 left-16 w-24 h-24 text-white/[0.04] rotate-180" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M20 80 C20 80 25 50 50 30 C40 55 35 70 20 80Z" />
          <path d="M20 80 C20 80 45 65 70 55 C50 65 35 75 20 80Z" />
        </svg>

        {/* Gold accent lines */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-[#3B5E3B]/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-t from-transparent via-[#3B5E3B]/20 to-transparent" />
      </div>

      <div className="max-w-[860px] mx-auto px-5 md:px-16 relative z-10 text-center">
        <div data-animate="">
          {/* Gold decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-10 h-[1px] bg-[#3B5E3B]/40" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#3B5E3B]">
              Vagas Limitadas
            </span>
            <div className="w-10 h-[1px] bg-[#3B5E3B]/40" />
          </div>

          <h2 className="font-serif font-light text-white leading-[1.12] mb-7" style={{ fontSize: 'clamp(34px,5vw,56px)' }}>
            Sua transformação<br />começa com uma <em className="italic text-[#6B9E6B]">conversa</em>.
          </h2>

          <p className="font-sans text-[16px] leading-[1.8] text-white/50 max-w-lg mx-auto mb-12 font-light">
            Agende sua avaliação personalizada e descubra o tratamento ideal para realçar sua beleza natural com a segurança que você merece.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openWhatsApp('agendar')}
              className="inline-flex items-center gap-3 bg-white text-sand-900 font-sans font-medium text-[14px] px-10 py-5 rounded-full transition-all duration-350 hover:bg-sand-50 hover:shadow-[0_20px_60px_-10px_rgba(255,255,255,0.15)] hover:-translate-y-1 group cursor-pointer"
            >
              <WhatsAppIcon />
              Agendar pelo WhatsApp
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>

            <a
              href="tel:+5561982120035"
              className="inline-flex items-center gap-2 border border-white/15 text-white/60 font-sans text-[13px] px-8 py-4 rounded-full hover:border-white/30 hover:text-white/80 transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
              Ou ligue para nós
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
