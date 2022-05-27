console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let baskets = [];

function addItem ( item ) {
    baskets.push(item);
    // console.log(baskets);

    return true;

}

console.log('i added to baskets. The array now contains:', baskets, addItem('car') );

function listItems() {
    for( i=0, i<baskets.length; i++) {
        console.log('in listItems funct', baskets[i] );
        
       
    }

}
console.log('test listitems of baskets', listItems());