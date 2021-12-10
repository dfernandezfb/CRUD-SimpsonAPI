const url = "http://localhost:3000/characters"
//? CRUD --> CREATE(POST) READ(GET) UPDATE(PUT) DELETE(DELETE)
//* READ --> READ

const getCharacters = async () => {
  const response = await fetch(url);
  const data = await response.json();
  data.forEach((character) => {
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="card m-3" style="width: 18rem;">
          <img src=${character.image} class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${character.name}</h5>
          <p class="card-text">Address: ${character.address}</p>
        </div>
      </div>
    `;
    document.getElementById('characters-container').appendChild(card)
  });
};

getCharacters();