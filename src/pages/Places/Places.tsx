import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addPlace } from '../../stores/placesStore/actions';
import styles from './Places.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Places = () => {
  const { places } = useTypedSelector((state) => state.places);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addPlace('Новое'));
  };

  return (
    <div className={styles.container}>
      Что тут вообще происходит
      {places.map((el) => (
        <div key={el}>{el}</div>
      ))}
      <Button onClick={handleAdd}>Добавить</Button>
    </div>
  );
};
