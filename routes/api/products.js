const express = require("express");

const products = require("../../data/products");

const router = express.Router();

//GET /api/products
router.get("/", (req, res) => {
    res.json({
        status: "success",
        code: 200,
        data: {
            result: products
        }
    })
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const result = products.find(item => item._id === id);
    if (!result) {
        res.status(404).json({
            status: "error",
            code: 404,
            message: `Product with id=${id} not found`
        })
    }
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })
})

//POST /api/products
router.post("/", (req, res) => {
    console.log(req.body)
})

module.exports = router;