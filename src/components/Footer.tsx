export default function Footer() {
  return (
    <footer className="bg-sand-900 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl font-light tracking-[0.15em] text-sand-300">ALOE</span>
            </div>
            <p className="font-sans text-[14px] leading-relaxed text-sand-500 max-w-xs">
              Clínica de estética premium em Brasília. Realçamos sua beleza natural com segurança médica e tratamentos personalizados.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-sand-400 mb-5">Clínica</h4>
            <ul className="space-y-3">
              <li><a href="#sobre" className="font-sans text-[14px] text-sand-500 hover:text-sand-200 transition-colors duration-300">Sobre</a></li>
              <li><a href="#tratamentos" className="font-sans text-[14px] text-sand-500 hover:text-sand-200 transition-colors duration-300">Tratamentos</a></li>
              <li><a href="#resultados" className="font-sans text-[14px] text-sand-500 hover:text-sand-200 transition-colors duration-300">Resultados</a></li>
              <li><a href="#faq" className="font-sans text-[14px] text-sand-500 hover:text-sand-200 transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 md:col-start-9">
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-sand-400 mb-5">Contato</h4>
            <ul className="space-y-3">
              <li className="font-sans text-[14px] text-sand-500">Asa Sul, Brasília — DF</li>
              <li><a href="https://wa.me/5561982120035" target="_blank" rel="noreferrer" className="font-sans text-[14px] text-sand-500 hover:text-sand-200 transition-colors duration-300">(61) 98212-0035</a></li>
              <li><a href="mailto:contato@clinicaaloe.com.br" className="font-sans text-[14px] text-sand-500 hover:text-sand-200 transition-colors duration-300">contato@clinicaaloe.com.br</a></li>
            </ul>
            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.instagram.com/aloemedicina/" target="_blank" rel="noreferrer" className="text-sand-500 hover:text-sand-200 transition-colors duration-300" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://maps.app.goo.gl/5SoYggnPHuLYdHbJ6" target="_blank" rel="noreferrer" className="text-sand-500 hover:text-sand-200 transition-colors duration-300" aria-label="Localização">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-sand-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[12px] text-sand-600">
            &copy; {new Date().getFullYear()} ALOE Aesthetics Clinic. Brasília, DF. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-sans text-[12px] text-sand-600 hover:text-sand-300 transition-colors duration-300">Política de Privacidade</a>
            <a href="#" className="font-sans text-[12px] text-sand-600 hover:text-sand-300 transition-colors duration-300">Termos de Uso</a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="font-sans text-[11px] text-sand-700">
            Desenvolvido por: <a href="https://trafixpro.com.br/" target="_blank" rel="noreferrer" className="hover:text-sand-400 transition-colors duration-300">traffixpro</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
