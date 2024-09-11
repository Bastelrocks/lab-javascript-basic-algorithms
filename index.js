// Iteration 1: Names and Input

let hacker1 = "Balfa"
console.log("The driver's name is",hacker1)
let hacker2 = "Balfat"
console.log("The navigator's name is",hacker2)

// Iteration 2: Conditionals

if (hacker1.length>hacker2.length){
    console.log("The driver has the longest name, it has",hacker1.length,"characters.")
}
else if(hacker2.length>hacker1.length){
    console.log("It seems that the navigator has the longest name, it has",hacker2.length,"characters.")
}
else{
    console.log("Wow you both have equally long names,",hacker1.length,"characters!")
}

// Iteration 3: Loops
let capitalSpaced=""
let hacker1Capital=hacker1.toUpperCase()
console.log(hacker1Capital)
for (let i=0;i<hacker1Capital.length;i++)
{
    capitalSpaced=capitalSpaced.concat(hacker1Capital.charAt(i))
    capitalSpaced=capitalSpaced.concat(" ")
}
console.log(capitalSpaced)

let navigatorReversed=""
for(let i=hacker2.length-1;i>=0;i--)
{
    navigatorReversed=navigatorReversed.concat(hacker2.charAt(i))
}
console.log(navigatorReversed)
let i=0;
do{
    if(hacker1.charAt(i)<hacker2.charAt(i)){
        console.log("The driver's name goes first.")
    }
    else if(hacker1.charAt(i)>hacker2.charAt(i)){
        console.log("Yo, the navigator goes first, definetely.")
    }
    else if(hacker1.charAt(i)===hacker2.charAt(i) && i===hacker1.length-1 && i === hacker2.length-1){
        console.log("What?! You both have the same name?")
    }
    i++;
    console.log(i)
} while(hacker1.charAt(i-1)===hacker2.charAt(i-1) && (i < hacker1.length | i < hacker2.length))


