'use client'
import { useEffect, useState } from 'react';
import styles from './page.module.css'

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ display: loading ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center', height: '80vh', width: '100vw' }}>
      <div className={styles.loader} >
      </div>
    </div>
  );
};

export default Loading;
