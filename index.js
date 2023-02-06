const express = require("express")
const fetch = require("node-fetch")
const https = require("https")
const app = express()

app.get("/*", (req, res, next) => {
  https.request(new URL("https://chess.com/" + req.path), (resp) => {
    res.contentType(resp.headers["content-type"])
    resp.pipe(res)
  }).end()
})
app.listen(0105)