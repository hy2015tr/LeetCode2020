var defangIPaddr = function(address) {

    return address.split(".").join("[.]");
   
};


// Test Data
const test01 = "1.1.1.1";
const test02 = "255.100.50.0";
const result = defangIPaddr(test01);
console.log(result);