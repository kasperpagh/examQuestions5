var llamaBook = {
    title: "llama booklet",
    author: "jimbo",
    published: new Date,
    pages: 45
};
function bookInfo(book) {
    console.log("a book by the name of: " + book.title + " by: " + book.author + " published on: " + book.published.toDateString());
}
bookInfo(llamaBook);
var optionalBook = {
    title: "optional book",
    author: "mig"
};
function bookInfoOptional(book) {
    console.log("a book by the name of: " + book.title + " by: " + book.author);
}
bookInfoOptional(optionalBook);
/*
part c) typescript laver ikke duck typing da det er et krav at opjektet man giver har de fields og metoder der er deklereret i interfacet
 */
//D)
var Book = (function () {
    function Book() {
    }
    return Book;
}());
//# sourceMappingURL=opg3.js.map