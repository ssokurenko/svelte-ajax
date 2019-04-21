(function(d) {
  var container = document.createElement('div');
  container.id = 'svelte-container';
  d.body.appendChild(container);

  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '//svelte-ajax.surge.sh/app.js';
  d.body.appendChild(script);

  var style = document.createElement('link');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  style.href = '//svelte-ajax.surge.sh/app.css';
  d.body.appendChild(style)

}(document));
