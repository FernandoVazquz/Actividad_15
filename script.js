const url = "https://jsonplaceholder.typicode.com/photos";
const lista = document.getElementById('lista');

const ObtenerFotos = async () => {
    const response = await fetch(url);
    const fotos = await response.json();
    return fotos;
}

ObtenerFotos()
.then(fotos =>{
    fotos.map(foto => {
        let li = document.createElement('li');
        li.innerHTML = `<a href = "detalle.html?id=${foto.id}">${foto.id}</a> ${foto.title}`;
        lista.appendChild(li);
    })
})
.catch(error => {
    document.getElementById('Error').innerHTML = error.message;
      console.log(error);
})
.finally(() => {
    document.getElementById('Cargando').innerHTML = "";
    document.getElementById('CargandoGif').src = "";
    console.log("Proceso terminado");
})