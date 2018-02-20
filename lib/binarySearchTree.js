'use srtict'

class Node {
   constructor(data, left, right) {
      this.data = data;
      this.left = left;
      this.right = right;
   }

   show() {
      return this.data;
   }
}

class BST {
   constructor() {
      this.root = null;
   }

   insert(data) {
      const n = new Node(data, null, null);
      if (this.root === null) {
         this.root = n;
      } else {
         let current = this.root;
         let parent;
         while (true) {
            parent = current;
            if (data < current.data) {
               current = current.left;
               if (current === null) {
                  parent.left = n;
                  break;
               }
            } else {
               current = current.right;
               if (current === null) {
                  parent.right = n;
                  break;
               }
            }
         }
      }
   }

   inOrder(cb, node = this.root) {
      if (node !== null) {
         this.inOrder(cb, node.left);
         cb(node.show());
         this.inOrder(cb, node.right);
      }
   }

   preOrder(cb, node = this.root) {
      if (node !== null) {
         cb(node.show());
         this.preOrder(cb, node.left);
         this.preOrder(cb, node.right);
      }
   }

   postOrder(cb, node = this.root) {
      if (node !== null) {
         this.postOrder(cb, node.left);
         this.postOrder(cb, node.right);
         cb(node.show());
      }
   }

   getMin() {
      let current = this.root;
      while (current.left !== null) {
         current = current.left;
      }
      return current.data;
   }

   getMax() {
      let current = this.root;
      while (current.right !== null) {
         current = current.right;
      }
      return current.data;
   }

   find(data) {
      let current = this.root;
      while (current.data != data) {
         if (data < current.data) {
            current = current.left;
         } else {
            current = current.right;
         }
         if (current === null) {
            return null;
         }
      }
      return current;
   }
}

module.exports = BST;
