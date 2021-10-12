// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?
// var a = [1,2,3,4,5,3,4]
// var findPairOf = 8
// var newArr = []
// for(var i=0; i<=a.length-1; i++)
// {
// for(var j=i+1; j<=a.length-1; j++)
// {
// if( a[i] + a[j] == findPairOf )
// {
// newArr.push(a[i],a[j])
// console.log(newArr)
// newArr.pop()
// newArr.pop()
// }
// }
// }
// ------------------------------------------------------------------------------------------------

// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.
// var arr = [1,2,3,3,4,5,7,7]
// arr.reverse()
// console.log(arr)

// ------------------------------------------------------------------------------------------------

// Q3. Write a program to check if two strings are a rotation of each other?
// var str1 = "ABCD"
// var str2 = "DBAC"
// var Temp = str1 + str1
// if(Temp.indexOf(str2) == -1){
// console.log(`${str1} is not a rotated form of ${str2} `)
// }else{
// console.log(`${str1} is a rotated form of ${str2} `)
// }

// ------------------------------------------------------------------------------------------------

// Q4. Write a program to print the first non-repeated character from a string?
// function find_FirstNotRepeatedChar(str) {
// var arra1 = str.split('');
// var result = '';
// var ctr = 0;

// for (var x = 0; x < arra1.length; x++) {
// ctr = 0;

// for (var y = 0; y < arra1.length; y++)
// {
// if (arra1[x] === arra1[y]) {
// ctr+= 1;
// }
// }

// if (ctr < 2) {
// result = arra1[x];
// break;
// }
// }
// return result;
// }
// console.log(find_FirstNotRepeatedChar('abacddbec'));

// ------------------------------------------------------------------------------------------------

// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.
// javascript recursive function to
// solve tower of hanoi puzzle
// function towerOfHanoi(n, from_rod, to_rod, aux_rod)
// {
//		if (n == 1)
//		{
//			document.write("Move disk 1 from rod " + from_rod +
//			" to rod " + to_rod+"<br/>");
//			return;
//		}
//		towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
//		document.write("Move disk " + n + " from rod " + from_rod +
//		" to rod " + to_rod+"<br/>");
//		towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
//	}

	// Driver code
//	var n = 4; // Number of disks
//	towerOfHanoi(n, 'A', 'C', 'B'); // A, B and C are names of rods

// ------------------------------------------------------------------------------------------------

// Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
// function isOperator(x)
// {
 // switch (x) {
 // case '+':
 // case '-':
 // case '/':
 // case '*':
 // return true;
 // }
 // return false;
// }
// function postToPre(post_exp)
// {
 // let s = [];
 // let length = post_exp.length;
 // for (let i = 0; i < length; i++) {
 // if (isOperator(post_exp[i])) {
 // let op1 = s[s.length - 1];
// s.pop();
// let op2 = s[s.length - 1];
// s.pop();
 // let temp = post_exp[i] + op2 + op1;
 // s.push(temp);
 // }
 // else {
 // s.push(post_exp[i] + "");
 // }
 // }
 // let ans = "";
 // while (s.length > 0)
 // ans += s.pop();
 // return ans;
// }
// let post_exp = "ABC/-AK/L-*";

// document.write("Prefix : " + postToPre(post_exp));

// ------------------------------------------------------------------------------------------------
// // Q7. Write a program to convert prefix expression to infix expression.

// function isOperator(x)
// 	{
// 		switch(x)
// 		{
// 			case '+':
// 			case '-':
// 			case '*':
// 			case '/':
// 				return true;
// 		}
// 		return false;
// 	}

// 	// Convert prefix to Infix expression
// 	function convert(str)
// 	{
// 		let stack = [];

// 		// Length of expression
// 		let l = str.length;

// 		// Reading from right to left
// 		for(let i = l - 1; i >= 0; i--)
// 		{
// 			let c = str[i];

// 			if (isOperator(c))
// 			{
// 				let op1 = stack[stack.length - 1];
// 				stack.pop()
// 				let op2 = stack[stack.length - 1];
// 				stack.pop()

// 				// Concat the operands and operator
// 				let temp = "(" + op1 + c + op2 + ")";
// 				stack.push(temp);
// 			}
// 			else
// 			{

// 				// To make character to string
// 				stack.push(c + "");
// 			}
// 		}
// 		return stack[stack.length - 1];
// 	}
	
// 	let exp = "*-A/BC-/AKL";
	
// 	document.write("Infix : " + convert(exp));
// ------------------------------------------------------------------------------------------------
// // Q8. Write a program to check if all the brackets are closed in a given code snippet.

// function areBracketsBalanced(expr)
// {
     
//     // Using ArrayDeque is faster
//     // than using Stack class
//     let stack = [];
 
//     // Traversing the Expression
//     for(let i = 0; i < expr.length; i++)
//     {
//         let x = expr[i];
 
//         if (x == '(' || x == '[' || x == '{')
//         {
             
//             // Push the element in the stack
//             stack.push(x);
//             continue;
//         }
 
//         // If current character is not opening
//         // bracket, then it must be closing.
//         // So stack cannot be empty at this point.
//         if (stack.length == 0)
//             return false;
             
//         let check;
//         switch (x){
//         case ')':
//             check = stack.pop();
//             if (check == '{' || check == '[')
//                 return false;
//             break;
 
//         case '}':
//             check = stack.pop();
//             if (check == '(' || check == '[')
//                 return false;
//             break;
 
//         case ']':
//             check = stack.pop();
//             if (check == '(' || check == '{')
//                 return false;
//             break;
//         }
//     }
 
//     // Check Empty Stack
//     return (stack.length == 0);
// }
 
// // Driver code
// let expr = "([{}])";
 
// // Function call
// if (areBracketsBalanced(expr))
//     document.write("Balanced ");
// else
//     document.write("Not Balanced ");
// ------------------------------------------------------------------------------------------------

// // Q9. Write a program to reverse a stack.
// let st = [];
 
// function insert_at_bottom(x)
// {
//     if(st.length==0)
//         st.push(x);
//     else
//     {
       
//             let a = st.pop();
//             insert_at_bottom(x);
  
           
//             st.push(a);
//     }
     
     
// }
 
// // Below is the function that
   
// function reverse()
// {
//     if(st.length > 0)
//         {
              
           
//             let x = st.pop();
//             reverse();
              
           
//             insert_at_bottom(x);
//         }
// }
 
// // Driver Code
 
// // push elements into
// // the stack
// st.push('1');
// st.push('2');
// st.push('3');
// st.push('4');
 
// document.write("Original Stack<br>");
 
// document.write(st.join(" ")+"<br>");
 
// // function to reverse
// // the stack
// reverse();
 
// document.write("Reversed Stack<br>");
 
// document.write(st.join(" "));
 

// ------------------------------------------------------------------------------------------------

// Q10. Write a program to find the smallest number using a stack.

//  let s = [];
//     let minEle;
  
//     // Prints maximum element of MyStack
//     function getMin()
//     {
//         if (s.length == 0)
//             document.write("Stack is empty" + "</br>");
  
//         // variable maxEle stores the maximum element
//         // in the stack.
//         else
//             document.write("Minimum Element in " +
//                         "the stack is: "+minEle + "</br>");
  
//     }
  
//  // Prints top element of MyStack
//     function peek()
//     {
//         if (s.length == 0)
//         {
              
//             document.write("Stack is empty ");
//             return;
//         }
  
//         let t = s[s.length - 1]; // Top element.
  
//         document.write("Top Most Element is: ");
  
        
//         if(t < minEle)
//             document.write(minEle);
//         else
//             document.write(t);
//     }
  
   
//     function pop()
//     {
//         if (s.length == 0)
//         {
//             document.write("Stack is empty" + "</br>");
//             return;
//         }
  
//         document.write("Top Most Element Removed: ");
//         let t = s[s.length - 1];
//         s.pop();
  
        
//         if (t < minEle)
//         {
//             document.write(minEle + "</br>");
//             minEle = 2 * minEle - t;
//         }
  
//         else
//             document.write(t + "</br>");
//     }
  
    
//     function push(x)
//     {
        
//         if (s.length == 0)
//         {
//             minEle = x;
//             s.push(x);
//             document.write("Number Inserted: " + x + "</br>");
//             return;
//         }
  
//         // If new number is less than minEle
//         if (x < minEle)
//         {
//             s.push(2 * x - minEle);
//             minEle = x;
//         }
  
//         else
//             s.push(x);
  
//         document.write("Number Inserted: " + x + "</br>");
//     }
     
//     push(3);
//     push(5);
//     getMin();
//     push(7);
//     push(19);
//     getMin();
//     pop();
//     getMin();
//     pop();
//     peek();
     
// ------------------------------------------------------------------------------------------------
