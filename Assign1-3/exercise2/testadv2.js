// Write a JS function that

// Fetch and return Posts & ToDos for a Single User. {
// posts: Posts, todos: Todos}

import fetch from 'node-fetch'
globalThis.fetch = fetch




async function fetchTODO() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await response.text();
    //console.log(data);
    return data
}

async function fetchPOST() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.text();
    //console.log(data);
    return data
}
let dataTodo=await fetchTODO();

let dataPost=await fetchPOST();

Promise.all([dataTodo, dataPost]).then((values) => {
  console.log(values); 
});
