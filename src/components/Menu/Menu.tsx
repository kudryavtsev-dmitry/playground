import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import classes from 'classnames';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Menu: FC = () => {
  const isOpen = useTypedSelector((state) => state.menu.isOpen);

  const dispatch = useDispatch();

  const handleOpenMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    dispatch({ type: 'OPEN_MENU' });
  };

  const handleCloseMenu = () => {
    dispatch({ type: 'CLOSE_MENU' });
  };

  return (
    <div className={classes({ [styles.container]: isOpen })} onClick={handleCloseMenu}>
      <div
        className={classes(styles.menuClosed, {
          [styles.closeMark]: isOpen,
        })}
      >
        <div onClick={handleOpenMenu}>
          <IconButton onClick={handleCloseMenu}>
            <ArrowForwardIosIcon fontSize={'large'} />
          </IconButton>
        </div>
      </div>
      <div
        className={classes(styles.menu, {
          [styles.menuOpen]: isOpen,
        })}
      >
        <div className={styles.menuHeader}>
          <IconButton onClick={handleCloseMenu}>
            <ArrowBackIosNewIcon fontSize={'large'} />
          </IconButton>
        </div>
        <div className={styles.listOfLinks}>
          <NavLink to="/" exact activeClassName={styles.activeLink}>
            Главная
          </NavLink>
          <NavLink to="/dashboard" exact activeClassName={styles.activeLink}>
            Доска
          </NavLink>
        </div>
      </div>
    </div>
  );
};
