/**
 * Created by kaspe on 2016-11-01.
 */


var john = function(x, y, ...rest)
{
    console.log(`the sum of x and y is ${x+y}`);

    rest.map((v, i) =>
    {
       console.log(`value ${i} er af typen: ${typeof v}` )
    });
}

// john(5,5, new Date(), "jimmy", "llama", [1,2,3]);

// var rest = [true,2,"hello World",[1,2,3],new Date(),{}];
// var restParams = [ ...rest];
// // restParams.push();
// var chars = [... john(5,2,...restParams)];

module.exports ={
    f : john
}