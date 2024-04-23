let statitics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let stat in statitics) {
    if (stat[0] === "r" || statitics[stat] % 2 === 1) {
        console.log(statitics[stat]);
    }
}