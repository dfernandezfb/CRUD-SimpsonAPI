const url = "http://localhost:3000/characters";

//* POST

const saveCharacter = async () => {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const address = document.getElementById('address').value;
  const image = document.getElementById('image').value;
  const character = {
    name:name,
    age:age,
    address:address,
    image:image
  }
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(character),
  });
  await response.json();
};

// //* READ
// const getCharacters = async () => {
//   let response = await fetch(url + "/characters");
//   let data = await response.json();
//   console.log(data);
// };

// getCharacters();

// const getRandomCharacter = async () => {
//   const id = Math.trunc(Math.random()*5)
//   let response = await fetch(`${url}/${id}`);
//   let data = await response.json();
//   const random = document.createElement('div');
//   random.innerHTML=`
//   <div class="card" id="random-card" style="width: 18rem;">
//   <img src=${data.image} class="card-img-top" alt=${data.name}>
//   <div class="card-body">
//     <h5 class="card-title">${data.name}</h5>
//     <p class="card-text">Address: ${data.address}</p>
//   </div>
// </div>
//   `;
//   random.classList.add('mt-5','d-flex','justify-content-center')
//   const randomContainer = document.querySelector('.random-character');
//   randomContainer.appendChild(random);
// };
const getRandomCharacter = async () => {
  const randomContainer = document.querySelector('.random-character');
  const randomExists= document.getElementById('random-card');
  if(randomExists){
    randomContainer.removeChild(randomExists);
  }
  const id = Math.trunc(Math.random()*5)
  let response = await fetch(`${url}/${id}`);
  let data = await response.json();
  const random = document.createElement('div');
  random.innerHTML=`
  <div class="card" style="width: 18rem;">
  <img src=${data.image} class="card-img-top" alt=${data.name}>
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">Address: ${data.address}</p>
  </div>
</div>
  `;
  random.id="random-card"
  random.classList.add('mt-5','d-flex','justify-content-center')
  randomContainer.appendChild(random);
};


// //* DELETE

// const deleteCharacter = async (id) => {
//   const response = await fetch(`${url}/characters/${id}`, {
//     method: "DELETE",
//   });
// };

// //* PUT

// const updateCharacter = async (id, updatedCharacter) => {
//   const response = await fetch(`${url}/characters/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(updatedCharacter),
//   });
// };
// /*
// updateCharacter(4,{
//     id:4,
//     name:'Rafa Gorgory',
//     age:8,
//     address: undefined
// })
// */
