const API_KEY = "2p5OiQNu9n2kPvPGCIl9kxbF45U";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));
document.getElementById("submit").addEventListener("click", e => postForm(e));

async function postForm(e) {
    const form = new FormData(document.getElementById("checksform"));

    const response =  await fetch(API_URL, {
                                method: "POST",
                                headers: {
                                    "Authorization": API_KEY,
                                },
                                body: form,
    });
}

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data.expiry);
    } else {
        throw new Error(data.error);
    }
}

function displayStatus(data) {
    let heading = document.getElementById("resultsModalTitle");
    let bodyText = document.getElementById("results-content");
    heading.innerHTML = "API Key Status";
    bodyText.innerHTML = "Your key is valid until 24-03-2025";

    resultsModal.show()
}
