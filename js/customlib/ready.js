var Ready = function(fn) {

	if (Ready.isReady()) {
		fn();
	} else {
		Ready.list.push(fn);
		Ready.check();
	}
};

Ready.list = [];
Ready.timer = null;

Ready.isReady = function() {
	if (document.readyState == "complete") {
		return true;
	} else {
		return false;
	}
}

Ready.check = function() {
	clearTimeout(Ready.timer);
	if (Ready.isReady()) {
		Ready.runFun(Ready.list);
	} else {
		Ready.timer = setTimeout(Ready.check, 100);
	}
}

Ready.runFun = function(fnArr) {
	if (fnArr.length > 0) {
		var fn = fnArr.pop();
		fn();
		Ready.runFun(fnArr);
	}
}