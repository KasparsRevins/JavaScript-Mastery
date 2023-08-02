function inputs(event){
    event.preventDefault();
    var userName = document.getElementById("userName").value;
    var userSurname = document.getElementById("userSurname").value;
    var userPassword = document.getElementById("userPassword").value;
    var country = document.getElementById("country").value;
    var gender = document.querySelector("input[name='gender']:checked");

    if (document.getElementById("userName").value == "") {
        document.getElementById("paragraph").innerHTML ="Username must have a value.";
        return false;
    }

    if (document.getElementById("userSurname").value == "") {
        document.getElementById("paragraph").innerHTML ="Surname must have a value.";
        return false;
    }

    if (document.getElementById("userPassword").value == "") {
        document.getElementById("paragraph").innerHTML ="Password must have a value.";
        return false;
    }

    if (document.getElementById("country").value == "") {
        document.getElementById("paragraph").innerHTML ="You must choose a country.";
        return false;
    }
    
    if (gender != null) {
        gender = document.querySelector("input[name='gender']:checked").value;
        document.getElementById("paragraph").innerHTML = "";
    } 
    else { 
        document.getElementById("paragraph").innerHTML = "You must choose a gender.";
        return false; 
    }


    myObject = {userName,userSurname,userPassword,country,gender};

    myArray = [];

    myArray.push(myObject);

    localStorage.setItem("Input-Form",JSON.stringify(myObject));
}