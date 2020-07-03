# **2 - Add Two Numbers**

<span style="font-size: 20px; font-weight: bold; color:green">[ Medium ]</span>

You are given two **non-empty** linked lists representing two non-negative
integers. The digits are stored in **reverse order** and each of their nodes
contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the
number 0 itself.

**Example:**

**Input:** (2 -\> 4 -\> 3) + (5 -\> 6 -\> 4)

**Output:** 7 -\> 0 -\> 8

**Explanation:** 342 + 465 = 807.


## **Solution:**

```JavaScript

// Definition for LinkedList
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

// Create a LinkedList from IntegerArray
var createLinkedListFromArray = function(arr){
    let currNode = null;
    for (let li = arr.length-1; li >= 0; li--) {
        currNode = new ListNode(arr[li], currNode);
    }
    return currNode;
}

// Create IntegerArray from LinkedList
var createArrayFromLinkedList = function(currNode) {
    let arrResult = [];
    while(currNode !== null) {
        arrResult.push(currNode.val);
        currNode = currNode.next;
    }
    return arrResult;
}

var addTwoNumbers = function(p1, p2) {

    let resultHead = new ListNode(0);
    let curr = resultHead;
    let carry = 0;
    
    while(p1 != null || p2 != null) {
        
        let x = (p1 != null) ? p1.val : 0;
        let y = (p2 != null) ? p2.val : 0;
        let sum = carry + x + y;
        
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        
        if(p1 != null) p1 = p1.next;
        if(p2 != null) p2 = p2.next;
    }
    
    if(carry > 0){
        curr.next = new ListNode(carry);
    }
    
    return resultHead.next;    
};


// Test Data
let p1 = createLinkedListFromArray([2,4,3]);
let p2 = createLinkedListFromArray([5,6,4]);
const result1 = addTwoNumbers(p1,p2);
const result2 = createArrayFromLinkedList(result1);
console.log(result2);

```

## **Test Data:**

```JavaScript

let p1 = createLinkedListFromArray([2,4,3]);
let p2 = createLinkedListFromArray([5,6,4]);
const result1 = addTwoNumbers(p1,p2);
const result2 = createArrayFromLinkedList(result1);
console.log(result2);

```