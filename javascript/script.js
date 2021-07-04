$("#order").on("click", function (e) {
    e.preventDefault();   

    var fname = $("#inputFName").val();
    var lname = $("#inputLName").val();
    var addr1 = $("#inputAddress").val();
    var addr2 = $("#inputAddress2").val();
    var city = $("#inputCity").val();
    var state = $("#state").val();
    var zip = $("#inputZip").val();
    var email = $("#inputEmail").val();
    var phone = $("#phoneNumber").val();
    var radio = $("#exampleRadios1").val();

    console.log(fname);

    if (fname == "" || lname == ""  || addr1 == ""  || city == ""  || state == ""  || zip == ""  || email == ""  || phone == "" ){
        alert("All * inputfields must be filled to place your order");
    }

    if (!email.match(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/i)) {
        alert("Invalid email address");
    }

    if (!zip.match(/^[0-9]+$/) || zip.length != 5) {
        alert("Invalid zip code");
    }

    if (!phone.match(/^[0-9]+$/) || phone.length != 10) {
        alert("Invalid phone number");
    }
});