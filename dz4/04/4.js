var scanDOM = function(){
	var page = document.getElementsByTagName('body'),
		tags = page[0].getElementsByTagName('*'),
		tstat = [];

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
		console.log(itemU, i);
	}

}