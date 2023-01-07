
// navigation bar slide

$(function () {
  $(".manu-bar").click(function () {
    $(".nav-bar").slideToggle();
  });
});


function validation() {
  var user = document.getElementById("name").value;
  var phone = document.getElementById("phone-num").value;
  var email = document.getElementById("email").value;


  if (user == "") {
    document.getElementById("username").innerHTML = "Name is required";
    return false;
  }

  if (phone == "") {
    document.getElementById("phonenumber").innerHTML = "Phone number is required";
    return false;
  }

  if (email == "") {
    document.getElementById("youremail").innerHTML = "Email is required";
    return false;
  }

  else {
    document.write ("<h1> congratulation Registration Successfull </h1>")
  }
}