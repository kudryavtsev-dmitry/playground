import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.scss';

const modalNode = document.getElementById('modal');

export const Modal = ({ isOpen }: { isOpen: boolean }): JSX.Element => {
  console.log('isOpen', isOpen);
  if (isOpen && modalNode) {
    return ReactDOM.createPortal(
      <div className={styles.container}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corrupti, tenetur recusandae dolorem rerum
        adipisci quis enim reprehenderit laudantium nostrum, nisi quae, accusamus repudiandae porro dolore facilis ipsum
        deleniti rem!\
      </div>,
      modalNode,
    );
  }
  return <></>;
};
