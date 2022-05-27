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

