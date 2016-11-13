interface iBook
{
    title: string,
    author: string,
    published?: Date,
    pages?: number
}


let llamaBook =
{
    title: "llama booklet",
    author: "jimbo",
    published : new Date,
    pages: 45
}

function bookInfo(book: iBook): void
{

    console.log("a book by the name of: " + book.title + " by: " + book.author + " published on: " + book.published.toDateString());
}

bookInfo(llamaBook);



let optionalBook =
{
    title:"optional book",
    author: "mig"
};
function bookInfoOptional(book: iBook): void
{

    console.log("a book by the name of: " + book.title + " by: " + book.author);
}


bookInfoOptional(optionalBook)
/*
part c) typescript laver ikke duck typing da det er et krav at opjektet man giver har de fields og metoder der er deklereret i interfacet
 */

//D)
class Book implements iBook
{
    title: string;
    author: string;

}