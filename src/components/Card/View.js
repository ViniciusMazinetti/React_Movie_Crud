import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalButton from "./../Modal/View"
import {BsFillTrashFill} from "react-icons/bs"

const CardComponent  = (props) => {
  const id = props.id
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <p>Index: {props.index}</p>
          <p>Ano: {props.year}</p>
          <p>Streaming: {props.streaming}</p>
        </Card.Text>
        
        <Button variant="primary" href={`/update/${id}`}>Edit</Button>
        
        <ModalButton buttonLabel = {<BsFillTrashFill/>} modalContext = "Tem certeza que deseja deletar este filme ?"/>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;