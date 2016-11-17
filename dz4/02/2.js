var deleteTextNodes = function(id){
	var con = document.getElementById(id);
	
	var elements = con.childNodes;
	console.log("Исходные дочерние узлы:", elements);

	for(var item of elements){
		if(item.nodeType == 3) con.removeChild(item);
	}
	
	console.log("Узлы, оставшиеся после удаления текстовых:", elements);
	
}