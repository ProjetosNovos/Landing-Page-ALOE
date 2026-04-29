# ALOE - Medicina & Estetica

Landing page da **ALOE Medicina e Estetica**, clinica de estetica premium localizada em Brasilia, DF.

**Site ao vivo:** https://projetosnovos.github.io/Landing-Page-ALOE/

## Sobre o Projeto

Landing page institucional desenvolvida para a clinica ALOE, com foco em apresentar os servicos, a equipe medica e facilitar o agendamento de consultas via WhatsApp.

## Tecnologias

| Tecnologia | Versao | Uso |
|---|---|---|
| React | 19 | UI e componentizacao |
| TypeScript | 6 | Tipagem estatica |
| Vite | 8 | Build e dev server |
| Tailwind CSS | 4 | Estilizacao |
| Lucide React | 1.14 | Icones |
| GitHub Pages | - | Hospedagem |
| GitHub Actions | - | Deploy automatico |

## Estrutura do Projeto

```
src/
├── App.tsx                  # Componente raiz e providers
├── main.tsx                 # Entry point
├── index.css                # Estilos globais, tema e animacoes
├── WhatsAppContext.tsx       # Context para modal do WhatsApp
└── components/
    ├── Hero.tsx             # Secao principal com video de fundo
    ├── Navbar.tsx           # Barra de navegacao
    ├── ProvaSocial.tsx      # Depoimentos de pacientes
    ├── Sobre.tsx            # Sobre a clinica
    ├── Doutora.tsx          # Perfil da Dra. Karoline Araujo
    ├── Tratamentos.tsx      # Lista de tratamentos oferecidos
    ├── Diferenciais.tsx     # Diferenciais da clinica
    ├── Resultados.tsx       # Galeria de resultados
    ├── ComoFunciona.tsx     # Passo a passo do atendimento
    ├── FAQ.tsx              # Perguntas frequentes
    ├── CTAFinal.tsx         # Call-to-action final
    ├── Footer.tsx           # Rodape
    └── WhatsAppModal.tsx    # Modal de agendamento WhatsApp

public/
├── VideoNovoALOE.mp4        # Video de fundo do Hero
├── espacoALOE.jpg           # Foto do espaco da clinica
├── fotodraALOE.jpg          # Foto da Dra. Karoline
├── imgPage1.jpeg            # Imagem para Open Graph/SEO
├── imgVagasALOE.jpg         # Imagem do CTA final
├── imgrealALORE1-4.jpg      # Fotos da galeria de resultados
└── favicon.png              # Favicon
```

## Como Rodar Localmente

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para producao
npm run build

# Preview do build
npm run preview
```

## Deploy

O deploy e feito automaticamente via **GitHub Actions** a cada push na branch `main`. O workflow esta em `.github/workflows/deploy.yml`.

O site e hospedado no **GitHub Pages** em:
https://projetosnovos.github.io/Landing-Page-ALOE/

## Responsividade

- Layout adaptado para mobile e desktop (breakpoint `lg`)
- Suporte a **Dynamic Island** do iPhone (safe area insets)
- Zoom desabilitado no mobile para experiencia nativa
- Video de fundo com autoplay silencioso

## Contato

- **WhatsApp:** +55 61 98212-0035
- **Instagram:** [@aloemedicina](https://www.instagram.com/aloemedicina/)
- **Google Maps:** [Localizacao](https://maps.app.goo.gl/5SoYggnPHuLYdHbJ6)
