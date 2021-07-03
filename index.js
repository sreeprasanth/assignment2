let first = document.getElementById("firstname");
let firstl = document.getElementById("firstlab");
function validation(){
    let regexp = /^([A-Za-z]+)$/;
    if(regexp.test(first.value)){
    firstl.innerHTML = "first name valid";
    firstl.style.coler = "green";
    first.style.background = "green";
    return true;
}
else{
    firstl.innerHTML = "first name not valid";
    firstl.style.color = "red";
    first.style.background = "red";
    return false;
}
}
let last = document.getElementById("lastname");
 let lastl = document.getElementById("lastlab");
 function validate(){
    let exp = /^([A-Za-z]+)$/;

if(exp.test(last.value)){
    lastl.innerHTML = "Last name valid";
    lastl.style.coler = "green";
    last.style.background = "green";
    return true;
}
else{
    lastl.innerHTML = "Last name not valid";
    lastl.style.color = "red";
    last.style.background = "red";
    return false;
}
}
let emaili = document.getElementById("emailid");
 let emailinn = document.getElementById("emailin")
function emailvalidation(){
    let emaexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    if(emaexp.test(emaili.value)){
      emailinn.innerHTML = "email is valid";
      emailinn.style.color = "green";
      emaili.style.background = "green";
      return true;
    }
    else{
           emailinn.innerHTML = "email is not valid";
           emailinn.style.color = "red";
           emaili.style.background = "red";
           return false;
    }
}
 let ph = document.getElementById("phon");
 let pho = document.getElementById("phone");
 function phonevalidation(){
     let phonenexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
     if(phonenexp.test(ph.value)){
        pho.innerHTML = "phone number is valid";
        pho.style.coler = "green";
        ph.style.background = "green";
        return true;
    }
    else{
        pho.innerHTML = "phone number not valid";
        pho.style.color = "red";
        ph.style.background = "red";
        return false;
    }
 }
 let typw = document.getElementById("typ");
  let typws = document.getElementById("typa");
  function passwordvalidation(){
    regexppswd = /^([A-Z]+)([a-z]+)([0-9]+)$/;
    if(regexppswd.test(typw.value) && typw.value.length>=8){
     typws.innerHTML = "your password is strong now";
     typws.style.color = "green";
     typw.style.background = "green";
      return true;
    }
    else{
      typws.innerHTML = "password must need 8 character in the combination of uppercase alphabets followed by lowercase aplhabets and must end with a number"; 
      typws.style.color = "red";
      typw.style.background = "red";
      return false;
    }
  }

  let co = document.getElementById("confirm");
   let coi = document.getElementById("confpi");
   function confirmpassword(){
     if(typw.value == co.value){
       
       return true;
     }
     else{
       coi.innerHTML = "password mismatches";
       coi.style.color = "red";
       co.style.background = "red";
       return false;
     }
   }
    








  // function passwordvalidation(){
  //   let regexpweak = /^([a-z]+)$/;
  //  let regexpmedium = /^([A-Za-z]+)$/;
  //  let regexpstrong = /^([A-Za-z0-9]+)$/;
  //  if(regexpweak.test(typw.value) || typw.value.length<=7){
  //    typws.innerHTML = "your password is too weak it must contains minimum 8 leters, and must contain 1 uppercase letter, 1 lowercase letter and 1 number";
  //    typws.style.color = "red";
  //    typw.style.background = "red";
  //   return false;
  //  }
  //   else if(regexpmedium.test(typw.value) || typw.validate.length<=7){
  //    typws.innerHTML = "your password is medium it must contains minimum 8 leters,and a number";
  //    typws.style.color = "orange";
  //    typw.style.background = "orange";
  //   return false;
 
  // }
  //  else if(regexpstrong.test(typw.value) || typw.value.length<=7){
  //     typws.innerHTML = "your password needs to be some more strong, it must contains minimum 8 leters and a symbol";
  //     typws.style.color = "yellow";
  //     typw.style.background = "yellow";
  //    return false;
  //   }
  //   else{
  //     typws.innerHTML = "your password is strong now";
  //     typws.style.color = "green";
  //     typw.style.background = "green";
  //     return true;
  //   } }
  //   let  confp = document.getElementById("confirm");
  //         let confpa = document.getElementById("confpi")
  //         function confirmvalidation(){
  //             if(typw.value != confp.value){
  //                confpa.innerHTML = "password mismatches";
  //                confpa.style.color = "red";
  //                confp.style.background = "red";
  //                return false;
  //             }
  //             else{
  //                 confpa.style.color = "green";
  //                 confp.style.background = "green";
  //                 return true;
  //             }
  //              }












































// let typw = document.getElementById("typ");
//  let typws = document.getElementById("typa");
//   // let weaa = document.getElementById("wea");
//  function passwordvalidation(){
//    let regexpweak = /^([a-z]+)$/;
//   let regexpmedium = /^([A-Za-z]+)$/;
//   let regexpstrong = /^([A-Za-z0-9]+)$/;
//   if(regexpweak.test(typw.value) || typw.value.length<=7){
//     typws.innerHTML = "your password is too weak it must contains minimum 8 leters, and must contain 1 uppercase letter, 1 lowercase letter and 1 number";
//     typws.style.color = "red";
//     typw.style.background = "red";
//    return false;
//   }
//    else if(regexpmedium.test(typw.value) || typw.validate.length<=7){
//     typws.innerHTML = "your password is medium it must contains minimum 8 leters,and a number";
//     typws.style.color = "orange";
//     typw.style.background = "orange";
//    return false;

//   }
//  else if(regexpstrong.test(typw.value) || typw.value.length<=7){
//     typws.innerHTML = "your password needs to be some more strong, it must contains minimum 8 leters and a symbol";
//     typws.style.color = "yellow";
//     typw.style.background = "yellow";
//    return false;
//   }
//   else{
//     typws.innerHTML = "your password is strong now";
//     typws.style.color = "green";
//     typw.style.background = "green";
//     return true;
//   } 
// }
// let  confp = document.getElementById("confirm");
//           let confpa = document.getElementById("confpi")
//           function confirmvalidation(){
//               if(typw.value != confp.value){
//                  confpa.innerHTML = "password mismatches";
//                  confpa.style.color = "red";
//                  confp.style.background = "red";
//                  return false;
//               }
//               else{
//                   confpa.style.color = "green";
//                   confp.style.background = "green";
//                   return true;
//               }
//                }









            //    if(regexpweak.test(typw.value) || typw.value.length<=7){
            //     typws.innerHTML = "your password is too weak it must contains minimum 8 leters, and must contain 1 uppercase letter, 1 lowercase letter and 1 number";
            //     typws.style.color = "red";
            //     typw.style.background = "red";
            //    return false;
            //   }
            //    else if(regexpmedium.test(typw.value) || typw.value.length<=7){
            //     typws.innerHTML = "your password is medium it must contains minimum 8 leters,and a number";
            //     typws.style.color = "orange";
            //     typw.style.background = "orange";
            //    return false;
            
            //   }
            //  else if(regexpstrong.test(typw.value) || typw.value.length<=7){
            //     typws.innerHTML = "your password needs to be some more strong, it must contains minimum 8 leters and a symbol";
            //     typws.style.color = "yellow";
            //     typw.style.background = "yellow";
            //    return false;
            //   }
            //   else{
            //     typws.innerHTML = "your password is strong now";
            //     typws.style.color = "green";
            //     typw.style.background = "green";
            //     return true;
            //   } 
            // }















//  const indicator = document.querySelector(".indicator");
//          const input = document.querySelector("input");
//          const weak = document.querySelector(".weak");
//          const medium = document.querySelector(".medium");
//          const strong = document.querySelector(".strong");
//          const text = document.querySelector(".text");
//          const showBtn = document.querySelector(".showBtn");
//          let regExpWeak = /[a-z]/;
//          let regExpMedium = /\d+/;
//          let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
//          function trigger(){
//            if(input.value != ""){
//              indicator.style.display = "block";
//              indicator.style.display = "flex";
//              if(input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
//              if(input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
//              if(input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;
//              if(no==1){
//                weak.classList.add("active");
//                text.style.display = "block";
//                text.textContent = "Your password is too week";
//                text.classList.add("weak");
//              }
            //  if(no==2){
            //    medium.classList.add("active");
            //    text.textContent = "Your password is medium";
            //    text.classList.add("medium");
            //  }else{
            //    medium.classList.remove("active");
            //    text.classList.remove("medium");
            //  }
            //  if(no==3){
            //    weak.classList.add("active");
            //    medium.classList.add("active");
            //    strong.classList.add("active");
            //    text.textContent = "Your password is strong";
            //    text.classList.add("strong");
            // }else{
            //     strong.classList.remove("active");
            //     text.classList.remove("strong");
            //   }
            //   showBtn.style.display = "block";
            //   showBtn.onclick = function(){
            //     if(input.type == "password"){
        //           input.type = "text";
        //           showBtn.textContent = "HIDE";
        //           showBtn.style.color = "#23ad5c";
        //         }else{
        //           input.type = "password";
        //           showBtn.textContent = "SHOW";
        //           showBtn.style.color = "#000";
        //         }
        //       }
        //     }else{
        //       indicator.style.display = "none";
        //       text.style.display = "none";
        //       showBtn.style.display = "none";
        //     }
        //   }
        //  let  confp = document.getElementById("confirm");
        //   let confpa = document.getElementById("confpi")
        //   function confirmvalidation(){
        //       if(input.value != confp.value){
        //          confpa.innerHTML = "password mismatches";
          //        confp.style.color = "red";
          //        return false;
          //     }
          //     else{
          //         confp.style.color = "green";
          //         return true;
          //     }
             

          // }
















































//  const indicator = document.querySelector(".indicator");
//  const input = document.querySelector(".zoo");
//  const weak = document.querySelector(".weak");
//  const medium = document.querySelector(".medium");
//  const strong = document.querySelector(".strong");
//  const text = document.querySelector(".text");
// let regexpweak = /[a-z]/;
// let regexpmedium = /\d+/;
// let regexpstrong = /.[!,@,#,$]/;
//  function trigger(){
    // if(input.value !=" "){
    //   indicator.style.display = "block";
    //   indicator.style.display = "flex";
    //   if(input.length <=3 && (input.value.match(regexpweak) || input.value.match(regexpmedium) || input.value.match(regexpstrong)))no=1;
    //   if(input.length >=6 && ((input.value.match(regexpweak) && input.value.match(regexpmedium)) || (input.value.match(regexpmedium) && input.value.match(regexpstrong)) || (input.value.match(regexpweak) && input.value.match(regexpstrong))))no=2; 
    //  if(input.length >=6 && input.value.match(regexpweak) && input.value.match(regexpmedium) && input.value.match(regexpstrong))no=3;
    
    //   if(no == 1){
    //     weak.classList.add("active");
    //     text.style.display = "block";
    //     text.textContent = "your password is too weak";
    //     text.classList.add("weak");
    // }
    // if(no == 2){
    //     medium.classList.add("active");
    //     text.textContent = "your password is Medium";
    //     text.classList.add("medium");
    // }else{
    //     medium.classList.remove("active");
    //     text.classList.remove("medium");
    // }
    // if(no == 3){
    //     medium.classList.add("active");
    //     strong.classList.add("active");
    //     text.textContent = "your password is strong";
    //     text.classList.add("strong");
    // }else{
    //     strong.classList.remove("active");
    //     text.classList.remove("medium");

    // }
      
    
//     }else{
// indicator.style.display = "none";
// text.style.display = "none";
//     }
// }

//  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/


// /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 










//     if(regexp.test(first.value)){
//     firstl.innerHTML = "first name valid";
//     firstl.style.coler = "green";
//     first.style.background = "green";
//     return true;
// }
// else{
//     firstl.innerHTML = "first name not valid";
//     firstl.style.color = "red";
//     first.style.background = "red";
//     return false;
// }
// }





































// let last = document.getElementById("lastname");
//  let lastl = document.getElementById("lastlab");
//  function validate(){
//     let exp = /^([A-Za-z]+)$/;

// if(exp.test(last.value)){
//     lastl.innerHTML = "Last name valid";
//     lastl.style.coler = "green";
//     last.style.background = "green";
//     return true;
// }
// else{
//     lastl.innerHTML = "Last name not valid";
//     lastl.style.color = "red";
//     last.style.background = "red";
//     return false;
// }
// }
