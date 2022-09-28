const api_url = "https://api.adviceslip.com/advice";
async function getAdvice() {
    let response = await fetch(api_url);
    let data = await response.json();
    return data;
}

function displayAdvice() {
    getAdvice().then(data => {
        document.getElementById("adviceId").innerHTML = data.slip.id;
        document.getElementById("advice").innerHTML = data.slip.advice;
    });
}