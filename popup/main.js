'use strict';

function main() {
	let msg = document.querySelector('#msg');
	document.addEventListener('keydown', (event) => {
		if ( event.key.toLowerCase() === 'y' ) {
			chrome.tabs.query({active: true}, (tabs) => {
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
	msg.innerHTML += '<button id="yes">YES</button>';
	msg.innerText += "\t";
	msg.innerHTML += '<button id="no">NO</button>';
	chrome.tabs.query({ active: true }, function(tabs) {  
		console.log(tabs);
		msg.innerText += `\n\n${tabs[0].id}`;
	})
}

document.addEventListener('DOMContentLoaded', main);
