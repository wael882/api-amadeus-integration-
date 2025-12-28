export interface Flight {
    id: number;
    destination: string;
    flightNumber: string;
    time: string;
    status: 'On Time' | 'Delayed' | 'Boarding' | 'Cancelled'; // On limite les choix possibles, c'est très pro
    gate: string;
}