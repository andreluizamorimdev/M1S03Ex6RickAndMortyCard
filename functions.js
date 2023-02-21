async function getRickAndMortyCharacter() {
    const response = await fetch('https://rickandmortyapi.com/api/character/468');
    const data = await response.json();
    console.log(data);
}

getRickAndMortyCharacter();