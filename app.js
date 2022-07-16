/* Fill your code*/
function formValidate(){
    let name = document.getElementById("name").value;
    let add = document.getElementById("add").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("num").value;
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;

    let p1 = /^[a-zA-Z ]{8,15}$/;
    let p2 = /[a-zA-Z0-9 ,-]+/;
    // let p3 = /([\w])[@]+[.]+]/;
    let p3 =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let p4 = /[A-Z]+[a-z]+[0-9]+/;
    let p5 = /[A-Z]+[a-z]+[0-9]+/;
    let p6 =  /^[0-9]{10}$/;


    console.log(p1.test(name))
    console.log(p2.test(add))
    console.log(p3.test(email))
    console.log(p4.test(pass))
    console.log(p5.test(pass))
    console.log(p6.test(number))

    if(name=="" || add=="" || email=="" || number=="" || pass=="" || cpass==""){


        if(name==""){
            document.getElementById("l1").innerHTML = "Kindly fill name field"
        }
        else{
            document.getElementById("l1").innerHTML = ""
        }
        if(add==""){
            document.getElementById("l2").innerHTML = "Kindly fill address field"
        }
        else{
            document.getElementById("l2").innerHTML = ""
        }
        if(email==""){
            document.getElementById("l3").innerHTML = "Kindly fill email field"
        }
        else{
            document.getElementById("l3").innerHTML = ""
        }
        if(pass==""){
            document.getElementById("l4").innerHTML = "Kindly fill password field"
        }
        else{
            document.getElementById("l4").innerHTML = ""
        }
        if(cpass==""){
            document.getElementById("l5").innerHTML = "Kindly fill confirm password field"
        }
        else{
            if(pass!=cpass){
                document.getElementById("l5").innerHTML = "Password and confirm password does not match"
            }
            else{
                document.getElementById("l5").innerHTML = ""
            }
        }
        if(number==""){
            document.getElementById("l6").innerHTML = "Kindly fill number field"
        }
        else{
            document.getElementById("l6").innerHTML = ""
        }
    }

    else{
        document.getElementById("l1").innerHTML = " "
        document.getElementById("l2").innerHTML = " "
        document.getElementById("l3").innerHTML = " "
        document.getElementById("l4").innerHTML = " "
        document.getElementById("l5").innerHTML = " "
        document.getElementById("l6").innerHTML = " "
        document.getElementById("l7").innerHTML = " "
        if(p1.test(name) && p2.test(add) && p3.test(email) && p4.test(pass) && cpass==pass && p6.test(number)){
            document.getElementById("l7").innerHTML = "Regex Validation Successful"
        }
        else{
            document.getElementById("l7").innerHTML = " ";
            if(!p1.test(name)){
                document.getElementById("l1").innerHTML = "Atleast 8 characters and maximum 15 characters"
            }
            if(!p2.test(add)){
                document.getElementById("l2").innerHTML = "Kindly fill address field"
            }
            if(!p3.test(email)){
                document.getElementById("l3").innerHTML = "Enter a valid Email"
            }
            if(!p4.test(pass)){
                document.getElementById("l4").innerHTML = "Password must contain atleast 1 uppercase, 1 lowercase, 1 number"
            }
            if(!p5.test(cpass)){
                document.getElementById("l5").innerHTML = "Confirm password must contain atleast 1 uppercase, 1 lowercase, 1 number"
            }
            else if(pass!=cpass){
                document.getElementById("l5").innerHTML = "Confirm password and password should be same"
            }
            if(!p6.test(number)){
                document.getElementById("l6").innerHTML = "Enter 10 digit Mobile Number"
            }
        }
    }
}