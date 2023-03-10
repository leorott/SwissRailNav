export interface ConnectionsResponse {
    connections: Connection[];
    from: Station;
    to: Station;
}

export interface Connection {
    capacity1st?: number,
    capacity2st?: number,
    duration: number,
    from: ConnectionStation,
    products: string[],
    sections: Section[],
    service: any,
    to: ConnectionStation,
}

interface Section {
    departure: ConnectionStation,
    arrival: ConnectionStation,
    journey: Journey
}

interface Journey {
    capacity1st?: number,
    capacity2st?: number,
    category: string,
    categoryCode: any,
    name: any,
    number: string,
    operator: string,
    passList: ConnectionStation[],
    subcategory: any,
    to: string,
}
export interface ConnectionStation {
    arrival: any,
    arrivalTimestamp: any,
    delay: number,
    departure: string,
    departureTimestamp: number
    location: Station,
    platform: number,
    prognosis: object,
    realtimeAvailability: any,
}

export interface Station {
    id: number,
    coordinate: Coordinate
    distance: any,
    name: string,
    score: any,
}

export interface Coordinate {
    type: string,
    x: number,
    y: number,
}