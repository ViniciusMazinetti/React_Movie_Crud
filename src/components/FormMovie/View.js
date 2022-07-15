import React from "react" 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import "./View.css"

const FormMovie = (props) => {
  
  return (
    <Container>
      <Form onSubmit={props.submit}>
        <Form.Group className="mb-3">
          <Form.Label>Nome do filme</Form.Label>
          <Form.Control type="Text" placeholder="Digite o nome do filme..." name='name' onChange={props.change} value={props.valueName}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Ano</Form.Label>
          <Form.Control type="number" placeholder="Digite o ano do filme..." name="year" onChange={props.change} value={props.valueYear}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Está no streaming ?" name ="streaming" onChange={props.change} value={props.valueStreaming}/>
        </Form.Group>
        <Button variant="primary" type="submit" >
          Salvar
        </Button>
      </Form>
    </Container>
  );
}

export default FormMovie;