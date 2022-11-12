const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const bcrypt = require("bcryptjs");
dotenv.config({ path: "./process.env" });
const User = require("../model/user");

const port = process.env.PORT || 3000;
const app = express();

const publicDir = path.join(__dirname, "../public");
app.use(express.urlencoded({ extended: "false" }));
app.use(express.json());
app.use(express.static(publicDir));

app.get("/index", (req, res) => {
    res.render("index");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/auth/register", (req, res) => {
    const { name, email, password, password_confirm } = req.body;

    db.query(
        "SELECT email FROM users WHERE email = ?", [email],
        async(error, res) => {
            if (error) {
                console.log(error);
            }

            if (result.length > 0) {
                return res.render("register", {
                    message: "This email is already in use",
                });
            } else if (password !== password_confirm) {
                return res.render("register", {
                    message: "Passwords do not match!",
                });
            }
            let hashedPassword = await bcrypt.hash(password, 8);

            db.query(
                "INSERT INTO users SET?", { name: name, email: email, password: hashedPassword },
                (err, res) => {
                    if (error) {
                        console.log(error);
                    } else {
                        return res.render("register", {
                            message: "User registered!",
                        });
                    }
                }
            );
        }
    );
});

app.listen(port, () => {
    console.log("server started on port " + port);
});