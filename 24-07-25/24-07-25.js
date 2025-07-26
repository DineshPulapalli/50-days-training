let inputElement=document.getElementById("inputElement")
let signInText=document.getElementById("signInText")
function signIn() {
    let value=inputElement.value;
    let statement="Hi "+value+"!. Verifying your account. . . ."
    signInText.textContent=statement
}
 