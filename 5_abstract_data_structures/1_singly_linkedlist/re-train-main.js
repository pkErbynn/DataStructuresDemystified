class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }

    push(value) {
        let newNode = new Node(value);
        if(this.length == 0){
            this.head = newNode;
            this.tail = newNode;
            this.length += 1;
            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length += 1;
        return this;
    }

    pop(){
        if(this.length == 0 || this.head == null){
            return null;
        }

        if(this.length == 1){
            let removedNode = this.head;
            this.head = null;
            this.tail = null;
            this.length -= 1;
            return removedNode;
        }

        let currentNode = this.head;
        let penultimateNodeOfCurrentNode = null;

        while(currentNode.next != null){
            penultimateNodeOfCurrentNode = currentNode;
            currentNode = currentNode.next;
        }

        penultimateNodeOfCurrentNode.next = null;
        this.tail = penultimateNodeOfCurrentNode;
        this.length -= 1;

        return currentNode;
    }

    shift(){
        // empty linkedList
        if(this.length == 0){
            return null;
        }

        // only one element
        if(this.length == 1){
            let head = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return head;
        }

        // happy path
        // 1 -> 2 -> 3 -> 4 -> null
        let removeHead = this.head;
        let headNextNode = this.head.next;
        this.head = headNextNode;

        this.length -= 1;

        removeHead.next = null; // terminate
        return removeHead;
    }

    unshift(value){
        let newNode = new Node(value);
        if(this.length == 0){
            this.head = newNode;
            this.tail = newNode;
            this.length += 1;
            return this;
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;  
        return;
    }

    get(index){
        if(index < 0 || index >= this.length){
            return null;
        }

        if(index === 0){
            return this.head;
        }

        let counter = 0;
        let currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
            counter++;
            if(counter === index)
            {
                break;
            }
        }
        return currentNode;
    }

    remove(index){
        if(index < 0 || index >= this.length) return null;

        if(index === 0){
            let removedNode = this.shift();
            return removedNode;
        }

        if(index === this.length - 1){
            return this.pop();
        }

        let nodeBeforeRemovedNode = this.get(index - 1);
        let removedNode = nodeBeforeRemovedNode.next;
        
        nodeBeforeRemovedNode.next = nodeBeforeRemovedNode.next.next;

        this.length -= 1;
        return removedNode;
    }

    set(index, value){
           let node = this.get(index);
           
           if(!node){
            return false;
           }
           node.value = value;
           return true;
    }

    print(){
        let currentNode = this.head;
        let printOut = [];
        while(currentNode){
            printOut.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return printOut;
    }

    sum(){
        if(!this.head) return 0;
        let currentNode = this.head;
        let sum = 0;

        while(currentNode){
            sum = sum + currentNode.value;
            currentNode = currentNode.next;
        }

        return sum;
    }

    insert(index, value){
        if(index < 0 || index >= this.length) return false;

        let lengthBeforeInsertion = this.length;
        if(index == 0){
            this.unshift(value);
            console.log(this);
            return this.length === lengthBeforeInsertion+1;
        }

        if(index === this.length - 1){
            this.push(value);
            console.log(this);
            return this.length === this.lengthBeforeInsertion+1;
        }

        let newNode = new Node(value);
        let penultimate = this.get(index-1);
        let nextNode = penultimate.next;
        penultimate.next = newNode;
        newNode.next = nextNode;
        this.length += 1;
        return true;
    }

    reverse(){
        if(!this.head) return null;
        if(this.length == 1) return this.head;

        let penultimateOfCurrentNode = null;
        let currentNode = this.head;

        while(currentNode){
            let nextNode = currentNode.next;

            currentNode.next = penultimateOfCurrentNode;

            penultimateOfCurrentNode = currentNode;
            currentNode = nextNode;
        }

        this.head = this.tail;
        this.tail = this.head;

        return this;
    }
}

let sl = new SLL();
sl.push(1);
sl.push(2);
sl.push(3);
// sl.push(4);

sl.get(1);
// sl.shift();
// sl.shift();
// sl.shift();

// sl.remove(1);

sl.insert(1, 4)


