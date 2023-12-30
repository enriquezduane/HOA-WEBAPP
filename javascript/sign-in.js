


function showPassFunction(){

    var x = document.getElementsById("user-password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}