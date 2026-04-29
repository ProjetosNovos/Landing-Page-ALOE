import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { useWhatsApp } from '../WhatsAppContext';

export default function Hero() {
  const { openWhatsApp } = useWhatsApp();
  return (
    <>
      {/* ── Mobile Hero ── */}
      <section className="relative h-[100svh] w-full overflow-hidden lg:hidden">
        <video
          src={`${import.meta.env.BASE_URL}VideoNovoALOE.mp4`}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[51%_20%] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/30 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 pb-14 px-6 flex flex-col items-center text-center z-10">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#D4B896] mb-5 anim-fade-up">
            Medicina & Estética
          </p>
          <h1 className="font-serif text-[2.6rem] leading-[1.1] text-white mb-4 anim-fade-up delay-1 font-light">
            Arte, Ciência<br />
            <span className="italic font-light text-[#D4B896]">& Sofisticação.</span>
          </h1>

          <div className="flex gap-1.5 mb-10 anim-fade-in delay-3">
            <div className="w-7 h-[3px] rounded-full bg-[#B8956A]" />
            <div className="w-2 h-[3px] rounded-full bg-white/25" />
            <div className="w-2 h-[3px] rounded-full bg-white/25" />
          </div>

          <div className="flex w-full max-w-[300px] gap-3 anim-fade-up delay-4">
            <a
              href="#tratamentos"
              className="flex-1 flex items-center justify-center gap-2 py-4 border border-white/20 text-white text-[13px] tracking-[0.1em] uppercase rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Serviços
              <ArrowDownRight size={14} strokeWidth={1.5} />
            </a>
            <button
              onClick={() => openWhatsApp('agendar')}
              className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#F5F0E8] text-[#2D3B2D] text-[13px] tracking-[0.1em] uppercase rounded-full hover:bg-white transition-all duration-300 font-medium"
            >
              Agendar
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Desktop Hero ── */}
      <section className="relative hidden lg:block h-screen overflow-hidden">
        {/* Background image – fullscreen */}
        <video
          src={`${import.meta.env.BASE_URL}VideoNovoALOE.mp4`}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[50%_20%]"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/75 via-[#1a1a1a]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/30 to-transparent" />

        <div className="relative z-10 max-w-[1400px] ml-0 px-10 h-full flex items-center">
          {/* Text content */}
          <div className="max-w-[600px]">
            <div className="flex items-center gap-4 mb-10 anim-fade-up">
              <div className="h-px w-16 bg-[#B8956A] anim-draw-line" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-[#D4B896] font-medium">
                A sua melhor versão
              </span>
            </div>

            <h1 className="font-serif text-[5.5rem] leading-[0.95] text-white mb-10 anim-fade-up delay-1 font-light">
              Arte, Ciência<br />
              <span className="italic text-[#D4B896]">& Sofisticação.</span>
            </h1>

            <p className="text-[1.1rem] leading-[1.8] text-white/60 max-w-[460px] mb-12 anim-fade-up delay-2 font-light">
              Na Aloe Medicina e Estética, oferecemos um atendimento impecável
              num ambiente de excelência — criado para realçar a sua beleza
              com naturalidade e segurança.
            </p>

            <div className="flex items-center gap-6 anim-fade-up delay-3">
              <button
                onClick={() => openWhatsApp('agendar')}
                className="group flex items-center gap-3 bg-[#F5F0E8] text-[#2D3B2D] px-10 py-[18px] text-[12px] tracking-[0.2em] uppercase rounded-full hover:bg-white transition-all duration-400 font-medium"
              >
                Marcar Avaliação
                <span className="w-7 h-7 rounded-full border border-[#2D3B2D]/20 flex items-center justify-center group-hover:bg-[#2D3B2D]/5 transition-all">
                  <ArrowUpRight size={13} strokeWidth={1.5} />
                </span>
              </button>
              <a
                href="#sobre"
                className="text-[13px] tracking-[0.12em] uppercase text-white/50 hover:text-white transition-colors border-b border-white/20 hover:border-white/60 pb-0.5"
              >
                Conheça-nos
              </a>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute right-16 bottom-16 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 anim-fade-up delay-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4B896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <div>
                <div className="font-serif text-xl text-white/90">5,0</div>
                <div className="text-[10px] tracking-[0.15em] uppercase text-white/40">Google Maps</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
