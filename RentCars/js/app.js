var t;
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
  window.scrollBy(0,((top+100)/-60));
  t = setTimeout('up()',5);
  } else clearTimeout(t);
  return false;
}