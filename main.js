document.addEventListener("click", function (event) {
    // Checking if the button was clicked
    if (!event.target.matches("#button")) return;
  
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((data) => renderJoke(data))
        .catch(() => renderError());
  });

function renderJoke(data) {
    const setup = document.getElementById("setup");
    const punchline = document.getElementById("punchline");
    setup.innerHTML = data.setup;
    punchline.innerHTML = data.punchline;
    const error = document.getElementById("error");
  error.innerHTML = "";
}
function renderError() {
    const error = document.getElementById("error");
    error.innerHTML = "Whoops, something went wrong. Please try again later!";
}


// Here we're using 
// the Fetch API to request our joke endpoint. 
// Like with Postman, the GET verb is the default, 
// so we don't need to specify that. fetch() will send 
// his request, and when it resolves or completes, it will pass 
// the response data to our first .then().