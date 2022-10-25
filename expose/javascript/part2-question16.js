let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackcars: 40,
    rareCars: 2
};

for (let cars in statistics)
{
    if (cars.charAt(0) == 'r')
    {
        console.log(statistics[cars]);
    }

    else if (statistics[cars] % 2 == 1)
    {
        console.log(statistics[cars]);
    }
}
