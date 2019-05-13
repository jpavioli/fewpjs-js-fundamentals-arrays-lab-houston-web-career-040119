// Write your solution here!
const append = ["Milo", "Otis", "Garfield"];
const prepend = ["Milo", "Otis", "Garfield"];
const removeLast = ["Milo", "Otis", "Garfield"];
const removeFirst = ["Milo", "Otis", "Garfield"];

//add "Odie" to the end of the array
append.push("Odie")
// or append = [...append,"Odie"]

//add "Odie" to the beggining of the array
prepend.unshift("Odie")
// or append = ["Odie",...append]

// destructively remove the last element of the array
removeLast.pop(1)

// destructively remove the first element of the array
removeFirst.shift(1)
