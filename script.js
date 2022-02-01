setInterval(jam(), 1000);
function jam(){
  w = new Date();
  j = w.getHours();
  m = w.getMinutes();
  d = w.getSeconds();
  
  document.getElementById('clock').innerHTML = `<code>${j}:${m}:${d}</code>`
}