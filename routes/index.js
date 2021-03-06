const express = require("express");
const router = express.Router();
const dataService = require("../services/data-service");
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

var tgsetData = {
    type: "tgset",
    sections : [
        {
            title: "Turbine",
            widgets: [
                {
                    title: "WICKET GATE POSITION %",
                    id:"wicketGatePosition",
                    type: "gauge",
                    data: {
                        maxValue: 100,
                        minValue: 0,
                        currentValue: 50,
                        labels: [0, 50, 100],
                        fractionDigits: 0,
                        colorStart: '#58D68D',   // Colors
                        colorStop: '#58D68D',    // just experiment with them
                        strokeColor: '#F7DC6F',  // to see which ones work best for you
                        zones: [
                            {strokeStyle: "#F03E3E", min: 0, max: 47.5},
                            {strokeStyle: "#7FFF00", min: 47.5, max: 52.5},
                            {strokeStyle: "#F03E3E", min: 52.5, max: 60}                            
                        ],
                        ticks: {
                            divisions: 2,
                            subDivisions:0
                        }
                    }
                },
                {
                    title: "RUNNER BLADE POSITION %",
                    id:"runnerBladePosition",
                    type: "gauge",
                    data: {
                        maxValue: 100,
                        minValue: 0,
                        currentValue: 50,
                        labels: [0, 50, 100],
                        fractionDigits: 0,
                        colorStart: '#58D68D',   // Colors
                        colorStop: '#58D68D',    // just experiment with them
                        strokeColor: '#F7DC6F',  // to see which ones work best for you
                        zones: [
                            {strokeStyle: "#F03E3E", min: 0, max: 47.5},
                            {strokeStyle: "#7FFF00", min: 47.5, max: 52.5},
                            {strokeStyle: "#F03E3E", min: 52.5, max: 60}                            
                        ],                        
                        ticks: {
                            divisions: 2,
                            subDivisions:0
                        }
                    }
                }
            ]
        },
        {
            title: "Bearing",
        },
        {
            title: "Strator Winding",
        },
        {
            title: "Strator Core",
        }
    ]
};

function getData(name){
    switch(name){
        case "unit1-tgset":
            return tgsetData;
        default:
            return tgsetData;
    }
}
function routeConfig() {
    router.get("/", (req, res, next) => {
        res.render("index", { title: "Dashboard App", customerInfo: "VEER , 2 X 4.5 MW", pageTitle: "POWER PLANT STATUS" });
    });
    
    router.get("/componentdetails/:name", (req, res, next) => {
        const name = req.params.name;
        res.render("component-details", { title: "Dashboard App", customerInfo: "VEER , 2 X 4.5 MW", componentTitle: dataService.getComponentTitle(name), data: dataService.getComponentData(name) });
    });
    return router;
}

module.exports = routeConfig;
