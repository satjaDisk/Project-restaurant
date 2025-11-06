// const express = require("express");
// const app = express();

// app.use(express.static("public"));

// app.listen(3000, ()=> console.log("Server running at http://localhost:3000"));


const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./db");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));

app.post("/book-table" , async(req, res)=> {
    const {name,phone,date,time,guests} = req.body;

    try {
        const result = await pool.query(
            "INSERT INTO bookings (name, phone, date, time, guests) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [name, phone, date, time, guests]
        );

        console.log("Booking saved:", result.rows[0]);
        res.json({ message: "จองโต๊ะสำเร็จ!", booking: result.rows[0] });
    }   catch (err) {
        console.error("Error inserting booking:", err);
        res.status(500).json({ error: "เกิดข้อผิดพลาดในการจองโต๊ะ"});
    }
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
