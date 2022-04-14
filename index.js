require('dotenv').config();
const express = require('express');
const app = express();
const pegawaiRouter = require("./api/pegawai/pegawaiRouter");
const kamarRouter = require("./api/kamar/kamarRouter");
const pelangganRouter = require("./api/Pelanggan/pelangganRouter");

app.use(express.json());

app.use("/api/pegawai", pegawaiRouter);
app.use("/api/kamar", kamarRouter);
app.use("/api/pelanggan", pelangganRouter);


app.listen(process.env.APP_PORT, () => {
    console.log("Tersambung di PORT : " + process.env.APP_PORT)
})