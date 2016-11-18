var tn = 0;

var scanDOM = function(){
	var page = document.getElementsByTagName('body'),	// элемент body
		tags = page[0].getElementsByTagName('*'),		// все тэги
		tstat = [];										// массив для статистики

	// проходим по всем тэгам
	for(let i=0; i<tags.length; i++){
		let tag = tags[i].tagName;
		// проверяем тэг на уникальность
		var flag = 0;
		for(let item of tstat){
			if(item == tag){
				flag = 1;
				break;
			}
		}
		// добавляем тэг в массив уникальных тэгов
		if(!flag) tstat.push(tag);
	}

	console.log(tstat);
	console.log('-------------');
	console.log('Статистика по тэгам:');

	for(let itemU of tstat){
		let i = 0;
		for(let item of tags){
			if(itemU == item.tagName) i++;
		}
		console.log('Тэгов', itemU, i);
	}

	// подсчёт текстовых узлов
	textNodesCount(page[0]);
	console.log('Текстовых узлов:', tn);
	//console.log(all);
}

var textNodesCount = function(block){
	var all = block.childNodes;	// все узлы элемента на уровне корня
	for(let a of all){
		if(a.nodeType == 3) tn++;
		else if(a.nodeType == 1) textNodesCount(a);
	}
}