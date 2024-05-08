import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import BackDrop from './BackDrop';
import ModalContent from './ModalContent';

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setShowModal(true)}>Add New Vote</button>
      </div>

      {showModal &&
        createPortal(
          <BackDrop onClose={() => setShowModal(false)} />,
          document.querySelector('.back')
        )}

      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.querySelector('.myPortal')
        )}
    </>
  );
}