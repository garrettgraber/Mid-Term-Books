

for(var i=0; i < a.length; i++) {
	var b = Math.floor(a.length/2);
	if(i-b < 0) {
		console.log(i-b);
	}
	else {
		console.log(i-b+1);
	}
}

var foo = function(objectArray, object1, object2) {
	
	var verticalDistance = object1.gridY


}

var foo2 = function(objectArray, relationStartObject, relationToStartObject) {
	
	var relationInitialObject = searchRelationObjectArray(objectArray, relationStartObject);
	var searchObject = searchRelationObjectArray(objectArray, relationToStartObject);
	var yAxisOffset = relationInitialObject.gridY + searchObject.gridY;
	var xAxisInitial = relationInitialObject.gridX;
	var xAxisUse = xAxisInitial;
	var xAxisSearch = searchObject.gridX;

	if(relationInitialObject.gridY < 0 && searchObject.gridY > 0 ) {
		yAxisOffset = yAxisOffset + 1;
	}

	if( relationInitialObject.gridY > 0 && searchObject.gridY < 0) {
		yAxisOffset = yAxisOffset - 1;
	}
	if( -(xAxisInitial/Math.abs(xAxisInitial)) === (xAxisSearch/Math.abs(xAxisSearch)) ) {
		console.log('y-axis inflection');
		var xAxisUse = -xAxisInitial;
	}

	var foundItem = searchGridPositionObjectArray(objectArray, xAxisUse, yAxisOffset);
	return foundItem;
}

for(var j=0; j < generationsArray.length; j++) {
	var tempArray = generationsArray[j];
	for(var i=0; i < tempArray.length; i++) { 
		var name = tempArray[i];
		//var name = currentArray[i];
		var result = establishRelationship(a, 'father', name);
		console.log('name: ' + name);
		if(result !== null) { console.log('result: ' + result.relation); }
		else { console.log('result: value undefined');}
	}
}