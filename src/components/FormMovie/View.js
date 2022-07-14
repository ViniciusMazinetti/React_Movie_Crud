import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormMovie = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome do filme</Form.Label>
        <Form.Control type="Text" placeholder="Digite o nome do filme..." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ano</Form.Label>
        <Form.Control type="number" placeholder="Digite o ano do filme..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Está no streaming ?" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Salvar
      </Button>
    </Form>
  );
}

export default FormMovie;