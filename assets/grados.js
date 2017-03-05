function ConvertirCelsius(far){ /*celsius a farenheit */
  var far=document.getElementById("far").value;
  var result= (far-32) *(5/9);
  document.getElementById("cels").value=result.toFixed(2);


  }

function convertirFarenheit(Celsius){ /*farenheit a celsius*/
  var celsius= document.getElementById("cels").value;
  var result2= ((9/5)*celsius ) +32;
 document.getElementById("far").value=result2.toFixed(2);

}
