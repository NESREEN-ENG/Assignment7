//  ------------------------------Q1------------------------------------- 

var yourname=(prompt('enter your name'))
console.log( 'your name :', yourname);
// ------------------------------Q2------------------------------------- 
var numbers=Number(prompt('enter your number'))
if (numbers%3==0 && numbers%4==0)
{
   console.log('yas');  
}

else
{
    console.log('no'); 
}

// ------------------------------Q3------------------------------------- 

var first_num =Number (prompt('enter first number'));
var second_num =Number(prompt('enter second number'));
if (first_num>second_num)
{
    console.log( 'the number is max ',first_num)
}
    else
    {
        console.log('the number is max ',second_num);
    }

// ------------------------------Q4-------------------------------------  
var num=Number(prompt('enter your number'))
if (num>0)
{
   console.log('positive');  
}

else
{
    console.log('negative'); 
}

// ------------------------------Q5-------------------------------------  
var first_numb =Number (prompt('enter first number'));
var second_numb =Number(prompt('enter second number'));
var third_numb =Number(prompt('enter third number'));


if (first_numb>second_numb && first_numb> third_numb)
{
    console.log('The max number is:',first_numb); 
}
else if(second_numb>third_numb){
    console.log('The max number is:',second_numb); 
} 
else{
    console.log('The max number is:',third_numb);
}

if (first_numb<second_numb && first_numb< third_numb)
{
    console.log('The min number is:',first_numb); 
}
else if(second_numb < third_numb){
    console.log('The min number is:',second_numb); 
} 
else{
    console.log('The min number is:',third_numb);
}
// ------------------------------Q6------------------------------------- 
var num =Number (prompt('enter the number'));
if (num%2==0)
    console.log ('this number is even',num) ;
else 
console.log ('this number is odd',num) ;

 
// ---------------------------------Q7--------------------------------
var ch=(prompt('enter the character'));
if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
console.log(ch , " is a Vowel");
else if(ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
console.log(ch , " is a Vowel");
else
console.log(ch , " is a Consonant");
// ---------------------------------Q8--------------------------------
var n =Number (prompt('enter  number'));
for(let i=1 ;i<=n ;i++){
    console.log(i);
}
// ---------------------------------Q9--------------------------------
var x =Number (prompt('enter  number'));
for (let i = 1; i <= 10; ++i)
    console.log(x + " * " + i +  " = " + x * i);
// ---------------------------------Q10--------------------------------
var n =Number (prompt('enter the number'));
for(let i=1 ;i<=n ;i++){
if (i %2==0){
    console.log (i) ;
}
}
// -----------------------------------Q11-----------------------------------
var exponent=Number (prompt('enter the exponent'));
var base=Number (prompt('enter the base'));
var result=1;
console.log (base,"^" ,exponent," = ");
while (exponent != 0) {
    result *= base;
    --exponent;
}
console.log (result);
// -----------------------------------Q12-----------------------------------
console.log("Enter marks of five subjects:");
var eng=Number(prompt(' enter the mark eng ' ));
var phy=Number(prompt(' enter the mark phy ' ));
var chem=Number(prompt(' enter the mark chem ' ));
var math=Number(prompt(' enter the mark math ' ));
var comp=Number(prompt(' enter the mark comp ' ));
var total ;
var average;
var percentage;
total = eng + phy + chem + math + comp;
average = total / 5;
percentage = (total / 5) * 100;
console.log ('Total marks =',total);
console.log ('Average marks =',average);
console.log ('Percentage = ',percentage);
// -----------------------------------Q13-----------------------------------
console.log("Enter number of month:");
var month=Number(prompt(' enter the month ' ));
switch(month)
{
case 1:
    console.log ('31day');
    break;   

    case 2:
    console.log ('28day');
    break; 
    case 3:
    console.log ('31day');
    break; 
    case 4:
    console.log ('30day');
    break; 
    case 5:
    console.log ('31day');
    break; 
    case 6:
    console.log ('30day');
    break;
    case 7:
    console.log ('31day');
    break;  
    case 8:
    console.log ('31day');
    break; 
    case 9:
    console.log ('30day');
    break; 
    case 10:
    console.log ('31day');
    break;
    case 11:
    console.log ('30day');
    break; 
    case 12:
    console.log ('31day');
    break;  
    default:
        console.log ('no rang');	
	}
    // ------------------------------Q14-------------------------
    console.log("Enter marks of five subjects:");
var eng=Number(prompt(' enter the mark English ' ));
var phy=Number(prompt(' enter the mark physics ' ));
var chem=Number(prompt(' enter the mark Chemistry ' ));
var math=Number(prompt(' enter the mark math ' ));
var comp=Number(prompt(' enter the mark computer ' ));
total = eng + phy + chem + math + comp;
percentage = (total / 5.0) ;
if(percentage>=90)
{
    console.log ('Grad A');	
}

else if(percentage >=80 && percentage <90)
{
    console.log ('Grad B');	
}
else if(percentage >=70 && percentage <80)
{
    console.log ('Grad C');	
}
else if(percentage >=60 && percentage <70)
{
    console.log ('Grad D');	
}
else if(percentage >=40)
{
    console.log ('Grad E');	
}
else {
    console.log ('Grad F');
}
//  ----------------------------Q15------------------------------------------------------
console.log("Enter number of month:");
var month=Number(prompt(' enter the month ' ));
switch(month)
{
case 1:
    console.log ('31day');
    break;   

    case 2:
    console.log ('28day');
    break; 
    case 3:
    console.log ('31day');
    break; 
    case 4:
    console.log ('30day');
    break; 
    case 5:
    console.log ('31day');
    break; 
    case 6:
    console.log ('30day');
    break;
    case 7:
    console.log ('31day');
    break;  
    case 8:
    console.log ('31day');
    break; 
    case 9:
    console.log ('30day');
    break; 
    case 10:
    console.log ('31day');
    break;
    case 11:
    console.log ('30day');
    break; 
    case 12:
    console.log ('31day');
    break;  
    default:
        console.log ('no rang');	
	}
// ----------------------------------Q16--------------------------------
var ch=(prompt('enter the character'));
switch(ch){
    case "a":
        console.log(ch , " is a Vowel");
        break;
    case "e":
        console.log(ch , " is a Vowel");
        break;
        
    case "i":
        console.log(ch , " is a Vowel");
        break;
                
    case "o":
        console.log(ch , " is a Vowel");
        break;
    case "u":
        console.log(ch , " is a Vowel");
        break;
        case "A":
        console.log(ch , " is a Vowel");
        break;
    case "E":
        console.log(ch , " is a Vowel");
        break;
        
    case "I":
        console.log(ch , " is a Vowel");
        break;
                
    case "O":
        console.log(ch , " is a Vowel");
        break;
    case "U":
        console.log(ch , " is a Vowel");
        break;
     default:
        console.log(ch , " is a Consonant");
}

// ----------------------------------Q17--------------------------------  
var first_num =Number (prompt('enter first number'));
var second_num=Number(prompt('enter second number'));

switch(first_num > second_num)
{
    case true: 
       console.log(" is maximum",first_num );
        break;
    case false:
        console.log( " is maximum",second_num);
        break; 
        default:("the numbers the same") ; 
}

// ----------------------------------Q18--------------------------------  
var num =Number (prompt('enter the number'));
switch (num%2==0)
{
 case true:
    console.log ('this number is even',num) ;
    break;
 case false:
    console.log ('this number is odd',num) ;
    break;
    default: ("the number is  out ");
}
//--------------------------------  Q19----------------
var num=Number(prompt('enter your number'))
switch(num>0)
{
   case true :
    console.log('positive');  
    break;
    case false :
    console.log('negative'); 
    break;
    default: ("the number is  zero ");
}
// --------------------------Q20-----------------
var ch=(prompt('enter the character'));
var num1 =Number (prompt('enter the number1'));
var num2 =Number (prompt('enter the number2'));
switch(ch){
    case "+":
        console.log(num1,"+",num2 ,"=",num1+num2);
        break;
    case "-":
        console.log(num1,"-",num2 ,"=",num1-num2);
        break;
    case "*":
        console.log(num1,"*",num2 ,"=",num1*num2);
        break;
    case "/":
        console.log(num1,"/",num2 ,"=",num1/num2);
        break;
    default:
        console.log("Error! operator is not correct");

}



