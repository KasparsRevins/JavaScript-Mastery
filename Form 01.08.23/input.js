function inputs(event){
    event.preventDefault();
    const Username = document.getElementById("Username").value;
    const Surname = document.getElementById("Surname").value;
    const Password = document.getElementById("Password").value;
    const Country = document.getElementById("Country").value;
    let gender = document.querySelector("input[name='gender']:checked");
    // First method

    document.getElementById("Username").value == "" ? 
        document.getElementById("paragraph").innerHTML ="<span style='color:red'>Username must have a value.</span>" 
        : document.getElementById("paragraph").innerHTML ="";

    document.getElementById("Surname").value == ""  ?
        document.getElementById("paragraph2").innerHTML ="<span style='color:red'>Surname must have a value.</span>"
        : document.getElementById("paragraph2").innerHTML ="";

    document.getElementById("Password").value == "" ?
        document.getElementById("paragraph3").innerHTML ="<span style='color:red'>Password must have a value.</span>"
        : document.getElementById("paragraph3").innerHTML ="";

    document.getElementById("Country").value == "" ? 
        document.getElementById("paragraph4").innerHTML ="<span style='color:red'>You must choose a country.</span>"
        : document.getElementById("paragraph4").innerHTML ="";

    function genderRadioCheck() {
        gender = document.querySelector("input[name='gender']:checked").value;
        document.getElementById("paragraph5").innerHTML = "";
    }

    gender != null ?
        genderRadioCheck()
        : document.getElementById("paragraph5").innerHTML = "<span style='color:red'>You must choose a gender.</span>";

    // if (document.getElementById("Username").value == "") {
    //     document.getElementById("paragraph").innerHTML ="<span style='color:red'>Username must have a value.</span>";
        
    // }

    // if (document.getElementById("Surname").value == "") {
    //     document.getElementById("paragraph2").innerHTML ="<span style='color:red'>Surname must have a value.</span>";
        
    // }

    // if (document.getElementById("Password").value == "") {
    //     document.getElementById("paragraph3").innerHTML ="<span style='color:red'>Password must have a value.</span>";
        
    // }

    // if (document.getElementById("Country").value == "") {
    //     document.getElementById("paragraph4").innerHTML ="<span style='color:red'>You must choose a country.</span>";
        
    // }
    
    // if (gender != null) {
    //     gender = document.querySelector("input[name='gender']:checked").value;
    //     document.getElementById("paragraph5").innerHTML = "";
    // } 
    // else { 
    //     document.getElementById("paragraph5").innerHTML = "<span style='color:red'>You must choose a gender.</span>";
        
    // }
    
    myObject = {Username,Surname,Password,Country,gender};

    myArray = [];

    myArray.push(myObject);

    localStorage.setItem("Input-Form",JSON.stringify(myObject));
}

