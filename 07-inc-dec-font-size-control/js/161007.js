var btn_inc = document.querySelector('.button-increase-font-size');
var btn_dec = document.querySelector('.button-decrease-font-size');
var demo_text = document.querySelector('.demo-text-area');
console.log('btn_inc:', btn_inc);
console.log('btn_dec:', btn_dec);
console.log('demo_text :', demo_text );


btn_inc.onclick = function () {
console.log('clicked btn_inc');
var current_font_size = window.getComputedStyle(demo_text).fontSize;
current_font_size = window.parseInt(current_font_size, 10);
var changed_font_size = current_font_size + 2 ;
demo_text.style.fontSize = changed_font_size + 'px';
}

btn_dec.onclick = function () {
console.log('clicked btn_dec');
var current_font_size = window.getComputedStyle(demo_text).fontSize;
current_font_size = window.parseInt(current_font_size, 10);
var changed_font_size = current_font_size - 2;
demo_text.style.fontSize = changed_font_size + 'px';
}