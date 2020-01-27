const express = require("express");
const app = express();

app.all("*", (req, res) => {
    /** @see https://github.com/WICG/ua-client-hints/blob/master/README.md#for-example */
    /** 要求の文字列はちょっと違いそう */
    res.header("Accept-CH", "UA, Platform, Arch, Model, Mobile");
    res.send("ok");
});

app.listen(8080, () => console.log("serves."));
