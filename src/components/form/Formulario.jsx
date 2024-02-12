import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";

function Formulario({ onInsertarItem }) {
  const INITIAL_STATE = {
    descripcion: "",
    foto: "",
    year: "",
    categoria: "",
  };

  const [dato, setDato] = useState(INITIAL_STATE);

  function cambiarAtributo(e, atributo) {
    setDato({ ...dato, [atributo]: e.target.value });
  }

  function insertar() {
    onInsertarItem(dato);
    setDato(INITIAL_STATE);
  }

  return (
    <Form>


      <Container>
        <Row>
          <Col sm={12} md={6}  lg={6}>
            <FormGroup>
              <FormLabel> Descripción</FormLabel>
              <FormControl
                value={dato.descripcion}
                onChange={(e) => cambiarAtributo(e, "descripcion")}
                type="text"
              ></FormControl>
            </FormGroup>
          </Col>
          <Col sm={12} md={6}  lg={6}>
            <FormGroup>
              <FormLabel>Año</FormLabel>
              <FormControl
                value={dato.year}
                onChange={(e) => cambiarAtributo(e, "year")}
                type="number"
              ></FormControl>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <FormLabel>Foto</FormLabel>
              <FormControl
                value={dato.foto}
                onChange={(e) => cambiarAtributo(e, "foto")}
                type="text"
              ></FormControl>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <FormLabel>Categoría</FormLabel>
              <FormControl
                value={dato.categoria}
                onChange={(e) => cambiarAtributo(e, "categoria")}
                type="text"
              ></FormControl>
            </FormGroup>
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
          <Button onClick={insertar}>Guardar</Button>
          </Col>
        </Row>
      </Container>

      {/* <img width={100} src={"dato.foto"}></img> */}


    </Form>
  );
}

export default Formulario;
