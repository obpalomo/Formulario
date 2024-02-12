import Formulario from "../../components/form/Formulario";

function InsertFilms() {
  function insertarItem(item) {
    fetch("http://localhost:3000/peliculas", {
      method: "POST",
      body: JSON.stringify(item),
    })
      .then(() => {
        alert("Película añadida correctamente")
      })
      .catch((error) => {
        alert("Error al subir la pelicula");
      });
  }

  return (
    <>
      <h2>Inserta una nueva pelicula</h2>
      <Formulario onInsertarItem={insertarItem}></Formulario>
    </>
  );
}

export default InsertFilms;
