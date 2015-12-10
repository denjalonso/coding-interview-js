/* --- CUSTOM LIST NODE CLASS ---*/
function CustomListNode(value) {
    this.next = null;
    this.value = value;
}


/* --- CUSTOM LIST CLASS ---*/
function CustomList(listToCreate) {
    this.head = null;
    this.initialize = this._initialize(listToCreate);
}

CustomList.prototype.revert = function() {
    var arrayLength = this.length();
    for (var i=0; i<arrayLength; i++) {
        this.prepend(this.get(i));
        this.remove(i+1);
    }
};

CustomList.prototype.append = function(value) {
    var newNode = new CustomListNode(value);
    if (this.head === null) {
        this.head = newNode;
    }
    else {
        var lastNode = this.head;
        while (lastNode.next !== null) {
            lastNode = lastNode.next;
        }
        lastNode.next = newNode;
    }
};

CustomList.prototype.prepend = function(value) {
    var newNode = new CustomListNode(value);
    var tmpHead = this.head;
    this.head = newNode;
    newNode.next = tmpHead;
};

CustomList.prototype.get = function(index) {
    var value = null;
    if (index < this.length()) {
        var currentNode = this.head;
        for (var i=0; i<index; i++) {
            currentNode = currentNode.next;
        }
        value = currentNode.value;
    }
    return value;
};

CustomList.prototype.remove = function(index) {
    if (index < this.length()) {
        if (index === 0) {
            this.head = this.head.next;
        }
        else {
            var currentNode = this.head;
            var previousNode = this.head;
            for (var i=0; i<index; i++) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
    }
};

CustomList.prototype.length = function() {
    var count = 0;
    if (this.head !== null) {
        count++;
        var lastNode = this.head;
        while (lastNode.next !== null) {
            lastNode = lastNode.next;
            count++;
        }
    }
    return count;
};

CustomList.prototype.toArray = function() {
    var arrayToReturn = [];
    if (this.head !== null) {
        var lastNode = this.head;
        do {
            arrayToReturn.push(lastNode.value);
            lastNode = lastNode.next;
        } while(lastNode !== null);
    }
    return arrayToReturn;
};

CustomList.prototype._initialize = function(listToCreate) {
    for (var i=0; i<listToCreate.length; i++) {
        this.append(listToCreate[i]);
    }
};


module.exports = CustomList;