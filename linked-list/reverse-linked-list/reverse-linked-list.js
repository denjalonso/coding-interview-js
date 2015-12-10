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

CustomList.prototype._initialize = function(listToCreate) {
    for (i=0; i<listToCreate.length; i++) {
        this.append(listToCreate[i]);
    }
};


module.exports = CustomList;