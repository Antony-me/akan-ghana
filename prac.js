Function getAkanName () {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var maleAkanNames = ["Kwasi, Kwadwo, Kwabena, Kwaku, Yaw,  Kofi, Kwame"];
    var femaleAkanNames =["Akosua","Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];
    var myBirthday = document.getElementById("myBirthday").value;
    var myName = document.getElementById("myName").value;
    var gender = document.getElementsByName("gender");
    var dateOfBirth = new Date(myBirthday);
    var dayOfTheWeek = dateOfBirth.getDay();
    if (myBirthday === ""){
        document.getElementById("message").innerHTML = "Sorry but Date is required"
    }
    else

    }
}
