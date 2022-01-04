import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { TestPage } from '../../pages';
import styles from './Main.module.scss';
import { SideMenu } from './SideMenu';

export const Main = () => (
  <div className={styles.container}>
    <SideMenu />
    <div className={styles.routes}>
      <Switch>
        <Route path="/">
          <TestPage />
        </Route>
      </Switch>
    </div>
  </div>
);
