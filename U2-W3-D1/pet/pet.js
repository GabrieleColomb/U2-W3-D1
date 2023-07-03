    // Definizione della classe Pet
    class Pet {
      constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
      }
    }

    // Funzione per gestire l'invio del form
    function handleFormSubmit(event) {
      event.preventDefault();

      // Ottenere i valori inseriti nel form
      const petNameInput = document.getElementById('petName');
      const ownerNameInput = document.getElementById('ownerName');
      const speciesInput = document.getElementById('species');
      const breedInput = document.getElementById('breed');

      const petName = petNameInput.value;
      const ownerName = ownerNameInput.value;
      const species = speciesInput.value;
      const breed = breedInput.value;

      // Creare un nuovo oggetto Pet
      const pet = new Pet(petName, ownerName, species, breed);

      // Aggiungere l'oggetto Pet alla lista
      addPetToList(pet);

      // Reset dei valori del form
      petNameInput.value = '';
      ownerNameInput.value = '';
      speciesInput.value = '';
      breedInput.value = '';
    }

    // Funzione per aggiungere un oggetto Pet alla lista
    function addPetToList(pet) {
      const petList = document.getElementById('petList');
      const listItem = document.createElement('li');
      const petData = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
      listItem.innerText = petData;

      // Aggiunta del testo esplicito
      const owners = {};

      const petListItems = document.querySelectorAll('#petList li');
      for (let i = 0; i < petListItems.length; i++) {
        const listItem = petListItems[i];
        const owner = listItem.getAttribute('data-owner');
        const petNames = owners[owner] || [];
        petNames.push(listItem.innerText);
        owners[owner] = petNames;
      }

      if (owners[pet.ownerName]) {
        const petsWithSameOwner = owners[pet.ownerName];
        petsWithSameOwner.push(petData);
        owners[pet.ownerName] = petsWithSameOwner;

        // Aggiunta del testo esplicito per gli animali che condividono lo stesso proprietario
        const sameOwnerText = document.createElement('span');
        sameOwnerText.innerText = ` - Condivide lo stesso proprietario con: ${petsWithSameOwner.join(', ')}`;
        sameOwnerText.style.color = 'red';
        listItem.appendChild(sameOwnerText);
      }

      listItem.setAttribute('data-owner', pet.ownerName);
      petList.appendChild(listItem);
    }

    // Aggiunta dell'evento di submit al form
    const petForm = document.getElementById('petForm');
    petForm.addEventListener('submit', handleFormSubmit);