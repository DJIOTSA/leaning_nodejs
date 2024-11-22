const btn = document.querySelector('button')


async function fetchData(url, options) {
    // manage the  request
    try {
        const response = await fetch(url, options)
        if (response.ok) {
            const response_data = await response.json()
            console.log('\n\n APIfetch\n\n')
            console.log(`Performing a ${options.method} request`)
            console.log(response_data)

        }
    } catch (err) {
        console.log(err)
        return
    }
}

// fetch API
const APIfetch = (url, api_method, data) => {
    /*
        javascript client to test all my nodejs rest API 
     */
    let default_methods = [
        'GET',
        'POST',
        'DELETE',
        'PUT',
        'PATCH',
    ]

    let option = {}

    // uppercase the method
    api_method = api_method.toString().toUpperCase()

    switch (api_method) {
        case "GET":
            option = {
                method: api_method,
                headers: {
                    'Content-Type': "application/json"
                },
            }
            break;
        case "POST":
            option = {
                method: api_method,
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(data),
            }
            break;
        case 'PUT':
            option = {
                method: api_method,
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(data)
            }
            break;
        case 'PATCH':
            option = {
                method: api_method,
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(data)
            }
            break;
        case "DELETE":
            option = {
                method: api_method,
                headers: {
                    'Content-Type': "application/json"
                },
            }
            break;
        default:
            console.log('\n\n APIfetch\n\n')
            console.log(`Performing a '${api_method} request' which is invalid`)
            console.log("Invalid method! Valid method:", default_methods)
            return
    }


    fetchData(url, option)

}



// // testing our APIfetch function
let gpUrl = "/api/people/";
let ppdUrl = '/api/people/2'

async function testAPI(url) {
    const options = {
        method: 'GET',
        headers: { "Content-Type": ['application/json', 'text/html'] }
    }
    const response = await fetch(url, options)
    if (response.ok) {
        const data = await response.json()
        console.log(data)
    }
}

// let start the testing phase
btn.addEventListener('click', () => {
    document.querySelector('.test').textContent = "hello"
    // get test
    APIfetch(gpUrl, 'get')
    // post test
    APIfetch(gpUrl, 'post', { name: "christian" })
    // put test
    APIfetch(ppdUrl, 'PUT', {name: "yaounde"})
    // patch test
    // APIfetch(ppdUrl, 'patch', {name: "daryn"})
    // delete test
    // APIfetch(ppdUrl, 'delete')

})


