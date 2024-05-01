// Freedium created by Wast3r 2024

function removePaidArticles() {
	//document.body.style.border = "5px solid green";
	const articles = document.querySelectorAll("article");
	articles.forEach(article => {
		const paragraphs = article.querySelectorAll("p");
		let paid = false;
		paragraphs.forEach(paragraph => {
			if (paragraph.textContent.includes("Member-only")) {
				paid = true;
			}
		});
		if(paid) {
			article.remove();
		}
	});
}

const observerConfig = { childList: true, subtree: true };

function handleMutations(mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      removePaidArticles(); 
	}
  }
}

const observer = new MutationObserver(handleMutations);

if (localStorage.getItem("toggle") === null) {
	localStorage.setItem("toggle", 1);
	//console.log("init");
}

//console.log(localStorage.getItem("toggle"));
browser.runtime.onMessage.addListener(function(msg) {
	//console.log("message", msg.filterEnabled);
	if (msg.filterEnabled == 1) {
		localStorage.setItem("toggle", 1);
		//console.log("test3");
	} else {
		localStorage.setItem("toggle", 0);
		//console.log("test4");
	}
});

if (localStorage.getItem("toggle") == 1) {
	//document.body.style.border = "5px solid red";
	observer.observe(document.body, observerConfig);
}
