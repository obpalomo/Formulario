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



function Login() {
  return (
    <>
      <Form>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <FormGroup>
                <FormLabel> Email</FormLabel>
                <FormControl
                  type="text"
                ></FormControl>
              </FormGroup>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <FormGroup>
                <FormLabel>Clave</FormLabel>
                <FormControl
                  type="password"
                ></FormControl>
              </FormGroup>
            </Col>
          </Row>
          
          <Row className="my-3">
            <Col>
              <Button>Login</Button>
            </Col>
          </Row>
        </Container>

     
      </Form>
    </>
  );
}

export default Login;
