function myFunction(input) {

    let bookName = input[0];
    let bookCount = parseInt(input[1]);
    let booksChecked = parseInt(0);
    let counter = parseInt(2);


    function isMyBook(title) {
        return title === bookName;
    }


    while (counter < (bookCount + 2)) {

        if (isMyBook(input[counter])) {
            console.log(`You checked ${booksChecked} books and found it.`);
            return;   
        }

        booksChecked++;
        counter++;
    }


    console.log(`The book you search is not here!`);
    console.log(`You checked ${booksChecked} books.`);

}



myFunction(["Troy", 8, "Stronger", "Life Style", "Troy"]);
// myFunction(["The Spot", "4", "Hunger Games", "Harry Potter", "Torronto", "Spotify"]);
// myFunction(["Bourne", "32", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);