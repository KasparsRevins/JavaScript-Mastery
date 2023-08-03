function inputs(event){
    event.preventDefault();
    var Username = document.getElementById("Username").value;
    var Surname = document.getElementById("Surname").value;
    var Password = document.getElementById("Password").value;
    var Country = document.getElementById("Country").value;
    var gender = document.querySelector("input[name='gender']:checked");


    // Reusable function
    // function validateInputs(inputIds, outputId) {
    //     for (var i = 0; i < inputIds.length; i++) {
    //         var input = document.getElementById(inputIds[i]);
    //         if (input.value == "") {
    //                 var output = document.getElementById(outputId);
    //                 output.innerHTML = "<span style='color:red'>Please choose a value for " + inputIds[i] + "</span>";
    //                 return false;
    //                 } else if (inputIds[i] == "gender") {
    //                     if (gender != null) {
    //                         gender = document.querySelector("input[name='gender']:checked").value;
    //                         document.getElementById("paragraph").innerHTML = "";
    //                     } 
    //                     else { 
    //                         document.getElementById("paragraph").innerHTML = "<span style='color:red'>Please pick a gender </span>";
    //                         return false; 
    //                     }
    //                 }
    //             }
        
    //             return true;
    //         }

        // if (gender != null) {
        //     gender = document.querySelector("input[name='gender']:checked").value;
        //     document.getElementById("paragraph").innerHTML = "";
        // } 
        // else { 
        //     document.getElementById("paragraph").innerHTML = "<span style='color:red'>Please pick a gender </span>";
        //     return false; 
        // }
    
   
    // validateInputs(["Username","Surname", "Password", "Country","gender"], "paragraph");
    
    // First method

    if (document.getElementById("Username").value == "") {
        document.getElementById("paragraph").innerHTML ="<span style='color:red'>Username must have a value.</span>";
        
    }

    if (document.getElementById("Surname").value == "") {
        document.getElementById("paragraph2").innerHTML ="<span style='color:red'>Surname must have a value.</span>";
        
    }

    if (document.getElementById("Password").value == "") {
        document.getElementById("paragraph3").innerHTML ="<span style='color:red'>Password must have a value.</span>";
        
    }

    if (document.getElementById("Country").value == "") {
        document.getElementById("paragraph4").innerHTML ="<span style='color:red'>You must choose a country.</span>";
        
    }
    
    if (gender != null) {
        gender = document.querySelector("input[name='gender']:checked").value;
        document.getElementById("paragraph5").innerHTML = "";
    } 
    else { 
        document.getElementById("paragraph5").innerHTML = "<span style='color:red'>You must choose a gender.</span>";
        
    }
    
    myObject = {Username,Surname,Password,Country,gender};

    myArray = [];

    myArray.push(myObject);

    localStorage.setItem("Input-Form",JSON.stringify(myObject));
}

