require('dotenv').config();
const express = require('express');
const app = express();
const pegawaiRouter = require("./api/pegawai/pegawaiRouter");
app.use(express.json());

app.use("/api/pegawai", pegawaiRouter);


app.listen(process.env.APP_PORT, () => {
    console.log("Tersambung di PORT : " + process.env.APP_PORT)
})