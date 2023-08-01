function inputs(event){
    event.preventDefault();
    var userName = document.getElementById("userName").value;
    var userSurname = document.getElementById("userSurname").value;
    var userPassword = document.getElementById("userPassword").value;
    var country = document.getElementById("country").value;
    var gender = document.querySelector("input[name='gender']:checked");

    if (gender != null) {
        gender = document.querySelector("input[name='gender']:checked").value;
    } 
    else { 
        alert("You must choose a gender.");
        return false; 
    }

    if (document.getElementById("userName").value == "") {
        alert("Username must have a value.");
        return false;
    }

    if (document.getElementById("userSurname").value == "") {
        alert("Surname must have a value.");
        return false;
    }

    if (document.getElementById("userPassword").value == "") {
        alert("Password must have a value.");
        return false;
    }

    if (document.getElementById("country").value == "") {
        alert("You must choose a country.");
        return false;
    }


    myObject = {userName,userSurname,userPassword,country,gender};

    myArray = [];

    myArray.push(myObject);

    localStorage.setItem("Input-Form",JSON.stringify(myObject));
}