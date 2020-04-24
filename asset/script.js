
function randomInteger(maxInteger){ // function that generates a random integer from 0 to the input parameter called
                                    // maxInteger, which assumed to be an integer
    return Math.floor(Math.random() * maxInteger);
}

function main(){

    lowercase = "abcdefghijklmnopqrstuvwxyz";
    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    number = "0123456789";
    special= "!@#$%&*(){}[]\|_+=-?>";

    pwdcriteria ={
        len : 0,
        lc : false,
        uc : false,
        num : false,
        spec : false, 
    }

    
    pwdcriteria.len = prompt ("How many characters would you like? (Must be more than 8 and no more than 128 characters?)");
   
    var password = "";
    var randomindex = 0;


    if (pwdcriteria.len > 7 && pwdcriteria.len < 129){
        pwdcriteria.lc = confirm ("Would you like an lowercase?");
        pwdcriteria.uc = confirm ("Would you like an uppercase?");
        pwdcriteria.num = confirm ("Would you like a number?");
        pwdcriteria.spec = confirm ("Would you like a special character?");

        for (var i = 0; i < pwdcriteria.len; i++){
            if (pwdcriteria.lc == true && password.length < pwdcriteria.len){
             randomindex = randomInteger(lowercase.length);
             password = password +lowercase[randomindex];
             }
 
             if (pwdcriteria.uc == true && password.length < pwdcriteria.len){
             randomindex = randomInteger(uppercase.length);
             password = password +uppercase[randomindex];
             }
 
             if (pwdcriteria.spec == true && password.length < pwdcriteria.len){
                 randomindex = randomInteger(special.length);
                 password = password +special[randomindex];
             }
 
             if (pwdcriteria.num == true && password.length < pwdcriteria.len){
             randomindex = randomInteger(number.length);
             password = password + number[randomindex];
             }
  
         }
         
         var passwordInfo = document.getElementById("passwordInfo");
         passwordInfo.style.display = "block";
         var generatedPassword = document.getElementById("generatedPassword");
         generatedPassword.innerHTML = password;
    }
    else {
        alert("Your number must be between 8 and 128!");

    }

}