document.getElementById("mySubmit").onclick = function(event){
    event.preventDefault(); // Prevent form submission
    let f_name = document.getElementById("first").value;
    let l_name = document.getElementById("last").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    let DOB = document.getElementById("d").value;

    console.log("First name:", f_name);
    console.log("Last name:", l_name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("DOB:", DOB);
}
