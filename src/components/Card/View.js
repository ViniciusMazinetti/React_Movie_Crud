import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalButton from "./../Modal/View"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsFillTrashFill} from "react-icons/bs"
import {BsFillPencilFill} from "react-icons/bs"

const CardComponent  = (props) => {
  const id = props.id
  return (
    <Card style={{ width: '16rem' }} className="m-3">
      <Card.Body>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Card.Text>Index: {props.index}</Card.Text>
        <Card.Text>Ano: {props.year}</Card.Text>
        <Card.Text>Streaming: {props.streaming}</Card.Text>
        <Row className="justify-content-md-center">
          <Col md="auto"><Button variant="primary" href={`/update/${id}`}><BsFillPencilFill/></Button></Col>
          <Col md="auto"><ModalButton buttonLabel = {<BsFillTrashFill/>} idItem = {id} modalContext = "Tem certeza que deseja deletar este filme ?"/></Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;