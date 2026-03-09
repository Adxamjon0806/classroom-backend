import express from "express";

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Classroom")
})

app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
})
