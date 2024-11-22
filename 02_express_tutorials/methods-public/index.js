
// html elements
const result = document.querySelector(".result");
const btn = document.querySelector(".submit-btn");
const input = document.querySelector("#name");
const formAlert = document.querySelector(".form-alert");
// define url
const url = '/api/people';


// fetch people function
const fetchPeople = async (url) => {
    try {
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const response = await fetch(url, options)

        if (response.ok) {
            const data = await response.json()
            const peopleTemplate = data.results.map((person) => {
                return `<h5>${person.name}</h5>`;
            });
            result.innerHTML = peopleTemplate.join("");
        } else {
            result.innerHTML = `<div class="alert alert-danger">Can't Fetch Data</div>`;
        }
    } catch (err) {
        result.innerHTML = `<div class="alert alert-danger">Can't Fetch Data</div>`;
    }
}
// fetch people
fetchPeople(url)


btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const name = input.value;

    try {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name})
        }
        
        const response = await fetch(url, options)
        if(response.ok){
            const data = await response.json()
            const h5 = document.createElement("h5");
            h5.textContent = data.person;
            console.log(h5.textContent)
            result.appendChild(h5);
        }
    } catch (error) {
        // console.log(error.response)
        console.log(error)
        console.log(error)
        formAlert.textContent = error.response.msg;
    }
    input.value = "";
});


