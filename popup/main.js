'use strict';

function main() {
	let msg = document.querySelector('#msg');
	document.addEventListener('keydown', (event) => {
		if ( event.key.toLowerCase() === 'y' ) {
			chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
				chrome.tabs.remove(tabs[0].id);
			})
		} else if ( event.key.toLowerCase() === 'n' ) {
			window.close();
		} else {
			// TODO: Animate YES/NO Buttons.
		}
	});
	// TODO: Animate YES/NO Buttons.
	msg.innerText += 'Are you sure? You want to close this tab.\n\n';
	msg.innerHTML += '<span style="font-weight: bold;">[Y]35</span>\t<span style="color: red;">[N]0</span>';
}

document.addEventListener('DOMContentLoaded', main);
