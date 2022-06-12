//1
// const express = require("express");

// const app = express();

// //Если придет GET запрос на адрес /contacts, выполнить эту функцию
// app.get("/contacts", (request, responce) => {
//     // console.log(request.url);
//     // console.log(request.method);
//     // console.log(request.headers);
//     responce.send("<h2>Contacts page</h2>")
// });

// app.get("/", (request, responce) => {
//     responce.send("<h2>Home page</h2>")
// })

// app.listen(3000, () => console.log("server running"));

//2
// const express = require("express");

// const products = require("./products");

// const app = express();

// app.set("json spaces", 18);

// app.get("/products", (req, res) => {
//     // res.json(null);
//     // res.send(null);
//     // res.json({
//     //     status: "success",
//     //     code: 200,
//     //     data: {
//     //         result: products
//     //     }
//     // })
//     // res.json(products);
//     // res.send(products);
//     // res.render("products", {name: "iPhone"} )
// });

// app.listen(3000);

//3
const express = require("express");
const fs = require("fs/promises");
const moment = require("moment");
const cors = require("cors");

const products = require("./products");

const app = express();

app.use(cors());

// app.use(async(req, res, next)=> {
//     const {method, url} = req;
//     const date = moment().format("DD-MM-YYYY_hh:mm:ss");
//     await fs.appendFile("server.log", `\n${method} ${url} ${date}`);
//     next();
// })

// app.use((req, res, next)=> {
//     console.log("First middleware");
//     next();
// });

// app.use((req, res, next)=> {
//     console.log("Second middleware");
//     next();
// })

app.get("/products", (req, res)=> {
    res.json(products);
})

app.listen(3000);