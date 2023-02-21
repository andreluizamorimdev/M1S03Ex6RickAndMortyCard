let imageCard = document.getElementById('imageCard');
let nameCard = document.getElementById('nameCard');
let statusCard = document.getElementById('statusCard');
let speciesCard = document.getElementById('speciesCard');
let typeCard = document.getElementById('typeCard');
let genderCard = document.getElementById('genderCard');

async function getRickAndMortyCharacter() {
    const response = await fetch('https://rickandmortyapi.com/api/character/468');
    const data = await response.json();
    
    imageCard.src = data?.image;
    nameCard.innerHTML = data?.name;
    statusCard.innerHTML = `status: ${data?.status}`;
    speciesCard.innerHTML = `espécie:   ${data?.species}`;
    if(data?.type == '') {
        typeCard.innerHTML = `tipo: Unknown`;
    } else { 
        typeCard.innerHTML = `tipo: ${data?.type}`;
    }
    genderCard.innerHTML = `genêro: ${data?.gender}`;

    console.log(data);
}

getRickAndMortyCharacter();