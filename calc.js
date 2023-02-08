
     //Для Чоловіків//

function func(){
          var weight = Number(document.getElementById("weight").value);
          var height = Number(document.getElementById("height").value);
          var age = Number(document.getElementById("age").value);
          var error = Error('I was created using a function call!');
          var result = (weight * 10) + (height * 6.25) - (age * 5) + 5; 
          document.getElementById("result").innerHTML = result;                    
}

     //Для жінок//

function func2(){
	
          var weight1 = Number(document.getElementById("weight1").value);
          var height1 = Number(document.getElementById("height1").value);
          var age1 = Number(document.getElementById("age1").value);
          var result1 = (weight1 * 10) + (height1 * 6.25) - (age1 * 5) - 161;
          document.getElementById("result1").innerHTML = result1;
}