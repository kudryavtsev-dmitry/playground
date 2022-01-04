import { Button } from '@mui/material';
import React from 'react';

import styles from './Header.module.scss';

export const Header = ({ handleOpenModal }: { handleOpenModal: () => void }) => (
  <div className={styles.container}>
    <Button variant="contained" onClick={handleOpenModal}>
      Открыть модалку
    </Button>
  </div>
);
