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

        let start = 0;
        let end = array.length - 1;
        let mid = Math.floor((start + end) / 2);
        let rootNode = new Node(array[mid]);
        if(start>end){
            return null;
        }
        rootNode.leftNode = this.buildTree(array.slice(0,mid));
        rootNode.rightNode = this.buildTree(array.slice(mid+1, array.length));

        this.root = rootNode;
        return rootNode;
    }
    insert(value){
        
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


   const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
       return;
    }
    if (node.rightNode !== null) {
      prettyPrint(node.rightNode, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.leftNode !== null) {
      prettyPrint(node.leftNode, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }




const testArray = [1,5,2,8,9,24,64,4,22,98,15,16,99,11];
const testArraySorted = mergeSort(testArray);


const bTree = binaryTree.buildTree(testArraySorted);
console.log(binaryTree.root);

console.log(binaryTree.insert(0));

prettyPrint(binaryTree.root);





class Stack {
    constructor()
    {
        this.data = [];
    }
    push(element){
        let stack = this.data;
        stack.push(element);
        return 'stacked on top';
    }
    pop(){
        return this.data.pop();
    }
    read(){
        let stack = this.data;
        return stack[stack.length - 1];
    }
}

let stacks = new Stack();
stacks.push(5);
console.log('🍒',stacks.read());


const linter = (string) => {
    const stack = new Stack();

    let stringA = string.split('');
 
    for(let i = 0; i<stringA.length; i++){
        if(isOpenB(stringA[i])){
            stack.push(stringA[i]);
            continue;
        } 
        if(isClosedB(stringA[i])){
            let topOfStack = stack.pop();

            if(!topOfStack){
                return "there is no opening brace.."
            }

            if(isMatch(topOfStack, stringA[i])){
                continue;
            } else {
                return `${string} has a mismatched opening brace..`
            }
        }
    }
    if(stack.read()){
        return 'there is an opening brace that needs the right closer';
    } else {
        return 'no errors, thems good brackets'
    }


}

const isOpenB = (string) => {
    let openingBrackets = ['(','[','{'];
    return openingBrackets.includes(string);
}
const isClosedB = (string) => {
    let closingBrackets = [')',']','}'];
    return closingBrackets.includes(string);
}
const isMatch = (openBracket, closeBracket) => {
    let closingBrackets = [')',']','}'];
    let openingBrackets = ['(','[','{'];

    return openingBrackets.indexOf(openBracket) === closingBrackets.indexOf(closeBracket);
}

const reverse = (string) => {
    let stringA = string.split('');
    let stack = new Stack();
let reversed = '';
    for(let i = 0;i<stringA.length;i++){
        stack.push(stringA[i]);
    }
    while(stack.read()){
        reversed+=stack.pop();
    }
    return reversed;
}

console.log('🥦',reverse('hello'));


//exercises

//1. use recursion to write a function that accepts
//an array of strings and returns the total number of 
//characters across all the strings

let words = ["ab", "c", "def", "ghij"];
//answer = 10;

const count = (array, amount = 0) => {

  let first = array.shift().length;
  amount+=first;
  if(array.length === 0){
    return amount;
  }
  return count(array, amount);
}

