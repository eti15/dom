var deleteTextNodes = function(id){
	var con = document.getElementById(id);
	
	var elements = con.childNodes;
	for(var item of elements){
		console.log(item, item.nodeType);
		//if(item.nodeType == )
	}
}