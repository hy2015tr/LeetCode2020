# **1268 - Search Suggestions System [M]**

Given an array of strings products and a string searchWord. We want to design a
system that suggests at most three product names from products after each
character of searchWord is typed. Suggested products should have common prefix
with the searchWord. If there are more than three products with a common
prefix return the three lexicographically minimums products.

Return *list of lists* of the suggested products after each character
of searchWord is typed. 

 **Example 1:**

**Input:** products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"

**Output:** 
[
 ["mobile","moneypot","monitor"],
 ["mobile","moneypot","monitor"],
 ["mouse","mousepad"],
 ["mouse","mousepad"],
 ["mouse","mousepad"]
]

**Explanation:** products sorted lexicographically =
["mobile","moneypot","monitor","mouse","mousepad"]

After typing m and mo all products match and we show user
["mobile","moneypot","monitor"]

After typing mou, mous and mouse the system suggests ["mouse","mousepad"]

**Example 2:**

**Input:** products = ["havana"], searchWord = "havana"

**Output:** [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]

**Example 3:**

**Input:** products = ["bags","baggage","banner","box","cloths"], searchWord =
"bags"

**Output:**
[["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]

**Example 4:**

**Input:** products = ["havana"], searchWord = "tatiana"

**Output:** [[],[],[],[],[],[],[]]
 

**Constraints:**

-   1 \<= products.length \<= 1000
-   There are no repeated elements in products.
-   1 \<= Σ products[i].length \<= 2 \* 10\^4
-   All characters of products[i] are lower-case English letters.
-   1 \<= searchWord.length \<= 1000
-   All characters of searchWord are lower-case English letters.


## **Solution:**

```JavaScript

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

```


## **Test Data:**

```JavaScript

// Test Data
const test01_products = ["mobile","mouse","moneypot","monitor","mousepad"];
const test01_searchWord = "mouse";
const test02_products = ["havana"];
const test02_searchWord = "havana";
const test03_products = ["bags","baggage","banner","box","cloths"];
const test03_searchWord = "bags";
const test04_products =  ["havana"];
const test04_searchWord = "tatiana";
const result = suggestedProducts(test01_products, test01_searchWord);
console.log(result);

```