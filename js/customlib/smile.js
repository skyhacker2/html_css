/*
正则表达式替换图片
将:)smile替换成图片
*/

var PicReplace = function() {
	picsMap : {
		":)smile" : "微笑",
		":)sad" : "伤心"	
	},

	replace : function(str) {
		return str.replace('/:\)[a-z]{1,6}/igm', function(v) {
			return PicReplace.picsMap[v];
		})
	}
};

PicReplace.replace(':)smile');

