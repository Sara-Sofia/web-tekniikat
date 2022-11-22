
let form=document.getElementById("lomake");
let result=document.getElementById("result");

form.addEventListener("submit", calculate);


function calculate(e){
    e.preventDefault();

    let fData= new FormData(form);
    let num1=Number(fData.get("num1"));
    let num2=Number(fData.get("num2"));
    let sum=num1+num2;
    result.textContent="Tulos on"+" "+sum;

}