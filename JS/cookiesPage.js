let cookiesClick = document.querySelector(".cookiesClick");
let cookiesContent = document.querySelector(".cookiesContent");
let accept = document.querySelector("#accept");


cookiesContent.innerHTML ="We use cookies Micro Focus uses cookies to give you the best online experience. If you continue to use this site, you agree to the use of cookies."

cookiesClick.addEventListener('click', function () {
    
    if (cookiesClick.innerHTML === "Accept Cookies") {
        cookiesClick.innerHTML = "Revoke Cookies";

        cookiesContent.innerHTML = "Cookies were accepted. Would you like to revoke? ";

        let revokeLink = document.getElementById("revoke");
        revokeLink.addEventListener('click', function () {
            cookiesClick.innerHTML = "Accept Cookies";
            cookiesContent.innerHTML = "We use cookies Micro Focus uses cookies to give you the best online experience. If you continue to use this site, you agree to the use of cookies.";
        });
    } else  {
        cookiesClick.innerHTML = "Accept Cookies";
        cookiesContent.innerHTML = "Wuse cookies Micro Focus uses cookies to give you the best online experience. If you continue to use this site, you agree to the use of cookies. ";
    }
});




