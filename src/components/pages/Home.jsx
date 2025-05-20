// src/components/pages/Home.js
import React, { useEffect } from 'react';
import Hero from '../layout/Hero';
import Features from '../layout/Features';
import Features2 from '../layout/Features2';
import ScrollToTopButton from '../ScrollToTopButton'; // Importe o novo componente

import styles from './Home.module.css';

const Home = () => {
  // useEffect para a rolagem para o hash (#features2)
  useEffect(() => {
    const scrollToHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const targetElement = document.getElementById(id);

        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    scrollToHash();
  }, []);

  return (
    <div className={styles.home}>
      <Hero />
      <Features />
      <Features2 />
      {/* Adicione o botão de rolagem para o topo aqui */}
      <ScrollToTopButton />
    </div>
  );
};

export default Home;