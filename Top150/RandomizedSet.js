
var RandomizedSet = function() {
    this.mapped = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.mapped.has (val)) {
        return false
    } else {
        this.mapped.set(val)
        return true;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    return this.mapped.delete(val)
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let temp = [...this.mapped.keys()];
    return temp[Math.trunc(Math.random() * this.mapped.size)];
};
 
//  Your RandomizedSet object will be instantiated and called as such:
 var obj = new RandomizedSet()
 var param_1 = obj.insert(1)
 var param_2 = obj.remove(2)
 var param_4 = obj.insert(2)

 var param_3 = obj.getRandom()

 console.log(param_1, param_2, param_3);
 