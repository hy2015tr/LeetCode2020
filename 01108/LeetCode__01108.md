**1108 - Defanging an IP Address [E]**

Given a valid (IPv4) IP address, return a defanged version of that IP address.

A *defanged IP address* replaces every period "." with "[.]".

 

**Example 1:**

**Input:** address = "1.1.1.1"

**Output:** "1[.]1[.]1[.]1"

**Example 2:**

**Input:** address = "255.100.50.0"

**Output:** "255[.]100[.]50[.]0"

 

**Constraints:**

-   The given address is a valid IPv4 address.


## **Solution:**

```JavaScript

var defangIPaddr = function(address) {

    return address.split(".").join("[.]");
   
};

```


## **Test Data:**

```JavaScript

// Test Data
const test01 = "1.1.1.1";
const test02 = "255.100.50.0";
const result = defangIPaddr(test01);
console.log(result);

```