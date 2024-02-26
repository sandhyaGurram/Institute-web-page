// function registration() {
//     let name=document.getElementById("name").value;
//     let email=document.getElementById("email").value;
//     alert(name+" & "+ email);

// }

function validate() {
    let name = document.getElementById("name").value;
    const nameExp=/^[a-zA-Z]+$/;
    let email = document.getElementById("email").value;
    let nameStatus = false;
    let emailStatus = false;
    let phone=document.getElementById("phone").value;
    const phoneExp=/^[0-9]+$/;
    let phoneStatus=false;
    let course=document.getElementById("course").value;
    
    // ------------------name validation-----------------------------
    if (name === "") {
        document.getElementById("nameNote").innerHTML = "Name can't be empty";
    }
    else {
        if(name.match(nameExp)){
            document.getElementById("nameNote").innerHTML = "";
            nameStatus = true;
        }
        else{
            document.getElementById("nameNote").innerHTML = "Enter only characters";
        }
    }
    // ------------------email validation---------------------------

    if (email === "") {
        document.getElementById("emailNote").innerHTML = "email can't be empty";
    }
    else {
        document.getElementById("emailNote").innerHTML = "";
        emailStatus = true;
    }

    if(phone===""){
        document.getElementById("phoneNote").innerHTML = "Please enter number";
    }
    else{
        if(phone.match(phoneExp)){
            if(phone.length===10){
                document.getElementById("phoneNote").innerHTML = "";
                phoneStatus=true
            }
            else{
                document.getElementById("phoneNote").innerHTML = " enter 10 numbers only";
            }
        }
        else{
            document.getElementById("phoneNote").innerHTML = "enter digits";
        }
    }

    if(course===""){
        document.getElementById("courseNote").innerHTML = "Please select course";
    }
    else{
        document.getElementById("courseNote").innerHTML = "";
        
    }

    // -------------------form validation--------------------------
    if (nameStatus === true && emailStatus === true && phoneStatus===true ) {
        return true;
    }
    else {
        return false;
    }
}

// ------------------------------demo validation--------------------------------------
function demovalidate() {
    let name = document.getElementById("name").value;
    const alphaExp = /^[a-zA-Z]+$/;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    const numExp=/^[0-9]+$/;
    let ns = false;
    let es = false;
    let ps = false;



    if (name === "") {
        document.getElementById("nn").innerHTML = "name enter";
    }
    else {
        if (name.match(alphaExp)) {
            document.getElementById("nn").innerHTML = "";
            ns = true;
        }
        else{
            document.getElementById("nn").innerHTML = "Enter only characters";
        }

    }

    if (email === "") {
        document.getElementById("en").innerHTML = "please enter";
    }
    else {
        document.getElementById("en").innerHTML = "";
        es = true;
    }

    if (phone === "") {
        document.getElementById("pn").innerHTML = "please enter";
    }
    else {
        if (phone.match(numExp)){
            if(phone.length===10){
                document.getElementById("pn").innerHTML = "";
            ps = true;
            }
            else{
                document.getElementById("pn").innerHTML = "Enter 10 digits only";
            }
        }
        else{
            document.getElementById("pn").innerHTML = "Eneter only digits";
        }
    }


    if (ns === true && es === true && ps === true) {
        return true;
    }
    else {
        return false
    }


}
// ------------------------------demo validation end--------------------------------------

function jobdemovalidate() {
    let name = document.getElementById("name1").value;
    const alphaExp = /^[a-zA-Z]+$/;
    let email = document.getElementById("email1").value;
    const emailExp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phone = document.getElementById("phone1").value;
    const numExp=/^[0-9]+$/;
    let names = false;
    let emails = false;
    let phones = false;



    if (name === "") {
        document.getElementById("namejob").innerHTML = "name enter";
    }
    else {
        if (name.match(alphaExp)) {
            document.getElementById("namejob").innerHTML = "";
            names = true;
        }
        else{
            document.getElementById("namejob").innerHTML = "Enter only characters";
        }

    }

    if (email === "") {
        document.getElementById("emailjob").innerHTML = "please enter";
    }
    else {
        if(email.match(emailExp)){
            document.getElementById("emailjob").innerHTML = "";
            emails = true;
        }
        else{
            document.getElementById("emailjob").innerHTML = "Invalid email Ex: abcd@gmail.com";
        }
        
    }

    if (phone === "") {
        document.getElementById("phonejob").innerHTML = "please enter";
    }
    else {
        if (phone.match(numExp)){
            if(phone.length===10){
                document.getElementById("phonejob").innerHTML = "";
                phones = true;
            }
            else{
                document.getElementById("phonejob").innerHTML = "Enter 10 digits only";
            }
        }
        else{
            document.getElementById("phonejob").innerHTML = "Eneter only digits";
        }
    }


    if (names === true && emails === true && phones === true) {
        return true;
    }
    else {
        return false
    }


}

// ==================================book demo class validation==============================
function bookdemo(){
    let name2=document.getElementById("name2").value;
    const name2Exp=/^[a-zA-Z]+$/;
    let name2Status=false;
    let email2=document.getElementById("email2").value;
    const email2Exp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email2Status=false;
    let phone2=document.getElementById("phone2").value;
    const phone2Exp=/^[0-9]+$/;
    let phone2Status=false;


    if (name2===""){
        document.getElementById("n2").innerHTML="Please enter name";
    }
    else{
        if(name2.match(name2Exp)){
            document.getElementById("n2").innerHTML="";
            name2Status=true;
        }
        else{
            document.getElementById("n2").innerHTML="Enter characters only";
        }
    }

    if(email2===""){
        document.getElementById("e2").innerHTML="Please enter email address";
    }
    else{
        if(email2.match(email2Exp)){
            document.getElementById("e2").innerHTML="";
            email2Status=true;
        }
        else{
            document.getElementById("e2").innerHTML="Invalid email ex: abcd@gmail.com";
        }
    }

    if(phone2===""){
        document.getElementById("p2").innerHTML="Please enter number";
    }
    else{
        if(phone2.match(phone2Exp)){
            if(phone2.length===10){
                document.getElementById("p2").innerHTML="";
                phone2Status=true;
            }
            else{
                document.getElementById("p2").innerHTML="enter 10 numbers only";
            }
        }
        else{
            document.getElementById("p2").innerHTML="Please enter digits only";
        }
    }
    if(name2Status===true && email2Status===true && phone2Status===true){
        return true;
    }
    else{
        return false;
    }
}

// -----------------------------------------payment validation---------------------------------------
function onlinepayment(){
    let amount=document.getElementById("amount3").value;
    let name3=document.getElementById("name3").value;
    let email3=document.getElementById("email3").value;
    let phone3=document.getElementById("phone3").value;
    const amountExp=/^[0-9]+$/;
    const charExp=/^[a-zA-Z]+$/;
    const email3Exp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let amountStatus=false;
    let name3Status=false;
    let email3Status=false;
    let phone3Status=false;

    if(amount===""){
        document.getElementById("payment").innerHTML="Please enter amount";
    }
    else{
        if(amount.match(amountExp)){
            document.getElementById("payment").innerHTML="";
            amountStatus=true;
        }
        else{
            document.getElementById("payment").innerHTML="Please enter only digits";
        }
    }

    if (name3===""){
        document.getElementById("namepayment").innerHTML="Please enter name";
    }
    else{
        if(name3.match(charExp)){
            document.getElementById("namepayment").innerHTML="";
            name3Status=true;
        }
        else{
            document.getElementById("namepayment").innerHTML="Please enter only characters";
        }
    }

    if (email3===""){
        document.getElementById("emailpayment").innerHTML="Please enter email";
    }
    else{
        if(email3.match(email3Exp)){
            document.getElementById("emailpayment").innerHTML="";
            email3Status=true;
        }
        else{
            document.getElementById("emailpayment").innerHTML="Invalid email ex: abcd@gmail.com";
        }
    }

    if (phone3===""){
        document.getElementById("phonepayment").innerHTML="Please enter number";
    }
    else{
        if(phone3.match(amountExp)){
            if(phone3.length===10){
                document.getElementById("phonepayment").innerHTML="";
                phone3Status=true;
            }
            else{
                document.getElementById("phonepayment").innerHTML="enter 10 digits only";
            }
        }
        else{
            document.getElementById("phonepayment").innerHTML="enter only digits";
        }
    }


    if(amountStatus===true && name3Status===true && email3Status===true && phone3Status===true ){
        return true;
    }
    else{
        return false;
    }


}

// ------------------------------------------