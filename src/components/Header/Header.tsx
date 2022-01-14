import { Button } from '@mui/material';
import React from 'react';

import styles from './Header.module.scss';

export const Header = ({ handleOpenModal }: { handleOpenModal: () => void }) => (
  <div className={styles.container}>
    <span className={styles.logo}>Playground</span>
    <Button variant="contained" onClick={handleOpenModal}>
      Открыть модалку
    </Button>
  </div>
);
