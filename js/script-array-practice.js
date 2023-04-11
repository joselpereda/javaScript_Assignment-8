//STEP 1
/* Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array. */
// let arrayMyFavoriteMovies = ['Casino', 'Braveheart', 'Good Fellas', 'The Matrix', 'Heat', 'Scicario'];
// console.log(arrayMyFavoriteMovies[1]);

//STEP 2
/* Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array. */
// let Movies = new Array(5);
// Movies[0] = 'Casino'; 
// Movies[1] = 'Braveheart';
// Movies[2] = 'Good Fellas';
// Movies[3] = 'The Matrix';
// Movies[4] = 'Heat';

// console.log(Movies[0]);

//STEP 3
/* Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array. */
// let Movies = new Array(5);
// Movies[0] = 'Casino'; 
// Movies[1] = 'Braveheart';
// Movies[2] = 'Good Fellas';
// Movies[3] = 'The Matrix';
// Movies[4] = 'Heat';

// Addd new movie to array in 3rd position
// Movies.splice(2,0,'Scicario');

// Display new length of the Movies array
// console.log(Movies.length);

//STEP 4
/* Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array. */
// let Movies = ['Casino', 'Braveheart', 'Good Fellas', 'The Matrix', 'Heat'];
// delete Movies[0];
// console.log(Movies);

//STEP 5
/* Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for/in loop to iterate through the array and display each movie within the console window. */
// let Movies = [];
// Movies[0] = 'Casino'; 
// Movies[1] = 'Braveheart';
// Movies[2] = 'Good Fellas';
// Movies[3] = 'The Matrix';
// Movies[4] = 'Heat';
// Movies[5] = 'Scicario';
// Movies[6] = 'Never Ending Story';

// for (let i in Movies) {
//     if (Movies.hasOwnProperty(i)) {
//         console.log(Movies[i]);
//     }
// }

//STEP 6
/* Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window. */
// let Movies = [];
// Movies[0] = 'Casino'; 
// Movies[1] = 'Braveheart';
// Movies[2] = 'Good Fellas';
// Movies[3] = 'The Matrix';
// Movies[4] = 'Heat';
// Movies[5] = 'Scicario';
// Movies[6] = 'Never Ending Story';

// for (let i of Movies) {
//     console.log(i);
// }

//STEP 7
/* Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view. */
// let Movies = [];
// Movies[0] = 'Casino'; 
// Movies[1] = 'Braveheart';
// Movies[2] = 'Good Fellas';
// Movies[3] = 'The Matrix';
// Movies[4] = 'Heat';
// Movies[5] = 'Scicario';
// Movies[6] = 'Never Ending Story';

// Movies.sort();

// for (let i of Movies) {
//     console.log(i);
// }

//STEP 8
// Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this 
// let Movies = [];
// Movies[0] = 'Casino'; 
// Movies[1] = 'Braveheart';
// Movies[2] = 'Good Fellas';
// Movies[3] = 'The Matrix';
// Movies[4] = 'Heat';
// Movies[5] = 'Scicario';
// Movies[6] = 'Never Ending Story';

// let leastFavMovies = ['Vice', 'Once Upon a time', 'Judge Dredd'];

// console.log('Movies I like:');
// console.log('\n');

// for (let i in Movies) {
//     if (Movies.hasOwnProperty(i)) {
//         console.log(Movies[i]);
//     }
// }
// console.log('\n')
// console.log('Movies I regret watching:')
// console.log('\n');

// for (let t in leastFavMovies) {
//     if (leastFavMovies.hasOwnProperty(t)) {
//         console.log(Movies[t]);
//     }
// }

//STEP 9
// Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order
// let Movies = [];
// Movies[0] = 'Casino'; 
// Movies[1] = 'Braveheart';
// Movies[2] = 'Good Fellas';
// Movies[3] = 'The Matrix';
// Movies[4] = 'Heat';
// Movies[5] = 'Scicario';
// Movies[6] = 'Never Ending Story';

// let leastFavMovies = ['Vice', 'Once Upon a time', 'Judge Dredd'];

// CONCAT BOTH ARRAYS
// let completeMoviesList = Movies.concat(leastFavMovies);
// SORT AND REVERSE
// completeMoviesList.sort();
// completeMoviesList.reverse();

// // DISPLAY TO CONSOLE
// console.log(completeMoviesList);

//STEP 10
// Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.
// let Movies = [];
// Movies[0] = 'Casino'; 
// Movies[1] = 'Braveheart';
// Movies[2] = 'Good Fellas';
// Movies[3] = 'The Matrix';
// Movies[4] = 'Heat';
// Movies[5] = 'Scicario';
// Movies[6] = 'Never Ending Story';

// let leastFavMovies = ['Vice', 'Once Upon a time', 'Judge Dredd'];

// // CONCAT BOTH ARRAYS
// let completeMoviesList = Movies.concat(leastFavMovies);
// // SORT AND REVERSE
// completeMoviesList.sort();
// completeMoviesList.reverse();

// // FIND LENGTH OF ARRAY
// let indexOfLastMovie = completeMoviesList.length; 

// // DISPLAY LAST ARRAY ITEM TO CONSOLE
// console.log(completeMoviesList[indexOfLastMovie-1]);

//STEP 11
// Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.
// let Movies = [];
// Movies[0] = 'Casino'; 
// Movies[1] = 'Braveheart';
// Movies[2] = 'Good Fellas';
// Movies[3] = 'The Matrix';
// Movies[4] = 'Heat';
// Movies[5] = 'Scicario';
// Movies[6] = 'Never Ending Story';

// let leastFavMovies = ['Vice', 'Once Upon a time', 'Judge Dredd'];

// // CONCAT BOTH ARRAYS
// let completeMoviesList = Movies.concat(leastFavMovies);
// // SORT AND REVERSE
// completeMoviesList.sort();
// completeMoviesList.reverse();

// // DISPLAY FIRST ITEM TO CONSOLE
// console.log(completeMoviesList[0]);

//STEP 12
// Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 
// let Movies = [];
// Movies[0] = 'Casino'; 
// Movies[1] = 'Braveheart';
// Movies[2] = 'Good Fellas';
// Movies[3] = 'The Matrix';
// Movies[4] = 'Heat';
// Movies[5] = 'Scicario';
// Movies[6] = 'Never Ending Story';

// let leastFavMovies = ['Vice', 'Once Upon a time', 'Judge Dredd'];
// let addFavMovies = ['Tropic Thunder', 'Bad Boys', 'Avatar'];

// // CONCAT BOTH ARRAYS
// let completeMoviesList = Movies.concat(leastFavMovies);
// // SORT AND REVERSE
// completeMoviesList.sort();
// completeMoviesList.reverse();

// t = 0;

// for (let i in completeMoviesList) {
//     if (completeMoviesList.hasOwnProperty(i)) {
//         let targetIndice = completeMoviesList.indexOf(leastFavMovies[i]);
//         completeMoviesList.splice(targetIndice,1,addFavMovies[t]);
//     }
//     // INCREASE NEW FAV MOVIE LIST INDICE BY 1
//     t++;
// }

// console.log(completeMoviesList);

//STEP 13
// const movies = [['Casino', 1], ['Braveheart', 2], ['Good Fellas', 3], ['The Matrix', 4], ['Heat', 5]];
// let newArray;

// let stringsOnly = (val) => {
//     if (typeof(val) === 'string') {
//          console.log(val);
//      }
// }

// movies.forEach((item) => {
//     newArray = movies.filter(stringsOnly);
//     console.log(item[0]);
// });

//STEP 14
// Define employee names display function
function displayEmployees (arrEmp) {
    console.log("Employees:\n\n");

    for (let t in arrEmp) {
        if (arrEmp.hasOwnProperty(t)) {
            console.log(arrEmp[t]);
        }
    }
}
// Define employee array
let arrEmployees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY'];

// Call funciton display employee names. Pass it employee array
displayEmployees(arrEmployees);

//STEP 15

//STEP 16

//STEP 17