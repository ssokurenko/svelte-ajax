import App from './components/App.html';

const app = new App({
	target: document.getElementById('svelte-container'),
	data: {
		title: 'Search widget'
	}
});

window.app = app;

export default app;