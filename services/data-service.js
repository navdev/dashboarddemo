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

const componentData = [{
    type: "tgset",
    sections: [
        {
            title: "Turbine",
            widgets: [
                {
                    title: "WICKET GATE POSITION %",
                    id: "wicketGatePosition",
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
                            { strokeStyle: "#F03E3E", min: 0, max: 47.5 },
                            { strokeStyle: "#7FFF00", min: 47.5, max: 52.5 },
                            { strokeStyle: "#F03E3E", min: 52.5, max: 60 }
                        ],
                        ticks: {
                            divisions: 2,
                            subDivisions: 0
                        }
                    }
                },
                {
                    title: "RUNNER BLADE POSITION %",
                    id: "runnerBladePosition",
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
                            { strokeStyle: "#F03E3E", min: 0, max: 47.5 },
                            { strokeStyle: "#7FFF00", min: 47.5, max: 52.5 },
                            { strokeStyle: "#F03E3E", min: 52.5, max: 60 }
                        ],
                        ticks: {
                            divisions: 2,
                            subDivisions: 0
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
},
{
    type: "hpu",
    sections: [{
        title: "HPU Pressure",
        widgets: [{
            title: "HPU PRESSURE",
            id: "hpuPressure",
            type: "block",
            data: {
                value: "LOW",
            },

        }, {
            title: "HPU PUMP1",
            id: "hpuPump1",
            type: "block",
            data: {
                value: "ON"
            }
        }, {
            title: "HPU PUMP2",
            id: "hpuPump2",
            type: "block",
            data: {
                value: "ON"
            }
        }]
    }]
},
{
    type: "default",
    sections: []
}];


const service = {
    getComponentTitle: function (name) {
        return components[name];
    },
    getComponentData: function (name) {
        switch (name) {
            case "unit1-tgset":
                return componentData.find(d => d.type === 'tgset');
            case "unit1-hpu":
                return componentData.find(d => d.type === 'hpu');
            default:
                return componentData.find(d => d.type === 'default');
        }
    },

}

module.exports = service;

