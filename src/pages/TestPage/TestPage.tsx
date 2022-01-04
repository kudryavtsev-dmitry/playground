import React, { useEffect } from 'react';

import styles from './TestPage.module.scss';

export const TestPage = () => {
  useEffect(() => {
    console.log('mounted');
  }, []);
  return <div className={styles.container}>тестовая страничка</div>;
};
