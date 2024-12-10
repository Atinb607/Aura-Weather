// Google OAuth Client ID
const CLIENT_ID = "677625429692-tn3n6iudmebo1lngvm0a0mp8gc7ilobr.apps.googleusercontent.com"; // Replace with your actual Client ID

// Function to initialize Google Sign-In
function initializeGoogleLogin() {
    google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: handleGoogleResponse,
    });

    // Render the Google Sign-In button
    google.accounts.id.renderButton(
        document.querySelector(".google-signin-btn"), // Target the button by class
        {
            theme: "outline",
            size: "large",
            text: "signin_with",
        }
    );

    // Optionally enable auto-select for returning users
    google.accounts.id.prompt();
}

// Callback function to process the Google credentials
function handleGoogleResponse(response) {
    const idToken = response.credential; // Get the JWT from the response

    // Decode the JWT payload to extract user information
    const userDetails = decodeJwt(idToken);

    // Example: Log user details to the console
    console.log("User  Details:", userDetails);

    // Display a welcome message or redirect the user
    alert(`Welcome, ${userDetails.name}`);

    // Redirect to index.html after a successful login
    window.location.href = "index.html"; // Ensure the path is correct
}

// Utility function to decode the JWT
function decodeJwt(token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(decodeURIComponent(escape(atob(base64))));
}

// Load the Google Sign-In when the page loads
window.onload = initializeGoogleLogin;