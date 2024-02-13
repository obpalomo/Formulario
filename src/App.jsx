
import { Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/index";
import Contact from "./pages/contact/contact";
import NavigationBar from "./components/navigationBar/NavigationBar";
import Films from "./pages/films/Films";
import InsertFilms from "./pages/insertFilms/InsertFilms";
import Login from "./pages/login/Login";

function App() {
  /*   useEffect(() =>{
    alert('items ha cambiado')
  },[items]) */

  function insertarItem(item) {
    fetch("http://localhost:3000/peliculas", {
      method: "POST",
      body: JSON.stringify(item),
    })
      .then(() => {
        setItems([...items, item]);
      })
      .catch((error) => {
        alert("Error al subir la pelicula");
      });
  }

  return (
    <>
      <header>
        <NavigationBar></NavigationBar>
      </header>
      <Container>
        <Routes>
          <Route path="/" element={<Index></Index>}></Route>
          <Route path="/peliculas" element={<Films></Films>}></Route>
          <Route path="/contacto" element={<Contact></Contact>}></Route>
          <Route path="/nueva-pelicula" element={<InsertFilms></InsertFilms>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Container>

      <footer>footer</footer>
    </>
  );
}

export default App;
