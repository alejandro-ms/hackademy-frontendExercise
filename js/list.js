
(function() {
    const url = "https://60fe0c611fa9e90017c70fda.mockapi.io/animals";
    const list = document.querySelector('.gallery');

    document.addEventListener('DOMContentLoaded', listAnimals);

    async function readAnimals() {
        try {
            const result = await fetch(url);
            const animals = await result.json();
            return animals
        } catch (error) {
            console.log(error);
        }
    }

    async function listAnimals() {
        const animal = await readAnimals();

        animal.forEach(animals => {
        const { name, age, image, race } = animals;

        if(age === '1'){
            list.innerHTML += `
             <article class="card">
            <figure class="figure__animal">
                <img src="${image}" class="img__animal" alt="animal">
            </figure>
            <div class="text">
                <p class="list__paragraph">Nombre: ${name} </p>
                <p class="list__paragraph">Edad: ${age} año </p>
                <p class="list__paragraph">Raza: ${race}</p>
            </div>
            </article>
        `
        } else {
            list.innerHTML += `
            <article class="card">
                <figure class="figure__animal">
                    <img src="${image}" class="img__animal" alt="animal">
                </figure>
                <div class="text">
                    <p class="list__paragraph">Nombre: ${name} </p>
                    <p class="list__paragraph">Edad: ${age} años </p>
                    <p class="list__paragraph">Raza: ${race}</p>
                </div>
            </article>
            `
        }
        
       });
        
    
    }

})();
