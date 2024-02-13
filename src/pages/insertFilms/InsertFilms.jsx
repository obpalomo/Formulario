import Formulario from "../../components/form/Formulario";
import axios from "axios";

function InsertFilms() {
  function insertarItem(item) {
/*     fetch("http://localhost:3000/peliculas", {
      method: "POST",
      body: JSON.stringify(item),
    })
      .then(() => {
        alert("Película añadida correctamente")
      })
      .catch((error) => {
        alert("Error al subir la pelicula");
      }); */

      axios.post("http://localhost:3000/peliculas", item)
      .then(() =>{
        alert("Película añadida correctamente")
      }).catch((error) =>{
        alert("Error al subir la película")
        console.log(error);
    })

  }

  return (
    <>
      <h2>Inserta una nueva pelicula</h2>
      <Formulario onInsertarItem={insertarItem}></Formulario>
    </>
  );
}

export default InsertFilms;
