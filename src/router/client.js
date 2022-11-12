const express = require("express");
const router = new express.Router();

router.get("/users", async(req, res) => {
    req.query();
    req.params();
    res.send(req.user);
});

router.post("/users/", async(req, res) => {});

module.exports = router;