import { useState, useEffect } from "react";
import Item from "../../components/item/Item";
import { Container, Row } from "react-bootstrap";
import axios from "axios";

function Films() {
  const [items, setItems] = useState([]);

  useEffect(() => {
/*     fetch("http://localhost:3000/peliculas").then((data) => {
      data.json().then((dataJson) => {
        setItems([...items, ...dataJson]);
      })
    }) */
    axios.get("http://localhost:3000/peliculas")
    .then((response) => {
        setItems([...items,...response.data])
    })



  }, []);
  return (
    <>
      <h2>Películas</h2>
      <Container>
        <Row>
          {items.map((i) => (
            <Item item={i}></Item>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Films;
