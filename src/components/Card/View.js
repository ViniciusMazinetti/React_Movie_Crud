import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalButton from "./../Modal/View"
import {BsFillTrashFill} from "react-icons/bs"

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Edit</Button>
        <ModalButton buttonLabel = {<BsFillTrashFill/>} modalContext = "Tem certeza que deseja deletar este filme ?"/>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;