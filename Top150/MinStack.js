/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.

You must implement a solution with O(1) time complexity for each function.

*/



var MinStack = function() {
    this.stack = []
    this.min = Number.MAX_SAFE_INTEGER
    // this.
    this.tp = -1
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.min = Math.min(val, this.min);
    this.tp += 1;
    this.stack[this.tp] = val
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.tp -= 1 
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.tp]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min.apply(null, this.stack)
};


 //Your MinStack object will be instantiated and called as such:
 var obj = new MinStack()
 obj.push(-2)
 obj.push(-3)

 obj.pop()
 var param_3 = obj.top()
 var param_4 = obj.getMin()
 console.log(param_3, param_4);
 

