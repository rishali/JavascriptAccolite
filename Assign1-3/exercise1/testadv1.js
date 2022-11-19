// Write a JS function that

// ● Fetches Most followed(Comments) post for a user
// ● Find and Print User with most content( Post)
// ● List all Users with at least 1 Open Task

import fetch from 'node-fetch'
globalThis.fetch = fetch

//Fetches Most followed(Comments) post for a user
  var obj;
  var arr;
  var modeMap = {};
  var maxEl = 0, maxCount = 1;
  for (let i = 1; i <= 500; i++)
  {
    fetch('https://jsonplaceholder.typicode.com/comments/'+i)
    .then(res => res.json())
    .then(data => {
      obj = data;
     })
    .then(() => {
      arr=obj.postId;
      var el = arr;
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
        //print the maximum commented post data
        if(i===500)
         {  console.log("post which has maximum comments is post id = "+maxEl);
            for (let i = 1; i <= 500; i++)
            {
                fetch('https://jsonplaceholder.typicode.com/comments/'+i)
                .then(res => res.json())
                .then(data => {
                  obj = data;
                 })
                .then(() => {
                    if(maxEl===obj.postId)
                     console.log(obj);                 
                });}
         }
     });
  }

//===================================================================================================================
// Find and Print User with most content( Post)
var obj2;
var arr2;
var modeMap2 = {};
var maxEl2 = 0, maxCount2 = 1;
for (let i2 = 1; i2 <= 100; i2++)
{
  fetch('https://jsonplaceholder.typicode.com/posts/'+i2)
  .then(res => res.json())
  .then(data => {
    obj2 = data;
   })
  .then(() => {
    arr2=obj2.userId;
    var el2 = arr2;
      if(modeMap2[el2] == null)
          modeMap2[el2] = 1;
      else
          modeMap2[el2]++;  
      if(modeMap2[el2] > maxCount2)
      {
          maxEl2 = el2;
          maxCount2 = modeMap2[el2];
      }
      //print the user data with maximum posts
      if(i2===100)
       {  console.log("user with most content = "+maxEl2);
          for (let i2 = 1; i2 <= 100; i2++)
          {
              fetch('https://jsonplaceholder.typicode.com/posts/'+i2)
              .then(res => res.json())
              .then(data => {
                obj2 = data;
               })
              .then(() => {
                  if(maxEl2===obj2.userId)
                   console.log(obj2);                 
              });}
       }
   });
}

//===================================================================================================================
// List all Users with at least 1 Open Task

var obj3;
var arr3 = []
var modeMap3= {};
var maxEl3 = 0, maxCount3 = 1;
for (let i3 = 1; i3 <= 200; i3++)
{
  fetch('https://jsonplaceholder.typicode.com/todos/'+i3)
  .then(res => res.json())
  .then(data => {
    obj3 = data;
   })
  .then(() => {
    arr3[i3]=obj3.userId;
    if(i3===200)
    {
        let uniqueChars = [...new Set(arr3)];
        console.log( "List all Users with at least 1 Open Task "+uniqueChars+" ");
    }
    
   });
}

