function inputs(event) {
    event.preventDefault();
    var userName = document.getElementById("username").value;
    var userPassword = document.getElementById("password").value;
    var city = document.getElementById("city").value;
    var gender = document.querySelector("input[name='gender']:checked").value;

    myObject = {userName,userPassword,city,gender};

    var myArray = [];

    myArray.push(myObject);

    localStorage.setItem("Input-Form",JSON.stringify(myObject));
}