function inputs(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var country = document.getElementById("country").value;
    var city = document.getElementById("city").value;
    var work_setting = document.querySelector("input[name='work_setting']:checked").value;

    myObject = {name,surname,country,city,work_setting};

    var myArray = [];

    myArray.push(myObject);

    localStorage.setItem("Input-Form",JSON.stringify(myObject));
}