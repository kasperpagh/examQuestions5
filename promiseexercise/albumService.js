/**
 * Created by kaspe on 2016-11-02.
 */
let fetch = require("node-fetch");

var threeWorder = function (callback)
{

    albumPromises = [];
    albumPromises.push(fetch("https://jsonplaceholder.typicode.com/photos?albumId=1").then(res => res.json()));

    albumPromises.push(fetch("https://jsonplaceholder.typicode.com/photos?albumId=3").then(res => res.json()));
    albumPromises.push(fetch("https://jsonplaceholder.typicode.com/photos?albumId=5").then(res => res.json()));
    albumPromises.push(fetch("https://jsonplaceholder.typicode.com/photos?albumId=7").then(res => res.json()));
    albumPromises.push(fetch("https://jsonplaceholder.typicode.com/photos?albumId=9").then(res => res.json()));

    let returnArray = [];
    Promise.all(albumPromises).then(all =>
    {
        for (let i = 0; i < all.length; i++)
        {

            for (let a = 0; a < all[i].length; a++)
            {

                if (countWords(all[i][a].title) === 3)
                {
                    bob =
                    {
                        "Album ID": all[i][a].albumId,
                        id: all[i][a].id,
                        Title: all[i][a].title
                    };

                    returnArray.push(bob)

                }
            }
        }
        callback(returnArray);
    })
}

function countWords(str)
{
    return str.split(/\s+/).length;
}

module.exports = {album : threeWorder}


// function countWords(str)
// {
//     return str.split(/\s+/).length;
// }
//
//
// var albumExport = function (callback)
// {
//     albumPromises = [];
//
//
//     albumPromises.push(fetch("https://jsonplaceholder.typicode.com/photos?albumId=1").then(res => res.json));
//
//     albumPromises.push(fetch("https://jsonplaceholder.typicode.com/photos?albumId=3").then(res => res.json));
//
//     albumPromises.push(fetch("https://jsonplaceholder.typicode.com/photos?albumId=5").then(res => res.json));
//
//     albumPromises.push(fetch("https://jsonplaceholder.typicode.com/photos?albumId=7").then(res => res.json));
//
//     albumPromises.push(fetch("https://jsonplaceholder.typicode.com/photos?albumId=9").then(res => res.json));
//
//     let returnArray = [];
//     Promise.all(albumPromises).then(all =>
//     {
//         console.log("i ALL her er array: " + all);
//         for (let i = 0; i < all.length; i++)
//         {
//             console.log("føste lække nr: " + i + " elementets længde er: " + all[i].length);
//             for (let a = 0; a < all[i].length; a++)
//             {
//                 console.log("anden lække nr: " + a);
//                 if (countWords(all[i][a].title) === 3)
//                 {
//                     console.log("I if statement");
//                     returnArray.push(
//                         {
//                             "Album ID": all[i][a].albumId,
//                             id: all[i][a].id,
//                             Title: all[i][a].title
//                         }
//                     );
//                 }
//             }
//         }
//         console.log("sidst i albSer, her er array: " + returnArray.length)
//         callback(returnArray);
//     });
// // }
//
// module.exports = {albumService : albumExport}




