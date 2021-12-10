const url = "http://localhost:3000/characters";

//* POST

const saveCharacter = async() =>{
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const address = document.getElementById('address').value;
  const image = document.getElementById('image').value;
  const character = {
    name,
    age,
    address,
    image
  }
  await fetch(url,{
      method:'POST',
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify(character)
  })
}


const getRandomCharacter = async ()=>{
  const id = Math.floor(Math.random()*5)
  let response = await fetch(`${url}/${id}`);
  let data = await response.json();
  const random = document.createElement('div');
  random.innerHTML=`
  <div class="card m-3" style="width: 18rem;">
    <img src=${data.image} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <p class="card-text">Address: ${data.address}</p>
    </div>
  </div>
  `
  document.querySelector('.random-character').appendChild(random);
}


// //* DELETE

// const deleteCharacter = async(id) =>{
//     const response = await fetch(`${url}/characters/${id}`,{
//         method:'DELETE'
//     })
// }

// //* PUT

// const updateCharacter = async(id,updatedCharacter) =>{
//     const response = await fetch(`${url}/characters/${id}`,{
//         method:'PUT',
//         headers:{
//             'Content-Type':'application/json',
//         },
//         body:JSON.stringify(updatedCharacter)
//     })
// }
// /*
// updateCharacter(4,{
//     id:4,
//     name:'Rafa Gorgory',
//     age:8,
//     address: undefined
// })
// */
