var deleteTextNodesRec = function(block){
	var elements = block.childNodes;
	
	console.log("Исходные дочерние узлы с их содержимым:");
	for(var item of elements) console.log(item);

	debugger;
	for(var item of elements){
		console.log(item, item.nodeType);
		if(item.nodeType == 3){ 
			console.log('удаляем', item);
			con.removeChild(item);
		}
		else if(item.nodeType == 1){
			console.log('запускаем рекурсию', item);
			deleteTextNodesRec(item);
		}
	}
	
	console.log("========================");
	console.log("Оставшиеся узлы с их содержимым:");
	for(var item of elements) console.log(item);
}