document.getElementById("btn").addEventListener("click" , myfunction)
function myfunction() {

    let Math       = document.getElementById("t1").value;
    let result1 = document.getElementById("z1").innerHTML=Math;

    let Physics = document.getElementById("t2").value;
    let result2 = document.getElementById("z2").innerHTML= Physics;

    let chemistry = document.getElementById("t3").value;
    let result3   = document.getElementById("z3").innerHTML= chemistry;

    let Urdu    = document.getElementById("t4").value;
    let result4 = document.getElementById("z4").innerHTML = Urdu;

    let Sum   = parseInt(Math) + parseInt(Physics) + parseInt(chemistry) + parseInt(Urdu);
    let total = document.getElementById("z5").innerHTML = Sum;

    let per = Sum/400*100
    document.getElementById('z6').innerHTML=per;

    if(per <= 500){
         document.getElementById("z6").innerHTML='error';     
    }
   else if(per >=90  && per <= 100){
            console.log('grade is A1')
    }
    else if (per >=70 && per <= 80 ) {
        console.log('grade is A')
    }
    else if (per >= 61  && per <= 69){
            console.log('grade is B')
    }
    else if(per >= 40 && per <= 50){
            console.log("grade is C")
    }
    else {
        console.log('fail')
    }
}           