import { Classrooms } from "./typesClassrooms";
import { ciencias } from "./builds/ciencias";
import { ingenieria } from "./builds/ingenieria";

const images = {
    general: {
        campus: require('../assets/images/general/mapa_campus.png')
    }
}

export const classrooms: Classrooms = {
    ...ciencias,
    ...ingenieria,
    campus: { 
        id: "Campus", 
        build: "general", 
        floor: "0", 
        number: "00",
        show: false, 
        resources: [
            {
                type: "normal", 
                resources: [
                    images.general.campus
                ]
            }
        ]
    },
}
