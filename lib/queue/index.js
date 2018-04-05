// function Node(data) {
//     this.data = data;
//     this.next = null;
// }
//
// function Queue() {
//     this.head = null;
//     this.enqueue = function (value) {
//         let node = new Node(value),
//             currentNode = this.head;
//         if (!currentNode) {
//             this.head = node;
//             return node;
//         }
//
//             while (currentNode.next) {
//                 currentNode = currentNode.next;
//             }
//
//             currentNode.next = node;
//             return node;
//     };
//     this.dequeue = function () {
//         const temp = this.head;
//         this.head = temp.next;
//         return temp;
//     };
// }
//
// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
//
// queue.dequeue();
// queue.dequeue();
//
// console.log(queue.head);
