setInterval(clock(), 1000);
function clock(){
  w = new Date();
  j = w.getHours();
  m = w.getMinutes();
  d = w.getSeconds();
  
 pk = document.getElementById('jam')
  pk.innerHTML = `<code>${j}:${m}:${d}</code>`;
}