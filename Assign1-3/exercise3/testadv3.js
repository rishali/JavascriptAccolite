// Write a JS function that

// Return Best movie by ‘Stanley Kubrick’
// Expectation - Use Best Feasible approach - Neat &
// Readable Code
import fetch from 'node-fetch'
globalThis.fetch = fetch

let movieid=[];
let directorid=4;
var dataMovieList_arr = []
var dataMovieReviews_arr=[]
var avg=[]
let urldirectors='https://dhekumar.github.io/asynchronous-javascript/directors.json';
let urlmovie='https://dhekumar.github.io/asynchronous-javascript/directors/'+directorid+'/movies.json';

//fetch all movie list for a particular director
async function fetchMovieList() {
    let response = await fetch(urlmovie);
    let data = await response.text();
    return data
}

// get only the id of all the movies of a specific director
let dataMovieList=await fetchMovieList();
const dataMovieList_Obj = JSON.parse(dataMovieList);
for (let i = 0; i < dataMovieList_Obj.length; i++) {
    dataMovieList_arr[i]=dataMovieList_Obj[i].id
  }
//console.log(dataMovieList_arr);


//fetch all reviews list for a specific movie
async function fetchMovieReviews(urlreview) {
        let response2 = await fetch(urlreview);
        let data2 = await response2.text();
        return data2
}

// get all the ratings of all the movies directed by a specific director and then take the avg of all the ratings for each movie and store in an array
for(let i=0;i<dataMovieList_arr.length;i++)
{
    let dataMovieReviews=await fetchMovieReviews('https://dhekumar.github.io/asynchronous-javascript/movies/'+dataMovieList_arr[i]+'/reviews.json');
    const dataMovieReviews_Obj = JSON.parse(dataMovieReviews);
    for (let i3 = 0; i3 < dataMovieReviews_Obj.length; i3++) 
    {
        dataMovieReviews_arr[i3]=dataMovieReviews_Obj[i3].rating
    }
    //console.log(dataMovieReviews_arr);
    const sum = dataMovieReviews_arr.reduce((a, b) => a + b, 0);
    avg[i] = (sum / dataMovieReviews_arr.length) || 0;
}


// print the maximum of the avg rating from all the movies of a specific director.
let max=(Math.max(...avg));
let ind=avg.indexOf(max);
console.log(dataMovieList_Obj[ind].title)




