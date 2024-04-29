//browser.storage.local.get('filterEnabled').then(result =>
//	toggleFilter.textContent = result.filterEnabled ? 'Toggle Freedium Off' : 'Toggle Freedium On';
//});
//
let filterEnabled = true;

function updater() {
	var but = document.getElementById("toggle");
	if (but.textContent === "Toggle Freedium Off") {
		//browser.storage.local.set({ filterEnabled : false });
		but.textContent = "Toggle Freedium On"
		filterEnabled = false;
		console.log("test");
	} else {
		//browser.storage.local.set({ filterEnabled : true });
		but.textContent = "Toggle Freedium Off";
		filterEnabled = true;
	}
}
