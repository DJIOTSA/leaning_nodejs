/*
Here are going to work on express parameters and query filtering
of api data. This will also include an example of nested filtering 

*/

const express = require("express");
const path = require("path");
const { productReviews } = require("../product-reviews");
const { isNumber } = require("lodash");

// home template
const homeTemplate = `
    <h1>Home page</h1>
    <h3>Endpoints</h3>
    <ul>
        <li><a href="/">Home page</a></li>
        <li><a href="/api/products">Products list</a></li>  
    </ul>
`;

// initialize the application
const app = express();

// get home page
app.get("/", (req, res) => {
  return res.status(200).send(homeTemplate);
});

// products list
app.get("/api/products", (req, res) => {
  const list = productReviews.map((product) => {
    const { id, image, name } = product;
    return { id, image, name };
  });

  if (!list) {
    return res.status(200).json({
      SUCCESS: true,
      msg: "No data found",
    });
  }

  data = {
    SUCCESS: true,
    totals: list.length,
    results: list,
  };

  return res.status(200).json(data);
});

// parameters filtering using id field
app.get("/api/products/:id", (req, res) => {
  // get and verify the parameter type
  const { id } = req.params;

  let pk = Number(id);
  // check id type
  if (isNaN(pk)) {
    return res.status(405).json({
      SUCCESS: false,
      msg: "invalid id parameter",
    });
  }
  
  //   get single product
  const singleProduct = productReviews.find((product) => {
    if (product.id == pk) {
      return product;
    }
  });

  //   in case the product exists
  if (singleProduct) {
    const { id, image, name, price, desc } = singleProduct;
    return res.status(200).json({ id, image, name, price, desc });
  }
  //   in case the product doesn't exists
  return res.status(200).json({
    SUCCESS: true,
    msg: "Product does not exist!",
  });
});

// parameters filtering: get products reviews list
app.get("/api/products/:id/reviews", (req, res) => {
  // get and verify the parameter type
  const { id } = req.params;

  let pk = Number(id);
  // check id type
  if (isNaN(pk)) {
    return res.status(405).json({
      SUCCESS: false,
      msg: "invalid id parameter",
    });
  }
  //   get single product
  const singleProduct = productReviews.find((product) => {
    if (product.id == pk) {
      return product;
    }
  });

  //   in case the product exists, send the list of reviews of the product without the comment field
  if (singleProduct) {
    const list = singleProduct.reviews.map((review) => {
      const { reviewID, rating } = review;
      return { reviewID, rating };
    });
    return res.status(200).json(list);
  }
  //   in case the product doesn't exists
  return res.status(200).json({
    SUCCESS: true,
    msg: "Product does not exist!",
  });
});

// nested parameters filtering: get products reviews details
app.get("/api/products/:id/reviews/:reviewID", (req, res) => {
  // get and verify the parameter type
  const { id, reviewID } = req.params;

  let pk = Number(id);
  let rID = Number(reviewID);
  // check id type
  if (isNaN(pk) || isNaN(rID)) {
    return res.status(405).json({
      SUCCESS: false,
      msg: "invalid parameters",
    });
  }
  //   get single product
  const singleProduct = productReviews.find((product) => {
    if (product.id == pk) {
      return product;
    }
  });

  //   in case the product doe not exists
  if (!singleProduct) {
    return res.status(200).json({
      SUCCESS: true,
      msg: "Product does not exist!",
    });
  }

  //   in case the product exists
  const singleReview = singleProduct.reviews.find((review) => {
    if (review.reviewID == rID) {
      return review;
    }
  });

  // in case single review exists
  if (singleReview) {
    return res.status(200).json(singleReview);
  }

  //   in case the product review doesn't exists
  return res.status(200).json({
    SUCCESS: true,
    msg: "Requested product review does not exist!",
  });
});

// query filtering: on product
app.get("/api/v2/products", (req, res) => {
  const { q, limit } = req.query;

  // load all the products
  let sortedProducts = [...productReviews];

  // sort base on the search query q
  if (q) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(q);
    });
  }

  // size the result using limit
  if (limit) {
    let l = Number(limit);
    if (!isNaN(l)) {
      sortedProducts = sortedProducts.slice(0, l);
    }
  }

  // return the final product list
  if (sortedProducts.length >= 1) {
    sortedProducts = sortedProducts.map((product) => {
      const { id, image, name, price } = product;
      return { id, image, name, price } ;
    });
    const data = {
      SUCCESS: true,
      total: sortedProducts.length,
      results: sortedProducts,
    };
    return res.status(200).json(data);
  }

  // if no product was found
  return res.status(200).json({
    SUCCESS: true,
    msg: "No product found!",
  });
});

// listen
app.listen(5000, () => console.log("listening on port 5000....."));
