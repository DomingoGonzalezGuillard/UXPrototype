import { Classrooms } from "../typesClassrooms";

const images = {
    C105: {
        normal1: require('../../assets/images/ciencias/C105/C105_normal1.gif')
    }
}

export const ciencias: Classrooms = {
    C105: { 
        id: "C105", 
        build: "ciencias", 
        floor: "1", 
        number: "05",
        show: true, 
        resources: [
            {
                type: "Normal", 
                resources: [
                    images.C105.normal1
                ]
            }
        ]
    },
}