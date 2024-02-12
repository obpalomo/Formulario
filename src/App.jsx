
import { Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/index";
import Contact from "./pages/contact/contact";
import NavigationBar from "./components/navigationBar/NavigationBar";
import Films from "./pages/films/Films";
import InsertFilms from "./pages/insertFilms/InsertFilms";

function App() {
  /*   useEffect(() =>{
    alert('items ha cambiado')
  },[items]) */

 

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
        </Routes>
      </Container>

      <footer>footer</footer>
    </>
  );
}

export default App;
