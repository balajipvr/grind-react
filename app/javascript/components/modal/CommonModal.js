import React, { useState } from 'react';
import Modal from 'react-modal';

const Commonmodal = () => {
    const [modalIsOpen,setModalIsOpen] = useState(false);
    return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2>Modal Title</h2>
        <p>Modal Content</p>
        <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
      </Modal>
    </div>       
    )
}

export default Commonmodal;