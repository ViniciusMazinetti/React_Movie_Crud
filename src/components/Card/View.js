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
        <Card.Text>
          <p>Index: {props.index}</p>
          <p>Ano: {props.year}</p>
          <p>Streaming: {props.streaming}</p>
        </Card.Text>
        <Row className='justify-content-md-between'>
          <Col md={4} className='justify-content-md-start'><Button variant="primary" href={`/update/${id}`} className=""><BsFillPencilFill/></Button></Col>
          <Col md={4} className='justify-content-md-end'><ModalButton buttonLabel = {<BsFillTrashFill/>} idItem = {id} modalContext = "Tem certeza que deseja deletar este filme ?"/></Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;