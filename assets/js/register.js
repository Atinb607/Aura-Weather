// Google OAuth Client ID
const CLIENT_ID = "677625429692-tn3n6iudmebo1lngvm0a0mp8gc7ilobr.apps.googleusercontent.com";

// Initialize Google Sign-In
function initializeGoogleRegister() {
    google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: handleGoogleResponse,
    });

    google.accounts.id.renderButton(
        document.querySelector(".google-signin-btn"),
        {
            theme: "outline",
            size: "large",
            text: "signup_with",
        }
    );

    google.accounts.id.prompt();
}

// Handle Google OAuth Response
function handleGoogleResponse(response) {
    const idToken = response.credential;
    const userDetails = decodeJwt(idToken);

    console.log("User Details:", userDetails);
    alert(`Welcome to Aura Weather, ${userDetails.name}`);

    window.location.href = "index.html";
}

// Decode JWT
function decodeJwt(token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(decodeURIComponent(escape(atob(base64))));
}

window.onload = initializeGoogleRegister;
