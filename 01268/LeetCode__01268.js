var suggestedProducts = function(products, searchWord) {
    
    products.sort();

    let arrResult = [];
    let searchText = "";
    
    for(letter of searchWord){
        searchText += letter;
        let arrFoundItems = products.filter(x => x.startsWith(searchText)).slice(0,3);
        arrResult.push(arrFoundItems);
    }
    
    return arrResult;
};

// Test Data
const test01_products = ["mobile","mouse","moneypot","monitor","mousepad"];
const test01_searchWord = "mouse";
const test02_products = ["havana"];
const test02_searchWord = "havana";
const test03_products = ["bags","baggage","banner","box","cloths"];
const test03_searchWord = "bags";
const test04_products =  ["havana"];
const test04_searchWord = "tatiana";
const result = suggestedProducts(test04_products, test04_searchWord);
console.log(result);
