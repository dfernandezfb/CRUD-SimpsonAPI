const url = 'http://localhost:3000'


//* POST

const postCharacter = async(character) =>{
    const response = await fetch(url + '/characters',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(character)
    })
    const data = await response.json();
    console.log(data);
}
/*
postCharacter({
    id:7,
    name:'Ned',
    lastname:'Flanders',
    age:60,
    address:'Av Siempreviva 745'
})
*/
//* READ
const getCharacters = async () =>{
    let response = await fetch(url + '/characters');
    let data = await response.json();
    console.log(data);
}

getCharacters();

const getCharacter = async (id)=>{
    let response = await fetch(`${url}/characters/${id}`);
    let data = await response.json();
    console.log(data);
}

getCharacter(2);

//* DELETE

const deleteCharacter = async(id) =>{
    const response = await fetch(`${url}/characters/${id}`,{
        method:'DELETE'
    })
}

//* PUT

const updateCharacter = async(id,updatedCharacter) =>{
    const response = await fetch(`${url}/characters/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(updatedCharacter)
    })
}

updateCharacter(4,{
    id:4,
    name:'Rafa Gorgory',
    age:8,
    address: undefined
})