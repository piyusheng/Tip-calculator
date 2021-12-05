var Submit= document.getElementById("submit");
Submit.addEventListener('click',result)
function result(e){
  e.preventDefault();
  var bill= document.getElementById("bill").value;
  const bill1=parseFloat(bill);
  console.log(bill)
  var tippercentage =document.getElementById("tip").value;
  const tippercentage1=parseFloat(tippercentage)
  const Tip =document.getElementById("result1")
  const Total = document.getElementById("result2")
  var tipamount=(tippercentage1/100)*bill1;
  console.log(tipamount);
  var totalbill= tipamount + bill1;
  console.log(totalbill)
  Tip.value=tipamount;
  Total.value=totalbill;
}