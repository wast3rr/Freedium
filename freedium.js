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

observer.observe(document.body, observerConfig);
