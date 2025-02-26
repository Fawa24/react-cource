import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './App.css'; // Importing a custom CSS file for styling

const App: React.FC = () => {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const handleCloseFirstModal = () => setShowFirstModal(false);
  const handleShowFirstModal = () => setShowFirstModal(true);

  const handleCloseSecondModal = () => setShowSecondModal(false);
  const handleShowSecondModal = () => setShowSecondModal(true);

  return (
    <div className="App">
      <Button variant="primary" onClick={handleShowFirstModal}>
        Open First Modal
      </Button>

      {/* First Modal */}
      <Modal
        show={showFirstModal}
        onHide={handleCloseFirstModal}
        backdrop="static"
        keyboard={false}
        style={showSecondModal ? { zIndex: 1030 } : {}}
      >
        <Modal.Header closeButton>
          <Modal.Title>First Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is the first modal, and it will stay open behind the second modal.</p>
          <Button variant="primary" onClick={handleShowSecondModal}>
            Open Second Modal
          </Button>
        </Modal.Body>
      </Modal>

      {/* Second Modal */}
      <Modal show={showSecondModal} onHide={handleCloseSecondModal} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Second Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is the second modal that appears on top of the first.</p>
          <Button variant="secondary" onClick={handleCloseSecondModal}>
            Close Second Modal
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default App;

