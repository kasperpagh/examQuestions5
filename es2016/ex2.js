/**
 * Created by kaspe on 2016-11-01.
 */


let evens = [2,4,6,8,10,12];

odds  = evens.map(v => v + 1);
odds2 = evens.map(v => {
    //virker ikke uden return, da denne syntaks siger at lambda udtrykket skal returnere en funktion og ikke en værdi - derfor skal man specifik udpensle hvad funktionen skal returnere.
    //dvs at v+1: ikke virker! (opg2)
   return v+1;
});
pairs = evens.map(v => ({ even: v, odd: v + 1 }));
nums  = evens.map((v, i) => v + i);

console.log("odds: " + odds);
for(let i = 0; i<pairs.length; i++)
{
    console.log("pairs: " + pairs[i].even + " " + pairs[i].odd);
}

console.log("nums : " +nums);

console.log("odds 2 : " + odds2);