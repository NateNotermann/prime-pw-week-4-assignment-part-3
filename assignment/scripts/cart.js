console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let baskets = []; //created empty array called baskets

function addItem ( item ) { //creating function call addItem, input parameter is called string
    baskets.push(item);
    // console.log(baskets);
    return true;
}

console.log('i added to baskets. The array now contains:', baskets, addItem('car') );

// function listItems(items) {
//     for( i=0, i<baskets.length; i++) {
//         console.log('in listItems funct', baskets[i] );
//         let item = items;
//         return;



// baskets=[20, 10, 5, 1,];
console.log('Checking baskets array. Should be:"[car]"', baskets );
function listItems( array ){
  for (let i=0; i< array.length; i++) {
      console.log('This item is -->', array[i]);
  }
  return 
}
console.log('testing listItems function', listItems(baskets)); //returns undefined not sure why
listItems(baskets); //this does not return undefined