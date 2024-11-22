
const get = document.querySelector("#get");
const getOne = document.querySelector("#get-one");
const post = document.querySelector("#post");
const put = document.querySelector("#put");
const patch = document.querySelector("#patch");
const del = document.querySelector("#delete");
const display = document.querySelector("ol");

const default_methods = ["GET", "POST", "PATCH", "PUT", "DELETE"];

// fetch function
const api = async (url, options) => {
  /* Fetch function helper function 
    Possible response:
        - SUCCESS: json object
        - FAILURE: null
    */
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      let data = await response.json();
      let p = document.createElement("p");
      p.textContent = data.MSG;
      display.append(p);
      return;
    }
  } catch (err) {
    console.log(`The following error occurs: ${err}.`);
    return null;
  }
};

// api fetch function
const APIfetch = async (url, method, body_data) => {
  /* APIFetch function accepts the following http request type:
        - GET
        - POST
        - PATCH
        - PUT
        - DELETE
    */
  const options = {
    headers: { "Content-Type": "application/json" },
  };
  try {
    // set
    method = method.toUpperCase();
    let data;
    switch (method) {
      case "GET":
        options["method"] = method;
        data = await api(url, options);
        console.log(data)
        display.textContent = '';
        if (data) {
          if (data.SUCCESS) {
            data.results.forEach((item) => {
              let li = document.createElement("li");
              li.innerHTML = `<strong>ID:\t${item.id}<br>Name:\t${item.name}</strong> <br><strong>desc</strong>:\t${item.desc}<br><strong>image:</strong>\t${item.image}<br><strong>Price</strong>:\t$${item.price}`;
              display.append(li);
            });
          } else {
            let li = document.createElement("li");
            li.textContent = data.MSG
            display.append(li)
            return;
          }
        }
        break;
      case "POST":
        options["method"] = method;
        options["body"] = JSON.stringify(body_data);
        display.textContent = '';
        data = await api(url, options);
        if (data) {
          if (data.SUCCESS) {
            data.results.forEach((item) => {
              let li = document.createElement("li");
              li.innerHTML = `<strong>ID:\t${item.id}<br>Name:\t${item.name}</strong> <br><strong>desc</strong>:\t${item.desc}<br><strong>image:</strong>\t${item.image}<br><strong>Price</strong>:\t$${item.price}`;
              display.append(li);
              return;
            });
          } else {
            let li = document.createElement("li");
            li.textContent = data.MSG;
            display.append(li);
          }
        }
        break;
      case "PATCH":
        options["method"] = method;
        options["body"] = JSON.stringify(body_data);
        display.textContent = '';
        data = await api(url, options);
        if (data) {
          if (data.SUCCESS) {
            data.results.forEach((item) => {
              let li = document.createElement("li");
              li.innerHTML = `<strong>ID:\t${item.id}<br>Name:\t${item.name}</strong> <br><strong>desc</strong>:\t${item.desc}<br><strong>image:</strong>\t${item.image}<br><strong>Price</strong>:\t$${item.price}`;
              display.append(li);
              return;
            });
          } else {
            let li = document.createElement("li");
            li.textContent = data.MSG;
            display.append(li);
          }
        }
        break;
      case "PUT":
        options["method"] = method;
        options["body"] = JSON.stringify(body_data);
        display.textContent = '';
        data = await api(url, options);
        if (data) {
          if (data.SUCCESS) {
            data.results.forEach((item) => {
              let li = document.createElement("li");
              li.innerHTML = `<strong>ID:\t${item.id}<br>Name:\t${item.name}</strong> <br><strong>desc</strong>:\t${item.desc}<br><strong>image:</strong>\t${item.image}<br><strong>Price</strong>:\t$${item.price}`;
              display.append(li);
              return;
            });
          } else {
            let li = document.createElement("li");
            li.textContent = data.MSG;
            display.append(li);
          }
        }
        break;
      case "DELETE":
        options["method"] = method;
        display.textContent = '';
        data = await api(url, options);
        if (data) {
          if (data.SUCCESS) {
            data.results.forEach((item) => {
              let li = document.createElement("li");
              li.innerHTML = `<strong>ID:\t${item.id}<br>Name:\t${item.name}</strong> <br><strong>desc</strong>:\t${item.desc}<br><strong>image:</strong>\t${item.image}<br><strong>Price</strong>:\t$${item.price}`;
              display.append(li);
              return;
            });
          } else {
            let li = document.createElement("li");
            li.textContent = data.MSG;
            display.append(li);
          }
        }
        break;
      default:
        console.log(
          `Invalid request method. \n Accepted methods are:\t${default_methods}`
        );
        alert(
          `Invalid request method. \n Accepted methods are:\t${default_methods}`
        );
        break;
    }
  } catch (err) {
    console.log(`The following error occur: ${err}`);
    alert(`The following error occur: ${err}`);
  }
};


// get all the products
get.addEventListener('click', () => {
  let url = '/api/products/v1/'
  APIfetch(url, 'get')
})
// get one product
getOne.addEventListener('click', () => {
  let url = '/api/products/v1/4'
  APIfetch(url, 'get')
})
// post product
post.addEventListener('click', () => {
  let url = '/api/products/v1'
  APIfetch(url, 'post', { name: 'laptop', image: 'https://my-galery/post/image.png', price: 2500, desc: "description of the added product." })
})
// patch product
patch.addEventListener('click', () => {
  let url = '/api/products/v1/3'
  APIfetch(url, 'patch', { price: 237.237, image: "https://patch/hello/image-patch/img.png" })
})
// put product
put.addEventListener('click', () => {
  let url = '/api/products/v1/2'
  APIfetch(url, 'put', { name: 'laptop', image: 'https://my-galery/post89/image7.png', price: 250.90, desc: "description of the updated(put) product." })
})
// delete product
del.addEventListener('click', () => {
  let url = '/api/products/v1/1'
  APIfetch(url, 'delete')
})

