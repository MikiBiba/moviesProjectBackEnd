const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const usersBLL = require("../BLL/userBLL")

// Entry point: "http://localhost:8000/auth"

router.route("/login").post(async (req, res) => {
    console.log(req.body);

    const result = await usersBLL.getAllUsers();
    // console.log(result);

    const userData = result.find((user) => user.userName === req.body.userName);
    if (userData) {
        if (userData.password !== req.body.password) {
            // Invalid password
            console.log(res.status(401));
            return res.status(401);
        } else {
            console.log("Logged in ");
            const userId = userData._id
            const ACCESS_SERCRET_TOKEN = "someTokenKey";

            const accessToken = jwt.sign(
                { id: userId },
                ACCESS_SERCRET_TOKEN
            )
            return res.json({ accessToken })
        }
    }
    console.log(res.status(401));
    return res.status(401);
})


module.exports = router;