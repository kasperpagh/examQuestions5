/**
 * Created by kaspe on 2016-11-02.
 */
/**
 * Created by kaspe on 2016-11-02.
 */


//A)

let crypto = require('crypto');


let promiseFactory = function (noOfBytes)
{
    return new Promise((resolve, reject) =>
    {
        crypto.randomBytes(noOfBytes, function (err, buffer)
        {
            if (buffer)
            {
                let secureHex = buffer.toString('hex');
                let randomNumber =
                {
                    length: noOfBytes,
                    random: secureHex
                };

                resolve(randomNumber);
            }
            else
            {
                reject("der er fejl i crypto!");
            }
        });
    })
};


let makeRandoms = function (callback)
{

    let p1 = promiseFactory(48);
    let p2 = promiseFactory(40);
    let p3 = promiseFactory(32);
    let p4 = promiseFactory(24);
    let p5 = promiseFactory(16);
    let p6 = promiseFactory(8);


    let result =
    {
        title: "6 secure randoms",
        randoms: []

    }

    Promise.all([p1, p2, p3, p4, p5, p6]).then(arr =>
    {
        result.randoms = arr;
        callback(result);
    });

}


module.exports = {randoms : makeRandoms}