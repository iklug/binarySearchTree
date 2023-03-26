class Node {
    constructor(data)
    {
        this.data = data;
        this.leftNode = null;
        this.rightNode = null;
    }
}
class Tree {
    constructor()
    {
        this.root = null;
    }
    
    buildTree(array){
        let sortArray = mergeSort(array);
        let start = 0;
        let end = sortArray.length - 1;
        let mid = (start + end) / 2;

    }

    prettyPrint(){
        //in the instructions
    }

    insert(value){
        //accepts a value to insert
    }

    delete(value){
        //you'll have to deal with several cases such as when
        //a node has children or not

    }

    find(value){
        //accepts a value and returns the node with the given
        //value

    }

    levelOrder(func){
        //accepts another function as a parameter
        //should traverse the tree in breadth-first level order
        //and provide each node as the argument to the provided function
        //using either iteration or recursion
        //should return an array of values if no function is given
        //you'll want to use an array acting as a queue
    }
    inorder(func){
        //accepts a function
    }

    preorder(func){

    }

    postorder(func){

    }

    height(node){
        //accepts a node and returns its height
        //height is the number of edges in longest path from a given
        //node to a leaf node
    }

    depth(node){
        //accepts a node and returns its depth
        //depth is the number of edges in path from a given node to the tree's root node

    }
    isBalanced(){
        //checks if the tree is balanced
        //a balanced tree is one where the difference between heights
        //of left and right subtrees of every node is not more than 1

    }
    rebalance(){
        //rebalances an unbalanced tree
        //you'll want to use a traversal method to provide a new array
        //for the buildTree function
    }


    }



const mergeSort = list => {
 
    const mergeArrays = (leftSub, rightSub) => {
      let array = [];
      while(leftSub.length && rightSub.length){
        leftSub[0] < rightSub[0] ? array.push(leftSub.shift()) : array.push(rightSub.shift());
      }
      return [...array, ...leftSub, ...rightSub];
    }
    
    const mid = list.length / 2;
    if(list.length < 2){
      return list;
    }
    const leftSublist = list.splice(0, mid);
   
    return mergeArrays(mergeSort(leftSublist), mergeSort(list));
    }
   
   

   let binaryTree = new Tree();




const testArray = [1,5,2,8,9,24,64,4,22,98,15,16,99,11];


