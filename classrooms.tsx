type ResourceType = {
    type: string;       // Tipo de recurso (normal, alternativa, etc.)
    resources: any[]; // Array de recursos asociados a este tipo
};

export type Classroom = {
    id: string;            // ID de la sala
    build: string;         // Edificio
    floor: string;         // Piso
    number: string;        // Número de la sala
    resources: ResourceType[]; // Array de tipos de recursos
};

// Tipo de classrooms que es un objeto donde la clave es el ID de la sala y el valor es un Classroom
export type Classrooms = Record<string, Classroom>;

export const classrooms = {
    C105: { 
        id: "C105", 
        build: "ciencias", 
        floor: "1", 
        number: "05", 
        resources: [
            {
                type: "normal", 
                resources: [
                    require('./assets/images/ciencias/C105/C105_normal1.gif')
                ]
            }
        ]
    },
    I204: { 
        id: "I204", 
        build: "ingenieria", 
        floor: "2", 
        number: "04", 
        resources: [
            { 
                type: "normal", 
                resources: [
                    require('./assets/images/ingenieria/I204/I204_totwo.png'),
                    require('./assets/images/ingenieria/I204/I204_normal1.png')
                ]
            }, 
            { 
                type: "alternativa", 
                resources: [
                    require('./assets/images/ingenieria/I204/I204_elevator.png'),
                    require('./assets/images/ingenieria/I204/I204_alt1.png')
                ]
            }
        ]
    }
}
