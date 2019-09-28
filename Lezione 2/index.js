//spread operator
function somma(a, b, c) {
  console.log(a + b + c);
}

var nums = [3, 4, 5];
somma(...nums); //nums[0]+ nums[1] ecc nums[length-1]


/* const cibo = ["banana", "cetriolo"];
const carne = ["pollo", ...cibo, "vitello", "agnello"]; */
/* //[pollo banana cetriolo vitello agnello]

//vecchio modo
var temp = carne.slice(1);
var newArray = [carne[0]];
cibo.forEach(el => newArray.push(el));
/* for(let i=0; i<cibo.length; i++){
    newArray.push(cibo[i])
} 
temp.forEach(el => newArray.push(el));
console.log(newArray); */
//console.log(carne);

//nuovo modo con spread
/* var cibo = ["banana", "cetriolo"];
var nuovoEl = "qualcosa";
cibo = [...cibo, nuovoEl]; // stessa cosa: cibo.push(nuovoEl)
cibo = [nuovoEl, ...cibo];
console.log(cibo);
 */

// high order function map, filter
/* var arr = [1, 2, 3, 4, 5, 6];
console.log(arr); */
//avere un array fatto di elementi del vecchio array *2
/* var new_array = arr.map(current => {
  //new_array = [2,4,6,8,10,12]
  var res = current * 2;
  return res;
}); */

//versione elegante

//IMPORTANTE MAP RITORNA SEMPRE UN ARRAY

/* var newArray = arr.map((current,index) =>{
    console.log(index)
    return current * 2 //<DIV>current * 2</DIV>
}
); 
console.log(new_array);
*/
/*

//new_array = [2,4,6,8,10,12]

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
//RITORNA SEMPRE UN ARRAY DI ELEMENTI
//CHE SUPERANO IL FILTRO OSSIA RITORNANO TRUE
//ELEMENTI CHE SIANO MAGGIORI DI 3
var filteredArray = arr.filter(current => current > 3 && current < 5);
console.log(filteredArray);
