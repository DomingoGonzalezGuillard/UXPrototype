import { Classrooms } from "../typesClassrooms";

const images = {
    misc: {
        elevator: require('../../assets/images/ingenieria/misc/misc_elevator.png'),
        totwo: require('../../assets/images/ingenieria/misc/misc_totwo.png')
    },
    I204: {
        alt1: require('../../assets/images/ingenieria/I204/I204_alt1.png'),
        normal1: require('../../assets/images/ingenieria/I204/I204_normal1.png')
    }
}

export const ingenieria: Classrooms = {
    I204: { 
        id: "I204", 
        build: "ingenieria", 
        floor: "2", 
        number: "04", 
        show: true,
        resources: [
            { 
                type: "Normal", 
                resources: [
                    images.misc.totwo,
                    images.I204.normal1
                ]
            }, 
            { 
                type: "Alt.", 
                resources: [
                    images.misc.elevator,
                    images.I204.alt1
                ]
            }
        ]
    }
}