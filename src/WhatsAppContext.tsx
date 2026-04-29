import { createContext, useContext, useState, type ReactNode } from 'react';

interface WhatsAppContextType {
  openWhatsApp: (context: string) => void;
  modalContext: string;
  isModalOpen: boolean;
  closeModal: () => void;
}

const WhatsAppContext = createContext<WhatsAppContextType | null>(null);

export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState('geral');

  const openWhatsApp = (context: string) => {
    setModalContext(context);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <WhatsAppContext.Provider value={{ openWhatsApp, modalContext, isModalOpen, closeModal }}>
      {children}
    </WhatsAppContext.Provider>
  );
}

export function useWhatsApp() {
  const ctx = useContext(WhatsAppContext);
  if (!ctx) throw new Error('useWhatsApp must be used within WhatsAppProvider');
  return ctx;
}
