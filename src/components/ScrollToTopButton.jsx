// src/components/ScrollToTopButton.js (ou src/components/layout/ScrollToTopButton.js)

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Importe o ícone de seta para cima
import styles from './ScrollToTopButton.module.css'; // Vamos criar este arquivo CSS

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função para mostrar/esconder o botão baseado na posição de scroll
  const toggleVisibility = () => {
    // Calcula se o usuário está perto do final da página
    // Aqui, o botão aparecerá quando o scroll estiver a 300px do final da página
    const scrolledFromTop = window.scrollY || document.documentElement.scrollTop;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Ajuste o '300' para a distância do final da página que você deseja que o botão apareça
    if (totalHeight - scrolledFromTop <= 300 && scrolledFromTop > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Função para rolar a página para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
  
    window.addEventListener('scroll', toggleVisibility);

   
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); 

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.scrollToTopBtn} ${isVisible ? styles.visible : ''}`}
      aria-label="Voltar ao topo da página" 
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default ScrollToTopButton;