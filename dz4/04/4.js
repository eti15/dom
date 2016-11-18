var tn = 0;

var scanDOM = function(){
	var page = document.getElementsByTagName('body'),	// элемент body
		tags = page[0].getElementsByTagName('*'),		// все тэги
		tstat = [], cstat = [];							// массивы для статистики

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

		// проверяем классы
		let styles = tags[i].classList;
		if(!styles.length) continue;
		
		for(let item of styles){
			flag = 0;
			for(let cl of cstat){
				if(item == cl) flag = 1;
			}
			// добавляем класс в массив уникальных классов
			if(!flag) cstat.push(item);
		}
	}

	//console.log(tstat);
	//console.log('-------------');

	// статистика по тэгам
	for(let itemU of tstat){
		let i = 0;
		for(let item of tags){
			if(itemU == item.tagName) i++;
		}
		console.log('Тэгов', itemU, i);
	}

	// подсчёт всех текстовых узлов в body
	textNodesCount(page[0]);
	// статистика по текстовым узлам
	console.log('Текстовых узлов:', tn);

	// вывод статистики по классам
	for(let cl of cstat){
		let i = 0;
		for(let tg of tags){
			for(let c of tg.classList){
				if(c == cl){
					 i++;
					 break;
				}
			}
		}
		console.log('Элементов с классом', cl, ':', i);
	}
}

// функция подсчёта текстовых узлов
var textNodesCount = function(block){
	var all = block.childNodes;	// все узлы элемента на уровне корня
	for(let a of all){
		if(a.nodeType == 3) tn++;
		else if(a.nodeType == 1) textNodesCount(a);
	}
}