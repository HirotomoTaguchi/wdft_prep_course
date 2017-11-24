// Exercise #1
// Write your solution below
for (i=0; i<101; i++;){
    if (i/15 == 0){
        console.log("fizzbuzz");
    }else if(i/3==0){
        console.log("buzz");
    }else if(i/5==0){
        console.log("fizz");
    }else{
        console(i);
    }
}

/* 
Write your explanation for Exercise #1 here
First of all, I use a loops to print each number. Then I use a for and else to discover the condition numbers.
Finaly I change the condition numbers to fizzbuzz, buzz or fizz.
*/


// Exercise #2
// Write your solution below
ver i = 0;
while(i<9){
    if(i/2==0){
        console.log(" # # # #");
    }else{
        console.log("# # # # ")
    }
}

/* 
Write your explanation for Exercise #2 here
I figured out that even number line is start at " " and odd number line is start at "#".
So I use a while and if. if number is oll, it would print "# # # # ". If number is even, it would print " # # # #"
*/
