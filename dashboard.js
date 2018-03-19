// @flow
const chart = require('electron-chartjs');

console.log('test');

let absender;
let countMails;

absender =['tom.garry@email.com','claudia.meyer@mail.de'];
countMails = [3, 1];

chart ({
	type: 'doughnut',
	data: {
		labels: absender,
		datasets: [{
			label: 'red bars',
			backgroundColor: '#ab1020',
			data: countMails,
		}],
	}
});