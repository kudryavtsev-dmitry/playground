import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Places } from '../../pages';
import styles from './Main.module.scss';
import { Menu } from '../Menu';
import { Board } from '../../pages/Board';

export const Main = () => (
  <div className={styles.container}>
    <Menu />
    <div className={styles.routes}>
      <Switch>
        <Route exact path="/">
          <Places />
        </Route>
        <Route path="/dashboard">
          <Board />
        </Route>
      </Switch>
    </div>
  </div>
);
