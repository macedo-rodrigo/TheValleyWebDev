addEventListener("DOMContentLoaded", (event) => {
    // Tengo que traer las categorias
fetch("https://api.chucknorris.io/jokes/categories")
    .then (respuesta => respuesta.json())
    .then (resultado => {
    resultado.forEach(categoria => {
        //Cargar adentro del ul
        let lista = document.getElementById('lista');
        let li = document.createElement("li");
        li.textContent = categoria;
        lista.appendChild(li);
        // Agregar una clase a los items de la lista
        li.className += "card__categorie";
        // Ahora, agrego un clic event a cada una de esas categogia (li)
        li.addEventListener("click", () => {
            fetch(`https://api.chucknorris.io/jokes/random?category=${categoria}`) // los `` son por el uso de un string template
            .then (respuesta => respuesta.json())    
            .then (answer => {
                    // Agregar el chiste al contener de respuesta
                    let chiste = document.getElementsByClassName('card__joke')[0]; // El [0] es pq es un array!
                    chiste.textContent = answer.value; //"value" es el valor del objeto que me da el API que me sirve, ya que se trata de la broma. 
                })
            .catch (fail => console.log(fail));
        });
    })
})
    .catch (error => console.log(error));
})

let newJoke = document.getElementById('new-joke'); // Ubico el botón de New Joke 
newJoke.addEventListener('click', (random) => { // Aquí hice lo mismo del evento anterior, a diferencia de que se hizo falta filtrar por categoria
    fetch('https://api.chucknorris.io/jokes/random')
    .then (reply => reply.json())    
    .then (result => { // Agregar el chiste al contener de respuesta
            let randomJoke = document.getElementsByClassName('card__joke')[0]; // El [0] es pq es un array!
            randomJoke.textContent = result.value; //"value" es el valor del objeto que me da el API que me sirve, ya que se trata de la broma.
            })
    .catch (bug => console.log(bug));
})

let reset = document.getElementById('reset'); // Ubico el botón de Reset
reset.addEventListener('click', (clean) => { // Aquí no hace falta un fetch, ya que solo quiero limpar la info actual
    let restart = document.getElementsByClassName('card__joke')[0]; // El [0] es pq es un array!
        restart.textContent = "Choose the category of your joke or just click on 'New Joke' for a random one."; //"value" es el valor del objeto que me da el API que me sirve, ya que se trata de la broma.
    })
