require('dotenv').config();
const express = require('express');
const app = express();
//const anggotaRouter = require("./api/anggota/anggota.router");
const pegawaiRouter = require("./api/pegawai/pegawaiRouter");
const pelangganRouter = require("./api/pelanggan/pelangganRouter");
const kamarRouter = require("./api/kamar/kamarRouter");
app.use(express.json());
app.use("/api/pegawai", pegawaiRouter);
app.use("/api/kamar", kamarRouter);
app.use("/api/pelanggan", pelangganRouter);
app.listen(process.env.APP_PORT, () => {
    console.log("Tersambung di PORT : " + process.env.APP_PORT)
})