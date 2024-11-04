import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';

function DeliveryModal({ onClose }) {
    return (
        <Modal show={true} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Delivery FAQ</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    <strong>Shipping Options:</strong>
                </p>
                <ul>
                    <li>
                        <strong>Standard:</strong> R100 - Delivery within 2-7 days to main centers in South Africa.
                        Outlying areas may take up to 14 days or more.
                    </li>
                    <li>
                        <strong>Expedited:</strong> R150 - Faster shipping for main centers, typically 1-4 days.
                    </li>
                    <li>
                        <strong>Next Day:</strong> R200 - Available only in select areas for next-day delivery.
                    </li>
                </ul>
                <p>
                    <em>Note:</em> Delivery is only available within South Africa. We do not offer international
                    shipping at this time.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeliveryModal;
