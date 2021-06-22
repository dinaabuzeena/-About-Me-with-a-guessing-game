'use strict'

 let theName=  prompt ("what is your Name?")
 console .log("welcome"+ theName +"to my webpage")
 alert("welcome"+ theName +"to my webpage")
 
let score =0;
 let myPhone= prompt("is my phone Iphone?")
 switch(myPhone.toLowerCase()){
 case'yes':
 case'y':
 score++;
 console .log(myPhone)
 alert("my phone is Iphone")
 break;
 case'no':
 case'n':
 console .log(myPhone)
 alert("your answer is wronge")
 break;

 }


 let myFavoriteColor= prompt("is my favorite color white?")
 switch(myFavoriteColor.toLowerCase()){
 case'yes':
 case'y':
 score++;
 console .log(myFavoriteColor)
 alert("my favorite color is  white")
 break;
 case'no':
 case'n':
 console .log(myFavoriteColor)
 alert("your answer is wronge")
 break;
 }



 let myCar= prompt("is my car BMW?")
 switch(myCar.toLowerCase()){
 case'yes':
 case'y':
 score++;
 console .log( myCar)
 alert("my car is BMW")
 break;
 case'no':
 case'n':
 console .log(myCar)
 alert("your answer is wronge")
 break;
 }


 let myFavoriteMovie= prompt("is my favorite movie froozen?")
 switch(myFavoriteMovie.toLowerCase()){
 case'yes':
 case'y':
 score++;
 console .log(myFavoriteMovie)
 alert("my favorite movie is froozen")
 break;
 case'no':
 case'n':
 console .log(myFavoriteMovie)
 alert("your answer is wronge")
 break;
 }


 let myAge= prompt("is my age above 20 years?")
 switch(myAge.toLowerCase()){
 case'yes':
 case'y':
 score++;
 console .log(myAge)
 alert("my age above 20 years")
 break;
 case'no':
 case'n':
 console .log(myAge)
 alert("your answer is wronge")
 break;
 }

 
  let number= prompt(" what is my FavoriteNumber?")
  number= parseInt(number);
  for(let guess=0 ; guess<4 ; guess++){
      if(number==7){
          console.log("correct")
       alert("correct")
       score++;
       break;
       }else if(number<7){
         console.log(number)
          alert("too low");
          number= prompt("hi user what is my FavoriteNumber?")
    }else if(number>7){
         console.log(number)
      alert("too high")
      number= prompt("hi user what is my FavoriteNumber?")

      }
  }
  alert("my FavoriteNumber is 7")


        
    
   
let myFavoriteFood=['Hummus','Manakeesh','Falafel','Tabouleh','Shawarma','Kofta'];
let userInput= prompt(" what is my Favoritefood?");

for(let i=0;i<6;i++){

    for(let x=0;x<myFavoriteFood.length;x++){

        if(userInput==myFavoriteFood[x]){
            alert(myFavoriteFood);
            break;
        }
    }

   userInput= prompt(" pleas enter again?");

}


