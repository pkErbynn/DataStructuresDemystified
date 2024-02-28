/*
Problem Statement #

Find the minimum depth of a binary tree. 
The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.


Solution #

This problem follows the Binary Tree Level Order Traversal pattern. 
We can follow the same BFS approach. 
The only difference will be, instead of keeping track of all the nodes in a level, we will only track the depth of the tree. 
As soon as we find our first leaf node, that level will represent the minimum depth of the tree.

I ask, Why not use DFS approach? 
- because otherwise you would have to visit every dept then take the lease which is expensive 
- with BFS, you could just do a partial visit / traversal  
*/


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(rootNode = null) {
        this.rootNode = rootNode;
    }

    getMiniDepth(){
        let currentNode = this.rootNode;
        if(currentNode == null){
            return 0; // means, no depth
        }

        // if only node
        if(currentNode.left == null && currentNode.right == null){
            return 1; // depth 1
        }

        let queue = [];
        queue.push(currentNode);

        let depthLength = 0;

        // whole tree loop
        while(queue.length >= 1){
            let levelLength = queue.length;

            depthLength = depthLength + 1;

            // levelbase loop
            for (let index = 0; index < levelLength; index++) {
                const node = queue.shift();
                
                // if node is leaf
                if(node.left === null && node.right === null){
                    return depthLength;
                }

                if(node.left != null){
                    queue.push(node.left);
                }

                if(node.right != null){
                    queue.push(node.right);
                }

            }
        }

        return depthLength;
    }
}


//         12
//     7       1
//          10   5

let root = new Node(12);
root.left = new Node(7);
root.right = new Node(1);
root.right.left = new Node(10);

const bt = new BinaryTree(root);
console.log("Result Depth: ", bt.getMiniDepth())

// ============================================


//         12
//     7       1
//  9       10   5
//        11 

root.left.left = new Node(9);
root.right.left = new Node(10);

const bt2 = new BinaryTree(root);
console.log("Result Depth2: ", bt2.getMiniDepth())




// ==========
/*

Time complexity: O(N), 
where ‘N’ is the total number of nodes in the tree. 
This is due to the fact that we traverse each node once.

Space complexity: O(N) which is required for the queue. 
Since we can have a maximum of N/2 nodes at any level (this could happen only at the lowest level), 
therefore we will need O(N) space to store them in the queue.

*/