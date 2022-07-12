import React, {useState} from 'react'
import {
    Button,
    Modal
} from "react-bootstrap"

const ModalButton = (props) => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return(
        <div>
            <Button variant="danger" onClick={handleShow}>
                {props.buttonLabel}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.modalContext}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="danger" onClick={handleClose}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalButton
