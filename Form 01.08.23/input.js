function inputs(event){
    event.preventDefault();
    var Username = document.getElementById("Username").value;
    var Surname = document.getElementById("Surname").value;
    var Password = document.getElementById("Password").value;
    var Country = document.getElementById("Country").value;
    var gender = document.querySelector("input[name='gender']:checked");


    // Reusable function
    function validateInputs(inputIds, outputId) {
        for (var i = 0; i < inputIds.length; i++) {
            var input = document.getElementById(inputIds[i]);
            if (input.value == "") {
                    var output = document.getElementById(outputId);
                    output.innerHTML = "<span style='color:red'>Please choose a value for " + inputIds[i] + "</span>";
                    return false;
                    }
                }
                return true;
            }

        if (gender != null) {
            gender = document.querySelector("input[name='gender']:checked").value;
            document.getElementById("paragraph").innerHTML = "";
        } 
        else { 
            document.getElementById("paragraph").innerHTML = "<span style='color:red'>Please pick a gender </span>";
            return false; 
        }
    
   
    validateInputs(["Username","Surname", "Password", "Country"], "paragraph");
    // First method

    // if (document.getElementById("userName").value == "") {
    //     document.getElementById("paragraph").innerHTML ="Username must have a value.";
    //     return false;
    // }

    // if (document.getElementById("userSurname").value == "") {
    //     document.getElementById("paragraph").innerHTML ="Surname must have a value.";
    //     return false;
    // }

    // if (document.getElementById("userPassword").value == "") {
    //     document.getElementById("paragraph").innerHTML ="Password must have a value.";
    //     return false;
    // }

    // if (document.getElementById("country").value == "") {
    //     document.getElementById("paragraph").innerHTML ="You must choose a country.";
    //     return false;
    // }
    
    // if (gender != null) {
    //     gender = document.querySelector("input[name='gender']:checked").value;
    //     document.getElementById("paragraph").innerHTML = "";
    // } 
    // else { 
    //     document.getElementById("paragraph").innerHTML = "You must choose a gender.";
    //     return false; 
    // }
    
    myObject = {Username,Surname,Password,Country,gender};

    myArray = [];

    myArray.push(myObject);

    localStorage.setItem("Input-Form",JSON.stringify(myObject));
}

