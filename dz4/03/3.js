var deleteTextNodesRec = function(block){
	var elements = block.childNodes;
	
	console.log("Исходные дочерние узлы с их содержимым:");
	for(var item of elements) console.log(item);

	for(var item of elements){
		if(item.nodeType == 3) con.removeChild(item);
		else if(item.nodeType == 1) deleteTextNodesRec(item);
	}
	
	console.log("========================");
	console.log("Оставшиеся узлы с их содержимым:");
	for(var item of elements) console.log(item);
}