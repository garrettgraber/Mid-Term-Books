


var Set = function() {};
Set.prototype.add = function(o, key) { this[key] = o; this[o] = true };
Set.prototype.remove = function(o) { delete this[key]; };
Set.prototype.find = function(key) { return this[key] };


String.prototype.hashCode = function(){
    var hash = 0;
    if (this.length == 0) return hash;
    for (i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
};

var Duck = function(color) {this.color = color};

d = new Duck('red');
e = new Duck('green');
f = new Duck('blue');

var femaleNextKin = ['greatAunt', 'aunt', 'cousin', 'niece', 'grandNiece'];
var femaleFamily = ['grandma', 'mother', 'wife', 'sister', 'daughter', 'grandDaughter'];
var maleFamily = ['grandpa', 'father', 'husband', 'brother', 'son', 'grandson'];
var maleNextKin = ['grandUncle', 'uncle', 'cousin', 'nephew', 'grandNephew'] ;
var otherRelations = ['servant','enemy','concubine'];

var grandArray = ['greatAunt', 'grandma', 'grandpa', 'grandUncle'];
var parentArray = ['aunt', 'mother', 'father', 'uncle'];
var siblingArray = ['sister', 'wife', 'concubine', 'cousin', 'consort', 'husband', 'brother'];
var childArray = ['niece', 'daughter', 'son', 'nephew'];
var grandChildArray = ['grandNiece', 'grandDaughter', 'grandson', 'grandNephew'];

var femaleMembersArray = femaleNextKin.concat(femaleFamily);
femaleMembersArray.push('concubine');
var maleMembersArray = maleNextKin.concat(maleFamily);
maleMembersArray.push('consort');

femaleNextKin.reverse();
femaleFamily.reverse();
maleFamily.reverse();
maleNextKin.reverse();
otherRelations.reverse();

var masterRelationsArray = [femaleNextKin, femaleFamily, maleFamily, maleNextKin];
var generationsArray = [grandChildArray, childArray, siblingArray, parentArray, grandArray];

var foo11 = function(inArray, el) {
	var arrLength = inArray.length;
	var arrIndex = inArray.indexOf(el);
	var arrNewPosition = (arrLength - arrIndex) - 1;
	//return inArray[ arrNewPosition ];
	return arrNewPosition;
};

var foo17 = function(gender, key) {


	// for(var i=0; i < masterRelationsArray.length; i++) {
	
		// var distanceArray = masterRelationsArray[ i ];
		// var distanceIndex = distanceArray.indexOf(key);
		
		// if(distanceIndex > -1) { 
			// var arrayIndex = masterRelationsArray.indexOf(distanceArray);
			// break; 
		// }
	// }
	
	for(var i=0; i < generationsArray.length; i++) {
	
		var lateralArray = generationsArray[ i ];
		var lateralIndex = lateralArray.indexOf(key);
		
		if(lateralIndex > -1) {
			var generationIndex = generationsArray.indexOf(lateralArray);
			break;
		}	
	}
	
	var tempGenerationArray = lateralArray.slice(0);
	var newGenerationPosition = (generationsArray.length - generationIndex) - 1;
	var searchArray = generationsArray[ newGenerationPosition ];
	
	console.log(searchArray);
	
	//var tempDistancePosition = distanceArray.slice(0);
	var newDistancePosition = lateralIndex;
	
	
	var locationArray = generationsArray[ newGenerationPosition ];
	
	if( (gender === 'male' && femaleMembersArray.indexOf(key) > -1) || (gender === 'female' && maleMembersArray.indexOf(key) > -1) ){
	
	
	
		console.log('all man, baby...');
		//console.log(distanceArray);
		// tempGenerationArray.reverse();
		// var newDistancePosition = (lateralArray.length - lateralIndex) - 1;
		
		var newDistancePosition = foo11(lateralArray, key)
		
		console.log('lateralArray length: ');
		console.log(lateralArray.length);
		console.log('lateralIndex: ');
		console.log(lateralIndex);
	}	
	
	var relationResult = locationArray[ newDistancePosition ];
	console.log('locationArray: ');
	console.log(locationArray);
	console.log('lateralArray: ');
	console.log(lateralArray);
	console.log(relationResult);
	console.log('newDistancePosition: ' + newDistancePosition);
	//var outputName = locationArray[ newDistancePosition ];
	
	
	return locationArray[ newDistancePosition ];
	
	//return [generationIndex, lateralIndex, newGenerationPosition, locationArray, locationArray[ newDistancePosition ]  ];
		
	// if(gender === 'male') {
		// var testIndex = maleFamily.indexOf(key);
		// var relationArray = maleFamily;
		// if(testIndex < 0) {
			// var testIndex = maleNextKin.indexOf(key);
			// var relationArray = maleNextKin;
		// }
	// }
	// else if(gender === 'female') {
		// var testIndex = femaleFamily.indexOf(key);
		// var relationArray = femaleFamily;
		// if(testIndex < 0) {
			// var testIndex = femaleNextKin.indexOf(key);
			// var relationArray = femaleNextKin;
		// }	
	// }
	// else {
		// testIndex = otherRelations.indexOf(key);
		// relationArray = otherRelations;
	// }
	
	// var arrayNumber = masterRelationsArray.indexOf(relationArray);
	
	// return [arrayNumber, testIndex];
	
};
	
	


