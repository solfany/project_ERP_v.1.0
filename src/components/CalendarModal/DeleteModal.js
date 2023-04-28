import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div>
      <Button onClick={toggleModal} size="sm">
        -
      </Button>
      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader className="text-center" toggle={toggleModal}>
          <div className="icon-box">
            <i className={`fa red-circle fa-trash`}></i>
          </div>
          <h2 className="ruSure">Are you sure?</h2>
        </ModalHeader>
        <ModalBody>
          Do you really want to delete these records? This process cannot be
          undone.
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>{' '}
          <Button color="danger" onClick={toggleModal}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DeleteModal;
