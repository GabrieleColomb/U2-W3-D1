 class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
}

function handleFormSubmit(event) {
  event.preventDefault();

  const petNameInput = document.getElementById('petName');
  const ownerNameInput = document.getElementById('ownerName');
  const speciesInput = document.getElementById('species');
  const breedInput = document.getElementById('breed');

  const petName = petNameInput.value;
  const ownerName = ownerNameInput.value;
  const species = speciesInput.value;
  const breed = breedInput.value;

  const pet = new Pet(petName, ownerName, species, breed);

  addPetToList(pet);

  petNameInput.value = '';
  ownerNameInput.value = '';
  speciesInput.value = '';
  breedInput.value = '';
}

function addPetToList(pet) {
  const petList = document.getElementById('petList');
  const listItem = document.createElement('li');
  const petData = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
  listItem.innerText = petData;

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

    const sameOwnerText = document.createElement('span');
    sameOwnerText.innerText = ` - Condivide lo stesso proprietario con: ${petsWithSameOwner.join(', ')}`;
    sameOwnerText.style.color = 'red';
    listItem.appendChild(sameOwnerText);
  }

  listItem.setAttribute('data-owner', pet.ownerName);
  petList.appendChild(listItem);
}

const petForm = document.getElementById('petForm');
petForm.addEventListener('submit', handleFormSubmit);