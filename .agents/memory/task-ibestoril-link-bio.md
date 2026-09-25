# Task: Ibestoril Link-in-Bio (Bento Grid)

## 1. Visão Geral
Construção de uma página estática "Link na Bio" (Menu de Links) para a Igreja Batista do Estoril (Ibestoril), utilizando um design no estilo Bento Grid (semelhante ao Bento.me). O projeto será otimizado para mobile, utilizará as cores e fontes institucionais da igreja e contará com animações fluidas.

## 2. Tecnologias
- **HTML5 / CSS3 / JavaScript (Vanilla)**
- **Vite** (Build tool para otimização e dev server local)
- **Tailwind CSS v3** (Para estilização rápida e responsividade baseada em grid)
- **GSAP & Phosphor Icons** (Para animações de entrada/hover e ícones limpos)

## 3. Estrutura do Bento Grid (Desktop)
O layout será baseado em um grid CSS de 3 ou 4 colunas no Desktop, colapsando para 1 coluna no Mobile.

**Conteúdos mapeados:**
1. **Cabeçalho:** Logo ibestoril + Slogan ("Sob a cruz de Cristo, para a glória de Deus!")
2. **YouTube:** Bloco de destaque (maior) reservado para o vídeo mais recente/culto ao vivo.
3. **Atividades / Agenda:** Bloco médio para listar cultos e células.
4. **Localização:** Bloco com mapa/foto da fachada e endereço.
5. **Dízimos e Ofertas:** Bloco de destaque visual (Call to Action) com o azul institucional.
6. **Spotify:** Bloco médio reservado para embed ou link das mensagens/louvores.
7. **Coluna JC Net:** Bloco de leitura/notícias.
8. **Site Oficial:** Bloco menor para redirecionamento.

## 4. Design System (Baseado no Guia IBE 2023)
- **Cores:**
  - Fundo principal: `#030b1e` (Azul super escuro, traz contraste premium)
  - Superfícies dos Cards: `#0c245b` ou variantes com transparência (efeito glassmorphism leve).
  - Destaques (CTAs): `#3fa9f5` (Azul claro vibrante)
- **Tipografia:**
  - Títulos/Destaques: *Noto Serif Display SemiCondensed Light Italic* e *Bebas Neue*
  - Corpo/Textos: *Archivo SemiCondensed*

## 5. Próximos Passos (Fase de Implementação)
- [ ] Inicializar projeto Vite + Tailwind.
- [ ] Configurar tipografia (via Google Fonts) e paleta de cores no `tailwind.config.js`.
- [ ] Criar a marcação HTML do Grid (Bento Layout).
- [ ] Inserir placeholders (`divs` demarcadas) para as fotos e vídeos.
- [ ] Aplicar animações GSAP (ScrollTrigger para entrada, hover nos blocos).
- [ ] Preparar instruções de deploy para o GitHub Pages.
