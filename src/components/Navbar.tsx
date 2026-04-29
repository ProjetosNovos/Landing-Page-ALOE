import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Navbar({ scrolled, isMenuOpen, setIsMenuOpen }: NavbarProps) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-surface/92 backdrop-blur-[16px] border-b border-sand-400/50' : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span className="font-serif text-[28px] font-light tracking-[0.15em] text-[#3B5E3B]">ALOE</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#tratamentos" className="text-[13px] font-sans font-medium uppercase tracking-[0.12em] text-sand-800 hover:text-olive transition-colors duration-300">Tratamentos</a>
          <a href="#sobre" className="text-[13px] font-sans font-medium uppercase tracking-[0.12em] text-sand-800 hover:text-olive transition-colors duration-300">Sobre</a>
          <a href="#como-funciona" className="text-[13px] font-sans font-medium uppercase tracking-[0.12em] text-sand-800 hover:text-olive transition-colors duration-300">Como Funciona</a>
          <a href="#faq" className="text-[13px] font-sans font-medium uppercase tracking-[0.12em] text-sand-800 hover:text-olive transition-colors duration-300">FAQ</a>
          <a href="https://maps.app.goo.gl/5SoYggnPHuLYdHbJ6" target="_blank" rel="noreferrer" className="text-sand-700 hover:text-olive transition-colors duration-300" aria-label="Localização">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
          </a>
          <a href="https://www.instagram.com/aloemedicina/" target="_blank" rel="noreferrer" className="text-sand-700 hover:text-olive transition-colors duration-300" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
          </a>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-sand-800"
        >
          {isMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-surface border-t border-sand-400/30 px-5 py-6 space-y-1">
          {['Tratamentos', 'Sobre', 'Como Funciona', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 text-[14px] font-sans font-medium uppercase tracking-[0.1em] text-sand-800 hover:text-olive transition-colors border-b border-sand-400/20 last:border-0"
            >
              {item}
            </a>
          ))}
          <div className="flex items-center gap-5 pt-4 mt-2">
            <a href="https://www.instagram.com/aloemedicina/" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-sand-700 hover:text-olive transition-colors" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              <span className="text-[13px] font-sans tracking-[0.05em]">Instagram</span>
            </a>
            <a href="https://maps.app.goo.gl/5SoYggnPHuLYdHbJ6" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-sand-700 hover:text-olive transition-colors" aria-label="Localização">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <span className="text-[13px] font-sans tracking-[0.05em]">Localização</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
