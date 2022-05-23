
const generateBinary = (arrOfPrimes) => {
    let binaryTree = {};
    
    const  genBinaryTree = (binaryTree,number) => {
      if(!binaryTree.value){
        binaryTree.value = number;
      }else if(number > binaryTree.value){
        if(!binaryTree.right){
          binaryTree.right = {value:number};  
        }else{
          binaryTree.right = genBinaryTree(binaryTree.right,number);
        }
      }else{
        if(!binaryTree.left){
          binaryTree.left = {value:number};  
        }else{
          binaryTree.left = genBinaryTree(binaryTree.left,number);
        }
      }
      return binaryTree;
    }
    
    for(let i in arrOfPrimes){
      genBinaryTree(binaryTree,arrOfPrimes[i]);
    }
    
    return binaryTree;
}

module.exports = {
    generateBinary
}