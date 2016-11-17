var deleteTextNodesRec = function(id){
	var con = document.getElementById(id),
		elements = con.childNodes;
	
	console.log("Исходные дочерние узлы с их содержимым:");
	for(var item of elements) console.log(item);

	for(var item of elements){
		//if(item.nodeType == 3) con.removeChild(item);
	}
	
	console.log("Оставшиеся узлы с их содержимым:");
	for(var item of elements) console.log(item);
}