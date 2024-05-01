//
//
window.onload=function(){
	//console.log(localStorage.getItem("filterEnabled"));
	if (localStorage.getItem("filterEnabled") === null) {
		localStorage.setItem("filterEnabled", 1);
	}
	console.log(localStorage.getItem("filterEnabled"));
	const btn = document.getElementById("toggle");
	btn.addEventListener("click", updater);

	if (localStorage.getItem("filterEnabled") == 1) {
		console.log("test");
		btn.textContent = "Toggle Freedium Off";
	} else {
		btn.textContent = "Toggle Freedium On";
		console.log("test2");
	}

	function updater() {
		// console.log("test");
		if (btn.textContent === "Toggle Freedium Off") {
			btn.textContent = "Toggle Freedium On";
			localStorage.setItem("filterEnabled", 0);
		} else {
			//browser.storage.local.set({ filterEnabled : true });
			btn.textContent = "Toggle Freedium Off";
			localStorage.setItem("filterEnabled", 1)
		}
		//localStorage.setItem("filterEnabled", filterEnabled);

		browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
			browser.tabs.sendMessage(tabs[0].id, {filterEnabled: localStorage.getItem("filterEnabled")});
		});
	}
}
