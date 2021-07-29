(function(){
    const form = document.querySelector('#form-animal');
    const url = "https://60fe0c611fa9e90017c70fda.mockapi.io/animals";

    document.addEventListener('DOMContentLoaded', () => {
        form.addEventListener('submit', functionValidate);
    });


    async function functionValidate(e) {
        e.preventDefault();   

        const name = document.querySelector('#name').value;
        const age = document.querySelector('#age').value;
        const race = document.querySelector('#race').value;
        const image = document.querySelector('#image').value;

        const animal = {
            name,
            age,
            race,
            image
        }

        if(validate(animal)) {
            alertError('Todos los campos son obligatorios');
            return;
        }

    await newAnimal(animal);
    window.location.href = '../index.html'; 
    
    }


    function validate(obj) {
        return !Object.values(obj).every(element => element !== '') ;
    }

    function alertError(e) {
        const buttons = document.querySelector('.btn-container');
        const error = document.createElement('p');
        
        buttons.classList.add('hidden');
        error.textContent = e;
        error.classList.add('form__paragraph');
        form.appendChild(error);

        setTimeout(() => {
            error.remove();
            buttons.classList.remove('hidden');
        }, 3000);
    }

    const newAnimal = async animal => {
        try {
            await fetch(url, {
                method: 'POST',
                body: JSON.stringify(animal),
                headers:{
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
    
})();    