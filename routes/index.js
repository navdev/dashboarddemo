const express = require("express");
const router = express.Router();

const components = {
    "unit1-tgset": "TG SET",
    "unit1-hpu": "HPU",
    "unit1-los": "LOS",
    "unit1-cws": "CWS",
    "unit1-52gbreaker": "52G BREAKER",
    "unit1-genprotection": "GEN PROTECTION",
    "unit2-tgset": "TG SET",
    "unit2-hpu": "HPU",
    "unit2-los": "LOS",
    "unit2-cws": "CWS",
    "unit2-52gbreaker": "52G BREAKER",
    "unit2-genprotection": "GEN PROTECTION",
    "commmon-line": "LINE",
    "common-gentrafo": "GEN TRAFO",
    "common-waterways": "WATERWAYS"
};

function routeConfig() {
    router.get("/", (req, res, next) => {
        res.render("index", { title: "Dashboard App", customerInfo: "VEER , 2 X 4.5 MW", pageTitle: "POWER PLANT STATUS" });
    });
    
    router.get("/componentdetails/:name", (req, res, next) => {
        const name = req.params.name;
        res.render("component-details", { title: "Dashboard App", customerInfo: "VEER , 2 X 4.5 MW", componentTitle: components[name] });
    });
    return router;
}

module.exports = routeConfig;
