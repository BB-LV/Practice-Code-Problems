/*
    Number Of People On The Bus 7kyu

    There is a bus moving in the city, and it takes and drop some people in each bus stop.

    You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

    Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

    Take a look on the test cases.

    Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

    The second value in the first integer array is 0, since the bus is empty in the first bus stop.

        assert.strictEqual(number([[10,0],[3,5],[5,8]]),5);
        assert.strictEqual(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
        assert.strictEqual(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
        assert.strictEqual(number([[0,0]]),0);

    We can set two variables representing each action in the problem(People getting on the bus, People getting off the bus). Than we can run a for loop
    up to the number of bus stops in the city and adjust the two variables we created in in the beginning accordingly. Finally we can return the two numbers
    subtracted from each other.

*/

var number = function(busStops){
    let peopleOn = 0;
    let peopleOff = 0;
    for(let i = 0; i < busStops.length; i++){
      peopleOn += busStops[i][0];
      peopleOff += busStops[i][1];
    }
    return peopleOn - peopleOff;
  }

