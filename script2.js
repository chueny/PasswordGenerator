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

     do{
            pwdcriteria.len = prompt ("How long would you like the password to be? (Must be greater than 8 or less then 128 characters.)");
        }    
     while(pwdcriteria.len < 8 || pwdcriteria.len > 128);
            pwdcriteria.lc = confirm ("Would you like a lowercase?");
            pwdcriteria.uc = confirm ("Would you like a uppercase?");
            pwdcriteria.num = confirm ("Would you like a number?");
            pwdcriteria.spec = confirm ("Would you like a special character?"); 

    
    var password = "";
    var randomindex = 0;

    while (password.length < pwdcriteria.len){
        
        if (pwdcriteria.lc == true && password.length < pwdcriteria.len){
        randomindex = Math.floor(Math.random() * lowercase.length);
        password = password +lowercase[randomindex];
        }

        if (pwdcriteria.uc == true && password.length < pwdcriteria.len){
        randomindex = Math.floor(Math.random() * uppercase.length);
        password = password +uppercase[randomindex];
        }
    
        if (pwdcriteria.num == true && password.length < pwdcriteria.len){
        randomindex = Math.floor(Math.random() * number.length);
        password = password +number[randomindex];
        }

        if (pwdcriteria.spec == true && password.length < pwdcriteria.len){
        randomindex = Math.floor(Math.random() * special.length);
        password = password +special[randomindex];
        }
                     
    }
     alert("Password is "+ password);

   }