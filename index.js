var r = new XMLHttpRequest();
var widget = document.getElementById('github-widget');
var username = location.pathname.split('/');
if(username.length > 2)
  username = username[2];
else if(widget.dataset.user)
  username = widget.dataset.user;

r.overrideMimeType("application/json");  
r.open("GET", "https://gist.github.com.ru/jcouyang/aec5210828043d5505bd?username=" + username);
r.onreadystatechange = function () {
  if (r.readyState != 4 || r.status != 200) return;
  var response = JSON.parse(r.response.replace(/href=\\"\//g, 'href=\\"https://github.com/'));
  if (response.error) return;
  var result = response.result;
  var display = widget.dataset.display.split(',').forEach(function(d) {
    widget.innerHTML+=result[d];
  })
};
r.send();
function appendCSS(name){
  var stylesheet = document.createElement("link")
  stylesheet.setAttribute("rel", "stylesheet")
  stylesheet.setAttribute("href", name)
  document.getElementsByTagName("head")[0].appendChild(stylesheet)
}

appendCSS('main.css');
appendCSS('https://cdnjs.cloudflare.com/ajax/libs/octicons/3.1.0/octicons.css')
