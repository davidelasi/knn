//
var exercise = {};

// kNN parameters
roomsMin = 1;
roomsMax = 10;
areaMin = 250;
areaMax = 1700;
roomsRange = roomsMax-roomsMin;
areaRange  = areaMax-areaMin;

exercise.measureDistances = function(rooms,area){
	data.forEach(function(residence){
		var deltaRooms = residence.rooms - rooms;
		deltaRooms = deltaRooms / roomsRange; // normalization

		var deltaArea = residence.area - area;
		deltaArea = deltaArea / areaRange; // normalization
	
		residence.distance = Math.sqrt(deltaRooms * deltaRooms + deltaArea * deltaArea);
	});
};

exercise.sortByDistance = function () {
	data.sort(function(a,b){
		return a.distance - b.distance;

	});
};

exercise.guessType = function(k){
	var types = {apartment:0, flat:0, house:0}; // keep track of these things

	var nn = data.slice(0,k); // k is the number selected to be the nearest neighbors

	nn.forEach(function(item){
		if(item.type==='apartment') types.apartment +=1;
		if(item.type==='flat') types.flat +=1;
		if(item.type==='house') types.house +=1;
	});

	var type = Object.keys(types).reduce(function(a,b){
		return types[a] > types[b] ? a : b;

	});

	return{type:type, count:types[type]};

	/*
		// data format you need to return
		var guess = {type : "house", count : 2};
		return guess;
	*/
};

// share work
module.exports = exercise;