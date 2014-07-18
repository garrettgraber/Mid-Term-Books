

//generateRelationObjectArray -> generateRelationObjectArrayGrid
var marriedDuo = ['wife', 'husband'];

//on line 434
// var tempObject1 = new RelationObject('wife');
// var tempObject2 = new RelationObject('husband');
// relationObjectArray.push(tempObject1);
// relationObjectArray.push(tempObject2);


var findPassThroughRelationObjectByObjects = function(relationObjectArray, firstLevelRelationObject, secondLevelRelationObject) {

	var firstLevelDistance = returnRelationObjectGridLocation(firstLevelRelationObject);
	var secondLevelDistance = returnRelationObjectGridLocation(secondLevelRelationObject);
	
	var firstLevelXDistance = firstLevelDistance[0];
	var firstLevelYDistance = firstLevelDistance[1];
	
	var secondLevelXDistance = secondLevelDistance[0];
	var secondLevelYDistance = secondLevelDistance[1];
	
	var firstLevelRelation = firstLevelRelationObject.relation;
	var secondLevelRelation = secondLevelRelationObject.relation;
	
	if(maleMembersArray.indexOf(firstLevelRelation) > -1) {
		var genderStart = 'male';
	}
	else if(femaleMembersArray.indexOf(firstLevelRelation) > -1) {
		var genderStart = 'female';
	}
	else {
		var genderStart = 'both';
	}	
	
	
	if(maleMembersArray.indexOf(secondLevelRelation) > -1) {
		var genderTarget = 'male';
	}
	else if(femaleMembersArray.indexOf(secondLevelRelation) > -1) {
		var genderTarget = 'female';
	}
	else {
		var genderTarget = 'both';
	}
	
	// var genderStart = firstLevelRelationObject.gender;
	// var genderTarget = SecondLevelRelationObject.gender;
	
	var firstYZoneSign = Math.abs(firstLevelYDistance)/firstLevelYDistance;
	var secondYZoneSign = Math.abs(secondLevelYDistance)/secondLevelYDistance;
	
	var xAxisEqual = firstLevelXDistance === secondLevelXDistance;
	var xAxisOffset1 = firstLevelXDistance === secondLevelXDistance -  1;
	var xAxisOffset2 = firstLevelXDistance - 1 === secondLevelXDistance;
	
	var yTarget = firstLevelYDistance + secondLevelYDistance;
	var xTarget = firstLevelXDistance + secondLevelXDistance;
	
	console.log('genderStart: ' + genderStart);
	console.log('genderTarget: ' + genderTarget);

	return relationObjectTransformGrid(relationObjectArray, xTarget, yTarget, genderStart, genderTarget, secondLevelRelation);

};



var returnRelationObjectGridLocation = function(relationObject) {

	if(relationObject.gridX === undefined) {
		var xValue = 0;
	}
	else {
		if(relationObject.gridX !== 0) {
			if(Math.abs(relationObject.gridX) === relationObject.gridX) {
				var xValue = relationObject.gridX - 1;
			}
			else {
				var xValue = relationObject.gridX + 1;
			}
		}
	}
	if(relationObject.gridY === undefined) {
		var yValue = 0;
	}
	else {
		var yValue = relationObject.gridY;
	}
	return [xValue, yValue];
};

var relationObjectTransformGrid = function(relationObjectArray, xValue, yValue, genderStart, genderTarget, targetRelation) {

	if(2 >= Math.abs(xValue) && 2 >= Math.abs(yValue)) {

		if(Math.abs(xValue) !== xValue) {
			var xTarget = xValue - 1;
		}
		else {
			var xTarget = xValue + 1;
		}
		
		if(genderTarget === 'male') {
			var xTarget = Math.abs(xTarget);
		}
		if(genderTarget === 'female') {
			var xTarget = -(Math.abs(xTarget));
		}
		
		// if( genderStart !== genderTarget ) {
			// var xTarget = -xTarget;
			// console.log('Y-axis inflection');
		// }
		
		
	
		var foundObject = searchGridPositionObjectArray(relationObjectArray, xTarget, yValue);
				
		if(foundObject === null) {console.log('this might be the break point'); }
				
		if( (foundObject.relation === 'brother' || foundObject.relation === 'sister') && (targetRelation === 'nephew' || targetRelation === 'niece' || targetRelation === 'son' || targetRelation === 'daughter') ) {
			var relationValue = 'cousin';
			var foundObject = new RelationObject(relationValue);
			
		}
		
		if( ( targetRelation === 'aunt' || targetRelation === 'uncle' || targetRelation === 'niece' || targetRelation === 'nephew') && (yValue === 0) ) {
			var relationValue = 'sibling';
			var foundObject = new RelationObject(relationValue);
		}
		
	}	
	else {
		var foundObject = {};
	}
	return foundObject;

};


var returnPassThroughRelationObject = function(relationObjectArray, intermediateRelation, targetRelation) {

	var key = 'relation';
	console.log('foo4 has fired');

	var intermediateRelationObject = _.filter(relationObjectArray, function(obj) {return obj[key] === intermediateRelation});
	var intermediateRelationObject = intermediateRelationObject[0];
	var targetRelationObject = _.filter(relationObjectArray, function(obj) {return obj[key] === targetRelation});
	var targetRelationObject = targetRelationObject[0];
	
	console.log(intermediateRelationObject);
	console.log(targetRelationObject);
	
	// var intermediateRelationObject = $.grep(relationObjectArray, function(el) {return el[key] === intermediateRelation} );
	// var targetRelationObject = $.grep(relationObjectArray, function(el) {return el[key] === targetRelation} );
	
	console.log(intermediateRelationObject.relation);
	console.log(targetRelationObject.relation);
	
	var intermediateRelationObject = copyRelationObject(intermediateRelationObject);
	var targetRelationObject = copyRelationObject(targetRelationObject);

	var resultRelationObject = findPassThroughRelationObjectByObjects(relationObjectArray, intermediateRelationObject, targetRelationObject);
	return resultRelationObject;
};