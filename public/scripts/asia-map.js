$(document).ready(function() {
    $(".mapcontainer").mapael({
        map : {
            name : "asia3",
            defaultArea: {
                attrs : {
                    fill : "#f4f4e8"
                    , stroke: "#ced8d0"
                }
                , attrsHover : {
                    fill: "#f4f4e8"
                }
            }
            // Default attributes can be set for all links
            , defaultLink: {
                factor : 0.4
                , attrs : {
                    stroke: "#008CBA"
                }
                , attrsHover : {
                    stroke: "#008CBA"
                }
            }
            , defaultPlot : {
                attrs : {
                    fill: "#008CBA"
                }
                , text : {
                    attrs : {
                        fill:"#000000"
                    }, 
                    attrsHover : {
                        fill:"#000000"
                    }
                }
            }
        },/*
        plots : {
            'hongkong' : {
                latitude :22.2783*30.5, 
                longitude :114.1747*2.9, 
                text : {content : "香港"}
            },
            'punjab' : {
                type: "circle",
                size: 60,
                latitude :31 *7.7, 
                longitude :74 *2.9, 
                text : {content : "旁遮普", position: "left"}
            }     
        },
        // Links allow you to connect plots between them
        links: {
            'punjabhk' : {
                factor : 0.3
                , between : ['punjab', 'hongkong']
                , attrs : {
                    "stroke-width" : 2
                }
            }
        }*/
    });
});