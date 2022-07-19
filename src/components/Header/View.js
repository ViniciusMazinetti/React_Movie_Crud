import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import axios from "axios" 
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack';


const Header = () => {
  const navigate = useNavigate()

  const refreshPage = () => {
    window.location.reload(false);
  }

  const handlerDeleteButton = async () => {
    if (window.confirm("Tem certeza que deseja deletar TODOS os filmes ?")){
      const response = await axios.delete("https://api-teste-filmes.herokuapp.com/movies/deleteall")
      if (response.status === 200){
        navigate("/")
        refreshPage()
      } else {
        toast.error("Não foi possível deletar tudo !!!")
      }
    }
  }

  return (
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand href="/">API Filmes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Stack direction="horizontal" gap={3}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/add">Adicionar filme</Nav.Link>
              <Nav.Link  onClick={handlerDeleteButton}><Button variant="danger">Deletar Tudo</Button></Nav.Link>
            </Stack>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header