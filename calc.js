
     //Для Чоловіків//

function func(){

               var weight = Number(document.getElementById("weight").value);
               var height = Number(document.getElementById("height").value);
               var age = Number(document.getElementById("age").value);
               var result = (weight * 10) + (height * 6.25) - (age * 5) + 5;              
               if (document.getElementById("weight").value == ''){
                    alert ('Поле ваги не повинне бути пустим');
                    return false;
               }if (document.getElementById("height").value == ''){
                    alert ('Поле висоти не повинне бути пустим');
                    return false;
               }if (document.getElementById("age").value == ''){
                    alert ('Поле віку не повинне бути пустим');
                    return false;
               }else{
                     document.getElementById("result").innerHTML = result; 
               }

}

     //Для жінок//

function func2(){
	
          var weight1 = Number(document.getElementById("weight1").value);
          var height1 = Number(document.getElementById("height1").value);
          var age1 = Number(document.getElementById("age1").value);
          var result1 = (weight1 * 10) + (height1 * 6.25) - (age1 * 5) - 161;
          if (document.getElementById("weight1").value == ''){
                    alert ('Поле ваги не повинне бути пустим');
                    return false;
               }if (document.getElementById("height1").value == ''){
                    alert ('Поле висоти не повинне бути пустим');
                    return false;
               }if (document.getElementById("age1").value == ''){
                    alert ('Поле віку не повинне бути пустим');
                    return false;
               }else{
                     document.getElementById("result1").innerHTML = result1; 
               }
}