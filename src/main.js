import App from './App.html';

const app = new App({
	target: document.getElementById('app-container'),
	data: {
		name: 'Sergey'
	}
});

window.app = app;

export default app;