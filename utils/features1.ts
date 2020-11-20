let apples: number = 5;
apples = 15;

let colors: string [] = ['red', 'green', 'blue'];

let point: {x: number; y: number; } = {
    x: 10,
    y: 20
}

const logNumber = (i: number) => {
    console.log(i);
}

const logNumberX: (i: number) => void = (i: number) => {
    console.log(i);
}

const add = (a: number,  b:  number): number => {
    return a + b;
}

const logger = (message: string): void => {
    console.log(message);
};

const throwError = (message: string): never =>{
    throw new Error(message);
}

const forecast = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = ({ date, weather }: {
    date: Date,
    weather: string
}): void => {
    console.log(date);
    console.log(weather);
}

const NumberAboveZero: boolean | number = false;

const carsByBrand: string [][] = []; //Um array de arrays...

const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true,  40];

interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
    summary(): string //uma função que retorna uma string.
};

const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle.summary());
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name:  ${name}`
    }
}




