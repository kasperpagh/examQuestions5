/**
 * Created by kaspe on 2016-11-01.
 */
function* makeNames()
{
    let firstNames = ["Lars", "Jan", "Ida", "Tine", "Thomas"];
    let lastNames = ["Mortensen", "Peterson", "Obama", "Jensen", "Hansen"];
    let name = yield firstNames[Math.floor(Math.random()*firstNames.length)] + "" + lastNames[Math.floor(Math.random()*lastNames.length)]
}
let index = 0;
for(let name of makeNames()){
    console.log(name);
    if(index++ === 50){
        break;
    }
}
