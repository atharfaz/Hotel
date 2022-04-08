require('dotenv').config();
const express = require('express');
const app = express();
//const anggotaRouter = require("./api/anggota/anggota.router");
const pegawaiRouter = require("./api/pegawai/pegawaiRouter");
//const pinjamRouter = require("./api/pinjam/pinjam.router");
const kamarRouter = require("./api/kamar/kamarRouter");
app.use(express.json());
app.use("/api/pegawai", pegawaiRouter);
app.use("/api/kamar", kamarRouter);
app.listen(process.env.APP_PORT, () => {
    console.log("Tersambung di PORT : " + process.env.APP_PORT)
})