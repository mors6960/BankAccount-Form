function show() {
    var fname = document.getElementById("fName").value;
    var mname = document.getElementById("mName").value;
    var lname = document.getElementById("lName").value;
    var fullName = fname + " " + mname + " " + lname;
    var age = calculateAge();
    var address = document.getElementById("address").value;
    var number = document.getElementById("number").value;
    var profession = "";
    var professionOptions = document.getElementsByName("profession");
    for (var i = 0; i < professionOptions.length; i++) {
        if (professionOptions[i].checked) {
            profession = professionOptions[i].value;
            break;
        }
    }
    var gender = " ";
    var genderOptions = document.getElementsByName("gender");
    for (i = 0; i < genderOptions.length; i++) {
        if (genderOptions[i].checked) {
            gender = genderOptions[i].value
            break;
        }
    }

    var option = " ";
    var optionOp = document.getElementsByName("option");

    for (i = 0; i < optionOp.length; i++) {
        if (optionOp[i].checked) {
            option += optionOp[i].value;
        }
    }

    alert("Full Name: " + fullName +
        "\nAge: " + age + " Years" +
        "\nGender: " + gender +
        "\nProfession: " + profession +
        "\nOptions: " + option +
        "\nAddress: " + address +
        "\nMobile Number: " + number);
}

function calculateAge() {
    var dobInput = document.getElementById("DOB").value;
    var dob = new Date(dobInput);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    return age;
}

function reset() {
    document.getElementById("fName").value = "";
    document.getElementById("mName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("DOB").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("student").checked = false;
    document.getElementById("job").checked = false;
    document.getElementById("business").checked = false;
    document.getElementById("credit").checked = false;
    document.getElementById("visa").checked = false;
    document.getElementById("debit").checked = false;
    document.getElementById("international").checked = false;
    document.getElementById("address").value = "";
    document.getElementById("number").value = "";
    document.getElementById("fName").focus();
}