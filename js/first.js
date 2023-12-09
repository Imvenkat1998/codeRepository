var object1=[{
    
    Empname :"venkat",
    num:1,
    phon:12345
}]

console.log("Hai",object1);

setTimeout(function f(){
    console.log("Hai",object1);
},5000);

object1.phon=54321;
