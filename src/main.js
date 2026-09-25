import './style.css';
import '@phosphor-icons/web/regular';
import '@phosphor-icons/web/fill';
import '@phosphor-icons/web/bold';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // Animação de entrada do Hero
  gsap.fromTo('.gsap-hero-item', 
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.2
    }
  );

  // Animação stagger para os cards do Bento Grid (revelar no scroll)
  gsap.fromTo('.gsap-stagger-item', 
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: 'main',
        start: 'top 85%',
      }
    }
  );

  // Interação magnética leve (opcional) nos cards
  const cards = document.querySelectorAll('.glass-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { scale: 0.98, duration: 0.3, ease: 'power2.out' });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
  });
});

// Função para copiar o PIX (CNPJ)
window.copyPix = function(e, chave) {
  e.preventDefault();
  const chaveLimpa = chave.replace(/\D/g, ''); 
  
  navigator.clipboard.writeText(chaveLimpa).then(() => {
    const toast = document.getElementById('toast');
    
    // Mostra o Toast
    toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
    toast.classList.add('opacity-100', 'translate-y-0');
    
    // Oculta após 3 segundos
    setTimeout(() => {
      toast.classList.remove('opacity-100', 'translate-y-0');
      toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
    }, 3000);
  }).catch(err => {
    alert('Não foi possível copiar a chave Pix automaticamente. O CNPJ é: ' + chave);
  });
};
