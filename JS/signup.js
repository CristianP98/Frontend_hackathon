function register() {
    var type = document.getElementsByName("ong-empresa");
    var username = document.getElementById("username").value;
    var sector = document.getElementById("sector").value;
    var email = document.getElementById("email").value;
    var ubication = document.getElementById("ubication").value;
    var password = document.getElementById("password").value;
    let finalType

    if (type[0].checked) {
        finalType = type[0].value
    }
    else if (type[1].checked) {
        finalType = type[1].value
    }
    alert(finalType);
}