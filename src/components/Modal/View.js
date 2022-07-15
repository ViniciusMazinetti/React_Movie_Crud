import axios from 'axios'
import React, {useState} from 'react'
import {
    Button,
    Modal
} from "react-bootstrap"
import {toast} from 'react-toastify'

const ModalButton = (props) => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const refreshPage = () => {
        window.location.reload(false);
    }

    const deleteMovie = async () => {
        const response = await axios.delete(`https://api-teste-filmes.herokuapp.com/movie/${props.idItem}`)
        if(response.status === 200){ 
            handleClose()
            refreshPage()
        } else {
            toast.error("Ocorreu um erro no processo !!!")
        }
    }

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
                    <Button variant="danger" onClick={deleteMovie}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalButton
