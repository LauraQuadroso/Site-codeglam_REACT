import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from '../layout/Hero';
import Features from '../layout/Features';
import Features2 from '../layout/Features2';

import styles from './Home.module.css';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollId = location.state?.scrollToId;
    if (scrollId) {
      const el = document.getElementById(scrollId);
      if (el) {
       
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className={styles.home}>
      <Hero />
      <Features />
      <section id="features2">
        <Features2 />
      </section>
    </div>
  );
};

export default Home;


