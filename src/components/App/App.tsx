import React, { useState } from 'react';

import { Header } from '../Header';
import { Main } from '../Main';
import { Modal } from '../Modal';

export function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  console.log('open', open);
  return (
    <div>
      <Header handleOpenModal={handleOpen} />
      <Main />
      <Modal isOpen={open} />
    </div>
  );
}
